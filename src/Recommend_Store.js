///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> import
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> tools
import { AppBar } from './MainScreen';
import { GetServices } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> ip
import { ip, finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Recommend_Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar leftBar='backarrow' rightBar='chat' navigation={navigation} />
                <ScrollView>
                    <Header />
                    <Store_Detail navigation={navigation} />
                    <Store_Detail navigation={navigation} />
                    <Store_Detail navigation={navigation} />
                    <Store_Detail navigation={navigation} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Header
export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesTopic.Header}>
                <FastImage
                    source={{ uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg', }}
                    style={stylesTopic.Header_ImageBackground}
                />
                <Text style={[stylesTopic.Header_Text, stylesFont.FontFamilyBold]}>
                    รองเท้าสวยๆ แบรนด์ดัง สุดชิค!!
                </Text>
                <View style={stylesTopic.Header_BoxDetail}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, stylesTopic.Header_DetailText, {
                        textAlign: 'center',
                    }]}>10 ร้านรองเท้าหลากสไตล์ ใส่ไปไหนก็พร้อมหมด</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesTopic.Header_DetailText]}>       ถ้าพูดถึงหนึ่งในแอคเซสเซอรี่ประจำกายของผู้หญิง หนึ่งในท็อปลิสต์เบอร์ต้น คงจะหนีไม่พ้นรองเท้าเป็นแน่
                     สาวคนไหนอยากปรับลุคเปลี่ยนแนว แค่เปลี่ยนรองเท้าก็ปรับลุคได้เป็นปลิดทิ้ง วันนี้คลีโอขอรวบรวมร้านรองเท้าดีไซน์เลิศ ราคาสบายกระเป๋าจากอินสตาแกรมมาเป็นไอเดียให้สาวๆ
                     เลือกซื้อกัน ช้อปง่ายๆ แค่คลิกกดสั่งออนไลน์ ก็ได้รองเท้าเก๋ๆ ใส่ไปเที่ยววันหยุด หรือจะใส่ไปทำงานก็เวิร์คสุด เรียกได้ว่าซื้อคู่เดียว ใส่ได้ยันจันทร์ถึงอาทิตย์ขึ้นแท่นเป็นไอเท็มมัลติฟังก์ชั่นไปแล้วจ้า
                     รับรองเลยว่ามีหลากสไตล์เอาใจสาวนักช้อปแน่นอน!</Text>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Store_Detail
export class Store_Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    itemDataService() {
        const { dataService } = this.state
        const { navigation } = this.props
        return dataService.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            var throughsale = Number(item.full_price) + (item.full_price * 0.25);
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => navigation.navigate('DetailScreen', { id_item: item.id_product })}>
                    <View style={stylesMain.BoxProduct1Box} key={indexs}>
                        <View style={stylesMain.BoxProduct1ImageofLines}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={stylesMain.BoxProduct1Image}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View style={{ height: 60, paddingHorizontal: 3 }}>
                            <View style={[stylesMain.BoxProduct1NameofLines]}>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize7]}>
                                    {item.name}</Text>
                            </View>
                            <View style={[stylesMain.BoxProduct1PriceofLines, stylesMain.FlexRow]}>
                                <NumberFormat
                                    value={item.full_price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyBold,
                                        ]}>
                                            {value + ' '}</Text>
                                    }
                                />
                                <NumberFormat
                                    value={throughsale}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                                            { marginTop: 3 }
                                        ]}>
                                            {value}</Text>
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
    }
    render() {
        const { navigation } = this.props
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'product'
        };
        return (
            <View style={stylesMain.FrameBackground}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View>
                    <FastImage
                        style={stylesTopic.Store_Image}
                        source={require('../icon/bgprofile.jpg')}
                    />
                    <View style={stylesTopic.Store_Box}>
                        <TouchableOpacity onPress={() => navigation.navigate('StoreScreen', { id_item: 23 })}>
                            <View style={stylesTopic.Store_Pro}>
                                <FastImage
                                    style={{ height: '100%', width: '100%' }}
                                    source={{ uri: ip + '/mysql/uploads/icon_brand/brand5.png' }}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={{ margin: 10, }} >
                            <TouchableOpacity onPress={() => navigation.navigate('StoreScreen', { id_item: 23 })}>
                                <View style={stylesTopic.Store_Name}>
                                    <Text style={[stylesTopic.Store_NameText, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
                                        O&B official</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={stylesTopic.Store_Star}>
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>คะแนนร้านค้า: 4.8 จาก 5</Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <View style={stylesTopic.Store_BoxButton}>
                                    <View style={stylesTopic.Store_Button}>
                                        <Text style={[stylesFont.FontFamilyText, { textAlign: 'center', color: '#0A55A6' }]}>
                                            ติดตาม</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => navigation.navigate('StoreScreen', { id_item: 23 })} style={[
                                        stylesTopic.Store_Button, { backgroundColor: '#0A55A6', marginLeft: 8, }]} >
                                        <Text style={[stylesFont.FontFamilyText, { textAlign: 'center', color: '#FFFFFF' }]}>
                                            เข้าดูร้านค้า</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={stylesTopic.Store_BoxIcon}>
                                    <View style={stylesTopic.Store_Icon}>
                                        <IconFontAwesome name='share-square-o' size={20} />
                                        <Text style={stylesFont.FontFamilyText}> แชร์</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#BABABA', height: 3, width: '80%', marginLeft: 50, }}></View>
                    <View style={stylesTopic.Store_Detail}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>      รองเท้าสไตล์หวานแหววเอาใจคุณหนู กับรองเท้าหุ้มส้นประดับมุก รองเท้าทรง sandle
                        รัดส้นเตี้ยหัวแหลมเพิ่มลุคเฟมินีนสุดๆ ไหนจะรองเท้าส้นสูงพร้อมออกงานก็มีหมด สาวๆ คนไหนอยากจะใส่รองเท้าชิวๆ ในวันสบายๆ หรือ อยากได้ลุคกึ่งทางการไปทำงานได้ ต้องร้านนี้เลยจ้า
                        จะเอาสีขาวออฟไวท์ เมทัลลิค หรือโทนพาสเทลก็มีหมด</Text>
                    </View>
                    <View>
                        <View style={stylesTopic.Store_BoxText_Product}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, stylesTopic.Store_Text_Product]}>
                                สินค้าขายดีประจำร้าน</Text>
                        </View>
                        <View style={stylesTopic.Store_Product}>
                            <ScrollView horizontal>
                                {this.itemDataService()}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View >
        )
    }
}
