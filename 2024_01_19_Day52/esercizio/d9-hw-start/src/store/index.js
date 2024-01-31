import { createStore, combineReducers, applyMiddleware } from "redux";
import favouritesReducer from "../reducers/favouritesReducer";
import jobsReducer from "../reducers/jobsReducer";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from 'redux-persist-transform-encrypt';


const initialState = {
  favourites: [],
  jobs: {
    jobsList: [],
    loading: false,
    error: "",
  },
};

const bigReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
});


const persistentConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: 'my-super-secret-key',
      onError: function (error) {
        console.log(error)
      },
    })]
}


const persistedReducer = persistReducer(persistentConfig, bigReducer)

export const store = createStore(
 persistedReducer,
  initialState,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store)
