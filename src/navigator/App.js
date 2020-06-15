import React from 'react';
// import { createStackNavigator, CardStyleInterpolators, HeaderStyleInterpolators, TransitionSpecs, } from 'react-navigation-stack';
import { createCompatNavigatorFactory } from '@react-navigation/compat';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Redux
import configureStore from './configureStore';
import { createStore, applyMiddleware } from "redux";
import { Provider, useStore } from 'react-redux';
import { fetchData } from '../actions'
// Main
import MainScreen from '../screens/MainScreen';
import StoreScreen from '../screens/StoreScreen';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import LoginScreen from '../screens/LoginScreen';
import FeedScreen from '../screens/FeedScreen';
import NewsScreen from '../screens/NewsScreen';
import BellScreen from '../screens/BellScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Recommend_Brand from '../screens/Recommend_Brand';
import FlashSaleScreen from '../screens/FlashSaleScreen';
import HighlightScreen from '../screens/HighlightScreen';
import Recommend_Store from '../screens/Recommend_Store';
import ExclusiveScreen from '../screens/ExclusiveScreen';
import Product_for_youScreen from '../screens/Product_for_youScreen';
import Popular_productScreen from '../screens/Popular_productScreen';
import CategoryScreen from '../screens/CategoryScreen';
import Same_StoreScreen from '../screens/Same_StoreScreen';
import SecondScreen from '../screens/SecondScreen';
import SearchScreen from '../screens/SearchScreen';
import FinMallScreen from '../screens/FinMallScreen';
import FINSupermarket from '../screens/FINSupermarket';
// src_Detail
import Reviews_score from '../screens/src-Detail/Reviews_score';
// src_Bell
import Detail_Pro from '../screens/src_Bell/Detail_Pro';
// src_profile
import Profile_Topic from '../screens/src_profile/Profile_Topic';
import SettingScreen from '../screens/src_profile/SettingScreen';
import CancelScreen from '../screens/src_profile/CancelScreen';
import Return_products from '../screens/src_profile/Return_products';
import Total_Order from '../screens/src_profile/Total_Order';
import Order_Detail from '../screens/src_profile/Order_Detail';
import Setting_Topic from '../screens/src_profile/src_Setting/Setting_Topic';
import Business from '../screens/src_profile/Business';
// src_Seller
import SellerScreen from '../screens/src_Seller/SellerScreen';
import Seller_Topic from '../screens/src_Seller/Seller_Topic';
import Seller_Totel_Order from '../screens/src_Seller/Seller_Totel_Order';
import Seller_Setting from '../screens/src_Seller/Seller_Setting';
import Seller_Profile_Edit from '../screens/src_Seller/Seller_Profile_Edit';
import Seller_Up_Product from '../screens/src_Seller/Seller_Up_Product';
import Seller_Return from '../screens/src_Seller/Seller_Return';
import Seller_Detail_Order from '../screens/src_Seller/Seller_Detail_Order';
import Setting_TopicStore from '../screens/src_Seller/src_SettingStore/Setting_TopicStore';
// src-Cart
import Customer_account from '../screens/src-Cart/Customer_account';
import Customer_Order from '../screens/src-Cart/Customer_Order';
import Customer_Complete_Order from '../screens/src-Cart/Customer_Complete_Order';
// src_Promotion
import Deal_Topic from '../screens/src_Promotion/src_DealTopic/Deal_Topic';
import DealScreen from '../screens/src_Promotion/DealScreen';
import CoinScreen from '../screens/src_Promotion/CoinScreen';
import CampaignScreen from '../screens/src_Promotion/CampaignScreen';
import The_BestFinScreen from '../screens/src_Promotion/The_BestFinScreen';
import Installment_payScreen from '../screens/src_Promotion/Installment_payScreen';
import Detail_Campaign from '../screens/src_Promotion/Detail_Campaign';
// src store
import Post_Feed from '../screens/src_Store/Post_Feed';
///----------------------------------------------------------------------------------------------->>>>
// const store = useStore(configureStore);
const Stack = createStackNavigator();
const store = configureStore();

// const AppNavigator = createAppContainer(PathScreen);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={
          // 'MainScreen'
          'FeedScreen'
        } >
          <Stack.Screen
            name='MainScreen'
            component={MainScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, }}
          />
          <Stack.Screen
            name='FeedScreen'
            component={FeedScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, }}
          />
          <Stack.Screen
            name='NewsScreen'
            component={NewsScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, }}
          />
          <Stack.Screen
            name='BellScreen'
            component={BellScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, }}
          />
          <Stack.Screen
            name='LoginScreen'
            component={LoginScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, }}
          />
          <Stack.Screen
            name='ProfileScreen'
            component={ProfileScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, }}
          />
          <Stack.Screen
            name='DetailScreen'
            component={DetailScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='StoreScreen'
            component={StoreScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='CartScreen'
            component={CartScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='RegisterScreen'
            component={RegisterScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Recommend_Brand'
            component={Recommend_Brand}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='FlashSaleScreen'
            component={FlashSaleScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='SettingScreen'
            component={SettingScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='HighlightScreen'
            component={HighlightScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Popular_productScreen'
            component={Popular_productScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Recommend_Store'
            component={Recommend_Store}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='ExclusiveScreen'
            component={ExclusiveScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Product_for_youScreen'
            component={Product_for_youScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='CategoryScreen'
            component={CategoryScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='FinMallScreen'
            component={FinMallScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='FINSupermarket'
            component={FINSupermarket}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Reviews_score'
            component={Reviews_score}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Profile_Topic'
            component={Profile_Topic}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, }}
          />
          <Stack.Screen
            name='CancelScreen'
            component={CancelScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Return_products'
            component={Return_products}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Total_Order'
            component={Total_Order}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Order_Detail'
            component={Order_Detail}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Setting_Topic'
            component={Setting_Topic}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Business'
            component={Business}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='SellerScreen'
            component={SellerScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Seller_Totel_Order'
            component={Seller_Totel_Order}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Seller_Topic'
            component={Seller_Topic}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Seller_Setting'
            component={Seller_Setting}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Seller_Profile_Edit'
            component={Seller_Profile_Edit}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Seller_Up_Product'
            component={Seller_Up_Product}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Seller_Return'
            component={Seller_Return}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Setting_TopicStore'
            component={Setting_TopicStore}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Seller_Detail_Order'
            component={Seller_Detail_Order}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Customer_account'
            component={Customer_account}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Customer_Order'
            component={Customer_Order}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Customer_Complete_Order'
            component={Customer_Complete_Order}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Deal_Topic'
            component={Deal_Topic}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='DealScreen'
            component={DealScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='CoinScreen'
            component={CoinScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='CampaignScreen'
            component={CampaignScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='The_BestFinScreen'
            component={The_BestFinScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Installment_payScreen'
            component={Installment_payScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Detail_Campaign'
            component={Detail_Campaign}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Same_StoreScreen'
            component={Same_StoreScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='SecondScreen'
            component={SecondScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='SearchScreen'
            component={SearchScreen}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Detail_Pro'
            component={Detail_Pro}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
          <Stack.Screen
            name='Post_Feed'
            component={Post_Feed}
            options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
