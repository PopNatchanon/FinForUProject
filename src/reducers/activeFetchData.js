import { SET_ACTIVE_FETCH_DATA } from '../actions/constants';
const initialState = {
    dataList: [{
        name: 'start',
        id: 0,
        isActive: true,
    }]
};
export default (state = initialState, action) => {
    const { dataList } = state;
    switch (action.type) {
        case SET_ACTIVE_FETCH_DATA:
            if (dataList[0].name == 'start') {
                dataList[0] = {
                    name: action.name,
                    isActive: action.payload,
                };
            } else if (action.id == -1) {
                dataList.push({
                    name: action.name,
                    id: dataList.length,
                    isActive: action.payload,
                });
            } else {
                dataList[action.id].isActive = action.payload;
            };
            return { ...state, dataList: dataList };
        default:
            return state;
    };
};