///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    ImageBackground, SafeAreaView, ScrollView, Text, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> import
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> tools
import { AppBar } from './MainScreen';
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
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar leftBar='backarrow' rightBar='chat' navigation={this.props.navigation} />
                <ScrollView>
                    <Header />
                    <Store_Detail />
                    <Store_Detail />
                    <Store_Detail />
                    <Store_Detail />
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
                <ImageBackground
                    source={{ uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg', }}
                    style={stylesTopic.Header_ImageBackground}

                />
                <Text style={[stylesTopic.Header_Text, stylesFont.FontFamilyBold]}>
                    รองเท้าสวยๆ แบรนด์ดัง สุดชิค!!
                </Text>
                <View style={stylesTopic.Header_BoxDetail}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, stylesTopic.Header_DetailText, { textAlign: 'center', }]}>10 ร้านรองเท้าหลากสไตล์ ใส่ไปไหนก็พร้อมหมด</Text>
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
        };
    }

    render() {
        return (
            <View style={stylesMain.FrameBackground}>
                <View>
                    <FastImage
                        style={stylesTopic.Store_Image}
                        source={require('../icon/bgprofile.jpg')}
                    />
                    <View style={stylesTopic.Store_Box}>
                        <View style={stylesTopic.Store_Pro}></View>
                        <View style={{ margin: 10, }} >
                            <View style={stylesTopic.Store_Name}>
                                <Text style={[stylesTopic.Store_NameText, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>O&B official</Text>
                            </View>
                            <View style={stylesTopic.Store_Star}>
                                <IconFontAwesome name='star' size={25} color='#FFAC33' />
                                <IconFontAwesome name='star' size={25} color='#FFAC33' />
                                <IconFontAwesome name='star' size={25} color='#FFAC33' />
                                <IconFontAwesome name='star' size={25} color='#FFAC33' />
                                <IconFontAwesome name='star' size={25} color='#FFAC33' />
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>คะแนนร้านค้า:4.8จาก5</Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <View style={stylesTopic.Store_BoxButton}>
                                    <View style={stylesTopic.Store_Button}>
                                        <Text style={[stylesFont.FontFamilyText, { textAlign: 'center', color: '#0A55A6' }]}>ติดตาม</Text></View>
                                    <View style={[stylesTopic.Store_Button, { backgroundColor: '#0A55A6', marginLeft: 10, }]}>
                                        <Text style={[stylesFont.FontFamilyText, { textAlign: 'center', color: '#FFFFFF' }]}>เข้าดูร้านค้า</Text></View>
                                </View>
                                <View style={stylesTopic.Store_BoxIcon}>
                                    <View style={stylesTopic.Store_Icon}>
                                        <IconFontAwesome name='heart-o' size={20} />
                                        <Text style={stylesFont.FontFamilyText}> ถูกใจ</Text>
                                    </View>
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
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, stylesTopic.Store_Text_Product]}>สินค้าขายดีประจำร้าน</Text>
                        </View>
                        <View style={stylesTopic.Store_Product}>
                            <View style={stylesTopic.Store_ProductBox}></View>
                            <View style={stylesTopic.Store_ProductBox}></View>
                            <View style={stylesTopic.Store_ProductBox}></View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
