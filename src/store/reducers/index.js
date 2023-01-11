import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { favoriteReducer } from "./favorite.reducer";
import { todoReducer } from "./todo.reducer";


export default combineReducers({
    counterReducer,
    favoriteReducer,
    todoReducer
})