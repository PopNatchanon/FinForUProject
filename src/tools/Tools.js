import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../../style/StylesMainScreen';
export const { width, height } = Dimensions.get('window');
import AsyncStorage from '@react-native-community/async-storage';
import DeviceInfo from 'react-native-device-info';

///--------------------------------------------------------------------------///

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
        // console.log('tool:')
        // console.log(this.state.currentUser)
    }
    componentDidMount() {
        this.getDataasync()//
        // console.log('Brand')
        // console.log(DeviceInfo.getBrand())
        // console.log('Device')
        // console.log(DeviceInfo.getDeviceId())
        // console.log('DeviceType')
        // console.log(DeviceInfo.getDeviceType())
    }
    render() {
        const { currentUser } = this.state;
        var u_name = null;
        if (currentUser != null) {
            u_name = currentUser.name;
        }
        // console.log(u_name);
        return (
            <View style={styles.Toolbar}>
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

export class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathlist: 0,
        }
    }
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
            noSpace, direction, alignBox, widthBox, spaceColor, fontColor, noLimit, fontSizeStyle
        } = this.props;
        // console.log(this.props.radiusBox)
        const countItem = item.length;
        return item.map((item, index) => {
            // console.log(item.name, index, num)
            return (
                <View key={index}>
                    <TouchableOpacity activeOpacity={
                        type == 'box' ?
                            0.2 :
                            1
                    } onPress={() => { this.setState({ pathlist: index }), this.props.sendData(index); }}>
                        {
                            this.state.pathlist == index ?
                                <View style={{
                                    width:
                                        type == 'box' ?
                                            noSpace ?
                                                null :
                                                noLimit ?
                                                    width * (1 / 4) :
                                                    width * (1 / countItem) :
                                            noSpace ?
                                                widthBox ?
                                                    widthBox :
                                                    width * (1 / countItem) :
                                                noLimit ?
                                                    width * (1 / 4.2) :
                                                    width * (1 / countItem),
                                    borderLeftWidth: type == 'tag' ? index == 0 ? null : 0.5 : null,
                                    borderRightWidth: type == 'tag' ? index == countItem ? null : 0.5 : null,
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    borderBottomColor: type == 'box' ?
                                        null :
                                        activeColor ? activeColor : '#0A55A6',
                                    borderBottomWidth: type == 'tag' ? null : type == 'box' ? null : 4
                                }}>
                                    <View style={
                                        type == 'box' ?
                                            {
                                                width:
                                                    noLimit ?
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
                                        <Text style={[{
                                            fontSize: fontSizeStyle ? fontSizeStyle : 14,
                                            fontFamily: 'SukhumvitSet-Text',
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
                                                    width * (1 / 4) : width * (1 / countItem) :
                                            noSpace ?
                                                widthBox ? widthBox : width * (1 / countItem) :
                                                noLimit ?
                                                    width * (1 / 4.2) :
                                                    width * (1 / countItem),
                                    borderLeftWidth: type == 'tag' ? index == 0 ? null : 0.5 : null,
                                    borderRightWidth: type == 'tag' ? index == countItem ? null : 0.5 : null,
                                    alignContent: 'center', alignItems: 'center'
                                }}>
                                    <View style={
                                        type == 'box' ?
                                            {
                                                width:
                                                    noLimit ?
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
                                        <Text style={[{
                                            fontSize: fontSizeStyle ? fontSizeStyle : 14,
                                            fontFamily: 'SukhumvitSet-Text',
                                            color: inactiveFontColor ? inactiveFontColor : fontColor ? fontColor : 'black'
                                        }]}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </View>
                        }
                    </TouchableOpacity>
                </View>
            )
        })
    }
    render() {
        const {
            item, activeColor, activeWidth, type, radiusBox, activeFontColor, inactiveFontColor, inactiveColor, inactiveBoxColor,
            noSpace, direction, alignBox, widthBox, spaceColor, fontColor, noLimit
        } = this.props;
        return (
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
                        paddingTop: 10,
                        borderWidth: type == 'tag' ? null : noSpace ? null : 1,
                        backgroundColor: spaceColor ? spaceColor : null,
                        borderColor: type == 'tag' ? null : spaceColor ? spaceColor : '#ECECEC',
                        flexDirection: direction == 'column' ? 'column' : 'row',
                        width: noLimit ? null : width,
                    }
            }>
                {this.tab()}
            </View>
        )
    }
}

