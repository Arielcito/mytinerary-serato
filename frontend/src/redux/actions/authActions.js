import axios from "axios";
import toast from 'react-hot-toast';

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
          localStorage.setItem('token',user.data.response.token)
          toast.success('Successfully register!')
          dispatch({
            type: "REGISTER_USER",
            payload: { name, surname, email, password, imageURL, country },
          });
        } else {
          toast.error(user.data.error)
        }
      } catch (error) {
        console.error(error);
      }
    };
  },
  logInUser: (email, password) => {
    return async (dispatch, getState) => {
      try {
        const user = await axios.post("http://localhost:4000/api/auth/signin", {
          email,
          password
        });
        
        if (user.data.success && !user.data.error) {
          toast.success('Successfully sign in!')
          localStorage.setItem('token',user.data.response.token)
          dispatch({
            type: "LOGIN_USER",
            payload: { email: user.data.response },
          });
        } else {
          toast.error(user.data.error)
        }
      } catch (error) {
        console.error(error);
      }
    };
  },
};

export default authActions;
