const initialState = {
  user: false,
  countrys: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: true,
      };
    case "GET_COUNTRYS":
      return {
        countrys: action.payload,
      };
      case "LOGOUT_USER":
        return {
          ...state,
          user: false,
        };
    default:
      return state;
  }
};

export default authReducer;
