const initialState = {
  loading: true,
  itineraries: [],
};

const itinerariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchI":
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
