///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import FeedScreen from './FeedScreen';
///----------------------------------------------------------------------------------------------->>>>
export default [
    ///----------------------------------------------------------------------------------------------->>>> Main Screen
    { component: FeedScreen, name: 'FeedScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid } }];