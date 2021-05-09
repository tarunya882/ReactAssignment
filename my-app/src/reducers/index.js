import { combineReducers } from "redux";
import orderedItems from "./orderedItems";

console.log(orderedItems)

export const rootReducer = combineReducers({
    orderedItems
})