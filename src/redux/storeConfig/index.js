import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { persistStore } from "redux-persist";

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

