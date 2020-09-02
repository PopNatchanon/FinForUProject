///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Screen
import CategoryScreen from './Category/CategoryScreen';
import ExclusiveScreen from './Exclusive/ExclusiveScreen';
import FinMallScreen from './Fin/FinMallScreen';
import FINSupermarket from './Fin/FINSupermarket';
import FlashSaleScreen from './FlashSale/FlashSaleScreen';
import HighlightScreen from './Highlight/HighlightScreen';
import Popular_productScreen from './PopularProduct/Popular_productScreen';
import Product_for_youScreen from './ProductForYou/Product_for_youScreen';
import Recommend_Brand from './RecommendBrand/Recommend_Brand';
import Recommend_Store from './RecommendStore/Recommend_Store';
import SearchScreen from './Search/SearchScreen';
import SecondScreen from './Second/SecondScreen';
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: CategoryScreen, name: 'CategoryScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: ExclusiveScreen, name: 'ExclusiveScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: FinMallScreen, name: 'FinMallScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: FINSupermarket, name: 'FINSupermarket', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: FlashSaleScreen, name: 'FlashSaleScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: HighlightScreen, name: 'HighlightScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }, {
        component: Popular_productScreen, name: 'Popular_productScreen',
        options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, {
        component: Product_for_youScreen, name: 'Product_for_youScreen',
        options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, { component: Recommend_Brand, name: 'Recommend_Brand', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Recommend_Store, name: 'Recommend_Store', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: SearchScreen, name: 'SearchScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: SecondScreen, name: 'SecondScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];