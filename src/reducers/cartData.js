import {
    CART_DATA, CART_DATA_CHECK, CART_DATA_CHECK_ALL, CART_DATA_DELETE, CART_DATA_UPDATE,
} from '../actions/constants';
const initialState = [];
export default (state = initialState, action) => {
    console.log(action.type)
    console.log('=======================cartData')
    console.log(state)
    switch (action.type) {
        case CART_DATA:
            state = action.payload;
            return state;
        case CART_DATA_CHECK:
            var numberList = state.map((value2) => value2.id_store).indexOf(action.id_store);
            var subNumberList = state[numberList].product.map((value3) => value3.id_cartdetail).indexOf(action.id_cartdetail);
            state[numberList].product[subNumberList].checked = !state[numberList].product[subNumberList].checked;
            state[numberList].checked = state[numberList].product.every((value) => { return value.checked == true });
            return state;
        case CART_DATA_CHECK_ALL:
            var numberList = state.map((value2) => value2.id_store).indexOf(action.id_store);
            state[numberList].product.map((value, index) => state[numberList].product[index].checked = !state[numberList].checked);
            state[numberList].checked = !state[numberList].checked;
            console.log('state[numberList].product');
            console.log(state[numberList].product);
            return state;
        case CART_DATA_DELETE:
            var numberList = state.map((value2) => value2.id_store).indexOf(action.id_store);
            var subNumberList = state[numberList].product.map((value3) => value3.id_cartdetail).indexOf(action.id_cartdetail);
            state[numberList].product.slice(subNumberList);
            return state;
        case CART_DATA_UPDATE:
            var numberList = state.map((value2) => value2.id_store).indexOf(action.id_store);
            var subNumberList = state[numberList].product.map((value3) => value3.id_cartdetail)
                .indexOf(action.id_cartdetail);
            state[numberList].product[subNumberList].quantity = action.payload;
            return state;
        default:
            return state;
    };
};