import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { AppBar } from './MainScreen';
import { finip, ip } from '../navigator/IpConfig';
import styles from '../style/stylePromotion-src/styleDealScreen';
import FastImage from 'react-native-fast-image';
import Icons from 'react-native-vector-icons/FontAwesome';




export default class Recommend_Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.SafeAreaView}>
                <AppBar leftBar='backarrow' rightBar='chat' navigation={this.props.navigation}  />
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


export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ height: 'auto', width: '100%', alignItems: 'center', justifyContent: 'center', }}>
                <ImageBackground
                    source={{ uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg', }}
                    style={{ height: 180, width: '100%', marginBottom: -100, }}

                />
                <Text style={{ color: '#FFFFFF', fontSize: 25, marginBottom: 50, fontFamily: 'SukhumvitSet-Bold', }}>
                    รองเท้าสวยๆ แบรนด์ดัง สุดชิค!!
                </Text>
                <View style={{ width: '100%', backgroundColor: '#FFFFFF', padding: 10, }}>
                    <Text style={{ fontSize: 18, marginTop: 5, textAlign: 'center', fontFamily: 'SukhumvitSet-Bold', }}>10 ร้านรองเท้าหลากสไตล์ ใส่ไปไหนก็พร้อมหมด</Text>
                    <Text style={{ fontSize: 14, marginTop: 5, fontFamily: 'SukhumvitSet-Text', }}>       ถ้าพูดถึงหนึ่งในแอคเซสเซอรี่ประจำกายของผู้หญิง หนึ่งในท็อปลิสต์เบอร์ต้น คงจะหนีไม่พ้นรองเท้าเป็นแน่
                     สาวคนไหนอยากปรับลุคเปลี่ยนแนว แค่เปลี่ยนรองเท้าก็ปรับลุคได้เป็นปลิดทิ้ง วันนี้คลีโอขอรวบรวมร้านรองเท้าดีไซน์เลิศ ราคาสบายกระเป๋าจากอินสตาแกรมมาเป็นไอเดียให้สาวๆ
                     เลือกซื้อกัน ช้อปง่ายๆ แค่คลิกกดสั่งออนไลน์ ก็ได้รองเท้าเก๋ๆ ใส่ไปเที่ยววันหยุด หรือจะใส่ไปทำงานก็เวิร์คสุด เรียกได้ว่าซื้อคู่เดียว ใส่ได้ยันจันทร์ถึงอาทิตย์ขึ้นแท่นเป็นไอเท็มมัลติฟังก์ชั่นไปแล้วจ้า
                     รับรองเลยว่ามีหลากสไตล์เอาใจสาวนักช้อปแน่นอน!</Text>
                </View>
            </View>
        );
    }
}

///--------------------------------------------------------------------------///

export class Store_Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ backgroundColor: '#FFFFFF', marginTop:10, }}>
                <View style={{ width: '100%', }}>
                    <FastImage
                        style={{ width: '100%', height: 100, borderTopLeftRadius: 8, borderTopRightRadius: 8, }}
                        source={require('../icon/bgprofile.jpg')}
                    />
                    <View style={{ height: 100, width: '100%', flexDirection: 'row', marginTop: -30, justifyContent: 'space-between', }}>
                        <View style={{ height: 90, width: 90, backgroundColor: '#FFFFFF', borderRadius: 50, marginLeft: 10, borderColor: '#000000', borderWidth: 1, }}></View>
                        <View style={{ margin: 10, }} >
                            <View style={{ backgroundColor: '#0A55A6', height: 30, width: 100, borderRadius: 5, justifyContent: 'center', }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 14, textAlign: 'center', fontFamily: 'SukhumvitSet-Bold', }}>O&B official</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 5, }}>
                                <Icons name='star' size={25} color='#FFAC33' />
                                <Icons name='star' size={25} color='#FFAC33' />
                                <Icons name='star' size={25} color='#FFAC33' />
                                <Icons name='star' size={25} color='#FFAC33' />
                                <Icons name='star' size={25} color='#FFAC33' />
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text>คะแนนร้านค้า:4.8จาก5</Text>
                            </View>
                        </View>
                        <View style={{ height: 90, width: 'auto', }}>
                            <View>
                                <View style={{ height: 40, width: 200, flexDirection: 'row', marginRight: 10, marginTop: 10, }}>
                                    <View style={{ justifyContent: 'center', width: 90, borderColor: '#0A55A6', backgroundColor: '#FFFFFF', borderWidth: 1, borderRadius: 5, }}>
                                        <Text style={{ textAlign: 'center', color: '#0A55A6' }}>ติดตาม</Text></View>
                                    <View style={{ justifyContent: 'center', width: 90, backgroundColor: '#0A55A6', marginLeft: 10, borderRadius: 5, }}>
                                        <Text style={{ textAlign: 'center', color: '#FFFFFF' }}>เข้าดูร้านค้า</Text></View>
                                </View>
                                <View style={{ height: 40, width: 200, flexDirection: 'row', marginRight: 10, marginTop: 10, }}>
                                    <View style={{ justifyContent: 'center', width: 90, flexDirection: 'row', }}>
                                        <Icons name='heart-o' size={20} />
                                        <Text> ถูกใจ</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', width: 90, flexDirection: 'row', }}>
                                        <Icons name='share-square-o' size={20} />
                                        <Text> แชร์</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#BABABA', height: 3, width: '80%', marginLeft: 50, }}></View>
                    <View style={{ width: '95%', padding: 5, margin: 10, }}>
                        <Text style={{ fontSize: 13, fontFamily: 'SukhumvitSet-Text', }}>      รองเท้าสไตล์หวานแหววเอาใจคุณหนู กับรองเท้าหุ้มส้นประดับมุก รองเท้าทรง sandle
                        รัดส้นเตี้ยหัวแหลมเพิ่มลุคเฟมินีนสุดๆ ไหนจะรองเท้าส้นสูงพร้อมออกงานก็มีหมด สาวๆ คนไหนอยากจะใส่รองเท้าชิวๆ ในวันสบายๆ หรือ อยากได้ลุคกึ่งทางการไปทำงานได้ ต้องร้านนี้เลยจ้า
                        จะเอาสีขาวออฟไวท์ เมทัลลิค หรือโทนพาสเทลก็มีหมด</Text>
                    </View>
                    <View style={{ width: '100%', }}>
                        <View style={{ backgroundColor: '#0A55A6', width: 130, margin: 10, }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 14, textAlign: 'center', fontFamily: 'SukhumvitSet-Bold', }}>สินค้าขายดีประจำร้าน</Text>
                        </View>  
                        <View style={{ width: '100%', height: 160, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row',marginBottom:10, }}>
                            <View style={{ width: '30%', height: 160, borderColor:'#ECECEC',borderWidth:1,}}></View>
                            <View style={{ width: '30%', height: 160, borderColor:'#ECECEC',borderWidth:1,}}></View>
                            <View style={{ width: '30%', height: 160, borderColor:'#ECECEC',borderWidth:1,}}></View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
