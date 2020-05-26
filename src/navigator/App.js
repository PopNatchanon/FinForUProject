import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
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
    screen: MainScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  StoreScreen: {
    screen: StoreScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  DetailScreen: {
    screen: DetailScreen,
    navigationOptions: () => ({
      headerShown: false
    }),
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  CartScreen: {
    screen: CartScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  FeedScreen: {
    screen: FeedScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  NewsScreen: {
    screen: NewsScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  BellScreen: {
    screen: BellScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Recommend_Brand: {
    screen: Recommend_Brand,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  FlashSaleScreen: {
    screen: FlashSaleScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  HighlightScreen: {
    screen: HighlightScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Popular_productScreen: {
    screen: Popular_productScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Recommend_Store: {
    screen: Recommend_Store,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Recommend_Store: {
    screen: Recommend_Store,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  ExclusiveScreen: {
    screen: ExclusiveScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Product_for_youScreen: {
    screen: Product_for_youScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  CategoryScreen: {
    screen: CategoryScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  FinMallScreen: {
    screen: FinMallScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  FINSupermarket: {
    screen: FINSupermarket,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  // src_Detail
  Reviews_score: {
    screen: Reviews_score,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  // src_profile
  Profile_Topic: {
    screen: Profile_Topic,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  CancelScreen: {
    screen: CancelScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Return_products: {
    screen: Return_products,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Total_Order: {
    screen: Total_Order,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Order_Detail: {
    screen: Order_Detail,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Setting_Topic: {
    screen: Setting_Topic,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Business: {
    screen: Business,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  // src_Seller
  SellerScreen: {
    screen: SellerScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Seller_Totel_Order: {
    screen: Seller_Totel_Order,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Seller_Topic: {
    screen: Seller_Topic,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Seller_Setting: {
    screen: Seller_Setting,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Seller_Profile_Edit: {
    screen: Seller_Profile_Edit,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Seller_Up_Product: {
    screen: Seller_Up_Product,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Seller_Return: {
    screen: Seller_Return,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Setting_TopicStore: {
    screen: Setting_TopicStore,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Seller_Detail_Order: {
    screen: Seller_Detail_Order,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  // src-Cart
  Customer_account: {
    screen: Customer_account,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Customer_Order: {
    screen: Customer_Order,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Customer_Complete_Order: {
    screen: Customer_Complete_Order,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  // src_Promotion
  Deal_Topic: {
    screen: Deal_Topic,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  DealScreen: {
    screen: DealScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  CoinScreen: {
    screen: CoinScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  CampaignScreen: {
    screen: CampaignScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  The_BestFinScreen: {
    screen: The_BestFinScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Installment_payScreen: {
    screen: Installment_payScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Detail_Campaign: {
    screen: Detail_Campaign,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Same_StoreScreen: {
    screen: Same_StoreScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  SecondScreen: {
    screen: SecondScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Detail_Pro: {
    screen: Detail_Pro,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  // src_store
  Post_Feed: {
    screen: Post_Feed,
    navigationOptions: () => ({
      headerShown: false
    })
  },
},
  {
    // initialRouteName: 'MainScreen',
    // initialRouteName: 'ProfileScreen',
    initialRouteName: 'SellerScreen',
  }
);
const AppNavigator = createAppContainer(PathScreen);
export default AppNavigator;
