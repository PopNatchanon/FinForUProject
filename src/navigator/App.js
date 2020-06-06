import React, { Component } from 'react';
import { createStackNavigator, CardStyleInterpolators, HeaderStyleInterpolators, TransitionSpecs, } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
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
const PathScreen = createStackNavigator({
  MainScreen: {
    screen: MainScreen, navigationOptions: () => ({
      headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    })
  },
  StoreScreen: {
    screen: StoreScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  DetailScreen: {
    screen: DetailScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  ProfileScreen: {
    screen: ProfileScreen, navigationOptions: () => ({
      headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    })
  },
  CartScreen: {
    screen: CartScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  LoginScreen: {
    screen: LoginScreen, navigationOptions: () => ({
      headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    })
  },
  FeedScreen: {
    screen: FeedScreen, navigationOptions: () => ({
      headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    })
  },
  NewsScreen: {
    screen: NewsScreen, navigationOptions: () => ({
      headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    })
  },
  BellScreen: {
    screen: BellScreen, navigationOptions: () => ({
      headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    })
  },
  RegisterScreen: {
    screen: RegisterScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Recommend_Brand: {
    screen: Recommend_Brand, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  FlashSaleScreen: {
    screen: FlashSaleScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  SettingScreen: {
    screen: SettingScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  HighlightScreen: {
    screen: HighlightScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Popular_productScreen: {
    screen: Popular_productScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Recommend_Store: {
    screen: Recommend_Store, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Recommend_Store: {
    screen: Recommend_Store, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  ExclusiveScreen: {
    screen: ExclusiveScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Product_for_youScreen: {
    screen: Product_for_youScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  CategoryScreen: {
    screen: CategoryScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  FinMallScreen: {
    screen: FinMallScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  FINSupermarket: {
    screen: FINSupermarket, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  // src_Detail
  Reviews_score: {
    screen: Reviews_score, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  // src_profile
  Profile_Topic: {
    screen: Profile_Topic, navigationOptions: () => ({
      headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    })
  },
  CancelScreen: {
    screen: CancelScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Return_products: {
    screen: Return_products, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Total_Order: {
    screen: Total_Order, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Order_Detail: {
    screen: Order_Detail, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Setting_Topic: {
    screen: Setting_Topic, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Business: {
    screen: Business, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  // src_Seller
  SellerScreen: {
    screen: SellerScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Seller_Totel_Order: {
    screen: Seller_Totel_Order, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Seller_Topic: {
    screen: Seller_Topic, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Seller_Setting: {
    screen: Seller_Setting, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Seller_Profile_Edit: {
    screen: Seller_Profile_Edit, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Seller_Up_Product: {
    screen: Seller_Up_Product, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Seller_Return: {
    screen: Seller_Return, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Setting_TopicStore: {
    screen: Setting_TopicStore, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Seller_Detail_Order: {
    screen: Seller_Detail_Order, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  // src-Cart
  Customer_account: {
    screen: Customer_account, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Customer_Order: {
    screen: Customer_Order, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Customer_Complete_Order: {
    screen: Customer_Complete_Order, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  // src_Promotion
  Deal_Topic: {
    screen: Deal_Topic, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  DealScreen: {
    screen: DealScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  CoinScreen: {
    screen: CoinScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  CampaignScreen: {
    screen: CampaignScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  The_BestFinScreen: {
    screen: The_BestFinScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Installment_payScreen: {
    screen: Installment_payScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Detail_Campaign: {
    screen: Detail_Campaign, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Same_StoreScreen: {
    screen: Same_StoreScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  SecondScreen: {
    screen: SecondScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  SearchScreen: {
    screen: SearchScreen, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  Detail_Pro: {
    screen: Detail_Pro, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
  // src_store
  Post_Feed: {
    screen: Post_Feed, navigationOptions: () => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
  },
},
  {
    // initialRouteName: 'FeedScreen',
    // initialRouteName: 'ProfileScreen',
    initialRouteName: 'MainScreen',
  }
);
const AppNavigator = createAppContainer(PathScreen);
export default AppNavigator;
