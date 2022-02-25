import { combineReducers } from "redux";
import { userReducer }from "../pages/ListUser/ListUser.reducer"

const rootReducer = combineReducers({
    user : userReducer,
});

export default rootReducer;