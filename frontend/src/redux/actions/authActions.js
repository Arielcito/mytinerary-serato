import axios from "axios";
import toast from "react-hot-toast";

const authActions = {
  fetchCountrys: () => {
    return async (dispatch, getState) => {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      dispatch({ type: "GET_COUNTRYS", payload: res.data });
    };
  },
  registerUser: (email, password, name, surname, imageURL, country, google) => {
    return async (dispatch, getState) => {
      try {
        const user = await axios.post("http://localhost:4000/api/auth/signup", {
          email,
          password,
          name,
          surname,
          imageURL,
          country,
          google,
        });
        if (user.data.success && !user.data.error) {
          localStorage.setItem("token", user.data.response.token);
          toast.success("Successfully register!");
          dispatch({
            type: "LOGIN_USER",
            payload: {
              name,
              surname,
              email,
              password,
              imageURL,
              country,
              google,
            },
          });
        } else {
          toast.error(user.data.error);
        }
      } catch (error) {
        console.error(error);
      }
    };
  },
  logInUser: (email, password, google) => {
    return async (dispatch, getState) => {
      try {
        const user = await axios.post("http://localhost:4000/api/auth/signin", {
          email,
          password,
          google,
        });
        if (user.data.success && !user.data.error) {
          toast.success("Successfully sign in!");
          localStorage.setItem("token", user.data.response.token);
          dispatch({
            type: "LOGIN_USER",
            payload: user.data.response,
          });
        } else {
          toast.error(user.data.error);
        }
      } catch (error) {
        console.error(error);
      }
    };
  },
  signOut: () => {
    return async (dispatch, getState) => {
      localStorage.clear();
      toast.success("See you soon!", { icon: "👋" });
      dispatch({ type: "LOGOUT_USER" });
    };
  },
  forcedLog: (userLS) => {
    return async (dispatch, getState) => {
      try {
        const respuesta = await axios.get(
          "http://localhost:4000/api/auth/signin",
          {
            headers: {
              Authorization: "Bearer " + userLS.token,
            },
          }
        );
        dispatch({
          type: "LOGIN_USER",
          payload: {
            ...respuesta.data.respuesta,
            token: userLS.token,
          },
        });
      } catch (error) {
        if (!error.response) {
          return toast.error("Failed trying to connect with server");
        } else if (error.response.status === 401) {
          dispatch({ type: "LOG_OUT", payload: null });
        }
      }
    };
  },
};

export default authActions;
