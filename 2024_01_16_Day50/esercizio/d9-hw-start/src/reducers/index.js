export default function storeReducer(state = {favourites: []}, action) {
  switch (action.type) {
    case "ADD_FAVOURITE":
        return {...state, favourites: [...state.favourites, action.payload.company_name] }

    case "REMOVE_FAVOURITE":
      return { ...state, favourites: state.favourites.filter((comp) => comp !== action.payload.company_name) };

    default:
      return state;
  }
}
