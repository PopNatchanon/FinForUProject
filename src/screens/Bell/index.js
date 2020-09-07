///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import BellScreen from './BellScreen';
///----------------------------------------------------------------------------------------------->>>> Sub DetailPro
import DetailOrder from './DetailPro/DetailOrder/DetailOrder';
import DetailProductCheck from './DetailPro/DetailProductCheck/DetailProductCheck';
import DetailPromotion from './DetailPro/DetailPromotion/DetailPromotion';
///----------------------------------------------------------------------------------------------->>>>
export default [
    ///----------------------------------------------------------------------------------------------->>>> Main Screen
    { component: BellScreen, name: 'BellScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid } },
    ///----------------------------------------------------------------------------------------------->>>> Sub DetailPro
    { component: DetailOrder, name: 'DetailOrder', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }, {
        component: DetailProductCheck, name: 'DetailProductCheck', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, { component: DetailPromotion, name: 'DetailPromotion', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];