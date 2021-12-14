const initialState = {
  user: false,
  countrys: [],
  userData:null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      localStorage.setItem('userInfo', action.payload.imageURL )
      return {
        ...state,
        userData: action.payload,
        user: true,
      };
    case "GET_COUNTRYS":
      return {
        countrys: action.payload,
      };
      case "LOGOUT_USER":
        localStorage.clear()
        return {
          ...state,
          user: false,
        };
    default:
      return state;
  }
};

export default authReducer;
