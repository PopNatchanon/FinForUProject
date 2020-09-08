///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import FinService from './FinService';
///----------------------------------------------------------------------------------------------->>>> Sub Screen

///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: FinService, name: 'FinService', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];