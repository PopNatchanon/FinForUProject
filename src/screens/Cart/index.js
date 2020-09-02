///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Screen
import CartScreen from './CartScreen';
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: CartScreen, name: 'CartScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];