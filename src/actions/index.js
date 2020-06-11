import {
    FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_START, FETCH_DATA_SUCCESS, SET_ACTIVE_FETCH_DATA,
} from '../actions/constants';
import { promiseConnectServices, promiseProcessData } from './api';

export const setStageToFetching = (data, id, name) => ({
    name,
    id,
    type: FETCH_DATA,
});
export const setStageToFailure = (data, id, name) => ({
    name,
    id,
    type: FETCH_DATA_FAILURE,
});
export const setStageToStart = (data, id, name) => ({
    name,
    id,
    type: FETCH_DATA_START,
});
export const setStageToSuccess = (data, id, name) => ({
    name,
    id,
    payload: data,
    type: FETCH_DATA_SUCCESS,
});
export const setStageActiveFetch = (data, id, name) => ({
    name,
    id,
    payload: data,
    type: SET_ACTIVE_FETCH_DATA,
});
export const fetchData = (props) => {
    const {
        Authorization, dataBody, id, name, nojson, uri, showConsole,
    } = props;
    console.log(uri)
    if (showConsole) {
        console.log(showConsole);
        Authorization && (
            console.log(`Authorization => ${Authorization}`)
        );
        console.log(`uri => ${uri}`);
        console.log(`dataBody`);
        console.log(dataBody);
    };
    let error, rawData, processData;
    return async (dispatch) => {
        dispatch(setStageToFetching(undefined, id, name));
        [error, rawData] = await promiseConnectServices(
            fetch(uri, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': Authorization,
                },
                body: JSON.stringify(dataBody),
            }), nojson
        );
        if (error) {
            console.log(`'ERROR:Phase 1`);
            console.log(`ERROR:FETCH => ${error}`);
            console.log(uri);
            dataBody && console.log(dataBody);
            if (error == 'TypeError: Network request failed') error = 'Network request failed';
            dispatch(setStageToFailure(error, id, name));
        };
        if (rawData === undefined) {
            console.log(`Data:Phase 1`);
            console.log('No Data!');
            console.log(uri);
            dataBody && console.log(dataBody);
            dispatch(setStageToFailure('No Data', id, name));
        };
        showConsole &&
            console.log('Complete Connect To Server');
        [error, processData] = await promiseProcessData(rawData);
        if (error) {
            console.log(`ERROR:Phase 2`);
            console.log(`ERROR:FETCH => ${error}`);
            console.log(uri);
            dataBody && console.log(dataBody);
            dispatch(setStageToFailure(error, id, name));
        };
        if (processData === undefined || processData == '404') {
            console.log(`Data:Phase 2`);
            processData == '404' ? console.log(processData) : console.log('No Data!');
            console.log(uri);
            dataBody && console.log(dataBody);
            dispatch(setStageToFailure(processData == '404' ? processData : 'Error converting to Json.', id, name));
        };
        if (showConsole) {
            console.log('Complete Converting To JSON');
            console.log(processData);
        };
        dispatch(setStageToSuccess(processData, id, name));
    };
};
export const setFetchToStart = (props) => {
    const { id, name, } = props;
    return (dispatch) => { dispatch(setStageToStart(undefined, id, name)); };
};
export const setActiveFetch = (props) => {
    const { id, name, setActive } = props
    return (dispatch) => { dispatch(setStageActiveFetch(setActive, id, name)); };
}