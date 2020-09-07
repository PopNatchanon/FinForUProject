///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Feed from './Feed';
///----------------------------------------------------------------------------------------------->>>>
export default [{  ///----------------------------------------------------------------------------------------------->>>> Main Screen
    component: Feed, name: 'Feed',
    options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }
}];