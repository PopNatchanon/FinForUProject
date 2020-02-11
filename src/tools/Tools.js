import React, { Component } from 'react';
import {
    Dimensions, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import stylesMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont'
import stylesTopic from '../../style/styleTopic';
export const { width, height } = Dimensions.get('window');
import AsyncStorage from '@react-native-community/async-storage';
///----------------------------------------------------------------------------------------------->>>>
export class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
        }
    }
    getDataasync = async () => {
        const currentUser = await AsyncStorage.getItem('@MyKey')
        this.setState({ currentUser: JSON.parse(currentUser) })
    }
    componentDidMount() {
        this.getDataasync()
    }
    render() {
        const { currentUser } = this.state;
        var u_name = null;
        if (currentUser != null) {
            u_name = currentUser.name;
        }
        return (
            <View style={stylesMain.Toolbar}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('MainScreen')} >
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign style={{ marginLeft: 5, }} name="home" size={25} />
                        <Text style={{ fontSize: 13, fontFamily: 'SukhumvitSet-Text' }}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('FeedScreen')} >
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="tagso" size={25} />
                        <Text style={{ fontSize: 13, fontFamily: 'SukhumvitSet-Text' }}> Feed</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('NewsScreen')} >
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="notification" size={25} />
                        <Text style={{ fontSize: 13, fontFamily: 'SukhumvitSet-Text' }}>News</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('BellScreen')} >
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="bells" size={25} />
                        <Text style={{ fontSize: 13, fontFamily: 'SukhumvitSet-Text' }}>เตือน</Text>
                    </View>
                </TouchableOpacity>
                {u_name == null ?
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('LoginScreen')} >
                        <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                            <IconAntDesign name="user" size={25} />
                            <Text style={{ fontSize: 13, fontFamily: 'SukhumvitSet-Text' }}>ฉัน</Text>
                        </View>
                    </TouchableOpacity> :
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('ProfileScreen')} >
                        <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                            <IconAntDesign name="user" size={25} />
                            <Text style={{ fontSize: 13, fontFamily: 'SukhumvitSet-Text' }}>
                                {
                                    u_name.length > 6 ?
                                        'บัญชีของ' + u_name.substring(0, 3) + '...' :
                                        'บัญชีของ' + u_name
                                }
                            </Text>
                        </View>
                    </TouchableOpacity>
                }
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathlist: 0,
            PassSetValue: 0,
        }
    }
    // setDataItem() {
    //     const { setData } = this.props
    //     if (setData.activeSetData < 1) {
    //         setData.activeSetData = setData.activeSetData + 1
    //     }
    // }
    /*
    // v0.6.28012020
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
    // fontColor='#fff'
    />*/
    tab() {
        const {
            item, activeColor, activeWidth, type, radiusBox, activeFontColor, inactiveFontColor, inactiveColor, inactiveBoxColor,
            noSpace, direction, alignBox, widthBox, spaceColor, fontColor, noLimit, limitBox, SetValue, fontSizeStyle, numberBox,
            NoSelectTab, tagBottom, numberOfLines
        } = this.props;
        const { PassSetValue } = this.state
        const countItem = item.length;
        PassSetValue < 1 ?
            SetValue ?
                (this.setState({ pathlist: SetValue, PassSetValue: PassSetValue + 1 }),
                    this.props.sendData(SetValue)) :
                null :
            null
        return item.map((item, index) => {
            return (
                <TouchableOpacity key={index} activeOpacity={
                    type == 'box' ?
                        0.2 :
                        1
                } onPress={() => {
                    NoSelectTab ?
                        (
                            this.state.pathlist == index ?
                                (
                                    this.setState({ pathlist: -1 }),
                                    this.props.sendData(-1)
                                ) :
                                (
                                    this.setState({ pathlist: index }),
                                    this.props.sendData(index)
                                )
                        ) :
                        (
                            this.setState({ pathlist: index }),
                            this.props.sendData(index)
                        );
                }}>
                    {
                        this.state.pathlist == index ?
                            <View style={{
                                width:
                                    type == 'box' ?
                                        noSpace ?
                                            null :
                                            noLimit ?
                                                numberBox ?
                                                    '100%' :
                                                    width * (1 / 4) :
                                                width * (1 / countItem) :
                                        noSpace ?
                                            widthBox ?
                                                widthBox :
                                                width * (1 / countItem) :
                                            noLimit ?
                                                width * (1 / 4.2) :
                                                limitBox ?
                                                    limitBox * (1 / countItem) :
                                                    width * (1 / countItem),
                                borderLeftWidth: type == 'tag' ? index == 0 ? null : 0.5 : null,
                                borderRightWidth: type == 'tag' ? index == countItem ? null : 0.5 : null,
                                alignContent: 'center',
                                alignItems: 'center',
                                borderBottomColor: type == 'box' ?
                                    null :
                                    activeColor ? activeColor : '#0A55A6',
                                borderBottomWidth: type == 'tag' ? null : type == 'box' ? null : 4,
                                paddingLeft: numberBox ? width * (1 / 60) : null,
                                paddingTop: numberBox ? 10 : null,
                            }}>
                                <View style={
                                    type == 'box' ?
                                        {
                                            width:
                                                noLimit ?
                                                    numberBox ?
                                                        width * (1 / 3) :
                                                        width * (1 / 4.2) :
                                                    widthBox >= 0 ?
                                                        widthBox <= 100 ?
                                                            width * (1 / (countItem * (1 + ((100 - widthBox) / 100)))) :
                                                            width * (1 / (countItem * 1.2)) :
                                                        width * (1 / (countItem * 1.2)),
                                            padding: 6,
                                            borderLeftWidth: noSpace ? 0.5 : null,
                                            borderRightWidth: noSpace ? 0.5 : null,
                                            borderWidth: 1,
                                            borderColor: activeColor ? activeColor : '#0A55A6',
                                            backgroundColor: activeColor ? activeColor : '#0A55A6',
                                            alignContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: radiusBox ? radiusBox : 0,
                                        } :
                                        null
                                }>
                                    <Text numberOfLines={numberOfLines} style={[stylesFont.FontFamilySemiBold, {
                                        fontSize: fontSizeStyle ? fontSizeStyle : 16,
                                        color: type == 'box' ?
                                            activeFontColor ? activeFontColor : fontColor ? fontColor : 'white' :
                                            activeFontColor ? activeFontColor : fontColor ? fontColor : 'black'
                                    }]}>
                                        {item.name}
                                    </Text>
                                </View>
                            </View> :
                            <View style={{
                                width:
                                    type == 'box' ?
                                        noSpace ?
                                            null :
                                            noLimit ?
                                                numberBox ?
                                                    '100%' :
                                                    width * (1 / 4) : width * (1 / countItem) :
                                        noSpace ?
                                            widthBox ? widthBox : width * (1 / countItem) :
                                            noLimit ?
                                                width * (1 / 4.2) :
                                                limitBox ?
                                                    limitBox * (1 / countItem) :
                                                    width * (1 / countItem),
                                borderLeftWidth: type == 'tag' ? index == 0 ? null : 0.5 : null,
                                borderRightWidth: type == 'tag' ? index == countItem ? null : 0.5 : null,
                                alignContent: 'center', alignItems: 'center',
                                paddingLeft: numberBox ? width * (1 / 60) : null,
                                paddingTop: numberBox ? 10 : null,
                            }}>
                                <View style={
                                    type == 'box' ?
                                        {
                                            width:
                                                noLimit ?
                                                    numberBox ?
                                                        width * (1 / 3) :
                                                        width * (1 / 4.2) :
                                                    widthBox >= 0 ?
                                                        widthBox <= 100 ?
                                                            width * (1 / (countItem * (1 + ((100 - widthBox) / 100)))) :
                                                            width * (1 / (countItem * 1.2)) :
                                                        width * (1 / (countItem * 1.2)),
                                            padding: 6,
                                            borderLeftWidth: noSpace ? 0.5 : null,
                                            borderRightWidth: noSpace ? 0.5 : null,
                                            borderWidth: 1,
                                            backgroundColor: inactiveBoxColor ? inactiveBoxColor : null,
                                            borderColor: inactiveColor ? inactiveColor : 'black',
                                            alignContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: radiusBox ? radiusBox : 0,
                                        } :
                                        null
                                }>
                                    <Text numberOfLines={numberOfLines} style={[stylesFont.FontFamilySemiBold, {
                                        fontSize: fontSizeStyle ? fontSizeStyle : 16,
                                        color: inactiveFontColor ? inactiveFontColor : fontColor ? fontColor : 'black'
                                    }]}>
                                        {item.name}
                                    </Text>
                                </View>
                            </View>
                    }
                    {
                        item.subname ?
                            <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, {
                                    borderBottomColor: tagBottom ? this.state.pathlist == index ? tagBottom : '#fff' : null,
                                    borderBottomWidth: tagBottom ? 4 : null,
                                    width: '90%', textAlign: 'center'
                                }]}>
                                    {item.subname}
                                </Text>
                            </View> :
                            null
                    }
                </TouchableOpacity>
            )
        })
    }
    render() {
        const {
            item, activeColor, activeWidth, type, radiusBox, activeFontColor, inactiveFontColor, inactiveColor, inactiveBoxColor,
            noSpace, direction, alignBox, widthBox, spaceColor, fontColor, noLimit, numberBox, noMarginIop
        } = this.props;
        return (
            numberBox ?
                (
                    this.tab()
                ) :
                (
                    <View style={
                        type == 'box' ?
                            {
                                borderLeftWidth: noSpace ? 0.5 : null,
                                borderRightWidth: noSpace ? 0.5 : null,
                                flexDirection: direction == 'column' ? 'column' : 'row',
                                justifyContent:
                                    alignBox == 'center' ?
                                        'center' :
                                        alignBox == 'right' ?
                                            'flex-end' :
                                            'flex-start'
                            } :
                            {
                                paddingTop: noMarginIop ? null : 10,
                                borderWidth: type == 'tag' ? null : noSpace ? null : 1,
                                backgroundColor: spaceColor ? spaceColor : null,
                                borderColor: type == 'tag' ? null : spaceColor ? spaceColor : '#ECECEC',
                                flexDirection: direction == 'column' ? 'column' : 'row',
                                width: noLimit ? null : '100%',
                            }
                    }>
                        {this.tab()}
                    </View>
                )
        )
    }
}

export class GetServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        };
    }
    getDataSource = async () => {
        const { dataBody, uriPointer } = this.props
        fetch(uriPointer, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataBody),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.props.getDataSource(responseJson);
            })
            .catch((error) => {
                console.error(error);
            })
    }
    componentDidMount() {
        this.getDataSource()
    }
    render() {
        return (<View></View>)
    }
}