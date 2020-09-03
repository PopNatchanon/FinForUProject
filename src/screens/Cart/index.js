///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Screen
import CartScreen from './CartScreen';
import Customer_account from './CustomerAccount/Customer_account';
import Customer_Complete_Order from './CustomerCompleteOrder/Customer_Complete_Order';
import Customer_Order from './CustomerOrder/Customer_Order';
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: CartScreen, name: 'CartScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Customer_account, name: 'Customer_account', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }, {
        component: Customer_Complete_Order, name: 'Customer_Complete_Order',
        options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, { component: Customer_Order, name: 'Customer_Order', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];