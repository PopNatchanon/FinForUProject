///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import SellerScreen from './SellerScreen';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Seller_Profile_Edit from './SellerProfileEdit/Seller_Profile_Edit';
import Seller_Setting from './SellerSetting/Seller_Setting';
import Seller_Topic from './SellerTopic/Seller_Topic';
import Seller_Totel_Order from './SellerTotelOrder/Seller_Totel_Order';
import Seller_Up_Product from './SellerUpProduct/Seller_Up_Product';
///----------------------------------------------------------------------------------------------->>>> Sub SellerReturn
import SellerCencel from './SellerReturn/SellerCencel/SellerCencel';
import SellerReturn from './SellerReturn/SellerReturn/SellerReturn';
import SellerReturnDetail from './SellerReturn/SellerReturnDetail/SellerReturnDetail';
import SellerStoreProduct from './SellerReturn/SellerStoreProduct/SellerStoreProduct';
///----------------------------------------------------------------------------------------------->>>> Sub SellerSetting
import Setting_TopicStore from './SellerSetting/SettingTopicStore/Setting_TopicStore';
///----------------------------------------------------------------------------------------------->>>> Sub SellerDetailOrder
import SellerDetailOrder from './SellerDetailOrder/SellerDetailOrder/SellerDetailOrder';
import SellerDetailReviews from './SellerDetailOrder/SellerDetailReviews/SellerDetailReviews';
///----------------------------------------------------------------------------------------------->>>>
export default [
    ///----------------------------------------------------------------------------------------------->>>> Main Screen
    { component: SellerScreen, name: 'SellerScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    ///----------------------------------------------------------------------------------------------->>>> Sub Screen 
    {
        component: Seller_Profile_Edit, name: 'Seller_Profile_Edit',
        options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, { component: Seller_Setting, name: 'Seller_Setting', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Seller_Topic, name: 'Seller_Topic', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }, {
        component: Seller_Totel_Order, name: 'Seller_Totel_Order', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, {
        component: Seller_Up_Product, name: 'Seller_Up_Product', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    },
    ///----------------------------------------------------------------------------------------------->>>> Sub SellerReturn
    { component: SellerCencel, name: 'SellerCencel', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: SellerReturn, name: 'SellerReturn', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: SellerReturnDetail, name: 'SellerReturnDetail', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: SellerStoreProduct, name: 'SellerStoreProduct', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    ///----------------------------------------------------------------------------------------------->>>> Sub SellerSetting
    { component: Setting_TopicStore, name: 'Setting_TopicStore', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    ///----------------------------------------------------------------------------------------------->>>> Sub SellerDetailOrder
    { component: SellerDetailOrder, name: 'SellerDetailOrder', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }, {
        component: SellerDetailReviews, name: 'SellerDetailReviews',
        options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }];