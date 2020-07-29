///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, } from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import { CommonActions, StackActions, } from '@react-navigation/native';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> NavigationNavigate
function NavigationNavigate(props) {
    const {
        goScreen, navigation: { dispatch, goBack, popToTop, push, replace, }, noPush, passHome, setConsole, setData,
    } = props;
    const navigationActions = CommonActions.reset({
        index: 0, actions: [StackActions.replace({ routeName: goScreen, params: setData })],
    });
    console.log(goScreen);
    console.log(setData);
    setConsole && (console.log(setConsole.consolename), console.log(setConsole.consolelog));
    goScreen == 'goBack' ? goBack() : passHome ? dispatch(navigationActions) : goScreen == 'popToTop' ? popToTop() : noPush ?
        replace(goScreen, setData) : push(goScreen, setData);
};
export default NavigationNavigate;