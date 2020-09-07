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
        <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'Main' ?
            NavigationNavigate({ goScreen: 'Main', navigation, noPush: true }) : null}>
            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                {genText(routeSelcet, 'Main', <IconAntDesign name="home" size={25} />)}
                {genText(routeSelcet, 'Main', <Text>Home</Text>)}
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'Feed' ?
            NavigationNavigate({ goScreen: 'Feed', navigation, noPush: true }) : null}>
            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                {genText(routeSelcet, 'Feed', <IconAntDesign name="tagso" size={25} />)}
                {genText(routeSelcet, 'Feed', <Text>Feed</Text>)}
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'News' ?
            NavigationNavigate({ goScreen: 'News', navigation, noPush: true }) : null}>
            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                {genText(routeSelcet, 'News', <IconAntDesign name="notification" size={25} />)}
                {genText(routeSelcet, 'News', <Text>News</Text>)}
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'Bell' ?
            NavigationNavigate({ goScreen: 'Bell', navigation, noPush: true }) : null}>
            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                {genText(routeSelcet, 'Bell', <IconAntDesign name="bells" size={25} />)}
                {genText(routeSelcet, 'Bell', <Text>เตือน</Text>)}
            </View>
        </TouchableOpacity>
        {currentUser == null ?
            <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'Customer_Login' ?
                NavigationNavigate({ goScreen: 'Customer_Login', navigation, noPush: true }) : null}>
                <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                    {genText(routeSelcet, 'Customer_Login', <IconAntDesign name="user" size={25} />)}
                    {genText(routeSelcet, 'Customer_Login', <Text>ฉัน</Text>)}
                </View>
            </TouchableOpacity> :
            <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'Customer_Profile' ?
                NavigationNavigate({ goScreen: 'Customer_Profile', navigation, noPush: true }) : null}>
                <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                    {genText(routeSelcet, 'Customer_Profile', <IconAntDesign name="user" size={25} />)}
                    {genText(routeSelcet, 'Customer_Profile', <Text>ฉัน</Text>)}
                </View>
            </TouchableOpacity>}
    </View>;
};
export default Toolbar;