///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import CartScreen from './CartScreen';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Customer_account from './CustomerAccount/Customer_account';
import Customer_Complete_Order from './CustomerCompleteOrder/Customer_Complete_Order';
import Customer_Order from './CustomerOrder/Customer_Order';
///----------------------------------------------------------------------------------------------->>>>
export default [
    ///----------------------------------------------------------------------------------------------->>>> Main Screen
    { component: CartScreen, name: 'CartScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    ///----------------------------------------------------------------------------------------------->>>> Sub Screen
    { component: Customer_account, name: 'Customer_account', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }, {
        component: Customer_Complete_Order, name: 'Customer_Complete_Order',
        options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, { component: Customer_Order, name: 'Customer_Order', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];