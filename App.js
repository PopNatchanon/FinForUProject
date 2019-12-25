import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import MainScreen from './src/MainScreen';
import StoreScreen from './src/StoreScreen';
import DetailScreen from './src/DetailScreen';
import ProfileScreen from './src/ProfileScreen'

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
    initialRouteName: 'MainScreen',
  });

const AppNavigator = createAppContainer(PathScreen);
export default AppNavigator;
