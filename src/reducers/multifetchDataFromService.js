import { FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_START, FETCH_DATA_SUCCESS, } from '../actions/constants';
const initialState = {
    dataList: [{
        name: 'start',
        data: undefined,
        isError: false,
        isFetching: true,
    }]
};
export default (state = initialState, action) => {
    const { dataList } = state;
    const numberList = dataList.map((value) => { return value.name }).indexOf(action.name);
    switch (action.type) {
        case FETCH_DATA:
            if (dataList[0].name == 'start') {
                dataList[0] = {
                    name: action.name,
                    data: undefined,
                    isError: false,
                    isFetching: true,
                };
            } else if (numberList == -1) {
                dataList.push({
                    name: action.name,
                    id: dataList.length,
                    data: undefined,
                    isError: false,
                    isFetching: true,
                });
            } else {
                dataList[numberList].data = undefined;
                dataList[numberList].name = action.name;
            };
            return { ...state, dataList: dataList };
        case FETCH_DATA_FAILURE:
            dataList[numberList].isError = true;
            dataList[numberList].isFetching = false;
            return { ...state, dataList: dataList };
        case FETCH_DATA_START:
            dataList[numberList].isFetching = true;
            return { ...state, dataList: dataList };
        case FETCH_DATA_SUCCESS:
            dataList[numberList].data = action.payload;
            dataList[numberList].isFetching = false;
            return { ...state, dataList: dataList };
        default:
            return state;
    };
};