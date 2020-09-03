import React from 'react';
// import { createStackNavigator, CardStyleInterpolators, HeaderStyleInterpolators, TransitionSpecs, } from 'react-navigation-stack';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
///----------------------------------------------------------------------------------------------->>>> Redux
import configureStore from './configureStore';
import { createStore, applyMiddleware } from "redux";
import { Provider, useStore } from 'react-redux';
import { fetchData } from '../actions'
///----------------------------------------------------------------------------------------------->>>> Main
import Bell from '../screens/Bell';
import Business from '../screens/Business';
import Cart from '../screens/Cart';
import Detail from '../screens/Detail';
import Feed from '../screens/Feed';
import Main from '../screens/Main';
import News from '../screens/News';
import Profile from '../screens/Profile';
import Seller from '../screens/Seller';
import Store from '../screens/Store';
///----------------------------------------------------------------------------------------------->>>>
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
import FeedsScreen from '../customComponents/FeedsComponents/Feeds';
import ImageZoom from '../customComponents/imageComponents/ImageZoom/ImageZoom'
import { BrowerScreen } from '../customComponents';
///----------------------------------------------------------------------------------------------->>>>
// const store = useStore(configureStore);
const Stack = createStackNavigator();
const store = configureStore();
// const AppNavigator = createAppContainer(PathScreen);
const opacityTransition: object = {
  gestureDirection: 'horizontal', // we will swipe right if we want to close the screen;  
  transitionSpec: {
    open: { animation: 'timing', },
    close: {
      animation: 'timing',
      config: { duration: 300, },
    },
  },
  cardStyleInterpolator: ({ current }: { current: { progress: number } }) => ({
    cardStyle: { opacity: current.progress, }, // updates the opacity depending on the transition progress value of the current screen
  }),
};
const setScreen = [...Bell, ...Business, ...Cart, ...Detail, ...Feed, ...Main, ...News, ...Profile, ...Seller, ...Store];
function App() {
  return <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={
        'MainScreen'
        // 'DealScreen'
        // 'StoreScreen'
      }>
        {setScreen.map(({ component, name, options }, i) => <Stack.Screen component={component} key={i} name={name} options={options} />)}
        <Stack.Screen component={Deal_Topic} name='Deal_Topic'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={DealScreen} name='DealScreen'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={CoinScreen} name='CoinScreen'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={CampaignScreen} name='CampaignScreen'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={The_BestFinScreen} name='The_BestFinScreen'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Installment_payScreen} name='Installment_payScreen'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Detail_Campaign} name='Detail_Campaign'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Post_Feed} name='Post_Feed'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={FeedsScreen} name='FeedsScreen'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={ImageZoom} name='ImageZoom' options={{ ...opacityTransition }} />
        <Stack.Screen component={BrowerScreen} name='BrowerScreen' options={{ ...opacityTransition }} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>;
};
export default App
