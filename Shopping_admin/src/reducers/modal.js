// import constant
import {
    TOGGLE_SIDE_BAR
} from '../constant';

const modal = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_SIDE_BAR:
            return {
                ...state,
                toggleSideBar: action.toggleSideBar
            };
        default:
            return state;
    }
}

export default modal;