///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from './MainScreen';
import { GetServices, Toolbar, NavigationNavigateScreen } from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class BellScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        return (
            <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
                <AppBar1 titleHead='การแจ้งเตือน' />
                <ScrollView>
                    <Popular_store {...this.props} />
                    <Pro_for_U {...this.props} />
                    <Update_buy {...this.props} />
                </ScrollView>
                <Toolbar {...this.props} />
                <ExitAppModule {...this.props} />
            </SafeAreaView>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> Popular_store
export class Popular_store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetServices: true,
            dataService: [],
        };
    };
    getData = (dataService) => {
        this.setState({ activeGetServices: false, dataService });
    };
    get dataNewStore() {
        const { navigation } = this.props;
        const { dataService } = this.state;
        const text = 'ร้าน AVIRA ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!';
        return dataService.map((item, index) => {
            var dataMySQL = `${ip}/mysql/uploads/slide/${item.image}`;
            return (
                <TouchableOpacity activeOpacity={1} key={index}
                    onPress={() => NavigationNavigateScreen({ goScreen: 'StoreScreen', setData: { id_item: item.id_store }, navigation })}>
                    <View style={stylesMain.BoxStore3Box}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxStore3Image} />
                        <Text numberOfLines={5} style={[stylesMain.BoxStore3Text, stylesFont.FontFamilyText, stylesFont.FontSize6, {
                            height: height * 0.15
                        }]}>
                            {
                                text
                            }
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        });
    };
    render() {
        const { activeGetServices } = this.state;
        var uri = `${ip}/mysql/DataServiceMain.php`;
        var dataBody = {
            type: 'store'
        };
        activeGetServices == true && GetServices({ uriPointer: uri, dataBody, getDataSource: this.getData.bind(this), });
        return (
            <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView]}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                        ร้านเด็ด</Text>
                    <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                        ดูทั้งหมด</Text>
                </View>
                <ScrollView horizontal>
                    {this.dataNewStore}
                </ScrollView>
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> Pro_for_U
export class Pro_for_U extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                        โปรเด็ดที่คัดมาเพื่อคุณ</Text>
                </View>
                <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, stylesMain.ItemCenter]}>
                    <TouchableOpacity activeOpacity={1}
                        onPress={() => NavigationNavigateScreen({ goScreen: 'Detail_Pro', setData: { selectedIndex: 0 }, navigation })}>
                        <View style={stylesMain.BoxStore4Box}>
                            <FastImage
                                style={stylesMain.BoxStore4Image}
                                source={{
                                    uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`,
                                }} />
                            <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}
                        onPress={() => NavigationNavigateScreen({ goScreen: 'Detail_Pro', setData: { selectedIndex: 0 }, navigation })}>
                        <View style={stylesMain.BoxStore4Box}>
                            <FastImage
                                style={stylesMain.BoxStore4Image}
                                source={{
                                    uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop2.jpg`,
                                }} />
                            <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}
                        onPress={() => NavigationNavigateScreen({ goScreen: 'Detail_Pro', setData: { selectedIndex: 0 }, navigation })}>
                        <View style={stylesMain.BoxStore4Box}>
                            <FastImage
                                style={stylesMain.BoxStore4Image}
                                source={{
                                    uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop3.jpg`,
                                }} />
                            <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}
                        onPress={() => NavigationNavigateScreen({ goScreen: 'Detail_Pro', setData: { selectedIndex: 0 }, navigation })}>
                        <View style={stylesMain.BoxStore4Box}>
                            <FastImage
                                style={stylesMain.BoxStore4Image}
                                source={{
                                    uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop4.jpg`,
                                }} />
                            <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> Pro_for_U
export class Update_buy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                        อัพเดทคำสั่งซื้อ</Text>
                </View>
                <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, stylesMain.ItemCenter]}>
                    <TouchableOpacity activeOpacity={1}
                        onPress={() => NavigationNavigateScreen({ goScreen: 'Detail_Pro', setData: { selectedIndex: 1 }, navigation })}>
                        <View style={stylesMain.BoxStore4Box}>
                            <FastImage
                                style={stylesMain.BoxStore4Image}
                                source={{
                                    uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`,
                                }} />
                            <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                คุณให้คะแนนเรทติ้งการสั่งซื้อแล้วรึยัง</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`,
                            }} />
                        <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            กรุณาชำระเงิน ........ บาท สำหรับคำสั่งซื้อ ภายในวันที่ 19-12-2019 </Text>
                    </View>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`,
                            }} />
                        <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            คุณให้คะแนนเรทติ้งการสั่งซื้อแล้วรึยัง??</Text>
                    </View>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`,
                            }} />
                        <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            กรุณาชำระเงิน ........ บาท สำหรับคำสั่งซื้อ ภายในวันที่ 19-12-2019 </Text>
                    </View>
                </View>
            </View>
        );
    };
};