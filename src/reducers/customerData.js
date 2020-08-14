import {
    COSTOMER_DATA, COSTOMER_DATA_FAILURE, COSTOMER_DATA_SUCCESS, COSTOMER_GET_DATA_TOKEN, COSTOMER_NOT_LOGIN
} from '../actions/constants';
const initialState = {
    currentUser: undefined,
    isChecked: false,
    isError: false,
    isLogin: false,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case COSTOMER_DATA:
            return { ...state, currentUser: undefined, isChecked: false, isLogin: false };
        case COSTOMER_DATA_FAILURE:
            return { ...state, isChecked: true, isError: true };
        case COSTOMER_DATA_SUCCESS:
            return { ...state, currentUser: action.payload, isChecked: true, isLogin: true };
        case COSTOMER_GET_DATA_TOKEN:
            return action.key;
        case COSTOMER_NOT_LOGIN:
            return { ...state, isChecked: true, isLogin: false };
        default:
            return state;
    };
};