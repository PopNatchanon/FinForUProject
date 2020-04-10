///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import { CheckBox } from 'react-native-elements';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import ImagePicker from 'react-native-image-crop-picker';
import CookieManager from '@react-native-community/cookies';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
import { PopularProduct } from '../StoreScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main

export default class Customer_Tax_Invoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation, } = this.props
        const { currentUser } = this.state
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            currentUser !== nextState.currentUser
        ) {
            return true
        }
        return false
    }
    componentDidMount() {
        this.getDataAsync()
    }
    getDataAsync = async () => {
        const currentUser = await AsyncStorage.getItem('@MyKey')
        this.setState({ currentUser: JSON.parse(currentUser) })
    }
    PathList() {
        const { navigation, } = this.props
        const { currentUser } = this.state
        const selectedIndex = this.props.navigation.getParam('selectedIndex')
        switch (selectedIndex) {
            case 0:
                return (
                    <View style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ที่อยู่ในใบกำกับภาษี' />
                        <Tax_Invoice navigation={navigation} currentUser={currentUser} />
                    </View>
                )
            case 1:
                return (
                    <View style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ที่อยู่ในใบกำกับภาษี' />
                    </View>
                )

        }
    }
    render() {
        const { navigation, } = this.props
        return (
            <SafeAreaView style={[stylesMain.SafeAreaView]}>
                {this.PathList()}
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Tax_Invoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeReset: true,
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { currentUser, navigation } = this.props
        const { activeReset, dataService, keycokie } = this.state
        if (
            ////>nextProps
            currentUser !== nextProps.currentUser || navigation !== nextProps.navigation ||
            ////>nextState
            activeReset !== nextState.activeReset || dataService !== nextState.dataService || keycokie !== nextState.keycokie
        ) {
            return true
        }
        return false
    }
    componentDidMount() {
        CookieManager.get(finip + '/auth/login_customer')
            .then((res) => {
                var keycokie = res.token
                this.setState({ keycokie })
            });
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    getData = (dataService) => {
        this.setState({ dataService, activeReset: false })
    }
    getData2 = (dataService2) => {
        this.setState({ dataService2, activeReset: true })
    }
    render() {
        const { currentUser, navigation } = this.props
        const { activeReset, dataService, keycokie } = this.state
        const no_invoice = navigation.getParam('no_invoice')
        const type = navigation.getParam('type')
        var uri = finip + '/bill/bill_list';
        var dataBody = {
            id_customer: currentUser && currentUser.id_customer,
            no_invoice: no_invoice,
        };

        return (
            <View style={{ flex: 1, height: '100%' }}>
                {
                    currentUser && keycokie && currentUser.id_customer && activeReset == true &&
                    <GetServices uriPointer={uri} dataBody={dataBody} Authorization={keycokie}
                        showConsole={'zzz'}
                        getDataSource={this.getData.bind(this)} key={'zzz'} />
                }
                <ScrollView style={{ height: 1000 }}>
                    {
                        dataService && dataService.list_address && activeReset == false &&
                        dataService.list_address.map((value, index) => {
                            return <Address_Customar dataService={value} index={index} navigation={navigation} type={type} />
                        })
                    }
                </ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'Customer_account', { updateData2: this.getData2.bind(this), })}>
                        <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>เพิ่มที่อยู่</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

