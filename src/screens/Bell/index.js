///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Bell from './Bell';
///----------------------------------------------------------------------------------------------->>>> Sub DetailPro
import Bell_Detail_Order from './Detail/Order/Order';
import Bell_Detail_ProductCheck from './Detail/ProductCheck/ProductCheck';
import Bell_Detail_Promotion from './Detail/Promotion/Promotion';
///----------------------------------------------------------------------------------------------->>>>
export default [ ///---------------------------------------------------------------------------------->>>> Main Screen
    { component: Bell, name: 'Bell', options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid } },
    ///----------------------------------------------------------------------------------------------->>>> Sub DetailPro
    { component: Bell_Detail_Order, name: 'Bell_Detail_Order', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }, {
        component: Bell_Detail_ProductCheck, name: 'Bell_Detail_ProductCheck',
        options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, {
        component: Bell_Detail_Promotion, name: 'Bell_Detail_Promotion',
        options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }];