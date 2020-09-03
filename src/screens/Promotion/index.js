///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import CampaignScreen from './CampaignScreen';
import CoinScreen from './CoinScreen';
import DealScreen from './DealScreen';
import Installment_payScreen from './Installment_payScreen';
import The_BestFinScreen from './The_BestFinScreen';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Deal_Topic from './DealTopic/Deal_Topic';
import Detail_Campaign from './DetailCampaign/Detail_Campaign';
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: CampaignScreen, name: 'CampaignScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: CoinScreen, name: 'CoinScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: DealScreen, name: 'DealScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }, {
        component: Installment_payScreen, name: 'Installment_payScreen',
        options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, {
        component: The_BestFinScreen, name: 'The_BestFinScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, { component: Deal_Topic, name: 'Deal_Topic', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Detail_Campaign, name: 'Detail_Campaign', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];