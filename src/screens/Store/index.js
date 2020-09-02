///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Screen
import StoreScreen from './StoreScreen';
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: StoreScreen, name: 'StoreScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];