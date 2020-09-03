///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Screen
import News_Detail from './NewsDetail/News_Detail';
import NewsScreen from './NewsScreen';
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: NewsScreen, name: 'NewsScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid } },
    { component: News_Detail, name: 'News_Detail', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];