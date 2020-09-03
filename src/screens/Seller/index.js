///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Screen Main
import SellerScreen from './SellerScreen';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Seller_Detail_Order from './SellerDetailOrder/Seller_Detail_Order';
import Seller_Profile_Edit from './SellerProfileEdit/Seller_Profile_Edit';
import Seller_Return from './SellerReturn/Seller_Return';
import Seller_Setting from './SellerSetting/Seller_Setting';
import Seller_Topic from './SellerTopic/Seller_Topic';
import Seller_Totel_Order from './SellerTotelOrder/Seller_Totel_Order';
import Seller_Up_Product from './SellerUpProduct/Seller_Up_Product';
///----------------------------------------------------------------------------------------------->>>> Sub Seller Setting
import Setting_TopicStore from './SellerSetting/SettingTopicStore/Setting_TopicStore';
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: SellerScreen, name: 'SellerScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }, {
        component: Seller_Detail_Order, name: 'Seller_Detail_Order',
        options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, {
        component: Seller_Profile_Edit, name: 'Seller_Profile_Edit',
        options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, { component: Seller_Return, name: 'Seller_Return', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Seller_Setting, name: 'Seller_Setting', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Seller_Topic, name: 'Seller_Topic', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }, {
        component: Seller_Totel_Order, name: 'Seller_Totel_Order', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, {
        component: Seller_Up_Product, name: 'Seller_Up_Product', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, {
        component: Setting_TopicStore, name: 'Setting_TopicStore', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }];