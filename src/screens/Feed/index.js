///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import FeedScreen from './FeedScreen';
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: FeedScreen, name: 'FeedScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid } }];