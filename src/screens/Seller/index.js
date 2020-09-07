///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Seller from './Seller';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Seller_Cencel from './Cencel/Cencel';
import Seller_ProfileEdit from './ProfileEdit/ProfileEdit';
import Seller_Setting from './Setting/Setting';
import Seller_StoreProduct from './StoreProduct/StoreProduct';
import Seller_Topic from './Topic/Topic';
import Seller_TotelOrder from './TotelOrder/TotelOrder';
import Seller_UpProduct from './UpProduct/UpProduct';
///----------------------------------------------------------------------------------------------->>>> Sub Detail
import Seller_Detail_Order from './Detail/Order/Order';
import Seller_Detail_Reviews from './Detail/Reviews/Reviews';
///----------------------------------------------------------------------------------------------->>>> Sub Return
import Seller_Return_Product from './Return/Product/Product';
import Seller_Return_ProductDetail from './Return/ProductDetail/ProductDetail';
///----------------------------------------------------------------------------------------------->>>> Sub Setting
import Seller_Setting_Topic from './Setting/Topic/Topic';
///----------------------------------------------------------------------------------------------->>>>
export default [{ ///---------------------------------------------------------------------------------->>>> Main Screen
    component: Seller, name: 'Seller',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Screen 
    component: Seller_Cencel, name: 'Seller_Cencel',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_ProfileEdit, name: 'Seller_ProfileEdit',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Setting, name: 'Seller_Setting',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_StoreProduct, name: 'Seller_StoreProduct',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Topic, name: 'Seller_Topic',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_TotelOrder, name: 'Seller_TotelOrder',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_UpProduct, name: 'Seller_UpProduct',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Detail
    component: Seller_Detail_Order, name: 'Seller_Detail_Order',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Detail_Reviews, name: 'Seller_Detail_Reviews',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Return
    component: Seller_Return_Product, name: 'Seller_Return_Product',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Return_ProductDetail, name: 'Seller_Return_ProductDetail',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Setting
    component: Seller_Setting_Topic, name: 'Seller_Setting_Topic',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}];