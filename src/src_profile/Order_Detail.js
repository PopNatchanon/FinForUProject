///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage'
import CookieManager from '@react-native-community/cookies';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
import { GetServices, LoadingScreen } from '../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Order_Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSelectedIndex: true
        };
    }
    getDataAsync = async () => {
        const currentUser = await AsyncStorage.getItem('@MyKey')
        this.setState({ currentUser: JSON.parse(currentUser) })
    }
    componentDidMount() {
        this.getDataAsync()
        CookieManager.get(finip + '/auth/login_customer')
            .then((res) => {
                var keycokie = res.token
                this.setState({ keycokie })
            });
    }
    getData = (dataService) => {
        this.setState({ activeSelectedIndex: false, dataService })
    }
    render() {
        const { navigation } = this.props
        const { activeSelectedIndex, currentUser, dataService, keycokie } = this.state
        const id_cartdetail = navigation.getParam('id_cartdetail')
        const insert_date = navigation.getParam('insert_date')
        const no_invoice = navigation.getParam('no_invoice')
        var uri = finip + '/purchase_data/mobile_tranport';
        var dataBody = {
            id_customer: currentUser && currentUser.id_customer,
            id_cartdetail,
        };
        activeSelectedIndex == true && currentUser && id_cartdetail && keycokie &&
            GetServices({
                uriPointer: uri, Authorization: keycokie, showConsole: 'mobile_tranport',
                dataBody, getDataSource: this.getData.bind(this),
            })
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                {
                    activeSelectedIndex == true &&
                    <LoadingScreen key={'LoadingScreen'} />
                }
                <AppBar1 backArrow navigation={this.props.navigation} titleHead='รายละเอียด' />
                <ScrollView>
                    {
                        dataService && dataService.result && dataService.result.length > 0 ?
                            dataService.result.map((value, index) => {
                                return (
                                    <View key={index}>
                                        {
                                            activeSelectedIndex == false && ([
                                                index == 0 && ([
                                                    <Detail dataService={dataService.transport_data[0]} key={'Detail'} />,
                                                    insert_date &&
                                                    <Order_Sending key={'Order_Sending'} onStart={insert_date} />
                                                ]),
                                                <Order_Sending dataService={value} key={'Order_Sending'} no_invoice={no_invoice}
                                                    onEnd={index == dataService.result.length - 1 ? true : false} />
                                            ])
                                        }
                                    </View>
                                )
                            }) :
                            <>
                                {
                                    activeSelectedIndex == false && ([
                                        dataService && dataService.transport_data &&
                                        <Detail dataService={dataService.transport_data[0]} key={'Detail'} />,
                                        <Order_Sending key={'Order_Sending'} no_invoice={no_invoice} onStart={insert_date} onEnd={true} />
                                    ])
                                }
                            </>
                    }
                </ScrollView>
                <ExitAppModule navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Detail
export class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { dataService } = this.props;
        const uri_image_tracking = [finip, dataService.image_path,
            dataService.image ? dataService.image : dataService.image_name].join('/');
        console.log(uri_image_tracking)
        return (
            <>
                <View style={[stylesProfileTopic.Order_Detail, { borderColor: '#ECECEC', borderBottomWidth: 1, }]}>
                    <View style={stylesProfileTopic.Order_Detail_ICON}>
                        <FastImage style={{ width: '100%', height: '100%' }}
                            source={{
                                uri: uri_image_tracking,
                            }}
                            resizeMode={FastImage.resizeMode.contain} />
                    </View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}> จัดส่งโดย : {dataService.name} </Text>
                </View>
                {/* <View style={stylesProfileTopic.Order_Detail_Address}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ผู้รับ : ส.ยายยิ้ม</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 20, }]}>
                        123 ม.5 ต.อ่างทอง อ.เมือง จ.ราชบุรี 70000</Text>
                </View> */}
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Order_Sending
export class Order_Sending extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { dataService, no_invoice, onEnd, onStart } = this.props
        return (
            <>
                <View style={{ backgroundColor: '#FFFFFF', paddingTop: 8, paddingBottom: 8, }}>
                    {/* <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>ระหว่างการจัดส่ง</Text> */}
                    <View style={{ flexDirection: 'row', marginLeft: 10, }}>
                        <View>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { width: 95 }]}>
                                {onStart ? onStart : dataService.tracking_date}</Text>
                        </View>
                        <View style={{ width: 300, marginLeft: 10, flex: 1 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                {
                                    onStart ?
                                        'เราได้รับคำสั่งซื้อของท่านเรียบร้อยแล้วและกำลังดำเนินการตรวจสอบรายการคำสั่งซื้อนี้ ทางเราจะทำการอัพเดทข้อมูลทางอีเมลให้ทราบโดยเร็ว' :
                                        dataService.tracking_description
                                }
                            </Text>
                        </View>
                    </View>
                </View>
                {
                    onEnd &&
                    <View style={{ backgroundColor: '#FFFFFF', padding: 8, borderColor: '#ECECEC', borderTopWidth: 1, }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>หมายเลขคำสั่งซื้อ : {no_invoice}</Text>
                    </View>
                }
            </>
        );
    }
}