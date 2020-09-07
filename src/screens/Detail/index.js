
///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import DetailScreen from './DetailScreen';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Reviews_score from './Reviews/Reviews_score';
import Same_StoreScreen from './SameStore/Same_StoreScreen';
///----------------------------------------------------------------------------------------------->>>>
export default [
    ///----------------------------------------------------------------------------------------------->>>> Main Screen
    { component: DetailScreen, name: 'DetailScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    ///----------------------------------------------------------------------------------------------->>>> Sub Screen
    { component: Reviews_score, name: 'Reviews_score', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Same_StoreScreen, name: 'Same_StoreScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];