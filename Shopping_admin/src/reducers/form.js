// import constant
import {
    USER_REGISTER_START,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_ERROR
} from '../constant';

const form = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_START:
            return {
                ...state,
                registerLoading: action.loading
            };
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                registerLoading: action.loading
            };
        case USER_REGISTER_ERROR:
            return {
                ...state,
                registerLoading: action.loading,
                registerError: action.error,
            };
        default:
            return state;
    }
}

export default form;