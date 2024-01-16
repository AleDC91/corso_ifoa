import { createStore } from "redux";
import storeReducer from "../reducers";

const initialState = {
        favourites: [
            "FairHQ"
        ]
}

;

export const store = createStore(storeReducer, initialState);
