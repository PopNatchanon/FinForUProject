import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import MainScreen from '../src/MainScreen';
import StoreScreen from '../src/StoreScreen';
import DetailScreen from '../src/DetailScreen';
import ProfileScreen from '../src/ProfileScreen';
import CartScreen from '../src/CartScreen';
import LoginScreen from '../src/LoginScreen';
import FeedScreen from '../src/FeedScreen';
import NewsScreen from '../src/NewsScreen';
import BellScreen from '../src/BellScreen';
import Register_OTPScreen from '../src/Register_OTPScreen';
import RegisterScreen from '../src/RegisterScreen';
import Recommend_Brand from '../src/Recommend_Brand';
import FlashSaleScreen from '../src/FlashSaleScreen';
import HighlightScreen from '../src/HighlightScreen';
import Recommend_Store from '../src/Recommend_Store';
import ExclusiveScreen from '../src/ExclusiveScreen';
import Product_for_youScreen from '../src/Product_for_youScreen';
import Popular_productScreen from '../src/Popular_productScreen';
import CategoryScreen from '../src/CategoryScreen';
import Same_StoreScreen from '../src/Same_StoreScreen';
import Second_productScreen from '../src/Second_productScreen';
import SearchScreen from '../src/SearchScreen'

// src_Bell
import Detail_Pro from '../src/src_Bell/Detail_Pro';

// src_profile
import Profile_Topic from '../src/src_profile/Profile_Topic';
import SettingScreen from '../src/src_profile/SettingScreen';
import CancelScreen from '../src/src_profile/CancelScreen';
import Return_products from '../src/src_profile/Return_products';
import Total_Order from '../src/src_profile/Total_Order';
import Order_Detail from '../src/src_profile/Order_Detail';
import Setting_Topic from '../src/src_profile/src_Setting/Setting_Topic';

// src_storeMe

import StoreMeScreen from '../src/src_storeMe/StoreMeScreen';
import StoreMe_Setting from '../src/src_storeMe/StoreMe_Setting';
import StoreMe_Up_Product from '../src/src_storeMe/StoreMe_Up_Product';
import StoreMe_Order from '../src/src_storeMe/StoreMe_Order';
import StoreMe_Cancel from '../src/src_storeMe/StoreMe_Cancel';
import Setting_TopicStore from '../src/src_storeMe/src_SettingStore/Setting_TopicStore';

// src-Cart

import Customer_account from '../src/src-Cart/Customer_account';
import Customer_Order from '../src/src-Cart/Customer_Order';
import Customer_Complete_Order from '../src/src-Cart/Customer_Complete_Order';

// src_Promotion

import DealScreen from '../src/src_Promotion/DealScreen';
import CoinScreen from '../src/src_Promotion/CoinScreen';
import CampaignScreen from '../src/src_Promotion/CampaignScreen';
import The_BestFinScreen from '../src/src_Promotion/The_BestFinScreen';
import Installment_payScreen from '../src/src_Promotion/Installment_payScreen';
import Detail_Campaign from '../src/src_Promotion/Detail_Campaign';
///----------------------------------------------------------------------------------------------->>>>
const PathScreen = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null
    }),
  },
  StoreScreen: {
    screen: StoreScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null
    }),
  },
  DetailScreen: {
    screen: DetailScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null
    }),
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  CartScreen: {
    screen: CartScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  FeedScreen: {
    screen: FeedScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  NewsScreen: {
    screen: NewsScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  BellScreen: {
    screen: BellScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Register_OTPScreen: {
    screen: Register_OTPScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Recommend_Brand: {
    screen: Recommend_Brand,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  FlashSaleScreen: {
    screen: FlashSaleScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  HighlightScreen: {
    screen: HighlightScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Popular_productScreen: {
    screen: Popular_productScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Recommend_Store: {
    screen: Recommend_Store,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Recommend_Store: {
    screen: Recommend_Store,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  ExclusiveScreen: {
    screen: ExclusiveScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Product_for_youScreen: {
    screen: Product_for_youScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  CategoryScreen: {
    screen: CategoryScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  // src_profile

  Profile_Topic: {
    screen: Profile_Topic,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  CancelScreen: {
    screen: CancelScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Return_products: {
    screen: Return_products,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Total_Order: {
    screen: Total_Order,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Order_Detail: {
    screen: Order_Detail,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Setting_Topic: {
    screen: Setting_Topic,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },

  // src_storeMe

  StoreMeScreen: {
    screen: StoreMeScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  StoreMe_Setting: {
    screen: StoreMe_Setting,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  StoreMe_Up_Product: {
    screen: StoreMe_Up_Product,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  StoreMe_Order: {
    screen: StoreMe_Order,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  StoreMe_Cancel: {
    screen: StoreMe_Cancel,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Setting_TopicStore: {
    screen: Setting_TopicStore,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },

  // src-Cart

  Customer_account: {
    screen: Customer_account,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Customer_Order: {
    screen: Customer_Order,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Customer_Complete_Order: {
    screen: Customer_Complete_Order,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },

  // src_Promotion

  DealScreen: {
    screen: DealScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  CoinScreen: {
    screen: CoinScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  CampaignScreen: {
    screen: CampaignScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  The_BestFinScreen: {
    screen: The_BestFinScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Installment_payScreen: {
    screen: Installment_payScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Detail_Campaign: {
    screen: Detail_Campaign,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Same_StoreScreen: {
    screen: Same_StoreScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Second_productScreen: {
    screen: Second_productScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Detail_Pro: {
    screen: Detail_Pro,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
},
  {
    initialRouteName: 'MainScreen',
    // initialRouteName: 'ProfileScreen',
    // initialRouteName: 'Customer_Order',
    // initialRouteName: 'Customer_account',
    // initialRouteName: 'ExclusiveScreen',
  }
);

const AppNavigator = createAppContainer(PathScreen);
export default AppNavigator;
