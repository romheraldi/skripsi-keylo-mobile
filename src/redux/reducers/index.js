import { combineReducers } from "redux";
import categoryReducer from "./category";

export default combineReducers({
    category: categoryReducer
});