///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Dimensions, TouchableOpacity, View, StyleSheet, Text
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { GetData } from '../Tools';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from "react-native-text-gradient";
import { NavigationNavigate } from '..';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> Toolbar
const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 14,
    },
});
function Toolbar(props) {
    const { navigation, route } = props;
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [currentUser, setCurrentUser] = useState(undefined);
    let getSource = (value) => { setActiveGetCurrentUser(false); setCurrentUser(value.currentUser); };
    useEffect(() => {
        // props?.customerData?.isChecked == false && props?.checkCustomer()
        activeGetCurrentUser && GetData({ getSource: (value) => getSource(value), getUser: true });
    }, [activeGetCurrentUser]);
    var u_name = null;
    if (currentUser != null) { currentUser.name && (u_name = currentUser.name); };
    let genText = (routeSelcet, nameRoute, value) => <LinearTextGradient colors={[routeSelcet == nameRoute ? '#001666' : '#111',
    routeSelcet == nameRoute ? '#284d8fff' : '#111']} locations={[0.2, 0.8]} style={[stylesFont.FontFamilyBold,{ fontSize: 13, }]}
        useViewFrame={true}>
        {value}
    </LinearTextGradient>;
    var routeSelcet = route.name;
    return <View style={stylesMain.Toolbar}>
        <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'MainScreen' ?
            NavigationNavigate({ goScreen: 'MainScreen', navigation, noPush: true }) : null}>
            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                {genText(routeSelcet, 'MainScreen', <IconAntDesign name="home" size={25} />)}
                {genText(routeSelcet, 'MainScreen', <Text>Home</Text>)}
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'FeedScreen' ?
            NavigationNavigate({ goScreen: 'FeedScreen', navigation, noPush: true }) : null}>
            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                {genText(routeSelcet, 'FeedScreen', <IconAntDesign name="tagso" size={25} />)}
                {genText(routeSelcet, 'FeedScreen', <Text>Feed</Text>)}
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'NewsScreen' ?
            NavigationNavigate({ goScreen: 'NewsScreen', navigation, noPush: true }) : null}>
            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                {genText(routeSelcet, 'NewsScreen', <IconAntDesign name="notification" size={25} />)}
                {genText(routeSelcet, 'NewsScreen', <Text>News</Text>)}
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'BellScreen' ?
            NavigationNavigate({ goScreen: 'BellScreen', navigation, noPush: true }) : null}>
            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                {genText(routeSelcet, 'BellScreen', <IconAntDesign name="bells" size={25} />)}
                {genText(routeSelcet, 'BellScreen', <Text>เตือน</Text>)}
            </View>
        </TouchableOpacity>
        {currentUser == null ?
            <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'LoginScreen' ?
                NavigationNavigate({ goScreen: 'LoginScreen', navigation, noPush: true }) : null}>
                <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                    {genText(routeSelcet, 'LoginScreen', <IconAntDesign name="user" size={25} />)}
                    {genText(routeSelcet, 'LoginScreen', <Text>ฉัน</Text>)}
                </View>
            </TouchableOpacity> :
            <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'ProfileScreen' ?
                NavigationNavigate({ goScreen: 'ProfileScreen', navigation, noPush: true }) : null}>
                <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                    {genText(routeSelcet, 'ProfileScreen', <IconAntDesign name="user" size={25} />)}
                    {genText(routeSelcet, 'ProfileScreen', <Text>ฉัน</Text>)}
                </View>
            </TouchableOpacity>}
    </View>;
};
export default Toolbar;