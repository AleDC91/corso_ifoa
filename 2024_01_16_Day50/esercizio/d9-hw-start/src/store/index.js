import { createStore } from "redux";
import storeReducer from "../reducers";

const initialState = {
  favourites: [],
};

export const store = createStore(storeReducer, initialState);
