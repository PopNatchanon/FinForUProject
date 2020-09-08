///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import News from './News';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import News_Detail from './Detail/Detail';
///----------------------------------------------------------------------------------------------->>>>
export default [{ ///---------------------------------------------------------------------------------->>>> Main Screen
    component: News, name: 'News',
    options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Screen
    component: News_Detail, name: 'News_Detail',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}];