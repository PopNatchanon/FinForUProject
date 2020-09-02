
///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Screen
import DetailScreen from './DetailScreen';
import Reviews_score from './Reviews/Reviews_score';
import Same_StoreScreen from './SameStore/Same_StoreScreen';
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: DetailScreen, name: 'DetailScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Reviews_score, name: 'Reviews_score', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Same_StoreScreen, name: 'Same_StoreScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];