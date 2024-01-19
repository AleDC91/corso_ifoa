import { createStore, combineReducers, applyMiddleware } from "redux";
import favouritesReducer from "../reducers/favouritesReducer";
import jobsReducer from "../reducers/jobsReducer";
import {thunk} from "redux-thunk"

const initialState = {
  favourites: [],
  jobs: {
    jobsList: [],
    loading: false,
    error: ""
  }
};

const bigReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
});

export const store = createStore(bigReducer, initialState, applyMiddleware(thunk));