///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import FinService from './FinService';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import ContentMarketing from './ContentMarketing'
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: FinService, name: 'FinService', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: ContentMarketing, name: 'ContentMarketing', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];