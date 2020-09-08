///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Promotion_Campaign from './Campaign';
import Promotion_Coin from './Coin';
import Promotion_Deal from './Deal';
import Promotion_InstallmentPay from './InstallmentPay';
import Promotion_TheBestFin from './TheBestFin';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Promotion_Sub_DealTopic from './DealTopic/DealTopic';
import Promotion_Sub_DetailCampaign from './DetailCampaign/DetailCampaign';
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
    component: Promotion_Sub_DealTopic, name: 'Promotion_Sub_DealTopic',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Promotion_Sub_DetailCampaign, name: 'Promotion_Sub_DetailCampaign',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}];