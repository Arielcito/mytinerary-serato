const initialState = {
  loading: true,
  itineraries: [],
};

const itinerariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITINERARIES":
      return {
        ...state,
        itineraries: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default itinerariesReducer;
