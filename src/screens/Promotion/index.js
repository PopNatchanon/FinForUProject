///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Promotion_Campaign from './Campaign';
import Promotion_Coin from './Coin';
import Promotion_Deal from './Deal/Deal';
import Promotion_InstallmentPay from './InstallmentPay';
import Promotion_TheBestFin from './TheBestFin';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Promotion_Sub_DetailCampaign from './DetailCampaign/DetailCampaign';
///----------------------------------------------------------------------------------------------->>>> Sub Promotion_Deal
import Promotion_Deal_Exclusive from './Deal/Exclusive/Exclusive';
import Promotion_Deal_ProductSale from './Deal/ProductSale/ProductSale';
import Promotion_Deal_Store from './Deal/Store/Store';
import Promotion_Deal_StoreSale from './Deal/StoreSale/StoreSale';
import Promotion_Deal_Worthy from './Deal/Worthy/Worthy';
///----------------------------------------------------------------------------------------------->>>>
export default [{ ///----------------------------------------------------------------------------------->>>> Main Screen
    component: Promotion_Campaign, name: 'Promotion_Campaign',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Promotion_Coin, name: 'Promotion_Coin',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Promotion_Deal, name: 'Promotion_Deal',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Promotion_InstallmentPay, name: 'Promotion_InstallmentPay',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Promotion_TheBestFin, name: 'Promotion_TheBestFin',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Screen
    component: Promotion_Sub_DetailCampaign, name: 'Promotion_Sub_DetailCampaign',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Promotion_Deal
    component: Promotion_Deal_Exclusive, name: 'Promotion_Deal_Exclusive',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Promotion_Deal_ProductSale, name: 'Promotion_Deal_ProductSale',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Promotion_Deal_Store, name: 'Promotion_Deal_Store',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Promotion_Deal_StoreSale, name: 'Promotion_Deal_StoreSale',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Promotion_Deal_Worthy, name: 'Promotion_Deal_Worthy',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}];