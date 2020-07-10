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
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { GetData } from '../Tools';
import LinearGradient from 'react-native-linear-gradient';
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
    const { navigation, route } = props
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [currentUser, setCurrentUser] = useState(undefined);
    let getSource = (value) => { setActiveGetCurrentUser(false); setCurrentUser(value.currentUser); };
    useEffect(() => {
        // props?.customerData?.isChecked == false && props?.checkCustomer()
        activeGetCurrentUser && GetData({ getSource: (value) => getSource(value), getUser: true })
    }, [activeGetCurrentUser])
    var u_name = null;
    if (currentUser != null) {
        currentUser.name &&
            (u_name = currentUser.name)
    }
    var routeSelcet = route.name
    return <View style={stylesMain.Toolbar}>
        <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'MainScreen' ?
            NavigationNavigate({ goScreen: 'MainScreen', navigation, noPush: true }) : null}>
            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                <IconAntDesign name="home" size={25} color={routeSelcet == 'MainScreen' ? mainColor : '#111'} />
                <Text style={{
                    fontSize: 13, fontFamily: 'SukhumvitSet-Text', color: routeSelcet == 'MainScreen' ? mainColor : '#111'
                }}>Home</Text>
            </View>
            {routeSelcet == 'MainScreen' && <LinearGradient
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 1.0, y: 0.0 }}
                locations={[0.0, 1.0]}
                colors={['#ffffff00', '#ffffffa0']} //<-- last 2 chars from color control the opacity
                useViewFrame={false}
                style={{ position: 'absolute', top: 0, left: 16, right: 0, bottom: 0, width: 40 }} />}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'FeedScreen' ?
            NavigationNavigate({ goScreen: 'FeedScreen', navigation, noPush: true }) : null}>
            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                <IconAntDesign name="tagso" size={25} color={routeSelcet == 'FeedScreen' ? mainColor : '#111'} />
                <Text style={{
                    fontSize: 13, fontFamily: 'SukhumvitSet-Text', color: routeSelcet == 'FeedScreen' ? mainColor : '#111'
                }}> Feed</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'NewsScreen' ?
            NavigationNavigate({ goScreen: 'NewsScreen', navigation, noPush: true }) : null}>
            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                <IconAntDesign name="notification" size={25} color={routeSelcet == 'NewsScreen' ? mainColor : '#111'} />
                <Text style={{
                    fontSize: 13, fontFamily: 'SukhumvitSet-Text', color: routeSelcet == 'NewsScreen' ? mainColor : '#111'
                }}>News</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'BellScreen' ?
            NavigationNavigate({ goScreen: 'BellScreen', navigation, noPush: true }) : null}>
            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                <IconAntDesign name="bells" size={25} color={routeSelcet == 'BellScreen' ? mainColor : '#111'} />
                <Text style={{
                    fontSize: 13, fontFamily: 'SukhumvitSet-Text', color: routeSelcet == 'BellScreen' ? mainColor : '#111'
                }}>เตือน</Text>
            </View>
        </TouchableOpacity>
        {currentUser == null ?
            <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'LoginScreen' ?
                NavigationNavigate({ goScreen: 'LoginScreen', navigation, noPush: true }) : null}>
                <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                    <IconAntDesign name="user" size={25} color={routeSelcet == 'LoginScreen' ? mainColor : '#111'} />
                    <Text style={{
                        fontSize: 13, fontFamily: 'SukhumvitSet-Text', color: routeSelcet == 'LoginScreen' ? mainColor : '#111'
                    }}>ฉัน</Text>
                </View>
            </TouchableOpacity> :
            <TouchableOpacity activeOpacity={1} onPress={() => routeSelcet != 'ProfileScreen' ?
                NavigationNavigate({ goScreen: 'ProfileScreen', navigation, noPush: true }) : null}>
                <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                    <IconAntDesign name="user" size={25} color={routeSelcet == 'ProfileScreen' ? mainColor : '#111'} />
                    <Text numberOfLines={1} style={{
                        fontSize: 13, fontFamily: 'SukhumvitSet-Text', color: routeSelcet == 'ProfileScreen' ? mainColor : '#111'
                    }}>ฉัน</Text>
                </View>
            </TouchableOpacity>}
    </View>;
};

export default Toolbar;