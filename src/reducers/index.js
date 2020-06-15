import { combineReducers } from "redux";
import activeFetchData from './activeFetchData';
import customerData from './customerData';
// import multifetchDataFromService from './multifetchDataFromService';
import singleFetchDataFromService from './singleFetchDataFromService';

export default combineReducers({
    activeFetchData,
    // multifetchDataFromService,s
    singleFetchDataFromService,
    customerData,
})