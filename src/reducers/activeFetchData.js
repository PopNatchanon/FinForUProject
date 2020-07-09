import { SET_DATA_TO_END, SET_DATA_TO_REFRESH, SET_DATA_TO_START } from '../actions/constants';
const initialState = {
    dataList: {},
    isActive: false,
    isRefresh: false,
    name: '',
    otherData: {},
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_TO_END:
            return { ...state, isActive: false, isRefresh: true, };
        case SET_DATA_TO_REFRESH:
            return { ...state, dataList: {}, isRefresh: false, name: '', otherData: {} };
        case SET_DATA_TO_START:
            return { ...state, dataList: action.payload, isActive: true, isRefresh: false, name: action.name, otherData: action.other };
        default:
            return state;
    };
};