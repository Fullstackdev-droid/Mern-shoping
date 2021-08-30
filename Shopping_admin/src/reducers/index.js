import { combineReducers } from "redux";
import authReducer from "./authReducers";
// import errorReducer from "./errorReducers";

// common
import modal from './modal';
import form from './form';
import currentUser from './currentUser';

export default combineReducers({
    currentUser,
    auth: authReducer,
    modal: modal,
    form,
    // errors: errorReducer
});