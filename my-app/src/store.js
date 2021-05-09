import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";

console.log(rootReducer)

export const store = createStore(
    rootReducer,
    {}
);

