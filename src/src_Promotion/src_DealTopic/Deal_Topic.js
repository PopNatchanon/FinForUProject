///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import BottomSheet from 'react-native-raw-bottom-sheet';
import ActionButton from 'react-native-action-button';
import ImagePicker from 'react-native-image-crop-picker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../../../style/StylesMainScreen'
import stylesFont from '../../../style/stylesFont';
import stylesPromotionDeal from '../../../style/stylePromotion-src/styleDealScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesTopic from '../../../style/styleTopic';
import stylesProfile from '../../../style/StylesProfileScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { Button_Bar } from '../../HighlightScreen';
import { GetServices, GetCoupon, TabBar } from '../../tools/Tools';
import { TodayProduct, Slide, AppBar1, ExitAppModule } from '../../MainScreen';
import { Store_Detail } from '../../Recommend_Store';
import { ProductBox } from '../../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Deal_Topic extends Component {
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
    PathList() {
        const { dataService } = this.state
        const { navigation } = this.props
        const selectedIndex = this.props.navigation.getParam('selectedIndex')
        switch (selectedIndex) {
            case 0:
                return (
                    <View style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ดีลสุดคุ้ม' />
                        <ScrollView>
                            <Deal_CuponToday navigation={this.props.navigation} />
                            <Button_Bar navigation={this.props.navigation} />
                            <Deal_ProductToday />
                            <Deal_ProductToday />
                            <Deal_ProductToday />
                        </ScrollView>
                    </View>
                )
            case 1:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ดีลสุด Exclusive' />
                        <ScrollView stickyHeaderIndices={[2]}>
                            <Slide />
                            <View style={{ marginBottom: 10 }}></View>
                            <Button_Bar navigation={this.props.navigation} />
                            {
                                dataService ?
                                    <TodayProduct noTitle navigation={navigation} loadData={dataService} typeip prepath='mysql' /> :
                                    null
                            }
                        </ScrollView>
                    </View>
                )
            case 2:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ร้านค้ามือสองลดราคา' />
                        <ScrollView stickyHeaderIndices={[2]}>
                            <Slide />
                            <View style={{ marginBottom: 10 }}></View>
                            <Button_Bar />
                            <Store_Detail />
                            <Store_Detail />
                            <Store_Detail />
                            <Store_Detail />
                        </ScrollView>
                    </View>
                )
            case 3:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='สินค้ามือสองลดราคา' />
                        <ScrollView stickyHeaderIndices={[2]}>
                            <Slide />
                            <View style={{ marginBottom: 10 }}></View>
                            <Button_Bar navigation={this.props.navigation} />
                            {
                                dataService ?
                                    <TodayProduct noTitle navigation={navigation} loadData={dataService} typeip prepath='mysql' /> :
                                    null
                            }
                        </ScrollView>
                    </View>
                )
            case 4:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ร้านค้าที่มีดีล' />
                        <ScrollView stickyHeaderIndices={[2]}>
                            <Slide />
                            <View style={{ marginBottom: 10 }}></View>
                            <Button_Bar />
                            <Store_Detail />
                            <Store_Detail />
                            <Store_Detail />
                            <Store_Detail />
                        </ScrollView>
                    </View>
                )
            case 5:
                return (
                    <View style={[stylesMain.SafeAreaView, stylesMain.ItemCenter]}>
                        <Not_Internet navigation={navigation} />
                    </View>
                )
            case 6:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='คะแนนประจำร้าน' />
                        <ScrollView>
                            <Score_store />
                        </ScrollView>
                    </View>
                )
            case 7:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='โพสต์ใหม่' />
                        <ScrollView>
                            <Post_New navigation={navigation} />
                        </ScrollView>
                    </>
                )
            case 8:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='เลือกสินค้า' />
                        <Select_TagProduct />
                        <ScrollView>
                            {
                                dataService ?
                                    <TodayProduct noTitle navigation={navigation} loadData={dataService} typeip prepath='mysql' /> :
                                    null
                            }
                        </ScrollView>
                    </View>
                )
        }
    }
    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'todayproduct'
        };
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                {this.PathList()}
                <ExitAppModule navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Main
