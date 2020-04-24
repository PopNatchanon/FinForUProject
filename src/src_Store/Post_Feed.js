///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity, FlatList, Image,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import BottomSheet from 'react-native-raw-bottom-sheet';
import ActionButton from 'react-native-action-button';
import ImagePicker from 'react-native-image-crop-picker';
import { TextInput } from 'react-native-gesture-handler';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDetail from '../../style/StylesDetailScreen';
import stylesMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import stylesPromotionDeal from '../../style/stylePromotion-src/styleDealScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
import stylesTopic from '../../style/styleTopic';
import stylesProfile from '../../style/StylesProfileScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { GetServices, GetCoupon, TabBar, LoadingScreen } from '../tools/Tools';
import { TodayProduct, Slide, AppBar1, ExitAppModule, GetData } from '../MainScreen';
import { Store_Detail } from '../Recommend_Store';
import { ProductBox } from '../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Post_Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetCurrentUser: true
        };
    }
    getSource(value) {
        this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser, cokie: value.keycokie })
    }
    PathList() {
        const { navigation } = this.props
        const { cokie, dataService } = this.state
        const selectedIndex = navigation.getParam('selectedIndex')
        switch (selectedIndex) {
            case 0:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='คะแนนประจำร้าน' />
                        <ScrollView>
                            <Score_store cokie={cokie} navigation={navigation} />
                        </ScrollView>
                    </>
                )
            case 1:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='โพสต์ใหม่' />
                        <ScrollView>
                            <Post_New navigation={navigation} />
                        </ScrollView>
                    </>
                )
            case 2:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='เลือกสินค้า' />
                        <TagProduct />
                        <ScrollView>
                            {
                                dataService &&
                                <TodayProduct noTitle navigation={navigation} loadData={dataService.product_pro_coin} />
                            }
                        </ScrollView>
                    </View>
                )
            case 3:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='คอมเมนท์' chatBar />
                        <Feed_comment />
                    </>
                )
            case 10:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='สินค้า' />
                    </>
                )
        }
    }
    render() {
        const { activeGetCurrentUser } = this.state
        return (
            <SafeAreaView style={{ height: '100%' }}>
                {
                    activeGetCurrentUser == true &&
                    <GetData getCokie={true} getSource={this.getSource.bind(this)} getUser={true} key={'GetData'} />
                }
                {this.PathList()}
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>
export class Score_store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetServices: true,
            activeGetServices2: true,
            score: '',
        };
    }
    starReview(star, starSize) {
        let starBox = []
        for (var n = 0; n < 5; n++) {
            if (star > n) {
                starBox.push(
                    <IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={
                        starSize ?
                            starSize :
                            20
                    } color='#FFAC33' />
                )
            } else {
                starBox.push(
                    <IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={
                        starSize ?
                            starSize :
                            20
                    } color='#E9E9E9' />
                )
            }
        }
        return starBox
    }
    updateIndex = (value) => {
        var score = value.selectedIndex == 0 ? '' :
            value.selectedIndex == 1 ?
                '5' :
                value.selectedIndex == 2 ?
                    '4' :
                    value.selectedIndex == 3 ?
                        '3' :
                        value.selectedIndex == 4 ?
                            '2' :
                            value.selectedIndex == 5 ?
                                '1' :
                                ''
        this.setState({ activeGetServices2: true, score, })
    }
    getData = (dataService) => {
        this.setState({ activeGetServices: false, dataService, })
    }
    getData2 = (dataService2) => {
        this.setState({ activeGetServices2: false, dataService2, })
    }
    render() {
        const { cokie, navigation } = this.props;
        const { activeGetServices, activeGetServices2, dataService, dataService2, score } = this.state;
        const id_store = navigation.getParam('id_store');
        var uri = [finip, 'store/score_data'].join('/');
        var dataBody = {
            id_store,
            score,
        };
        item = [
            {
                name: 'ทั้งหมด',
                nameline2: '(' + (dataService ? (dataService.rate_1 + dataService.rate_2 + dataService.rate_3 + dataService.rate_4 +
                    dataService.rate_5) : '0') + ')',
            }, {
                name: '5 ดาว',
                nameline2: '(' + (dataService ? dataService.rate_5 : '0') + ')',
            }, {
                name: '4 ดาว',
                nameline2: '(' + (dataService ? dataService.rate_4 : '0') + ')',
            }, {
                name: '3 ดาว',
                nameline2: '(' + (dataService ? dataService.rate_3 : '0') + ')',
            }, {
                name: '2 ดาว',
                nameline2: '(' + (dataService ? dataService.rate_2 : '0') + ')',
            }, {
                name: '1 ดาว',
                nameline2: '(' + (dataService ? dataService.rate_1 : '0') + ')',
            }
        ]
        return (
            <>
                {[
                    activeGetServices == true && id_store && cokie &&
                    <GetServices
                        Authorization={cokie}
                        uriPointer={uri}
                        dataBody={dataBody}
                        showConsole='score_data'
                        getDataSource={this.getData.bind(this)} />,
                    activeGetServices2 == true && id_store && cokie &&
                    <GetServices
                        Authorization={cokie}
                        uriPointer={uri}
                        dataBody={dataBody}
                        showConsole='score_data'
                        getDataSource={this.getData2.bind(this)} />,
                ]}
                <View style={{ backgroundColor: '#4C9AE2', width: '100%', }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF', margin: 10 }]}> เรตติ้งร้าน </Text>
                    <View style={stylesMain.ItemCenter}>
                        <View style={[stylesMain.ItemCenter, { borderWidth: 1, backgroundColor: '#FFFFFF', height: 130, width: 130, borderRadius: 80, marginBottom: 10 }]}>
                            {
                                dataService && dataService.rating_store == 'ยังไม่มีการรีวิว' ?
                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ยังไม่มีการรีวิว</Text> :
                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>
                                        {dataService && dataService.rating_store} คะแนน</Text>
                            }
                            <View style={stylesMain.FlexRow}>
                                {this.starReview(dataService && dataService.rating_store, 20)}
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: 120, width: '100%', flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
                    <TabBar
                        sendData={this.updateIndex.bind(this)}
                        // SetValue={activeTabBar == true ? selectedIndex != null ? selectedIndex : -1 : undefined}
                        setVertical={6}
                        // setHorizontal={6}
                        item={item}
                        type='box'
                        noLimit
                        numberofBox={3}
                        radiusBox={4} />
                </View>
                {
                    dataService2 && dataService2.data_score.length > 0 ? (
                        dataService2.data_score.map((value, index) => {
                            return <Box_Rating dataService={value} key={index} />
                        })
                    ) :
                        <View style={[stylesMain.FrameBackground, stylesMain.ItemCenter, { width, height: '100%' }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4,]}>ไม่มีรีวิว</Text>
                        </View>
                }
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
    starReview(star, starSize) {
        let starBox = []
        for (var n = 0; n < 5; n++) {
            if (star > n) {
                starBox.push(
                    <IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={
                        starSize ?
                            starSize :
                            20
                    } color='#FFAC33' />
                )
            } else {
                starBox.push(
                    <IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={
                        starSize ?
                            starSize :
                            20
                    } color='#E9E9E9' />
                )
            }
        }
        return starBox
    }
    render() {
        const { comment_box, dataService } = this.props
        const image_customer = [finip, dataService.path_customer, dataService.img_customer].join('/')
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1 }]}>
                    <View style={stylesProfileTopic.Order_StorePro}>
                        <FastImage source={{ uri: dataService.user_type == 'fin' ? image_customer : dataService.img_customer }}
                            style={{ width: '100%', height: '100%', borderRadius: 20, }} />
                    </View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginTop: 10, marginLeft: 4, }]}>
                        {dataService && dataService.name}</Text>
                </View>
                <View style={{ padding: 10 }}>
                    <View style={stylesMain.FlexRow}>
                        {this.starReview(dataService && dataService.rating, 20)}
                    </View>
                    {[
                        comment_box &&
                        <View style={{ backgroundColor: '#0A55A6', width: 110, margin: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF', textAlign: 'center' }]}>
                                คุ้มค้าและจัดส่งเร็วดี</Text>
                        </View>,
                        dataService && dataService.comment &&
                        <View>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#111', }]}>
                                {dataService && dataService.comment}</Text>
                        </View>
                    ]}
                </View>
                <View style={[stylesMain.FlexRow, { marginLeft: 10 }]}>
                    {/* <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>25-03-2020 09:40</Text>  */}
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                        สินค้า : {dataService && dataService.product} {dataService && dataService.detail} </Text>
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
///----------------------------------------------------------------------------------------------->>>
export class Feed_comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name: "Frank Odalthh", comment: "สอบถามขนาดสินค้าหน่อยครับ" },
                { id: 2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name: "John DoeLink", comment: "สั่งของไปยังไม่ได้ของเลยครับ" },
                { id: 3, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name: "March SoulLaComa", comment: "ยังมีสินค้าอยู่ไหมคะ" },
                { id: 4, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name: "Finn DoRemiFaso", comment: "สินค้ามีปัญหาเปลี่ยนได้ทางไหนครับ" },
                { id: 5, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name: "Maria More More", comment: "สินค้าราคาเท่าไหรครับ" },
                { id: 6, image: "https://bootdey.com/img/Content/avatar/avatar4.png", name: "Clark June Boom!", comment: "ส่งของวันไหนครับ" },
                { id: 7, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name: "The googler", comment: "ยังไม่ได้สินค้าเลยครับ" },
                { id: 8, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name: "DoRemiFaso", comment: "ยังไม่ได้สินค้าเลยครับ" },
                { id: 9, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name: "The googler", comment: "ยังไม่ได้สินค้าเลยครับ" },
                { id: 10, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name: "Maria More More", comment: "ยังไม่ได้สินค้าเลยครับ" },
            ]
        }
    }

    render() {
        return (
            <FlatList
                style={stylesTopic.root}
                data={this.state.data}
                extraData={this.state}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={stylesTopic.separator} />
                    )
                }}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={(item) => {
                    const Notification = item.item;
                    return (
                        <View style={stylesTopic.container}>
                            {/* กดรูปโปร */}
                            <TouchableOpacity onPress={() => { }}>
                                <Image style={stylesTopic.image} source={{ uri: Notification.image }} />
                            </TouchableOpacity>
                            <View style={stylesTopic.content}>
                                <View style={stylesTopic.contentHeader}>
                                    <Text style={stylesTopic.name}>{Notification.name}</Text>
                                    <Text style={stylesTopic.time}> 9:58 am</Text>
                                </View>
                                <Text rkType='primary3 mediumLine'>{Notification.comment}</Text>
                                <View style={[stylesMain.FlexRow, { justifyContent: 'flex-end', width: '50%' }]}>

                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>ถูกใจ</Text>
                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginLeft: 10 }]}>ตอบกลับ</Text>
                                </View>
                            </View>
                        </View>
                    );
                }} />
        );
    }
}

