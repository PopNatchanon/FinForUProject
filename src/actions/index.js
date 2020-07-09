import AsyncStorage from '@react-native-community/async-storage';
import CookieManager from '@react-native-community/cookies';
import SplashScreen from 'react-native-splash-screen';
import {
    CART_DATA, CART_DATA_CHECK, CART_DATA_CHECK_ALL, CART_DATA_DELETE, CART_DATA_UPDATE, COSTOMER_DATA, COSTOMER_DATA_FAILURE,
    COSTOMER_DATA_SUCCESS, COSTOMER_GET_DATA_TOKEN, COSTOMER_NOT_LOGIN, FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_START,
    FETCH_DATA_SUCCESS, SET_DATA_TO_END, SET_DATA_TO_REFRESH, SET_DATA_TO_START,
} from '../actions/constants';
import { finip } from '../navigator/IpConfig';
import { promiseConnectServices, promiseProcessData } from './api';
//==================================================>activeFetchData
export const setStageSetDataToEnd = () => ({
    type: SET_DATA_TO_END,
});
export const setStageSetDataToRefresh = () => ({
    type: SET_DATA_TO_REFRESH,
});
export const setStageSetDataToStart = (data, name, other) => ({
    name, other,
    payload: data,
    type: SET_DATA_TO_START,
});
export const setDataEnd = () => {
    return (dispatch) => { dispatch(setStageSetDataToEnd()); };
};
export const setDataRefresh = () => {
    return (dispatch) => { dispatch(setStageSetDataToRefresh()); };
};
export const setDataStart = (data, name, other) => {
    return (dispatch) => { dispatch(setStageSetDataToStart(data, name, other)); };
};
//========================================>cartData
export const setStageCartData = (data) => ({
    payload: data,
    type: CART_DATA,
});
export const setStageCartDataCheck = (id_cartdetail, id_store) => ({
    id_cartdetail, id_store,
    type: CART_DATA_CHECK,
});
export const setStageCartDataCheckAll = (id_store) => ({
    id_store,
    type: CART_DATA_CHECK_ALL,
});
export const setStageCartDataDelete = (id_cartdetail, id_store) => ({
    id_cartdetail, id_store,
    type: CART_DATA_DELETE,
});
export const setStageCartDataUpdate = (data, id_cartdetail, id_store) => ({
    id_cartdetail, id_store,
    payload: data,
    type: CART_DATA_UPDATE,
});
export const activeCartList = (item) => {
    console.log('=========================?>setStageCartData');
    console.log(item)
    var list_store = [];
    item.map((value) => {
        var numberList = list_store.map((value2) => value2.id_store).indexOf(value.id_store);
        var productList = value;
        productList.checked = true;
        if (numberList == -1) {
            console.log(value)
            list_store.push({
                id_store: value.id_store, name: value.name, store_path: value.store_path, store_image: value.store_image,
                checked: true, product: [productList]
            });
        } else {
            var subNumberList = list_store.map((value2) => value2.product).map((value3) => value3.id_cartdetail).indexOf(value.id_cartdetail);
            if (subNumberList == -1) {
                list_store[numberList].product.push(productList)
            }
        }
    });
    console.log('=========================?>list_store');
    console.log(list_store);
    return (dispatch) => {
        dispatch(setStageCartData(list_store));
    }
}
export const cartListChecked = (id_cartdetail, id_store) => {
    return (dispatch) => { dispatch(setStageCartDataCheck(id_cartdetail, id_store)); }
}
export const cartListCheckedAll = (id_store) => {
    return (dispatch) => { dispatch(setStageCartDataCheckAll(id_store)); }
}
export const cartListDelete = (id_cartdetail, id_store) => {
    return (dispatch) => { dispatch(setStageCartDataDelete(id_cartdetail, id_store)); }
}
export const cartListUpdate = (data, id_cartdetail, id_store) => {
    return (dispatch) => {
        dispatch(setStageCartDataUpdate(data, id_cartdetail, id_store));
    }
}
//==================================================>customerData
export const setStageCustomerData = () => ({
    type: COSTOMER_DATA,
});
export const setStageCustomerDataFailure = () => ({
    type: COSTOMER_DATA_FAILURE,
});
export const setStageCustomerDataSuccess = () => ({
    type: COSTOMER_DATA_SUCCESS,
});
export const setStageCustomerNotLogin = () => ({
    type: COSTOMER_NOT_LOGIN,
});
export const checkCustomer = () => {
    SplashScreen.hide();
    let error, result, dataCokie, dataCustomer, dataProcessCustomer;
    return async (dispatch) => {
        dispatch(setStageCustomerData());
        [error, result] = await promiseProcessData(AsyncStorage.multiGet(['@MyKey', '@MyLongin']));
        if (error) {
            dispatch(setStageCustomerDataFailure());
        }
        console.log('checkCustomer')
        console.log(result)
        const currentUser = result[0][1];
        const autoLogin = result[1][1];
        if (autoLogin == undefined && currentUser) {
            dispatch(setStageCustomerDataFailure());
        }
        console.log('currentUser')
        console.log(currentUser)
        console.log('autoLogin')
        console.log(autoLogin)
        if (currentUser && autoLogin) {
            [error, dataCokie] = await promiseProcessData(CookieManager.get(`${finip}/auth/login_customer`))
            console.log('dataCokie')
            console.log(dataCokie)
            console.log('error')
            console.log(error)
            if (error) {
                console.log(error)
                getCokie && (value.keycokie = undefined)
                getUser && (value.currentUser = undefined);
                dispatch(setStageCustomerDataFailure());
            }
            if (dataCokie === undefined) {
                console.log(`dataCokie`);
                getCokie && (value.keycokie = undefined)
                getUser && (value.currentUser = undefined);
                dispatch(setStageCustomerDataFailure());
            };
        } else {
            dispatch(setStageCustomerNotLogin());
        }
    };
}
//==================================================>singleFetchDataFromService
export const setStageToFetching = (name) => ({
    name,
    type: FETCH_DATA,
});
export const setStageToFailure = (name) => ({
    name,
    type: FETCH_DATA_FAILURE,
});
export const setStageToStart = (name) => ({
    name,
    type: FETCH_DATA_START,
});
export const setStageToSuccess = (data, name) => ({
    name,
    payload: data,
    type: FETCH_DATA_SUCCESS,
});
export const fetchData = (props) => {
    const {
        Authorization, dataBody, name, nojson, uri, showConsole,
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
        dispatch(setStageToFetching(name));
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
            dispatch(setStageToFailure(name));
        };
        if (rawData === undefined) {
            console.log(`Data:Phase 1`);
            console.log('No Data!');
            console.log(uri);
            dataBody && console.log(dataBody);
            dispatch(setStageToFailure(name));
        };
        showConsole &&
            console.log('Complete Connect To Server');
        [error, processData] = await promiseProcessData(rawData);
        if (error) {
            console.log(`ERROR:Phase 2`);
            console.log(`ERROR:FETCH => ${error}`);
            console.log(uri);
            dataBody && console.log(dataBody);
            dispatch(setStageToFailure(name));
        };
        if (processData === undefined || processData == '404') {
            console.log(`Data:Phase 2`);
            processData == '404' ? console.log(processData) : console.log('No Data!');
            console.log(uri);
            dataBody && console.log(dataBody);
            dispatch(setStageToFailure(name));
        };
        if (showConsole) {
            console.log('Complete Converting To JSON');
            console.log(processData);
        };
        dispatch(setStageToSuccess(processData, name));
    };
};
export const multiFetchData = (props) => {
    const { multiData, } = props;
    let multiProcessData;
    return async (dispatch) => {
        await multiData.map(async (value,) => {
            // multiProcessData[value.name] = {};
            dispatch(setStageToFetching(value.name));
            let error, rawData, processData;
            [error, rawData] = await promiseConnectServices(
                fetch(value.uri, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': value.Authorization,
                    },
                    body: JSON.stringify(value.dataBody),
                }), value.nojson
            );
            if (error) {
                console.log(`'ERROR:Phase 1`);
                console.log(`ERROR:FETCH => ${error}`);
                console.log(value.uri);
                value.dataBody && console.log(value.dataBody);
                if (error == 'TypeError: Network request failed') error = 'Network request failed';
                // multiProcessData[value.name].error = error
                dispatch(setStageToFailure(value.name));
            };
            if (rawData === undefined) {
                console.log(`Data:Phase 1`);
                console.log('No Data!');
                console.log(value.uri);
                value.dataBody && console.log(value.dataBody);
                // multiProcessData[value.name].error = 'No Data'
                dispatch(setStageToFailure(value.name));
            };
            value.showConsole &&
                console.log('Complete Connect To Server');
            [error, processData] = await promiseProcessData(rawData);
            if (error) {
                console.log(`ERROR:Phase 2`);
                console.log(`ERROR:FETCH => ${error}`);
                console.log(value.uri);
                value.dataBody && console.log(value.dataBody);
                // multiProcessData[value.name].error = error
                dispatch(setStageToFailure(value.name));
            };
            if (processData === undefined || processData == '404') {
                console.log(`Data:Phase 2`);
                processData == '404' ? console.log(processData) : console.log('No Data!');
                console.log(value.uri);
                value.dataBody && console.log(value.dataBody);
                // multiProcessData[value.name].error = processData == '404' ? processData : 'Error converting to Json.'
                dispatch(setStageToFailure(value.name));
            };
            if (value.showConsole) {
                console.log('Complete Converting To JSON');
                console.log(processData);
            };
            dispatch(setStageToSuccess(processData, value.name))
        })
    }
}
export const setDataFetch = ({ name, data }) => {
    return (dispatch) => { dispatch(setStageToSuccess(data, name)); };
}
export const setFetchToStart = ({ name, }) => {
    return (dispatch) => { dispatch(setStageToStart(name)); };
};