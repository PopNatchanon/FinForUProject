///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Feed from './Feed';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Feed_Comment from './Comment/Comment';
import Feed_Create from './Create/Create';
import Feed_Share from './Share/Share';
///----------------------------------------------------------------------------------------------->>>> Sub Create
import Feed_Create_Tag from './Create/Tag/Tag';
///----------------------------------------------------------------------------------------------->>>>
export default [{  ///---------------------------------------------------------------------------------->>>> Main Screen
    component: Feed, name: 'Feed',
    options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }
}, {  ///----------------------------------------------------------------------------------------------->>>> Sub Screen
    component: Feed_Comment, name: 'Feed_Comment',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Feed_Create, name: 'Feed_Create',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Feed_Share, name: 'Feed_Share',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {  ///----------------------------------------------------------------------------------------------->>>> Sub Create
    component: Feed_Create_Tag, name: 'Feed_Create_Tag',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}];