export class Deal_CuponToday extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <View style={{ height: 150, width: '100%', backgroundColor: '#E0F0FF', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}> เก็บคูปองลดเพิ่มทุกวัน </Text>
                </View>
                <View style={{ padding: 10, }}>
                    <View style={stylesPromotionDeal.Deal_Today_Box}>
                        <Text style={stylesFont.FontFamilyText}> คูปองส่วนลดจาก FIN</Text>
                        <ScrollView horizontal>
                            <GetCoupon colorCoupon='#86CFFF' codeList='available' timeOut={'31-01-2020'} couponText={'10%'} textDetail={'รับเงินคืน 10% Coins'} />
                            <GetCoupon colorCoupon='#86CFFF' codeList='available' timeOut={'31-01-2020'} couponText={'25%'} textDetail={'รับเงินคืน 25% Coins'} />
                            <GetCoupon colorCoupon='#86CFFF' codeList='available' timeOut={'31-01-2020'} couponText={'50%'} textDetail={'รับเงินคืน 50% Coins'} />
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class Deal_ProductToday extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <View style={stylesMain.SafeAreaView}>
                <View style={[stylesMain.FrameBackground, { borderColor: '#ECECEC', borderWidth: 1 }]}>
                    <View style={[stylesMain.FlexRow, { margin: 5 }]}>
                        <FastImage style={{ height: 40, width: 40, marginTop: 10, borderRadius: 20, }}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <View style={stylesProfileTopic.Follow_store_Box_text}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>Lacoste Store</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', justifyContent: 'space-around', flexDirection: 'row', padding: 5 }}>
                        <View style={[stylesMain.ItemCenter, { width: '25%', borderColor: '#ECECEC', borderWidth: 0.5, height: 120, padding: 5 }]}>
                            <View style={{ height: '80%', width: '100%' }}>
                                <FastImage style={stylesMain.BoxProduct1Image}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                                    }}
                                />
                            </View>
                            <View style={{ borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5, paddingHorizontal: 5 }}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#0A55A6' }]}>฿3,xxx</Text>
                            </View>
                        </View>
                        <View style={[stylesMain.ItemCenter, { width: '25%', borderColor: '#ECECEC', borderWidth: 0.5, height: 120, padding: 5 }]}>
                            <View style={{ height: '80%', width: '100%' }}>
                                <FastImage style={stylesMain.BoxProduct1Image}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572329268.jpg',
                                    }}
                                />
                            </View>
                            <View style={{ borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5, paddingHorizontal: 5 }}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#0A55A6' }]}>฿3,xxx</Text>
                            </View>
                        </View>
                        <View style={[stylesMain.ItemCenter, { width: '25%', borderColor: '#ECECEC', borderWidth: 1, height: 120, padding: 5 }]}>
                            <View style={{ height: '80%', width: '100%' }}>
                                <FastImage style={stylesMain.BoxProduct1Image}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-09-1570615168.png',
                                    }}
                                />
                            </View>
                            <View style={{ borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5, paddingHorizontal: 5 }}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#0A55A6' }]}>฿3,xxx</Text>
                            </View>
                        </View>
                        <View style={[stylesMain.ItemCenter, { width: '25%', borderColor: '#ECECEC', borderWidth: 0.5, height: 120, padding: 5, backgroundColor: '#0A55A6' }]}>
                            <View>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { color: '#FFFFFF' }]}>50%</Text>
                                <TouchableOpacity>
                                    <View style={[stylesMain.ItemCenter, { backgroundColor: '#FFFFFF', paddingHorizontal: 5, borderRadius: 5 }]}>
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#0A55A6' }]}>เก็บ</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>>
export class Not_Internet extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
    render() {
        return (
            <View style={stylesMain.ItemCenter}>
                <FastImage style={{ height: 200, width: 200 }}
                    source={{
                        uri: ip + '/MySQL/uploads/icon_5/wifi-connected-png-8.png',
                    }}
                />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { width: 300, textAlign: 'center', color: '#969BA0' }]}> WHOOPS! ดูเหมือนว่าจะมีปัญหาในการเชื่อมต่อเซิร์ฟเวอร์ ลองพยายามตรวจสอบ
                การเชื่อมต่ออินเตอร์เน็ตแล้วลองใหม่อีกครั้ง </Text>
                <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'goBack')}>
                    <View style={[stylesMain.ItemCenter, { padding: 10, backgroundColor: '#0A55A6', borderRadius: 5, marginTop: 10 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>อัปโหลดอีกครั้ง</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>
export class Score_store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <View style={{ backgroundColor: '#4C9AE2', width: '100%', }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF', margin: 10 }]}> เรตติ้งร้าน </Text>
                    <View style={stylesMain.ItemCenter}>
                        <View style={[stylesMain.ItemCenter, { borderWidth: 1, backgroundColor: '#FFFFFF', height: 130, width: 130, borderRadius: 80, marginBottom: 10 }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>4.6 คะแนน</Text>
                            <View style={stylesMain.FlexRow}>
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: 100, width: '100%', justifyContent: 'space-around', flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
                    <View style={stylesTopic.Box_Brand}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ทั้งหมด</Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>(12223)</Text>
                    </View>
                    <View style={stylesTopic.Box_Brand}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>5 ดาว</Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>(1223)</Text>
                    </View>
                    <View style={stylesTopic.Box_Brand}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>4 ดาว</Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>(1223)</Text>
                    </View>
                    <View style={stylesTopic.Box_Brand}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>3 ดาว</Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>(12223)</Text>
                    </View>
                    <View style={stylesTopic.Box_Brand}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>2 ดาว</Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>(1223)</Text>
                    </View>
                    <View style={stylesTopic.Box_Brand}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>1 ดาว</Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>(123)</Text>
                    </View>
                </View>
                <Box_Rating comment_box />
                <Box_Rating />
                <Box_Rating comment_box />
                <Box_Rating />
                <Box_Rating comment_box />
                <Box_Rating />
                <Box_Rating comment_box />
                <Box_Rating comment_box />
                <Box_Rating />
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>
export class Box_Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { comment_box } = this.props
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1 }]}>
                    <View style={stylesProfileTopic.Order_StorePro}></View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginTop: 10 }]}>PPoo</Text>
                </View>
                <View style={{ padding: 10 }}>
                    <View style={stylesMain.FlexRow}>
                        <IconFontAwesome name='star' size={20} color='#FFAC33' />
                        <IconFontAwesome name='star' size={20} color='#FFAC33' />
                        <IconFontAwesome name='star' size={20} color='#FFAC33' />
                        <IconFontAwesome name='star' size={20} color='#FFAC33' />
                        <IconFontAwesome name='star' size={20} color='#FFAC33' />
                    </View>
                    {
                        comment_box &&
                        <View style={{ backgroundColor: '#0A55A6', width: 110, margin: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF', textAlign: 'center' }]}>คุ้มค้าและจัดส่งเร็วดี</Text>
                        </View>
                    }
                </View>
                <View style={[stylesMain.FlexRow, { marginLeft: 10 }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>25-03-2020 09:40 </Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>สินค้า : โคมไฟตกแต่งบ้าน มีหลากหลายสี </Text>
                </View>
            </View>

        );
    }
}
///----------------------------------------------------------------------------------------------->>>
export class Post_New extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: [],
        };
    }
    Framesticker() {
        return (
            <>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>กรอบ/สติ๊กเกอร์</Text>
                    <View style={[stylesMain.FlexRow, { flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 10 }]}>
                        <TouchableOpacity>
                            <FastImage style={{ height: 120, width: 120, marginBottom: 10 }}
                                source={{
                                    uri: ip + '/MySQL/uploads/Framesticker/Framesticker01.jpg',
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FastImage style={{ height: 120, width: 120, }}
                                source={{
                                    uri: ip + '/MySQL/uploads/Framesticker/Framesticker02.jpg',
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FastImage style={{ height: 120, width: 120, }}
                                source={{
                                    uri: ip + '/MySQL/uploads/Framesticker/Framesticker03.jpg',
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FastImage style={{ height: 120, width: 120, }}
                                source={{
                                    uri: ip + '/MySQL/uploads/Framesticker/Framesticker04.jpg',
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FastImage style={{ height: 120, width: 120, }}
                                source={{
                                    uri: ip + '/MySQL/uploads/Framesticker/Framesticker05.jpg',
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FastImage style={{ height: 120, width: 120, }}
                                source={{
                                    uri: ip + '/MySQL/uploads/Framesticker/Framesticker06.jpg',
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }
    UploadImagePostFeed = () => {
        const options = {
            width: 400,
            height: 400,
            includeBase64: true,
            cropping: true
        };
        ImagePicker.openPicker(options).then(response => {
            this.setState({ avatarSource: response })
        });
    }
    render() {
        const { avatarSource } = this.state
        return (
            <>
                {/* หมวดหมู่สินค้า */}
                <BottomSheet
                    ref={ref => {
                        this.FramestickerSheet = ref;
                    }}
                    height={320}
                    duration={250}
                    customStyles={{
                        container: {
                            padding: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }
                    }}>
                    {this.Framesticker()}
                </BottomSheet>
                <View style={{ backgroundColor: '#FFFFFF' }}>
                    <View style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1, }]}>
                        <View style={stylesProfileTopic.Order_StorePro}></View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginTop: 10 }]}> popoo </Text>
                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                        <TextInput
                            style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}
                            placeholder="เขียนบางอย่างสิ...."
                            multiline
                            editable
                            // maxLength={5000}
                            value={this.state.Detail}
                            onChangeText={(Detail) => this.setState({ Detail })}>
                        </TextInput>
                    </View>
                    <View>
                        {
                            avatarSource ?
                                <View style={{ padding: 10, alignItems: 'center' }}>
                                    <FastImage
                                        source={{ uri: avatarSource.path }}
                                        style={{ width: 400, height: 400, backgroundColor: '#FFFFFF' }}

                                    />
                                </View> :
                                null
                        }
                    </View>
                    <TouchableOpacity style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1, padding: 10 }]}
                        onPress={this.UploadImagePostFeed}>
                        <IconFontAwesome name='image' size={25} color='#43A047' style={{ marginRight: 10, }} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>รูปภาพ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1, padding: 10 }]}
                        activeOpacity={1} onPress={() => this.props.navigation.push('Deal_Topic', { selectedIndex: 8 })}>
                        <IconAntDesign name='tago' size={25} style={{ marginRight: 10, }} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>แท็กสินค้า</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1, padding: 10 }]}
                        activeOpacity={1} onPress={() => { this.FramestickerSheet.open(); }}>
                        <IconMaterialCommunityIcons name='sticker-emoji' size={25} color='#FFAC33' style={{ marginRight: 10 }} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>กรอบ/สติ๊กเกอร์</Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>
export class Select_TagProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        const { dataService, sliderVisible } = this.state
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            dataService !== nextState.dataService || sliderVisible !== nextState.sliderVisible
        ) {
            return true
        }
        return false
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        const item = [{
            name: 'สินค้าของฉัน'
        }, {
            name: 'รายการโปรด'
        },]
        return (
            <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', height: 40 }]}>
                <TabBar
                    item={item}
                    numberBox
                    numberOfLines={1}
                    activeColor={'#fff'}
                    activeFontColor={'#111'}
                    tagBottomColor={'#0A55A6'}
                    tagBottom
                />
            </View>
        );
    }
}

