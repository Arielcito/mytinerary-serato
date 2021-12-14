const initialState = {
  user: false,
  countrys: [],
  userData:null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      localStorage.setItem('userInfo', JSON.stringify({ name: action.payload.firstName, avatar: action.payload.imageURL }))
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
        return {
          ...state,
          user: false,
        };
    default:
      return state;
  }
};

export default authReducer;
