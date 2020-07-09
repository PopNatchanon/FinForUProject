import { combineReducers } from "redux";
import activeFetchData from './activeFetchData';
import cartData from './cartData';
import customerData from './customerData';
// import multifetchDataFromService from './multifetchDataFromService';
import singleFetchDataFromService from './singleFetchDataFromService';

export default combineReducers({
    activeFetchData,
    cartData,
    customerData,
    // multifetchDataFromService,s
    singleFetchDataFromService,
})