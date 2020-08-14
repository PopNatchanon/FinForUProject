import { FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_START, FETCH_DATA_SUCCESS, } from '../actions/constants';
const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            state[action.name] = {}
            state[action.name].data = undefined
            state[action.name].isError = false
            state[action.name].isFetching = true
            return { ...state, state };
        case FETCH_DATA_FAILURE:
            state[action.name].isError = true
            state[action.name].isFetching = false
            return { ...state, state };
        case FETCH_DATA_START:
            state[action.name].isFetching = true
            return { ...state, isFetching: true };
        case FETCH_DATA_SUCCESS:
            state[action.name] == undefined && (state[action.name] = {})
            state[action.name].data = action.payload
            state[action.name].isFetching = false
            return { ...state, state };
        default:
            return state;
    };
};