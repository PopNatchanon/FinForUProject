///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, Share, TouchableOpacity,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
import Carousel, { Pagination } from 'react-native-snap-carousel';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from './MainScreen';
import { GetServices, TabBar, Toolbar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class NewsScreen extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
        this.getData = this.getData.bind(this)
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { selectedIndex } = this.state
        const { navigation } = this.props
        if (selectedIndex !== nextState.selectedIndex || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    getData = (val) => {
        this._isMounted = true;
        if (this._isMounted) {
            this.setState({
                selectedIndex: val
            });
        }
    }
    render() {
        const { selectedIndex } = this.state
        const { navigation } = this.props
        var titleValue
        selectedIndex == 0 ? titleValue = 'NEWS' : titleValue = 'BLOG'
        return (
            <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
                <AppBar1 titleHead={titleValue} menuBar />
                <MenuBar sendText={this.getData} />
                <ScrollView>
                    <Button_Bar selectedIndex={selectedIndex} />
                </ScrollView>
                <Toolbar navigation={navigation} />
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> MenuBar
export class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.getData = this.getData.bind(this)
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { sendText } = this.props
        if (sendText !== nextProps.sendText) {
            return true
        }
        return false
    }
    getData = (val) => {
        this.props.sendText(val);
    }
    render() {
        const item = [{
            name: 'NEWS'
        }, {
            name: 'BLOG'
        }];
        return (
            <View>
                <View>
                    <TabBar
                        sendData={this.getData}
                        item={item}
                        noSpace
                        setVertical={2}
                        widthBox={100}
                        spaceColor='#0A55A6'
                        activeColor='#fff'
                        fontColor='#fff'
                    />
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export class Button_Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { selectedIndex } = this.props
        if (selectedIndex !== nextProps.selectedIndex) {
            return true
        }
        return false
    }
    get ViewSide() {
        const { selectedIndex } = this.props
        switch (selectedIndex) {
            case 0:
                return (
                    <SafeAreaView>
                        <Blog Body='News' />
                    </SafeAreaView>
                );
            case 1:
                return (
                    < SafeAreaView>
                        <Blog Body='Blog' />
                    </SafeAreaView>
                );
            default:
        }
    }
    render() {
        return (
            <View>
                {this.ViewSide}
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Blog
export class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { Body } = this.props
        if (Body !== nextProps.Body) {
            return true
        }
        return false
    }
    onShare = async () => {
        try {
            const result = await Share.share({
                message:'หลายคนคงจะเคยอยากรู้ วิธีดูเพชรแท้ ว่าจริงๆแล้วเพชรแท้ดูยังไง?\n' + finip,

            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }
    render() {
        return (
            <View style={stylesStore.header_News}>
                <View style={stylesStore.header_Box}>
                    <FastImage
                        style={stylesStore.header_image}
                        source={{ uri: ip + '/MySQL/uploads/page_News/page_J_News.jpg' }}
                    />
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <Text numberOfLines={2} style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { width: '80%' }]}>
                            หลายคนคงจะเคยอยากรู้ วิธีดูเพชรแท้ ว่าจริงๆแล้วเพชรแท้ดูยังไง?</Text>
                        <View>
                            <View style={stylesStore.header_icon_Box}>
                                <IconEntypo style={stylesStore.header_icon} name='eye' size={25} />
                                <TouchableOpacity onPress={this.onShare} >
                                    <IconEntypo style={stylesStore.header_icon} name='share' size={25} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={stylesStore.body_Box}>
                    <View style={stylesStore.body_Box_A}>
                        <FastImage
                            style={stylesStore.body_image}
                            source={{ uri: ip + '/MySQL/uploads/page_News/วิธีดูเข็มและรองเท้แตะกุชชี่ของแท้-660x330.jpg' }}>
                        </FastImage>
                        <Text numberOfLines={5} style={[stylesStore.body_Text, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                            วันนี้เราจะมาสอนวิธีการแยกเข็มขัดกุชชี่และรองเท้าแตะกุชชี่</Text>
                    </View>
                </View>
                <View style={stylesStore.body_Box}>
                    <View style={stylesStore.body_Box_A}>
                        <FastImage
                            style={stylesStore.body_image}
                            source={{ uri: ip + '/MySQL/uploads/page_News/page_J_News.jpg' }}>
                        </FastImage>
                        <Text numberOfLines={5} style={[stylesStore.body_Text, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                            หลายคนคงจะเคยอยากรู้วิธีดูเพชรแท้ว่าจริงๆแล้วเพชรแท้ดูยังไง?</Text>
                    </View>
                </View>
                <View style={stylesStore.body_Box}>
                    <View style={stylesStore.body_Box_A}>
                        <FastImage
                            style={stylesStore.body_image}
                            source={{ uri: ip + '/MySQL/uploads/page_News/Supreme.jpg' }}>
                        </FastImage>
                        <Text numberOfLines={5} style={[stylesStore.body_Text, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                            ถ้าพูดถึงแบรนด์ที่มาแรงและหลายคนก็ยังคงชื่อชอบอยู่ในช่วง 2 – 3 ปีที่ผ่านมานี้ก็ต้องแบรนด์ ‘Supreme’ นี่แหละค่ะ</Text>
                    </View>
                </View>
                <View style={stylesStore.body_Box}>
                    <View style={stylesStore.body_Box_A}>
                        <FastImage
                            style={stylesStore.body_image}
                            source={{ uri: ip + '/MySQL/uploads/page_News/วิธีดูเข็มและรองเท้แตะกุชชี่ของแท้-660x330.jpg' }}>
                        </FastImage>
                        <Text numberOfLines={5} style={[stylesStore.body_Text, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                            วันนี้เราจะมาสอนวิธีการแยกเข็มขัดกุชชี่และรองเท้าแตะกุชชี่</Text>
                    </View>
                </View>
            </View>
        )
    }
}

///----------------------------------------------------------------------------------------------->>>>

