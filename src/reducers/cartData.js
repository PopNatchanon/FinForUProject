import {
    CART_DATA, CART_DATA_BUTTOM_DELETE, CART_DATA_CHECK, CART_DATA_CHECK_ALL, CART_DATA_CHECK_COUPON, CART_DATA_CHECK_STORE,
    CART_DATA_COUPON, CART_DATA_DELETE, CART_DATA_END, CART_DATA_ERROR, CART_DATA_RESULT, CART_DATA_START, CART_DATA_UPDATE,
} from '../actions/constants';
const initialState = {
    buttomDelete: false,
    data: [],
    coupon: {},
    couponList: [],
    isActive: false,
    isDelete: false,
    isError: false,
    isOtherCoupon: false,
    isReCoupon: false,
    isRefresh: false,
    isResult: false,
    result: {},
};
export default (state = initialState, action) => {
    const { data } = state;
    switch (action.type) {
        case CART_DATA:
            return { ...state, isActive: false, isDelete: false, isError: false, isRefresh: true };
        case CART_DATA_BUTTOM_DELETE:
            return { ...state, buttomDelete: !state.buttomDelete };
        case CART_DATA_CHECK:
            var numberList = data.map((value2) => value2.id_store).indexOf(action.id_store);
            var subNumberList = data[numberList].product.map((value3) => value3.id_cartdetail).indexOf(action.id_cartdetail);
            data[numberList].product[subNumberList].checked = !data[numberList].product[subNumberList].checked;
            data[numberList].checked = data[numberList].product.every((value) => { return value.checked == true });
            return { ...state, data: data, isResult: false };
        case CART_DATA_CHECK_ALL:
            data.map((value) => {
                return [value.checked = action.payload,
                value.product.map((value2) => { return value2.checked = action.payload })]
            });
            return { ...state }
        case CART_DATA_CHECK_COUPON:
            return { ...state, couponList: action.payload, isReCoupon: false, };
        case CART_DATA_CHECK_STORE:
            var numberList = data.map((value2) => value2.id_store).indexOf(action.id_store);
            data[numberList].product.map((value, index) => data[numberList].product[index].checked = !data[numberList].checked);
            data[numberList].checked = !data[numberList].checked;
            return { ...state, data: data, isResult: false };
        case CART_DATA_COUPON:
            return { ...state, coupon: action.payload, isOtherCoupon: action.other, isResult: false };
        case CART_DATA_DELETE:
            return { ...state, buttomDelete: false, coupon: [], isDelete: true, isOtherCoupon: false, };
        case CART_DATA_END:
            return { ...state, data: action.payload, isActive: true, isRefresh: false, isResult: false };
        case CART_DATA_ERROR:
            return { ...state, isError: true, isRefresh: false };
        case CART_DATA_RESULT:
            return { ...state, isReCoupon: true, isResult: true, result: action.payload };
        case CART_DATA_START:
            return { ...state, isRefresh: true };
        case CART_DATA_UPDATE:
            var numberList = data.map((value2) => value2.id_store).indexOf(action.id_store);
            var subNumberList = data[numberList].product.map((value3) => value3.id_cartdetail)
                .indexOf(action.id_cartdetail);
            data[numberList].product[subNumberList].quantity = action.payload;
            return { ...state, data: data, isResult: false };
        default:
            return state;
    };
};