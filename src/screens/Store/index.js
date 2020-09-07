///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Store from './Store';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Store_PostFeed from './PostFeed/PostFeed';
///----------------------------------------------------------------------------------------------->>>>
export default [{ ///---------------------------------------------------------------------------------->>>> Main Screen
    component: Store, name: 'Store',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Screen
    component: Store_PostFeed, name: 'Store_PostFeed',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}];