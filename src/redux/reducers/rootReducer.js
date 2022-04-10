import { combineReducers } from "redux";
import counterReducer from "./counter";
import anotherCounterReducer from "./counter_2";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  counterReducer: persistReducer(persistConfig, counterReducer),
  anotherCounterReducer,
});

export default rootReducer;
