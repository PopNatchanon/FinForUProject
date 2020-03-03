///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View, PermissionsAndroid,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
import Carousel, { Pagination } from 'react-native-snap-carousel';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import ImagePicker from 'react-native-image-crop-picker';
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
import { GetServices, Toolbar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class BellScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        if (navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
                <AppBar1 titleHead='การแจ้งเตือน' />
                <ScrollView>
                    <UploadImage />
                    <Popular_store navigation={navigation} />
                    <Pro_for_U navigation={navigation} />
                    <Update_buy navigation={navigation} />
                </ScrollView>
                <Toolbar navigation={navigation} />
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Popular_store
export class Popular_store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService } = this.state
        const { navigation } = this.props
        if (dataService !== nextState.dataService || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    getData = (dataService) => {
            this.setState({ dataService })
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        navigation.navigate(value, value2)
    }
    get dataNewStore() {
        const { dataService } = this.state
        const text = 'ร้าน AVIRA ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!';
        return dataService.map((item, index) => {
            var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={index}
                    onPress={this.navigationNavigateScreen.bind(this, 'StoreScreen', { id_item: item.id_store })}>
                    <View style={stylesMain.BoxStore3Box}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxStore3Image}
                        />
                        <Text numberOfLines={5} style={[stylesMain.BoxStore3Text, stylesFont.FontFamilyText, stylesFont.FontSize6, { height: height * 0.15 }]}>
                            {
                                text
                            }
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }
    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'store'
        };
        return (
            <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView]}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
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
    }
}
///----------------------------------------------------------------------------------------------->>>> Pro_for_U
export class Pro_for_U extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        navigation.navigate(value, value2)
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        if (navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    render() {
        return (
            <View>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                        โปรเด็ดที่คัดมาเพื่อคุณ</Text>
                </View>
                <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, stylesMain.ItemCenter]}>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Detail_Pro', { selectedIndex: 0 })}>
                        <View style={stylesMain.BoxStore4Box}>
                            <FastImage
                                style={stylesMain.BoxStore4Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                                }}
                            />
                            <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Detail_Pro', { selectedIndex: 0 })}>
                        <View style={stylesMain.BoxStore4Box}>
                            <FastImage
                                style={stylesMain.BoxStore4Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                                }}
                            />
                            <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Detail_Pro', { selectedIndex: 0 })}>
                        <View style={stylesMain.BoxStore4Box}>
                            <FastImage
                                style={stylesMain.BoxStore4Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop3.jpg',
                                }}
                            />
                            <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Detail_Pro', { selectedIndex: 0 })}>
                        <View style={stylesMain.BoxStore4Box}>
                            <FastImage
                                style={stylesMain.BoxStore4Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop4.jpg',
                                }}
                            />
                            <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Pro_for_U
export class Update_buy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        navigation.navigate(value, value2)
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        if (navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    render() {
        return (
            <View>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                        อัพเดทคำสั่งซื้อ</Text>
                </View>
                <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, stylesMain.ItemCenter]}>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Detail_Pro', { selectedIndex: 1 })}>
                        <View style={stylesMain.BoxStore4Box}>
                            <FastImage
                                style={stylesMain.BoxStore4Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                                }}
                            />
                            <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                คุณให้คะแนนเรทติ้งการสั่งซื้อแล้วรึยัง</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            กรุณาชำระเงิน ........ บาท สำหรับคำสั่งซื้อ ภายในวันที่ 19-12-2019 </Text>
                    </View>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            คุณให้คะแนนเรทติ้งการสั่งซื้อแล้วรึยัง??</Text>
                    </View>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            กรุณาชำระเงิน ........ บาท สำหรับคำสั่งซื้อ ภายในวันที่ 19-12-2019 </Text>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Pro_for_U
export class UploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: [],
        };
    }
    UploadImageSingle = (index) => {
        const { avatarSource } = this.state
        const options = {
        };
        ImagePicker.openPicker(options).then(response => {
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            avatarSource[index] = response
            this.setState({ avatarSource })
        });
    }
    UploadImageMultiple = () => {
        const { avatarSource } = this.state
        const options = {
            multiple: true,
        };
        ImagePicker.openPicker(options).then(response => {
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            response.map((item, index) => index + avatarSource.length <= 7 && avatarSource.push(item))
            this.setState({ avatarSource })
        });
    }
    UploadImageData = () => {
        const { avatarSource } = this.state
        var uri = [ip, 'sql/uploadimage/updateimage.php'].join('/')
        avatarSource && (
            fetch(uri, {
                method: "POST",
                body: avatarSource
            })
                .then(response => response.json())
                .then(response => {
                    console.log("upload succes", response);
                    alert("Upload success!");
                    this.setState({ avatarSource: null });
                })
                .catch(error => {
                    console.log("upload error", error);
                    alert("Upload failed!");
                })
        )
    }
    render() {
        const { avatarSource } = this.state
        return (
            <>
                <ScrollView horizontal>
                    {
                        avatarSource ? [
                            avatarSource.map((item, index) => {
                                return (
                                    <TouchableOpacity onPress={this.UploadImageSingle.bind(this, index)} key={index}>
                                        <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: '#0A55A6', borderWidth: 1, }]}>
                                            <FastImage
                                                source={{ uri: item.path }}
                                                style={[stylesMain.ItemCenterVertical, { height: '100%', width: '100%' }]}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                )
                            }),
                            avatarSource.length < 7 &&
                            <TouchableOpacity onPress={this.UploadImageMultiple} key={'upload'}>
                                <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: '#0A55A6', borderWidth: 1, }]}>
                                    <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                                        <IconAntDesign RightItem name='camerao' size={35} color='#0A55A6' />
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ] :
                            <TouchableOpacity onPress={this.UploadImageMultiple}>
                                <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: '#0A55A6', borderWidth: 1, }]}>
                                    <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                                        <IconAntDesign RightItem name='camerao' size={35} color='#0A55A6' />
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                    }
                </ScrollView>
                <TouchableOpacity onPress={this.UploadImageData} style={stylesMain.ItemCenter}>
                    <Text style={[{ width: 75, height: 40, borderWidth: 1, borderColor: '#456488', marginTop: 10, textAlign: 'center', textAlignVertical: 'center', color: '#fff', backgroundColor: '#456488' }]}>Upload</Text>
                </TouchableOpacity>
            </>
        )
    }
}