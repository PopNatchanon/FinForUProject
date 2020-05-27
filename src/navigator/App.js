import React, { Component } from 'react';
import { createStackNavigator, CardStyleInterpolators, HeaderStyleInterpolators, TransitionSpecs, } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
// Main
import MainScreen from '../MainScreen';
import StoreScreen from '../StoreScreen';
import DetailScreen from '../DetailScreen';
import ProfileScreen from '../ProfileScreen';
import CartScreen from '../CartScreen';
import LoginScreen from '../LoginScreen';
import FeedScreen from '../FeedScreen';
import NewsScreen from '../NewsScreen';
import BellScreen from '../BellScreen';
import RegisterScreen from '../RegisterScreen';
import Recommend_Brand from '../Recommend_Brand';
import FlashSaleScreen from '../FlashSaleScreen';
import HighlightScreen from '../HighlightScreen';
import Recommend_Store from '../Recommend_Store';
import ExclusiveScreen from '../ExclusiveScreen';
import Product_for_youScreen from '../Product_for_youScreen';
import Popular_productScreen from '../Popular_productScreen';
import CategoryScreen from '../CategoryScreen';
import Same_StoreScreen from '../Same_StoreScreen';
import SecondScreen from '../SecondScreen';
import SearchScreen from '../SearchScreen';
import FinMallScreen from '../FinMallScreen';
import FINSupermarket from '../FINSupermarket';
// src_Detail
import Reviews_score from '../src-Detail/Reviews_score';
// src_Bell
import Detail_Pro from '../src_Bell/Detail_Pro';
// src_profile
import Profile_Topic from '../src_profile/Profile_Topic';
import SettingScreen from '../src_profile/SettingScreen';
import CancelScreen from '../src_profile/CancelScreen';
import Return_products from '../src_profile/Return_products';
import Total_Order from '../src_profile/Total_Order';
import Order_Detail from '../src_profile/Order_Detail';
import Setting_Topic from '../src_profile/src_Setting/Setting_Topic';
import Business from '../src_profile/Business';
// src_Seller
import SellerScreen from '../src_Seller/SellerScreen';
import Seller_Topic from '../src_Seller/Seller_Topic';
import Seller_Totel_Order from '../src_Seller/Seller_Totel_Order';
import Seller_Setting from '../src_Seller/Seller_Setting';
import Seller_Profile_Edit from '../src_Seller/Seller_Profile_Edit';
import Seller_Up_Product from '../src_Seller/Seller_Up_Product';
import Seller_Return from '../src_Seller/Seller_Return';
import Seller_Detail_Order from '../src_Seller/Seller_Detail_Order';
import Setting_TopicStore from '../src_Seller/src_SettingStore/Setting_TopicStore';
// src-Cart
import Customer_account from '../src-Cart/Customer_account';
import Customer_Order from '../src-Cart/Customer_Order';
import Customer_Complete_Order from '../src-Cart/Customer_Complete_Order';
// src_Promotion
import Deal_Topic from '../src_Promotion/src_DealTopic/Deal_Topic';
import DealScreen from '../src_Promotion/DealScreen';
import CoinScreen from '../src_Promotion/CoinScreen';
import CampaignScreen from '../src_Promotion/CampaignScreen';
import The_BestFinScreen from '../src_Promotion/The_BestFinScreen';
import Installment_payScreen from '../src_Promotion/Installment_payScreen';
import Detail_Campaign from '../src_Promotion/Detail_Campaign';
// src store
import Post_Feed from '../src_Store/Post_Feed';
import FastImage from 'react-native-fast-image';
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
    initialRouteName: 'SellerScreen',
  }
);
const AppNavigator = createAppContainer(PathScreen);
export default AppNavigator;
