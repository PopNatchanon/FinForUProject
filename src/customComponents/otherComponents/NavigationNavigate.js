///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, } from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import { CommonActions, StackActions, } from '@react-navigation/native';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> NavigationNavigate
function NavigationNavigate(props) {
    const {
        goScreen, navigation, noPush, passHome, setConsole, setData,
    } = props;
    const navigationActions = CommonActions.reset({
        index: 0, actions: [StackActions.replace({ routeName: goScreen, params: setData })],
    });
    console.log(goScreen);
    console.log(setData);
    setConsole && (console.log(setConsole.consolename), console.log(setConsole.consolelog));
    goScreen == 'goBack' ? navigation.goBack() : passHome ? navigation.dispatch(navigationActions) : goScreen == 'popToTop' ?
        navigation.popToTop() : noPush ? navigation.replace(goScreen, setData) : navigation.push(goScreen, setData);
};
export default NavigationNavigate;