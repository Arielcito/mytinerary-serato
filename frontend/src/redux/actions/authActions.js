import axios from "axios";

const authActions = {
  fetchCountrys: () => {
    return async (dispatch, getState) => {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      dispatch({ type: "GET_COUNTRYS", payload: res.data });
    };
  },
  registerUser: (email, password, name, surname, imageURL, country) => {
    return async (dispatch, getState) => {
      try {
        const user = await axios.post("http://localhost:4000/api/auth/signup", {
          email,
          password,
          name,
          surname,
          imageURL,
          country,
        });
        if (user.data.success && !user.data.error) {
          dispatch({
            type: "REGISTER_USER",
            payload: { name, surname, email, password, imageURL, country },
          });
        } else {
          console.error(user.data.response);
          return { errores: [{ message: user.data.error }] };
        }
      } catch (error) {
        console.error(error);
      }
    };
  },
  logInUser: (username, password) => {
    return async (dispatch, getState) => {
      try {
        const user = await axios.post("http://localhost:4000/auth/signin", {
          username,
          password,
        });
        if (user.data.success && !user.data.error) {
          dispatch({
            type: "LOGIN_USER",
            payload: { userName: user.data.response },
          });
        } else {
          alert(user.data.error);
        }
      } catch (error) {
        console.error(error);
      }
    };
  },
};

export default authActions;
