import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
///----------------------------------------------------------------------------------------------->>>> Redux
import configureStore from './configureStore';
import { Provider, } from 'react-redux';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Bell from '../screens/Bell';
import Business from '../screens/Business';
import Cart from '../screens/Cart';
import Detail from '../screens/Detail';
import Feed from '../screens/Feed';
import Main from '../screens/Main';
import News from '../screens/News';
import Profile from '../screens/Profile';
import Promotion from '../screens/Promotion';
import Seller from '../screens/Seller';
import Store from '../screens/Store';
///----------------------------------------------------------------------------------------------->>>> Customs Screen
import CustomsScreen from '../customComponents/indexScreen';
///----------------------------------------------------------------------------------------------->>>> Setup App
const Stack = createStackNavigator();
const store = configureStore();
const setScreen = [
  ...Bell, ...Business, ...Cart, ...Detail, ...Feed, ...Main, ...News, ...Profile, ...Promotion, ...Seller, ...Store, ...CustomsScreen
];
///----------------------------------------------------------------------------------------------->>>> s
function App() {
  return <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={
        'MainScreen'
        // 'DealScreen'
        // 'StoreScreen'
      }>
        {setScreen.map(({ component, name, options }, i) => <Stack.Screen component={component} key={i} name={name} options={options} />)}
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>;
};
export default App
