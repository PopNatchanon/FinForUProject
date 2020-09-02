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
import Cart from '../screens/Cart';
import Detail from '../screens/Detail';
import Feed from '../screens/Feed';
import Main from '../screens/Main';
import Profile from '../screens/Profile';
import Store from '../screens/Store';
///----------------------------------------------------------------------------------------------->>>>
import MainScreen from '../screens/MainScreen';
import FeedScreen from '../screens/Feed/FeedScreen';
import NewsScreen from '../screens/NewsScreen';
import BellScreen from '../screens/BellScreen';
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
const setScreen = [...Cart, ...Detail, ...Feed, ...Main, ...Profile, ...Store];
function App() {
  return <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={
        'MainScreen'
        // 'DealScreen'
        // 'StoreScreen'
      }>
        {setScreen.map(({ component, name, options }, i) => <Stack.Screen component={component} key={i} name={name} options={options} />)}
        <Stack.Screen component={MainScreen} name='MainScreen'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, }} />
        <Stack.Screen component={FeedScreen} name='FeedScreen'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, }} />
        <Stack.Screen component={NewsScreen} name='NewsScreen'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, }} />
        <Stack.Screen component={BellScreen} name='BellScreen'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, }} />
        <Stack.Screen component={SettingScreen} name='SettingScreen'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Profile_Topic} name='Profile_Topic'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, }} />
        <Stack.Screen component={CancelScreen} name='CancelScreen'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Return_products} name='Return_products'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Total_Order} name='Total_Order'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Order_Detail} name='Order_Detail'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Setting_Topic} name='Setting_Topic'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Business} name='Business'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={SellerScreen} name='SellerScreen'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Seller_Totel_Order} name='Seller_Totel_Order'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Seller_Topic} name='Seller_Topic'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Seller_Setting} name='Seller_Setting'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Seller_Profile_Edit} name='Seller_Profile_Edit'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Seller_Up_Product} name='Seller_Up_Product'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Seller_Return} name='Seller_Return'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Setting_TopicStore} name='Setting_TopicStore'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Seller_Detail_Order} name='Seller_Detail_Order'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Customer_account} name='Customer_account'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Customer_Order} name='Customer_Order'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
        <Stack.Screen component={Customer_Complete_Order} name='Customer_Complete_Order'
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
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
        <Stack.Screen component={Detail_Pro} name='Detail_Pro'
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
