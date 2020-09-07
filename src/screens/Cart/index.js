///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Cart from './Cart';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Cart_Account from './Account/Account';
import Cart_CompleteOrder from './CompleteOrder/CompleteOrder';
import Cart_Order from './Order/Order';
///----------------------------------------------------------------------------------------------->>>>
export default [{ ///---------------------------------------------------------------------------------->>>> Main Screen
    component: Cart, name: 'Cart',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Screen
    component: Cart_Account, name: 'Cart_Account',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Cart_CompleteOrder, name: 'Cart_CompleteOrder',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Cart_Order, name: 'Cart_Order',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}];