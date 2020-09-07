///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import StoreScreen from './StoreScreen';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Post_Feed from './PostFeed/Post_Feed';
///----------------------------------------------------------------------------------------------->>>>
export default [
    ///----------------------------------------------------------------------------------------------->>>> Main Screen
    { component: StoreScreen, name: 'StoreScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    ///----------------------------------------------------------------------------------------------->>>> Sub Screen
    { component: Post_Feed, name: 'Post_Feed', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];