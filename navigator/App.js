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
import LatestScreen from '../src/src_profile/LatestScreen';
import ChatScreen from '../src/src_profile/ChatScreen';
import InterestedScreen from '../src/src_profile/InterestedScreen';
import Follow_storeScreen from '../src/src_profile/Follow_storeScreen';
import Review_meScreen from '../src/src_profile/Review_meScreen';
import Help_meScreen from '../src/src_profile/Help_meScreen';
import StoreMeScreen from '../src/src_storeMe/StoreMeScreen';
import Customer_account from '../src/src-Cart/Customer_account';
import Customer_Order from '../src/src-Cart/Customer_Order';
import StoreMe_Up_Product from '../src/src_storeMe/StoreMe_Up_Product';
import DealScreen from '../src/src_Promotion/DealScreen';
import CoinScreen from '../src/src_Promotion/CoinScreen';
import CampaignScreen from '../src/src_Promotion/CampaignScreen';


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
  LatestScreen: {
    screen: LatestScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  InterestedScreen: {
    screen: InterestedScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Follow_storeScreen: {
    screen: Follow_storeScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Review_meScreen: {
    screen: Review_meScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  Help_meScreen: {
    screen: Help_meScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
  StoreMeScreen: {
    screen: StoreMeScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
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
  StoreMe_Up_Product: {
    screen: StoreMe_Up_Product,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  },
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

},
  {
    initialRouteName: 'MainScreen',
    // initialRouteName: 'DetailScreen',
    // initialRouteName: 'DealScreen',
  }
);

const AppNavigator = createAppContainer(PathScreen);
export default AppNavigator;
