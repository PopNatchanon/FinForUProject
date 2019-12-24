import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import MainScreen from './MainScreen';
import StoreScreen from './StoreScreen';
import DetailScreen from './DetailScreen';
import ProfileScreen from './ProfileScreen'

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
    screen:DetailScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null
    }),
  },
  ProfileScreen:{
    screen:ProfileScreen,
    navigationOptions:()=>({
      tabBarVisible: false,
      header: null,
    })
  }
},
  {
    initialRouteName: 'ProfileScreen',
  });

const AppNavigator = createAppContainer(PathScreen);
export default AppNavigator;
