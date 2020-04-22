///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> import
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styles
import stylesDetail from '../style/StylesDetailScreen'
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> tools
import { AppBar, ExitAppModule, GetData } from './MainScreen';
import { GetServices, ProductBox, LoadingScreen } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> ip
import { finip, ip, } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Recommend_Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetSource: true,
            activeGetServices: true,
            activeStore_Detail: true,
        };
    }
    activeStore_Detail = (activeStore_Detail) => {
        this.setState({ activeStore_Detail })
    }
    getSource = (value) => {
        this.setState({ activeGetSource: false, currentUser: value.currentUser, cokie: value.keycokie })
    }
    getData = (dataService) => {
        this.setState({ activeGetServices: false, dataService })
    }
    render() {
        const { navigation } = this.props;
        const { activeGetSource, activeGetServices, activeStore_Detail, cokie, currentUser, dataService } = this.state;
        const id_slide = navigation.getParam('id_slide');
        const uri_path = navigation.getParam('uri_path');
        const name_path = navigation.getParam('name_path');
        const uri = [finip, uri_path].join('/')
        var dataBody = {
            id_slide,
        };
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                {[
                    (activeGetSource == true || activeGetServices == true || activeStore_Detail == true) &&
                    <LoadingScreen key='LoadingScreen' />,
                    activeGetSource == false && activeGetServices == true && id_slide && cokie &&
                    <GetServices key={name_path} uriPointer={uri} dataBody={dataBody} Authorization={cokie}
                        // showConsole={name_path}
                        getDataSource={this.getData.bind(this)} />,
                    activeGetSource == true &&
                    <GetData key='GetData' getCokie={true} getUser={true} getSource={this.getSource.bind(this)} />
                ]}
                <AppBar leftBar='backarrow' rightBar='chat' navigation={navigation} />
                <ScrollView>
                    <Header dataService={{
                        slide_image: dataService && dataService.slide_image, list_slide: dataService && dataService.list_slide
                    }} />
                    {
                        dataService && dataService.list_product && dataService.list_product.length > 0 ? (
                            dataService.list_product.map((value, index) => {
                                return <Store_Detail cokie={cokie} currentUser={currentUser} dataService={value} key={index}
                                    navigation={navigation} activeStore_Detail={this.activeStore_Detail.bind(this)} />
                            })
                        ) : <></>
                    }
                </ScrollView>
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Header
export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { dataService } = this.props //slide_image: dataService.slide_image, list_slide: dataService.list_slide
        return dataService && dataService.list_slide && dataService.list_slide.length > 0 ? (
            dataService.list_slide.map((value, index) => {
                const image_header = [finip, dataService.slide_image.image_path, dataService.slide_image.image].join('/')
                return <View key={index} style={stylesTopic.Header} >
                    <FastImage
                        source={{ uri: image_header, }}
                        style={stylesTopic.Header_ImageBackground} />
                    <Text style={[stylesTopic.Header_Text, stylesFont.FontFamilyBold]}>
                        {/* {value.header} */}
                    </Text>
                    <View style={stylesTopic.Header_BoxDetail}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, stylesTopic.Header_DetailText, {
                            textAlign: 'center',
                        }]}>{value.header}</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesTopic.Header_DetailText]}>
                            {value.detail}</Text>
                    </View>
                </View>
            })
        ) : <></>
    }
}
///----------------------------------------------------------------------------------------------->>>> Store_Detail
export class Store_Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFollow: false,
            activeGetServices: true,
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
    setStateFollow = () => {
        const { activeStore_Detail } = this.props
        this.setState({ activeFollow: true, activeGetServices: true })
        activeStore_Detail(true)
    }
    getData = (dataService2) => {
        const { activeStore_Detail } = this.props
        this.setState({ activeFollow: false, activeGetServices: false, dataService2 })
        activeStore_Detail(false)
    }
    render() {
        const { cokie, currentUser, dataService, navigation } = this.props
        const { activeFollow, activeGetServices, dataService2 } = this.state
        const uri = [finip, 'brand/follow_data'].join('/')
        var dataBody = {
            id_customer: currentUser.id_customer,
            id_store: dataService.id_store,
            follow: activeFollow ? "active" : '',
        };
        const image_header = [finip, dataService.image_head_path, dataService.image_head].join('/')
        const image_store = [finip, dataService.image_path, dataService.store_image].join('/')
        return (
            <View style={stylesMain.FrameBackground}>
                {
                    activeGetServices == true && cokie &&
                    <GetServices key={'follow_data'} uriPointer={uri} dataBody={dataBody} Authorization={cokie}
                        // showConsole={'follow_data'}
                        getDataSource={this.getData.bind(this)} />
                }
                <View>
                    <FastImage
                        style={stylesTopic.Store_Image}
                        source={{ uri: image_header }} />
                    <View style={stylesTopic.Store_Box}>
                        <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'StoreScreen', {
                            id_item: dataService.id_store
                        })}>
                            <View style={stylesTopic.Store_Pro}>
                                <FastImage
                                    style={{ height: '100%', width: '100%' }}
                                    source={{ uri: image_store }} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ margin: 10, }}>
                            <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'StoreScreen', {
                                id_item: dataService.id_store
                            })}>
                                <View style={stylesTopic.Store_Name}>
                                    <Text style={[stylesTopic.Store_NameText, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
                                        {dataService.store_name}</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={stylesTopic.Store_Star}>
                                {
                                    dataService.rating != 'ยังไม่มีการรีวิว' ?
                                        this.starReview(dataService.rating, 20) :
                                        <Text style={stylesFont.FontFamilyText}>{dataService.rating}</Text>
                                }
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>คะแนนร้านค้า: 4.8 จาก 5</Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <View style={stylesTopic.Store_BoxButton}>
                                    <View style={stylesTopic.Store_Button}>
                                        <TouchableOpacity onPress={this.setStateFollow.bind(this)}>
                                            <Text style={[stylesFont.FontFamilyText, { textAlign: 'center', color: '#0A55A6' }]}>
                                                {dataService2 && dataService2.output}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity
                                        onPress={this.navigationNavigateScreen.bind(this, 'StoreScreen', { id_item: 23 })}
                                        style={[stylesTopic.Store_Button, { backgroundColor: '#0A55A6', marginLeft: 8, }]}>
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
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>      รองเท้าสไตล์หวานแหววเอาใจคุณหนู กับ
                        รองเท้าหุ้มส้นประดับมุก รองเท้าทรง sandle รัดส้นเตี้ยหัวแหลมเพิ่มลุคเฟมินีนสุดๆ ไหนจะรองเท้าส้นสูงพร้อมออกงานก็มีหมด สาวๆ คนไหนอยากจะ
                        ใส่รองเท้าชิวๆ ในวันสบายๆ หรือ อยากได้ลุคกึ่งทางการไปทำงานได้ ต้องร้านนี้เลยจ้า จะเอาสีขาวออฟไวท์ เมทัลลิค หรือโทนพาสเทลก็มีหมด</Text>
                    </View>
                    <View>
                        <View style={stylesTopic.Store_BoxText_Product}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, stylesTopic.Store_Text_Product]}>
                                สินค้าขายดีประจำร้าน</Text>
                        </View>
                        <View style={stylesTopic.Store_Product}>
                            <ScrollView horizontal>
                                {
                                    dataService &&
                                    <ProductBox
                                        dataService={dataService.product}
                                        navigation={navigation}
                                        mode='row3col1'
                                        pointerUrl='DetailScreen'
                                        pointerid_store
                                        nameSize={14}
                                        priceSize={15}
                                        dispriceSize={15} />
                                }
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}