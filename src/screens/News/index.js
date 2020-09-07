///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import NewsScreen from './NewsScreen';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import News_Detail from './NewsDetail/News_Detail';
///----------------------------------------------------------------------------------------------->>>>
export default [
    ///----------------------------------------------------------------------------------------------->>>> Main Screen
    { component: NewsScreen, name: 'NewsScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid } },
    ///----------------------------------------------------------------------------------------------->>>> Sub Screen
    { component: News_Detail, name: 'News_Detail', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];