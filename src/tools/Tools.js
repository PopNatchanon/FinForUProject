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
        this.getDataasync()
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
                        <Text style={{ fontSize: 13 }}>Home</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('FeedScreen')} >
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="tagso" size={25} />
                        <Text style={{ fontSize: 13 }}> Feed</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('NewsScreen')} >
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="notification" size={25} />
                        <Text style={{ fontSize: 13 }}>News</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('BellScreen')} >
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="bells" size={25} />
                        <Text style={{ fontSize: 13 }}>เตือน</Text>
                    </View>
                </TouchableOpacity>
                {u_name == null ?
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('LoginScreen')} >
                        <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                            <IconAntDesign name="user" size={25} />
                            <Text style={{ fontSize: 13 }}>ฉัน</Text>
                        </View>
                    </TouchableOpacity> :
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('ProfileScreen')} >
                        <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                            <IconAntDesign name="user" size={25} />
                            <Text style={{ fontSize: 13 }}>
                                {
                                    u_name.length > 6 ?
                                        'บัญชีของ' + u_name.substring(0, 3) + '...' :
                                        'บัญชีของ' + u_name
                                }
                            </Text>
                        </View>
                    </TouchableOpacity>
                }
            </View >
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
    /*<TabBar
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
    // boxSpace='nospace'   
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
    />*/
    tab() {
        const { item, activeColor, activeWidth, type, radiusBox, activeFontColor, inactiveFontColor, inactiveColor, inactiveBoxColor, boxSpace, direction, alignBox, widthBox } = this.props;
        // console.log(this.props.radiusBox)
        const countItem = item.length;
        return item.map((item, index) => {
            // console.log(item.name, index, num)
            return (
                <TouchableOpacity onPress={() => { this.setState({ pathlist: index }), this.props.sendData(index); }} key={index}>
                    {
                        this.state.pathlist == index ?
                            <View style={{
                                width: type == 'box' ?
                                    boxSpace == 'nospace' ?
                                        null :
                                        width * (1 / countItem) :
                                    width * (1 / countItem),
                                alignContent: 'center',
                                alignItems: 'center',
                                borderBottomWidth: type == 'box' ?
                                    null :
                                    activeWidth ? activeWidth : 4,
                                borderBottomColor: type == 'box' ?
                                    null :
                                    activeColor ? activeColor : '#0A55A6',
                            }}>
                                <View style={
                                    type == 'box' ?
                                        {
                                            width:
                                                widthBox >= 0 ?
                                                    widthBox <= 100 ?
                                                        width * (1 / (countItem * (1 + ((100 - widthBox) / 100)))) :
                                                        width * (1 / (countItem * 1.2)) :
                                                    width * (1 / (countItem * 1.2)),
                                            padding: 6,
                                            borderLeftWidth: boxSpace == 'nospace' ? 0.5 : null,
                                            borderRightWidth: boxSpace == 'nospace' ? 0.5 : null,
                                            borderWidth: 1,
                                            borderColor: activeColor ? activeColor : '#0A55A6',
                                            backgroundColor: activeColor ? activeColor : '#0A55A6',
                                            // marginBottom: 8,
                                            alignContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: radiusBox ? radiusBox : 0,
                                        } :
                                        null
                                }>
                                    <Text style={{
                                        fontSize: 14,
                                        color: type == 'box' ?
                                            activeFontColor ? activeFontColor : 'white'
                                            :
                                            activeFontColor ? activeFontColor : 'black'
                                    }}>
                                        {item.name}
                                    </Text>
                                </View>
                            </View>
                            :
                            <View style={{
                                width: type == 'box' ?
                                    boxSpace == 'nospace' ?
                                        null :
                                        width * (1 / countItem) :
                                    width * (1 / countItem),
                                alignContent: 'center', alignItems: 'center'
                            }}>
                                <View style={
                                    type == 'box' ?
                                        {
                                            width:
                                                widthBox >= 0 ?
                                                    widthBox <= 100 ?
                                                        width * (1 / (countItem * (1 + ((100 - widthBox) / 100)))) :
                                                        width * (1 / (countItem * 1.2)) :
                                                    width * (1 / (countItem * 1.2)),
                                            padding: 6,
                                            borderLeftWidth: boxSpace == 'nospace' ? 0.5 : null,
                                            borderRightWidth: boxSpace == 'nospace' ? 0.5 : null,
                                            borderWidth: 1,
                                            backgroundColor: inactiveBoxColor ? inactiveBoxColor : null,
                                            borderColor: inactiveColor ? inactiveColor : 'black',
                                            // marginBottom: 8,
                                            alignContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: radiusBox ? radiusBox : 0,
                                        } :
                                        null
                                }>
                                    <Text style={{
                                        fontSize: 14,
                                        color: inactiveFontColor ? inactiveFontColor : 'black'
                                    }}>
                                        {item.name}
                                    </Text>
                                </View>
                            </View>
                    }
                </TouchableOpacity >
            )
        })
    }
    render() {
        const { item, fontStyles, activeColor, activeWidth, type, radiusBox, activeFontColor, inactiveColor, boxSpace, direction, alignBox } = this.props;
        return (
            <View style={
                type == 'box' ?
                    {
                        borderLeftWidth: boxSpace == 'nospace' ? 0.5 : null,
                        borderRightWidth: boxSpace == 'nospace' ? 0.5 : null,
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
                        borderWidth: 1,
                        borderColor: '#ECECEC',
                        flexDirection: direction == 'column' ? 'column' : 'row',
                        width,
                    }
            }>
                {this.tab()}
            </View >
        )
    }
}

