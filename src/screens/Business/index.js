///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Business from './Business';
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: Business, name: 'Business', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];