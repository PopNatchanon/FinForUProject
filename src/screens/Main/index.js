///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Main from './Main';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Main_Category from './Category/Category';
import Main_Exclusive from './Exclusive/Exclusive';
import Main_FlashSale from './FlashSale/FlashSale';
import Main_Highlight from './Highlight/Highlight';
import Main_PopularProduct from './PopularProduct/PopularProduct';
import Main_ProductForYou from './ProductForYou/ProductForYou';
import Main_RecommendBrand from './RecommendBrand/RecommendBrand';
import Main_RecommendStore from './RecommendStore/RecommendStore';
import Main_Search from './Search/Search';
///----------------------------------------------------------------------------------------------->>>> Sub Fin
import Main_Fin_FinMall from './Fin/FinMall';
import Main_Fin_FINSupermarket from './Fin/FINSupermarket';
///----------------------------------------------------------------------------------------------->>>> Sub Second
import Main_Second_Product from './Second/Product/Product';
import Main_Second_Store from './Second/Store/Store';
///----------------------------------------------------------------------------------------------->>>>
export default [
    ///----------------------------------------------------------------------------------------------->>>> Main Screen
    { component: Main, name: 'Main', options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid } },
    ///----------------------------------------------------------------------------------------------->>>> Sub Screen
    { component: Main_Category, name: 'Main_Category', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Main_Exclusive, name: 'Main_Exclusive', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }, { component: Main_FlashSale, name: 'Main_FlashSale', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Main_Highlight, name: 'Main_Highlight', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }, {
        component: Main_PopularProduct, name: 'Main_PopularProduct',
        options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, {
        component: Main_ProductForYou, name: 'Main_ProductForYou',
        options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, {
        component: Main_RecommendBrand, name: 'Main_RecommendBrand', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, {
        component: Main_RecommendStore, name: 'Main_RecommendStore', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, { component: Main_Search, name: 'Main_Search', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    ///----------------------------------------------------------------------------------------------->>>> Sub Fin
    { component: Main_Fin_FinMall, name: 'Main_Fin_FinMall', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }, {
        component: Main_Fin_FINSupermarket, name: 'Main_Fin_FINSupermarket',
        options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    },
    ///----------------------------------------------------------------------------------------------->>>> Sub Second
    {
        component: Main_Second_Product, name: 'Main_Second_Product', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }, {
        component: Main_Second_Store, name: 'Main_Second_Store', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
    }];