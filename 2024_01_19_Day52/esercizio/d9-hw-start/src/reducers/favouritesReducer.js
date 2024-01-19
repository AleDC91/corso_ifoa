
const favouritesReducer = (state = { favourites: [] }, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return [...state, action.payload.company_name] ;

    case "REMOVE_FAVOURITE":
      return state.filter((comp) => comp !== action.payload.company_name) ;

    default:
      return state;
  }
};

export default favouritesReducer;
