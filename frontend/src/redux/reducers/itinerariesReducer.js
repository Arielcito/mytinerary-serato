const initialState = {
  loading: true,
  itineraries: [],
  comments:[]
};

const itinerariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITINERARIES":
      return {
        ...state,
        itineraries: action.payload,
        loading: false,
      };
    case 'GET_COMMENTS':
      return{
        ...state,
        comments:action.payload.response
      }
    default:
      return state;
  }
};

export default itinerariesReducer;
