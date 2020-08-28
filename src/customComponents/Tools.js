///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect, useRef, createRef } from 'react';
import {
    ActivityIndicator, Animated, Dimensions, Modal, ScrollView, Text, TextInput, TouchableOpacity, View, Share, Image, FlatList,
    StyleSheet, Platform, PixelRatio,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
import CookieManager from '@react-native-community/cookies';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import { WebView } from 'react-native-webview';
import ModalDropdown from 'react-native-modal-dropdown';
import NumberFormat from 'react-number-format';
import SlidingView from 'rn-sliding-view';
import RNFetchBlob from 'rn-fetch-blob'
import SplashScreen from 'react-native-splash-screen';
import BottomSheet from 'react-native-raw-bottom-sheet';
import { CommonActions, StackActions, } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../style/stylePromotion-src/styleDealScreen';
import stylesDetail from '../style/StylesDetailScreen'
import stylesFont, { normalize } from '../style/stylesFont';
import stylesMain, { mainColor } from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
import { NavigationNavigate } from '.';
///----------------------------------------------------------------------------------------------->>>> set value
const LOADING_ICON = require('../../images/icon.png');
const LOADING_ICON_STYLE = { height: '100%', width: '100%' };
const { contain, cover } = FastImage.resizeMode;
const { Coupon_BOX2, Coupon_BOX_A, Coupon_BOX_A2, Deal_Exclusive_Box, } = stylesDeal;
const { Detail_Box, Detail_Text_A, } = stylesDetail;
const {
    FontCenter, FontFamilyBold, FontFamilyBoldBold, FontFamilySemiBold, FontFamilyText, FontSize4, FontSize5, FontSize6, FontSize7, FontSize8,
} = stylesFont;
const {
    BoxProduct1Box, BoxProduct1Box2, BoxProduct1Box2new, BoxProduct1ImageofLines, BoxProduct1ImageofLines2, BoxProduct1ImagePrice,
    BoxProduct1ImagePriceThrough, BoxProduct1NameofLines, BoxProduct1PriceofLines, BoxProduct2Box, BoxProduct2Image, BoxProduct2ImageofLines,
    BoxProduct3Box, BoxProduct3ImageofLines, BoxProduct4Box, BoxProduct4ComBox, BoxProduct4ComBoxIcon, BoxProduct4ComBoxIconText,
    BoxProduct4ComBox2, BoxProduct4Image, BoxProduct4PlusButtonBox, BoxProduct4PlusButtonFollow, BoxProduct4PlusButtonFollowText,
    BoxProduct4PlusImage, BoxProduct4PlusImageText, BoxProduct4PlusHeader, BoxProduct5Box, BoxProduct5ImageofLines, Box_On_sale,
    CategoryProductStoreBox, CategoryProductStoreImage, FlexRow, ItemCenter, ItemCenterVertical, SafeAreaViewNB,
} = stylesMain;
const { BackgroundLeft, BackgroundRight, BoxReset, maxMinValue, } = stylesTopic;
const Navi = (naviProps) => NavigationNavigate(naviProps);
///----------------------------------------------------------------------------------------------->>>> TabBar
export class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathlist: 0,
            pathlist2: 0,
            PassSetValue: 0,
        };
    };
    /*
    // v0.0a.14.04.2020
    // <TabBar
    // /////ส่งออกมาจากTabBarและส่งค่าที่คลิกไปยังฟังก์ชันgetData
    // sendData={this.getData}
    // /////|Arrey| ส่งค่าArreyที่ต้องการสร้างTabเข้าในฟังก์ชัน
    // item={item}
    // /////|color| กำหนดสีเส้นหรือปุ่มในTabที่เลือกอยู่
    // activeColor='#fff'   
    // /////|color| กำหนดสีเส้นขอบในTabที่ไม่ได้เลือก
    // inactiveColor='#fff'
    // /////|color| กำหนดสีปุ่มในTabที่ไม่ได้เลือก
    // inactiveBoxColor="#fff"
    // /////|number| กำหนดความหนาของเส้นขอบ
    // activeWidth={4}          
    // /////|space|nospace| กำหนดรูปแบบระยะของแต่ละbox
    // noSpace='true'false|   
    // /////|0-100| กำหนดระยะห่างของแต่ละbox มีค่า 0-100
    // widthBox={98}
    // /////|row|column|  กำหนดแนวของbox
    // direction='column'     
    // /////|number|  กำหนดความกลมมลของbox
    // radiusBox={8}            
    // /////|right|left|center| กำหนดตำแหน่งของbox
    // alignBox='center'        
    // /////|color| กำหนดสีตัวอักษรในboxที่เลือก
    // activeFontColor='#fff'         
    // /////|color| กำหนดสีตัวอักษรในboxที่ไม่ได้เลือกเลือก
    // inactiveFontColor='#fff'   
    // /////|none|box| กำหนดรูปแบบของbox
    // type='box'
    // /////|color| กำหนดสีพื้นหลังสำหรับไม่มีbox
    // spaceColor='#fff'
    // /////|color| กำหนดสีตัวอักษรทั้งหมด
    // fontColor='#fff' />*/
    setSelectTab = (selectedIndex, PassSetValue, list) => {
        const { item, sendData } = this.props
        var { pathlist2 } = this.state
        list ? ([
            list == 'swap' && pathlist2 < item[selectedIndex].actionList.length - 1 ? pathlist2++ : pathlist2 = 0,
            this.setState({ pathlist2 }),
            sendData({ selectedIndex, actionReturn: item[selectedIndex].actionReturn[pathlist2] })
        ]) : sendData({ selectedIndex, });
        this.setState({ pathlist: selectedIndex, PassSetValue });
    };
    get tab() {
        const {
            activeColor, activeFontColor, bottomColor, fontColor, fontSizeStyle, inactiveBoxColor, inactiveColor, inactiveFontColor, item,
            limitBox, noLimit, NoSelectTab, noSpace, numberBox, numberofBox, numberOfLines, radiusBox, SetValue, setHorizontal,
            setVertical, spaceColor, tagBottom, tagBottomColor, type, widthBox,
        } = this.props;
        const { PassSetValue, pathlist, pathlist2 } = this.state;
        const countItem = item.length;
        // SetValue && console.log(`SetValue => ${SetValue}`);
        SetValue >= 0 && SetValue != pathlist && this.setSelectTab(SetValue);
        return item.map((item, index) => <TouchableOpacity key={index} activeOpacity={type == 'box' ? 0.2 : 1} onPress={NoSelectTab ?
            pathlist == index ?
                () => this.setSelectTab(-1) : () => this.setSelectTab(index + '') : item.actionItem && pathlist == index ?
                () => this.setSelectTab(index + '', undefined, 'swap') : item.actionItem ?
                    () => this.setSelectTab(index + '', undefined, 'set') : () => this.setSelectTab(index + '')
        }>
            {pathlist == index ?
                <View style={[ItemCenterVertical, {
                    alignContent: 'center', alignItems: 'center',
                    borderBottomColor: type == 'box' ? null : activeColor ?? mainColor,
                    borderBottomWidth: type == 'tag' ? null : type == 'box' ? null : 4,
                    borderLeftWidth: type == 'tag' ? index == 0 ? null : 0.5 : null,
                    borderRightWidth: type == 'tag' ? index == countItem - 1 ? null : 0.5 : null,
                    paddingHorizontal: setHorizontal ?? null,
                    paddingLeft: numberBox ? width * (1 / 60) : null,
                    paddingVertical: setVertical ?? null,
                    width: type == 'box' ?
                        noSpace ?
                            null : noLimit ?
                                numberBox ?
                                    '100%' : numberofBox ?
                                        width * (1 / numberofBox) : width * (1 / 4) : width * (1 / countItem) : noSpace ?
                            widthBox ?? width * (1 / countItem) : noLimit ?
                                numberofBox ?
                                    width * (1 / numberofBox) : width * (1 / 4.2) : limitBox ?
                                    limitBox * (1 / countItem) : width * (1 / countItem),
                }]}>
                    <View style={[ItemCenterVertical, type == 'box' ? {
                        alignContent: 'center', alignItems: 'center',
                        borderColor: activeColor ?? mainColor,
                        borderLeftWidth: noSpace ? 0.5 : null,
                        borderRadius: radiusBox ?? 0,
                        borderRightWidth: noSpace ? 0.5 : null,
                        borderWidth: 1,
                        backgroundColor: activeColor ?? mainColor,
                        padding: 6,
                        width: noLimit ?
                            numberBox ?
                                width * (1 / 3) : width * (1 / 4.2) : numberofBox ?
                                width * (1 / numberofBox) : widthBox >= 0 ?
                                    widthBox <= 100 ?
                                        width * (1 / (countItem * (1 + ((100 - widthBox) / 100)))) : width * (1 / (countItem * 1.2)) :
                                    width * (1 / (countItem * 1.2)),
                    } : { flexDirection: 'row' }]}>
                        <Text numberOfLines={numberOfLines} style={[FontFamilySemiBold, {
                            color: type == 'box' ? activeFontColor ?? fontColor ?? 'white' : activeFontColor ?? fontColor ?? 'black',
                            fontSize: fontSizeStyle ?? 16,
                            textAlignVertical: 'center'
                        }]}>{item.name}</Text>
                        {item.nameline2 && <Text numberOfLines={numberOfLines} style={[FontFamilySemiBold, {
                            color: type == 'box' ? activeFontColor ?? fontColor ?? 'white' : activeFontColor ?? fontColor ?? 'black',
                            fontSize: fontSizeStyle ?? 16,
                            textAlignVertical: 'center'
                        }]}>{item.nameline2}</Text>}
                        {item.actionItem && item.actionItem[item.actionList[pathlist2]]}
                    </View>
                </View> :
                <View style={[ItemCenterVertical, {
                    alignContent: 'center', alignItems: 'center',
                    borderBottomColor: type == 'box' ? null : spaceColor ?? '#fff',
                    borderBottomWidth: type == 'tag' ? null : type == 'box' ? null : 4,
                    borderLeftWidth: type == 'tag' ? index == 0 ? null : 0.5 : null,
                    borderRightWidth: type == 'tag' ? index == countItem - 1 ? null : 0.5 : null,
                    paddingHorizontal: setHorizontal ?? null,
                    paddingLeft: numberBox ? width * (1 / 60) : null,
                    paddingVertical: setVertical ?? null,
                    width: type == 'box' ?
                        noSpace ?
                            null : noLimit ?
                                numberBox ?
                                    '100%' : numberofBox ?
                                        width * (1 / numberofBox) : width * (1 / 4) : width * (1 / countItem) : noSpace ?
                            widthBox ?? width * (1 / countItem) : noLimit ?
                                numberofBox ?
                                    width * (1 / numberofBox) : width * (1 / 4.2) : limitBox ?
                                    limitBox * (1 / countItem) : width * (1 / countItem),
                }]}>
                    <View style={[ItemCenterVertical, type == 'box' ? {
                        alignContent: 'center', alignItems: 'center',
                        backgroundColor: inactiveBoxColor ?? null,
                        borderColor: inactiveColor ?? 'black',
                        borderLeftWidth: noSpace ? 0.5 : null,
                        borderRadius: radiusBox ?? 0,
                        borderRightWidth: noSpace ? 0.5 : null,
                        borderWidth: 1,
                        padding: 6,
                        width: noLimit ?
                            numberBox ?
                                width * (1 / 3) : width * (1 / 4.2) : numberofBox ?
                                width * (1 / numberofBox) : widthBox >= 0 ?
                                    widthBox <= 100 ?
                                        width * (1 / (countItem * (1 + ((100 - widthBox) / 100)))) : width * (1 / (countItem * 1.2)) :
                                    width * (1 / (countItem * 1.2)),
                    } : { flexDirection: 'row' }]}>
                        <Text numberOfLines={numberOfLines} style={[FontFamilySemiBold, {
                            color: inactiveFontColor ?? fontColor ?? 'black',
                            fontSize: fontSizeStyle ?? 16,
                            textAlignVertical: 'center',
                        }]}>{item.name}</Text>
                        {item.nameline2 && <Text numberOfLines={numberOfLines} style={[FontFamilySemiBold, {
                            color: inactiveFontColor ?? fontColor ?? 'black',
                            fontSize: fontSizeStyle ?? 16,
                            textAlignVertical: 'center',
                        }]}>{item.nameline2}</Text>}
                        {item.actionItem && item.actionItem[0]}
                    </View>
                </View>}
            {item.subname && <View style={[ItemCenter, { width: '100%' }]}>
                <Text style={[FontFamilyText, FontSize8, {
                    borderBottomColor: tagBottom ? pathlist == index ? tagBottom : tagBottomColor ?? '#fff' : null,
                    borderBottomWidth: tagBottom ? 4 : null, textAlign: 'center', width: '90%',
                }]}>{item.subname}</Text>
            </View>
            }{tagBottomColor && item.subname ? null : <View style={[ItemCenter, { width: '100%' }]}>
                <View style={[{
                    borderBottomColor: tagBottom ? pathlist == index ? tagBottomColor ?? mainColor : '#fff' : null,
                    borderBottomWidth: tagBottom ? 4 : null, textAlign: 'center', width: '90%',
                }]} />
            </View>
            }
        </TouchableOpacity>);
    };
    render() {
        const { alignBox, bottomColor, direction, noLimit, noSpace, numberBox, numberofBox, spaceColor, type, } = this.props;
        return numberBox ?
            (this.tab) : <View style={[ItemCenterVertical, type == 'box' ? {
                borderLeftWidth: noSpace ? 0.5 : null,
                borderRightWidth: noSpace ? 0.5 : null,
                flexDirection: direction == 'column' ? 'column' : 'row',
                flexWrap: numberofBox ? 'wrap' : 'nowrap',
                justifyContent: alignBox == 'center' ? 'center' : alignBox == 'right' ? 'flex-end' : 'flex-start',
                width: noLimit ? null : '100%',
            } : {
                    backgroundColor: spaceColor ?? null,
                    borderColor: type == 'tag' ? null : spaceColor ?? '#ECECEC',
                    borderBottomColor: bottomColor ?? spaceColor ?? '#ECECEC',
                    borderWidth: type == 'tag' ? null : noSpace ? null : 1,
                    flexDirection: direction == 'column' ? 'column' : 'row',
                    width: noLimit ? null : '100%',
                }
            ]}>
                {this.tab}
            </View>;
    };
};
///----------------------------------------------------------------------------------------------->>>> promiseConnectServices
function promiseConnectServices(promise, nojson) {
    return promise.then(data => { return nojson ? [null, data.text()] : [null, data.json()] }).catch(err => [err]);
};
///----------------------------------------------------------------------------------------------->>>> promiseProcessData
function promiseProcessData(promise) {
    return promise.then(data => { return [null, data] }).catch(err => [err]);
};
///----------------------------------------------------------------------------------------------->>>> GetData
export async function GetData(props) {
    SplashScreen.hide();
    const { abortController, getCokie, getSource, getUser, } = props;
    var activeLogin;
    var value = {};
    let error, result, dataCokie, dataCustomer, dataProcessCustomer;
    // abortController && console.log('GetData');
    [error, result] = await promiseProcessData(AsyncStorage.multiGet(['@MyKey', '@MyLongin']));
    if (error) {
        console.log(error);
        getCokie && (value.keycokie = undefined);
        getUser && (value.currentUser = undefined);
        return getSource(value);
    };
    if (result[1][1] === undefined) {
        console.log(result[1][1]);
        getCokie && (value.keycokie = undefined);
        getUser && (value.currentUser = undefined);
        return getSource(value);
    };
    const currentUser = result[0][1];
    const autoLogin = result[1][1];
    if (currentUser && autoLogin) {
        [error, dataCokie] = await promiseProcessData(CookieManager.get(`${finip}/auth/login_customer`));
        if (error) {
            console.log(error);
            getCokie && (value.keycokie = undefined);
            getUser && (value.currentUser = undefined);
            return getSource(value);
        };
        if (dataCokie === undefined) {
            console.log(`dataCokie`);
            getCokie && (value.keycokie = undefined);
            getUser && (value.currentUser = undefined);
            return getSource(value);
        };
        var keycokie = dataCokie.token;
        if (keycokie === undefined && autoLogin) {
            [error, dataCustomer] = await promiseConnectServices(fetch(`${finip}/auth/login_customer`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    signal: abortController ? abortController.signal : undefined
                },
                body: autoLogin,
            }));
            if (error) {
                console.log(`AutoLogin:Phase 1`);
                console.log(`ERROR:FETCH => ${error}`);
                getCokie && (value.keycokie = undefined);
                getUser && (value.currentUser = undefined);
                return getSource(value);
            };
            if (dataCustomer === undefined) {
                console.log(`AutoLogin':Phase 1`);
                console.log('No Data!');
                getCokie && (value.keycokie = undefined);
                getUser && (value.currentUser = undefined);
                return getSource(value);
            };
            [error, dataProcessCustomer] = await promiseProcessData(dataCustomer);
            if (error) {
                console.log(`AutoLogin:Phase 2`);
                console.log(`ERROR:FETCH => ${error}`);
                getCokie && (value.keycokie = undefined);
                getUser && (value.currentUser = undefined);
                return getSource(value);
            };
            if (dataProcessCustomer === undefined) {
                console.log(`AutoLogin':Phase 2`);
                console.log('No Data!');
                getCokie && (value.keycokie = undefined);
                getUser && (value.currentUser = undefined);
                return getSource(value);
            };
        }
        getCokie && (value.keycokie = dataCokie.token);
        getUser && (value.currentUser = JSON.parse(currentUser));
        return getSource(value);
    };
};
///----------------------------------------------------------------------------------------------->>>> GetServices
export async function GetServices(props) {
    const {
        abortController, Authorization, dataBody, uriPointer, getDataSource, nojson, showConsole, nameFunction,
    } = props;
    if (uriPointer) {
        if (showConsole) {
            console.log(showConsole);
            Authorization && console.log(`Authorization => ${Authorization}`);
            console.log(`uri => ${uriPointer}`);
            console.log(`dataBody`);
            console.log(dataBody);
        };
        abortController && console.log(`GetServices => ${uriPointer}`);
        let error, rawData, processData;
        [error, rawData] = await promiseConnectServices(fetch(uriPointer, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': Authorization,
                signal: abortController ? abortController.signal : undefined
            },
            body: JSON.stringify(dataBody),
        }), nojson);
        if (error) {
            console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}':Phase 1(0/2)`);
            console.log(`ERROR:FETCH => ${error}`);
            console.log(`uri => ${uriPointer}`);
            dataBody && console.log(`dataBody`);
            dataBody && console.log(dataBody);
            abortController && abortController.abort();
            if (error == 'TypeError: Network request failed') return getDataSource({ error: 'Network request failed' })
            return getDataSource({ error });
        };
        if (rawData === undefined) {
            console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}':Phase 1(1/2)`);
            console.log('No Data!');
            console.log(`uri => ${uriPointer}`);
            dataBody && console.log(`dataBody`);
            dataBody && console.log(dataBody);
            abortController && abortController.abort();
            return getDataSource({ data: 'No Data' });
        };
        showConsole &&
            console.log('Complete Connect To Server');
        [error, processData] = await promiseProcessData(rawData);
        if (error) {
            console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}':Phase 2(0/2)`);
            console.log(`ERROR:FETCH => ${error}`);
            console.log(`uri => ${uriPointer}`);
            dataBody && console.log(`dataBody`);
            dataBody && console.log(dataBody);
            abortController && abortController.abort();
            return getDataSource({ error });
        };
        if (processData === undefined || processData == '404') {
            console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}':Phase 2(1/2)`);
            processData == '404' ? console.log(processData) : console.log('No Data!');
            console.log(`uri => ${uriPointer}`);
            dataBody && console.log(`dataBody`);
            dataBody && console.log(dataBody);
            abortController && abortController.abort();
            return getDataSource({ data: processData == '404' ? processData : 'Error converting to Json.' });
        } else {
            if (showConsole) {
                console.log('Complete Converting To JSON');
                console.log(processData);
            };
            return getDataSource(processData);
        };
    } else {
        console.log(showConsole);
        console.log(`Authorization => ${Authorization}`)
        console.log(`uri => ${uriPointer}`);
        console.log(`dataBody`);
        console.log(dataBody);
        return false;
    };
};
///----------------------------------------------------------------------------------------------->>>> GetServices
export async function GetServicesBlob(props) {
    const {
        abortController, Authorization, dataBody, uriPointer, getDataSource, nojson, showConsole, nameFunction,
    } = props;
    showConsole && (
        console.log(`${showConsole}'Blob`),
        Authorization && console.log(`Authorization => ${Authorization}`),
        console.log(`uri => ${uriPointer}`),
        console.log(`dataBody`),
        console.log(dataBody)
    );
    abortController && console.log(`GetServicesBlob => ${uriPointer}`);
    let error, rawData, processData;
    [error, rawData] = await promiseConnectServices(RNFetchBlob.fetch(
        'POST', uriPointer, {
        Authorization: Authorization,
        'Content-Type': 'multipart/form-data',
        signal: abortController ? abortController.signal : undefined
    }, dataBody), nojson);
    if (error) {
        console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}'Blob:Phase 1`);
        console.log(`ERROR:FETCH => ${error}`);
        console.log(uriPointer);
        dataBody && console.log(dataBody);
        abortController && abortController.abort();
        return getDataSource({ error });
    };
    if (rawData === undefined) {
        console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}'Blob:Phase 1`);
        console.log('No Data!');
        abortController && abortController.abort();
        return getDataSource({ data: 'No Data' });
    };
    showConsole && console.log('Complete Connect To Server');
    console.log('rawData');
    console.log(rawData);
    // [error, processData] = await promiseProcessData(rawData);
    // if (error) {
    //     console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}'Blob:Phase 2`);
    //     console.log(`ERROR:FETCH => ${error}`);
    //     console.log(uriPointer);
    //     dataBody && console.log(dataBody);
    //     abortController && abortController.abort();
    //     return getDataSource({ error });
    // };
    // if (processData === undefined) {
    //     console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}'Blob:Phase 2`);
    //     console.log('No Data!');
    //     abortController && abortController.abort();
    //     return getDataSource({ data: 'Error converting to Json.' });
    // }
    // showConsole && ([
    //     console.log('Complete Converting To JSON'),
    //     console.log(processData),
    // ])
    return getDataSource(rawData);
};
///----------------------------------------------------------------------------------------------->>>> GetCoupon
export function GetCoupon(props) {
    const {
        codeList, colorCoupon, couponText, getCoupon, flexRow, marginL, saveCoupon, setDataService, textDetail, timeOut, useCoupon,
    } = props
    return (
        <View style={[Coupon_BOX2]}>
            <View style={{
                flexDirection: 'row',
                justifyContent: flexRow ? null : 'flex-end',
                marginBottom: codeList != 'available' ? -100 : null,
            }}>
                <View style={{ height: 60, justifyContent: 'center', marginLeft: 5, paddingHorizontal: 2, width: width * 0.31, }}>
                    <Text style={[FontFamilyBold, FontSize6,]}>{couponText}</Text>
                    <Text numberOfLines={1} style={[FontFamilyText, FontSize9,]}>{textDetail}</Text>
                    <Text style={[FontFamilyText, FontSize8,]}>ใช้ได้ก่อน {timeOut ? timeOut : ''}</Text>
                </View>
                <TouchableOpacity onPress={() => { getCoupon(setDataService) }}>
                    <View style={[flexRow ? Coupon_BOX_A2 : Coupon_BOX_A, { backgroundColor: colorCoupon ?? '#1CB5E0', }]}>
                        <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF' }]}>{useCoupon ? 'ใช้โค้ด' : 'เก็บ'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {codeList != 'available' && <View /*style={{
                    backgroundColor: '#C1C1C1', opacity: 0.7,
                    width: 0.31, height: 80, marginTop: -10, borderRadius: 5,
                    alignItems: 'center'
                }}*/>
                <Text style={[FontFamilyBold, FontSize4, ItemCenterVertical, { color: '#FFFFFF', }]}>
                    {codeList == 'usedCode' ? 'ใช้แล้ว' : saveCoupon ? 'เก็บแล้ว' : 'หมดอายุ'}</Text>
            </View>}
        </View>
    )
}
///----------------------------------------------------------------------------------------------->>>> ProductBox
export function ProductBox(props) {
    const {
        dataService, dispriceSize, mode, navigation, nameSize, noNavigation, numberOfItem, onShow, pointerUrl, pointerid_store, postpath,
        prepath, priceSize, radiusBox, typeip, getDataService,
    } = props;
    onShow && [console.log('ProductBoxRender'), console.log(dataService)];
    return dataService.map((item, index) => {
        const {
            discount, discount_tag, full_price, id_product, image, image_main, image_path, image_product, last_price, name, name_product,
            path_image_product, price, price_discount, type
        } = item;
        onShow && ([console.log('ProductBoxRender|||map'), console.log(item)]);
        if (index < (numberOfItem ?? dataService.length)) {
            var discounts;
            discount && (discounts = discount.replace("%", ""));
            const uriImage = {
                uri: `${type == 'local' ? ip : finip}/${(path_image_product ?? image_path)}/${(image_product ?? image_main ?? image)}${
                    type == 'local' ? '' : Platform.OS == 'android' ? '_.webp' : ''}`
            };
            return <TouchableOpacity activeOpacity={1} key={index} onPress={() => noNavigation ?
                getDataService({ id_product: id_product, name: name_product ?? name }) :
                Navi({ goScreen: pointerUrl, navigation, setData: (pointerid_store ? { id_product: id_product } : null), })}>
                <View style={[ItemCenter, mode == 'row4col1' ? BoxProduct5Box : mode == 'row3col2' ?
                    BoxProduct1Box2 : mode == 'row3col2_2' ? BoxProduct4Box : mode == 'row3colall' ?
                        BoxProduct2Box : mode == 'row2colall' ? BoxProduct3Box : mode == '5item' ?
                            Deal_Exclusive_Box : mode == 'row3colall_new' ? {
                                backgroundColor: '#FFFFFF', borderColor: '#ECECEC', borderWidth: 0.5, width: width * 0.327,
                            } : BoxProduct1Box, { borderRadius: radiusBox ?? 0, marginBottom: mode == 'row3col2_2' ? 4 : null, }]}>
                    <View style={[ItemCenter, mode == 'row4col1' ? BoxProduct5ImageofLines : mode == 'row3colall' ?
                        BoxProduct2ImageofLines : mode == 'row2colall' ? BoxProduct3ImageofLines : mode == '5item' ?
                            BoxProduct1ImageofLines2 : mode == 'row3colall_new' ? { aspectRatio: 1, flex: 1, width: '100%', } :
                                BoxProduct1ImageofLines]}>
                        <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='contain' source={uriImage}
                            style={[BoxProduct2Image, {
                                borderTopLeftRadius: radiusBox ?? 0, borderTopRightRadius: radiusBox ?? 0,
                                marginVertical: mode == 'row3colall_new' ? 0 : height * 0.015,
                                width: mode == 'row3colall_new' ? '100%' : '75%',
                            }]} />
                    </View>
                    <View style={{ height: mode == 'row4col1' ? 55 : 60, paddingHorizontal: 3, width: '100%', }}>
                        <View style={[BoxProduct1NameofLines]}>
                            <Text numberOfLines={1} style={[FontFamilySemiBold, { fontSize: nameSize ?? 16, }]}>{name_product ?? name}</Text>
                        </View>
                        <View style={[BoxProduct1PriceofLines,]}>
                            <View style={[FlexRow, { paddingVertical: 2 }]}>
                                <NumberFormat decimalScale={0} displayType={'text'} fixedDecimalScale prefix={'฿'} renderText={value => <Text
                                    style={[BoxProduct1ImagePrice, FontFamilyBoldBold, { fontSize: priceSize ?? 14, }]}>{value}</Text>}
                                    thousandSeparator={true} value={last_price ?? price_discount ?? full_price ?? price} />
                                {discount_tag ?
                                    <View style={[Box_On_sale, { borderRadius: 10 }]}>
                                        <Text numberOfLines={1} style={[FontFamilyBold, FontSize8, { color: '#FFFFFF' }]}>
                                            {`-${discount_tag}`}</Text>
                                    </View> : discount > 0 && <NumberFormat displayType={'text'} renderText={value => value && <View
                                        style={[Box_On_sale, { borderRadius: 10 }]}>
                                        <Text style={[FontFamilyBold, FontSize8, { color: '#FFFFFF' }]}>{`-${value}`}</Text>
                                    </View>} suffix={'%'} thousandSeparator={true} value={discount && discount} />}
                            </View>
                            {price_discount && <NumberFormat decimalScale={0} displayType={'text'} fixedDecimalScale prefix={'฿'}
                                renderText={value => <Text style={[BoxProduct1ImagePriceThrough, FontFamilyText,
                                    { fontSize: dispriceSize ?? 14, marginTop: -4, }]}>{value}</Text>} thousandSeparator={true}
                                value={price} />}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>;
        };
    });
};
///----------------------------------------------------------------------------------------------->>>> FlatComponent
export function FlatComponent(props) {
    const { animatedView, component, componentPage, } = props;
    const AFlatList = Animatable.createAnimatableComponent(FlatList);
    return component && animatedView ?
        <Animated.FlatList {...props} data={component} keyExtractor={(value, index) => `Component:${
            componentPage ?? index}_${value.nameComponent}`} scrollEnabled renderItem={(value) => value.item.renderComponent} /> :
        <FlatList {...props} data={component} keyExtractor={(value, index) => `Component:${
            componentPage ?? index}_${value.nameComponent}`} scrollEnabled renderItem={(value) => value.item.renderComponent} />;
};
///----------------------------------------------------------------------------------------------->>>> FlatProduct
export function FlatProduct(props) {
    const { dataService, nameFlatProduct, noMarginTop, numberOfColumn, } = props;
    var itemT = [];
    if (numberOfColumn == 2 && dataService && dataService.length > 0)
        for (var n = 0; n < dataService.length; n += 2) { itemT.push({ item: dataService[n], item2: dataService[n + 1] }); };
    return <FlatList data={numberOfColumn == 2 ? itemT : dataService} horizontal initialNumToRender={10} keyExtractor={(value, index) =>
        (nameFlatProduct ?? 'Product') + index} ListHeaderComponentStyle={{ flexDirection: 'column' }} scrollEnabled={true}
        renderItem={(value) => <View style={{ height: 'auto', marginTop: noMarginTop != true && numberOfColumn == 2 ? 3 : undefined, }}>
            {(numberOfColumn == 2 ? value.item.item : value.item) && <RenderProduct {...props}
                item={numberOfColumn == 2 ? value.item.item : value.item} />}
            {numberOfColumn == 2 && value.item.item2 && <RenderProduct {...props} item={value.item.item2} />}
        </View>} />;
};
///----------------------------------------------------------------------------------------------->>>> RenderProduct
export function RenderProduct(props) {
    const {
        custumNavigation, item, dispriceSize, getDataService, mode, navigation, nameSize, noNavigation, priceSize, radiusBox, onShow,
    } = props;
    const {
        discount, discount_tag, full_price, id_product, image, image_main, image_path, image_product, last_price, name, name_product,
        path_image_product, price, price_discount, type
    } = item;
    onShow && [
        console.log('///--------------------------------------------------------------------------------------------->>>> RenderProduct'),
        console.log(item)
    ];
    const uriImage = {
        uri: `${type == 'local' ? ip : finip}/${(path_image_product ?? image_path)}/${(image_product ?? image_main ?? image)}${
            type == 'local' ? '' : Platform.OS == 'android' ? '_.webp' : ''}`
    };
    var discounts;
    onShow && console.log(uriImage)
    discount && (discounts = discount.replace("%", ""));
    return <TouchableOpacity activeOpacity={1} onPress={() => noNavigation ? getDataService({ id_product, name }) :
        Navi({ goScreen: custumNavigation ?? 'DetailScreen', navigation, setData: { id_product: id_product } })}>
        <View style={[ItemCenter, mode == 'row4' ? BoxProduct5Box : mode == 'row3' ?
            BoxProduct1Box2 : mode == 'row3_new' || mode == 'row3_new2' ? BoxProduct1Box2new : mode == 'row3_2' ?
                BoxProduct4Box : mode == 'row3_all' ? BoxProduct2Box : mode == 'row2_all' ? BoxProduct3Box : mode == '5item' ?
                    Deal_Exclusive_Box : BoxProduct1Box, {
                borderRadius: radiusBox ?? 0,
                marginBottom: mode == 'row3_2' ? 4 : null,
            }]}>
            <View style={[ItemCenter, mode == 'row4' ? BoxProduct5ImageofLines : mode == 'row3_all' ?
                BoxProduct2ImageofLines : mode == 'row2_all' ? BoxProduct3ImageofLines : mode == '5item' ?
                    BoxProduct1ImageofLines2 : mode == 'row3_new2' ? { width: '100%' } : BoxProduct1ImageofLines
            ]}>
                <FastImage resizeMode={contain} source={LOADING_ICON} style={[BoxProduct2Image, {
                    borderTopLeftRadius: radiusBox ?? 0, borderTopRightRadius: radiusBox ?? 0,
                    marginVertical: mode == 'row3_new2' ? 0 : height * 0.015, width: mode == 'row3_new2' ? '100%' : '75%',
                    position: 'absolute',
                }]} />
                <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='contain'
                    source={uriImage} style={[BoxProduct2Image, {
                        backgroundColor: '#ffffffff', borderTopLeftRadius: radiusBox ?? 0,
                        borderTopRightRadius: radiusBox ?? 0, marginVertical: mode == 'row3_new2' ? 0 : height * 0.015,
                        width: mode == 'row3_new2' ? '100%' : '75%',
                    }]} />
            </View>
            <View style={{ height: 55, paddingHorizontal: 3, width: '100%', }}>
                <View style={[BoxProduct1NameofLines]}>
                    <Text numberOfLines={1} style={[FontFamilySemiBold, { fontSize: nameSize ?? 16, }]}>{name_product ?? name}</Text>
                </View>
                <View style={[BoxProduct1PriceofLines,]}>
                    <View style={[FlexRow, { paddingVertical: 2 }]}>
                        <NumberFormat decimalScale={0} displayType={'text'} fixedDecimalScale prefix={'฿'} renderText={value => <Text
                            numberOfLines={1} style={[BoxProduct1ImagePrice, FontFamilyBoldBold, { fontSize: priceSize ?? 14, }]}>
                            {value}</Text>} thousandSeparator={true} value={last_price ?? price_discount ?? full_price ?? price} />
                        {discount_tag ?
                            <View style={[Box_On_sale, { borderRadius: 10 }]}>
                                <Text numberOfLines={1} style={[FontFamilyBold, FontSize8, { color: '#FFFFFF' }]}>{`-${discount_tag}`}</Text>
                            </View> : discount > 0 && <NumberFormat displayType={'text'} renderText={value => value && <View
                                style={[Box_On_sale, { borderRadius: 10 }]}>
                                <Text numberOfLines={1} style={[FontFamilyBold, FontSize8, { color: '#FFFFFF' }]}>{`-${value}`}</Text>
                            </View>} suffix={'%'} thousandSeparator={true} value={discount && discount} />}
                    </View>
                    {discount && <NumberFormat decimalScale={0} displayType={'text'} fixedDecimalScale prefix={'฿'} renderText={value =>
                        <Text numberOfLines={1} style={[BoxProduct1ImagePriceThrough, FontFamilyText,
                            { fontSize: dispriceSize ?? 14, marginTop: -4, }]}>{value}</Text>} thousandSeparator={true} value={price} />}
                </View>
            </View>
        </View>
    </TouchableOpacity>;
};
///----------------------------------------------------------------------------------------------->>>> RenderSubStore
export function RenderSubStore(props) {
    const { item } = props;
    const uriStore = { uri: `${finip}/${item.image_path}/${item.image}` };
    return <TouchableOpacity activeOpacity={1} style={FlexRow}>
        <View style={[CategoryProductStoreBox]}>
            <Image resizeMethod='resize' resizeMode='cover' source={uriStore} style={CategoryProductStoreImage} />
        </View>
    </TouchableOpacity>;
};
///----------------------------------------------------------------------------------------------->>>> FeedBox
export class FeedBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeFeed: false };
    };
    tick() { const { activeFeed } = this.state; this.setState({ activeFeed: false }); };
    componentWillUnmount() { clearInterval(this.intervalID); };
    onShare = async () => {
        try {
            const result = await Share.share({ message: `หลายคนคงจะเคยอยากรู้ วิธีดูเพชรแท้ ว่าจริงๆแล้วเพชรแท้ดูยังไง?\n${finip}`, });
            if (result.action === Share.sharedAction) {
                if (result.activityType) { } else { };
            } else if (result.action === Share.dismissedAction) { };
        } catch (error) { alert(error.message); };
    };
    setStateButton_Like_heart = () => { const { like, } = this.state; this.setState({ like: !like, activeFeed: true }); };
    actionOption = (selected, id_store, id_feed) => {
        const { navigation, userOwner } = this.props;
        userOwner && selected == 0 && Navi({
            goScreen: 'Post_Feed', navigation,
            setData: { selectedIndex: 1, id_store, id_feed, actionPost: 'edit', getDataSource: this.getDataSource.bind(this) },
        });
    };
    getDataSource = (activeRef) => { const { getDataSource } = this.props; getDataSource(activeRef); };
    get FeedBoxRender() {
        const { atStore, dataService, Follow, Header, navigation, nodata, postpath, prepath, typeip, userOwner, } = this.props;
        const { detail, id_store, image, image_path, p_id_store, store_image, store_name, store_path, } = dataService;
        const { like } = this.state;
        const LOGO_ICON = { height: 40, width: 40, borderRadius: 20, marginRight: 10, padding: 5 };
        const Styles1 = { container: { alignItems: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingHorizontal: 25, } };
        const uriLogo = { uri: `${ip}/MySQL/uploads/Icon_shareBox/iconlogo.png`, };
        const uriLogoFace = { uri: `${ip}/MySQL/uploads/Icon_shareBox/facebook.jpg`, };
        const uriLogoLine = { uri: `${ip}/MySQL/uploads/Icon_shareBox/line.png`, };
        const uriLogoIg = { uri: `${ip}/MySQL/uploads/Icon_shareBox/Ig.png`, };
        const uriLogoTw = { uri: `${ip}/MySQL/uploads/Icon_shareBox/Tw.png`, };
        // const options = userOwner ? ['แก้ไข', 'ลบ'] : ['รายงานความไม่เหมาะสม']
        const uriPost = { uri: `${finip}/${image_path}/${image}` };
        const uriStore = { uri: `${finip}/${store_path}/${store_image}`, };
        return <>
            <BottomSheet customStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingHorizontal: 25, } }}
                height={230} ref={ref => { this.Setting_Sheet = ref; }}>
                <View>
                    <TouchableOpacity style={[FlexRow, { marginTop: 10 }]}>
                        <IconMaterialCommunityIcons name='bookmark-outline' size={25} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={[FontFamilyText, FontSize5]}>บันทึกโพสต์</Text>
                            <Text style={[FontFamilyText, FontSize7]}>เพิ่มสิ่งนี้ลงในรายการที่บันทึกไว้ของคุณ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[FlexRow, { marginTop: 10 }]}>
                        <IconAntDesign name='warning' size={25} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={[FontFamilyText, FontSize5]}>รายงานโพสต์</Text>
                            <Text style={[FontFamilyText, FontSize7]}>ฉันกังวลเกี่ยวกับโพสต์นี้</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[FlexRow, { marginTop: 10 }]}>
                        <IconFontAwesome name='bell-o' size={25} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={[FontFamilyText, FontSize5]}>การแจ้งเตือน</Text>
                            <Text style={[FontFamilyText, FontSize7]}>เปิดการแจ้งเตือนสำหรับโพสต์นี้</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[FlexRow, { marginTop: 10 }]}>
                        <IconEntypo name='link' size={25} />
                        <Text style={[FontFamilyText, FontSize5, { marginLeft: 20 }]}>คัดลอกลิงก์</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
            <BottomSheet customStyles={Styles1} duration={250} height={280} ref={ref => { this.share_Feed = ref; }}>
                <Text style={[FontFamilyText, FontSize4]}>ตัวเลือกการแชร์</Text>
                <View style={{ width: '95%' }}>
                    <View>
                        <TouchableOpacity onPress={() => {
                            Navi({ goScreen: 'Post_Feed', navigation, setData: { selectedIndex: 24, }, });
                            this.share_Feed.close();
                        }} style={[FlexRow, { alignItems: 'center' }]}>
                            <FastImage resizeMode={cover} style={LOGO_ICON} source={uriLogo} />
                            <Text style={[FontFamilyText, FontSize5]}>FIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[FlexRow, { alignItems: 'center' }]}>
                            <FastImage resizeMode={cover} style={LOGO_ICON} source={uriLogoFace} />
                            <Text>Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[FlexRow, { alignItems: 'center' }]}>
                            <FastImage resizeMode={cover} style={LOGO_ICON} source={uriLogoLine} />
                            <Text>Line</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[FlexRow, { alignItems: 'center' }]}>
                            <FastImage resizeMode={cover} style={LOGO_ICON} source={uriLogoIg} />
                            <Text>instagram</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[FlexRow, { alignItems: 'center' }]}>
                            <FastImage resizeMode={cover} style={LOGO_ICON} source={uriLogoTw} />
                            <Text>twitter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[FlexRow, { alignItems: 'center' }]}>
                            <IconEntypo name='link' size={25} style={LOGO_ICON} />
                            <Text style={[FontFamilyText, FontSize5]}>คัดลอกลิงค์</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheet>
            <View style={BoxProduct4Box}>
                {Header && <View style={BoxProduct4PlusHeader}>
                    <TouchableOpacity onPress={() => atStore ? undefined :
                        Navi({ goScreen: 'StoreScreen', navigation, setData: { id_store: id_store ?? p_id_store }, })}>
                        <View style={FlexRow}>
                            <View style={[{ backgroundColor: store_image ? '#FFF' : '#ECECEC' }, BoxProduct4PlusImage]}>
                                <FastImage source={store_image ? uriStore : LOADING_ICON}
                                    style={[store_image ? null : LOADING_ICON_STYLE, BoxProduct4PlusImage]} />
                            </View>
                            <Text style={[BoxProduct4PlusImageText, FontFamilyBold, FontSize5]}>{store_name}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={BoxProduct4PlusButtonBox}>
                        {Follow ? null : <TouchableOpacity onPress={() => undefined}>
                            <View style={BoxProduct4PlusButtonFollow}>
                                <Text style={[BoxProduct4PlusButtonFollowText, FontFamilyText, FontSize6]}>ติดตาม</Text>
                            </View>
                        </TouchableOpacity>}
                        <TouchableOpacity activeOpacity={1} onPress={() => { this.Setting_Sheet.open(); }}>
                            <IconEntypo name='dots-three-vertical' size={25} />
                        </TouchableOpacity>
                        {/* <ModalDropdown
                                options={options}
                                onSelect={(selected) => { this.actionOption(selected, dataService.id_store, dataService.id_feed) }}
                                dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}
                                dropdownStyle={{ paddingHorizontal: 10, height: 44, borderRadius: 5 }}>
                                <IconEntypo name='dots-three-vertical' size={25} />
                            </ModalDropdown> */}
                    </View>
                </View>}
                <View>
                    {nodata || image ? <View style={[ItemCenter, { backgroundColor: store_image ? '#FFF' : '#ECECEC', width: '100%' }]}>
                        <FastImage resizeMode={contain} source={image ? uriPost : LOADING_ICON} style={BoxProduct4Image} />
                    </View> : null}
                    <View style={BoxProduct4ComBox}>
                        <Text style={[FontFamilyText, FontSize7]}>{!nodata ? detail : ' '}</Text>
                        <Text style={[FontFamilyText, FontSize7, { color: mainColor }]}>{!nodata ? 'ที่สุดสำหรับคุณ' : ' '}</Text>
                        {/* <View style={FlexRow}>
                                <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { color: '#9F9C9C' }]}>
                                    200 การเข้าชม</Text>
                                <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { color: '#9F9C9C' }]}>
                                    เมื่อ 3 วันที่ผ่านมา</Text>
                            </View> */}
                    </View>
                    <View style={[BoxProduct4ComBox2]}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.setStateButton_Like_heart()} style={BoxProduct4ComBoxIcon}>
                            <IconFontAwesome name={like ? 'heart' : 'heart-o'} size={20} style={{ color: like ? '#ff0066' : '#111111', }}>
                                <Text style={[FontFamilyText, FontSize5, BoxProduct4ComBoxIconText,]}>ถูกใจ</Text>
                            </IconFontAwesome>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => /*this.props.activeModalize(true)*/
                            Navi({ goScreen: 'Post_Feed', navigation, setData: { selectedIndex: 3 }, })}>
                            <View style={BoxProduct4ComBoxIcon}>
                                <IconFontAwesome5 name='comment-dots' size={20} />
                                <Text style={[FontFamilyText, FontSize6, BoxProduct4ComBoxIconText,]}>แสดงความคิดเห็น</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.share_Feed.open()} style={BoxProduct4ComBoxIcon}>
                            <IconEntypo name='share' size={20} />
                            <Text style={[FontFamilyText, FontSize6, BoxProduct4ComBoxIconText,]}>แชร์</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>;
    };
    render() { return this.FeedBoxRender; };
};
///----------------------------------------------------------------------------------------------->>>> LoadingScreen
export class LoadingScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = { modalVisible: true, };
    };
    setModalVisible = (visible) => { this.setState({ modalVisible: visible }); };
    render() {
        const { modalVisible } = this.state;
        return <Modal animationType="fade" onRequestClose={this.setModalVisible.bind(this, !this.state.modalVisible)} transparent={true}
            visible={modalVisible}>
            <View style={[ItemCenter, { height, width }]}>
                <View style={{ backgroundColor: '#555555', height, opacity: 0.5, position: 'absolute', width, }}></View>
                <View style={[ItemCenterVertical, { backgroundColor: '#ECECEC', borderRadius: 8, height: 80, width: 80, }]}>
                    <ActivityIndicator style={ItemCenterVertical} color='#1A3263' size='large' />
                </View>
            </View>
        </Modal>;
    };
};
///----------------------------------------------------------------------------------------------->>>> BrowerScreen
export function BrowerScreen(props) {
    const { url } = props;
    return <View style={{ flex: 1 }}>
        <WebView source={{ uri: url }} style={{ flex: 1 }} />
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> SlideTab2
export class SlideTab2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filter: {}, };
    };
    setStateSliderVisible = () => { const { setStateSliderVisible } = this.props; setStateSliderVisible(false); };
    filterValue = (event, type) => {
        const { filter } = this.state;
        type == 'tab' ? [
            filter.selectedIndex = event.selectedIndex ? event.selectedIndex : '',
            filter.listIndex = event.listIndex != undefined ? event.listIndex : '',
        ] : type == 'price' && [
            filter.minvalue = event.minvalue ? event.minvalue : '',
            filter.maxvalue = event.maxvalue ? event.maxvalue : '',
        ];
        this.setState({ filter });
    };
    render() {
        const { data, filterValue, sliderVisible } = this.props;
        const { filter } = this.state;
        return <SlidingView changeVisibilityCallback={this.setStateSliderVisible.bind(this)} componentVisible={sliderVisible}
            containerStyle={{ alignContent: 'stretch', backgroundColor: null, justifyContent: 'center', width: '100%' }} disableDrag
            position="right">
            <View style={FlexRow}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.setStateSliderVisible()}>
                    <View style={BackgroundLeft} />
                </TouchableOpacity>
                <View style={[BackgroundRight, ItemCenter, SafeAreaViewNB]}>
                    <View>
                        <ScrollView>
                            {data && data.map((item, index) => <SlideTab filterValue={this.filterValue.bind(this)} item={item} key={index}
                                listIndex={index} />)}
                            <PricesSlide filterValue={this.filterValue.bind(this)} />
                        </ScrollView>
                        <View style={[FlexRow, { height: 70 }]}>
                            <View style={[BoxReset, ItemCenter,]}>
                                <Text style={[FontFamilyText, FontSize6, ItemCenterVertical, { color: mainColor }]}>รีเซ็ต</Text>
                            </View>
                            <TouchableOpacity onPress={() => { filterValue(filter) }}>
                                <View style={[BoxReset, ItemCenter, { backgroundColor: mainColor }]}>
                                    <Text style={[FontFamilyText, FontSize6, ItemCenterVertical, { color: '#fff' }]}>เสร็จสิ้น</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SlidingView>;
    };
};
///----------------------------------------------------------------------------------------------->>>> SlideTab
export class SlideTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabBar: true,
            activeText: false,
            filter: {},
            selectedIndex: 0,
        };
    };
    updateIndex = (value) => {
        const { filterValue, listIndex } = this.props;
        const { filter } = this.state;
        filter.selectedIndex = value.selectedIndex;
        filter.listIndex = listIndex;
        filterValue(filter, 'tab');
        this.setState({ activeTabBar: false, selectedIndex: value.selectedIndex });
    };
    setStateActiveText = (activeText) => { this.setState({ activeTabBar: true, activeText }); };
    dataItem(item) {
        const { activeTabBar, selectedIndex } = this.state;
        return <View style={[FlexRow, { flexWrap: 'wrap', width: '100%', }]}>
            <TabBar item={item} noLimit numberBox radiusBox={4} sendData={this.updateIndex.bind(this)}
                SetValue={activeTabBar ? selectedIndex != null ? selectedIndex : -1 : undefined} type='box' />
        </View>;
    };
    dataContainer(value) {
        const { activeText } = this.state;
        const VStyles1 = { width: '100%', height: activeText ? 85 + ((Math.ceil(value.subtitle.length / 2) - 1) * 35) : 85 + (35 * 1), };
        const VStyles2 = { backgroundColor: '#fff', marginTop: 8, borderBottomColor: '#DCDCDC', borderBottomWidth: 3, width: '80%', };
        return <View>
            <Text style={[FontFamilyBold, FontSize5, ItemCenterVertical, { marginLeft: 8, marginTop: 8, }]}>{value.title}</Text>
            <View style={SafeAreaViewNB}>
                <View style={{ width: '100%' }}>
                    <View style={VStyles1}>
                        {activeText ?
                            this.dataItem(value.subtitle) : <ScrollView scrollEnabled={false}>
                                {this.dataItem(value.subtitle)}
                            </ScrollView>}
                        {value.subtitle.length > 4 && <TouchableOpacity onPress={() => this.setStateActiveText(!activeText)}>
                            <View style={[Detail_Box, ItemCenter, { borderTopWidth: null, }]}>
                                <Text style={[Detail_Text_A, ItemCenterVertical, FontFamilyBold]}>{activeText ? 'ย่อ' : 'ดูเพิ่มเติม'}</Text>
                                <IconEntypo color={mainColor} name={activeText ? 'chevron-up' : 'chevron-down'} size={25} />
                            </View>
                        </TouchableOpacity>}
                        <View style={[ItemCenter, { width: '100%' }]}>
                            <View style={VStyles2} />
                        </View>
                    </View>
                </View>
            </View>
        </View>;
    };
    render() {
        const { item } = this.props;
        return this.dataContainer(item);
    };
};
///----------------------------------------------------------------------------------------------->>>> PricesSlide
export class PricesSlide extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filter: {}, };
    };
    setStateMin = (minvalue) => {
        const { filterValue } = this.props;
        const { filter } = this.state;
        filter.minvalue = minvalue;
        filterValue(filter, 'price');
    };
    setStateMax = (maxvalue) => {
        const { filterValue } = this.props;
        const { filter } = this.state;
        filter.maxvalue = maxvalue;
        filterValue(filter, 'price');
    };
    render() {
        return <View>
            <Text style={[FontFamilyBold, FontSize5, ItemCenterVertical, { marginLeft: 8, marginTop: 8, }]}>ราคา</Text>
            <View style={SafeAreaViewNB}>
                <View style={{ width: '100%' }}>
                    <View style={[ItemCenter, FlexRow, { height: 80, width: '100%', }]}>
                        <TextInput onChangeText={this.setStateMin.bind(this)} placeholder='ต่ำสุด'
                            style={[FontCenter, FontFamilyText, FontSize6, ItemCenterVertical, maxMinValue]} />
                        <Text style={[ItemCenterVertical, { fontSize: 28, marginHorizontal: 8 }]}>-</Text>
                        <TextInput onChangeText={this.setStateMax.bind(this)} placeholder='สูงสุด'
                            style={[FontCenter, FontFamilyText, FontSize6, ItemCenterVertical, maxMinValue]} />
                    </View>
                </View>
            </View>
        </View>;
    };
};
///----------------------------------------------------------------------------------------------->>>>