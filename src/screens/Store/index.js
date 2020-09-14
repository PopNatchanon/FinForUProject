///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Store from './Store';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Store_Scores from './Scores/Scores';
import Store_Followers from './Followers/Followers';
import Store_Following from './Following/Following';
///----------------------------------------------------------------------------------------------->>>>
export default [{ ///---------------------------------------------------------------------------------->>>> Main Screen
    component: Store, name: 'Store',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, },
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Screen
    component: Store_Scores, name: 'Store_Scores',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, },
}, {
    component: Store_Followers, name: 'Store_Followers',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, },
}, {
    component: Store_Following, name: 'Store_Following',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, },
}];