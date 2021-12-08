const initialState = {
  user: {
    email: "",
    password: "",
    name: "",
    surname: "",
    imageURL: "",
    country: "",
  },
  countrys: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "GET_COUNTRYS":
      return {
        countrys: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
