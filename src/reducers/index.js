import { combineReducers } from "redux";
import singleFetchDataFromService from './singleFetchDataFromService';
import multifetchDataFromService from './multifetchDataFromService';
import activeFetchData from './activeFetchData';

export default combineReducers({
    activeFetchData,
    // multifetchDataFromService,s
    singleFetchDataFromService,
})