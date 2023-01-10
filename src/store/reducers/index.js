import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { favoriteReducer } from "./favorite.reducer";


export default combineReducers({
    counterReducer,
    favoriteReducer
})