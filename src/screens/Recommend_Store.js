///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView, ScrollView, Text, TouchableOpacity, View, Share,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, } from '../actions';
///----------------------------------------------------------------------------------------------->>>> import
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> styles
import stylesDetail from '../style/StylesDetailScreen'
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> tools
import { AppBar, ExitAppModule, } from './MainScreen';
import { GetData, GetServices, ProductBox, LoadingScreen, NavigationNavigateScreen, FlatProduct } from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData,
    getFetchData: state.singleFetchDataFromService,
    activeFetchData: state.activeFetchData,
});
const mapDispatchToProps = ({
    checkCustomer,
    fetchData,
    multiFetchData,
    setActiveFetch,
    setFetchToStart,
});
export default connect(mapStateToProps, mapDispatchToProps)(Recommend_Store)
function Recommend_Store(props) {
    const { navigation, route } = props;
    const id_slide = route.params?.id_slide;
    const name_path = route.params?.name_path;
    const uri_path = route.params?.uri_path;
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [activeStore_Detail, setActiveStore_Detail] = useState(true);
    const [cokie, setCokie] = useState(true);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    const uri = `${finip}/${uri_path}`
    var dataBody = { id_slide, };
    useEffect(() => {
        activeGetSource &&
            GetData({
                getCokie: true, getUser: true, getSource: value => {
                    setActiveGetSource(false);
                    setCokie(value.keycokie);
                    setCurrentUser(value.currentUser);
                }
            });
    }, [activeGetSource]);
    useEffect(() => {
        activeGetSource == false && activeGetServices == true && id_slide && cokie &&
            GetServices({
                key: name_path, uriPointer: uri, dataBody, Authorization: cokie, getDataSource: value => {
                    setActiveGetServices(false);
                    setDataService(value);
                }
            });
    }, [activeGetSource == false && activeGetServices == true && id_slide && cokie]);
    return (
        <SafeAreaView style={stylesMain.SafeAreaView}>
            {
                (activeGetSource == true || activeGetServices == true || activeStore_Detail == true) &&
                <LoadingScreen key='LoadingScreen' />
            }
            <AppBar {...props} backArrow cartBar chatBar />
            <ScrollView>
                <Header dataService={{
                    slide_image: dataService && dataService.slide_image, list_slide: dataService && dataService.list_slide
                }} />
                {
                    dataService && dataService.list_product && dataService.list_product.length > 0 ? (
                        dataService.list_product.map((value, index) => {
                            return <Store_Detail {...props} cokie={cokie} currentUser={currentUser} dataService={value} key={index}
                                activeStore_Detail={values => setActiveStore_Detail(values)} />
                        })
                    ) : <></>
                }
            </ScrollView>
            <ExitAppModule {...props} />
        </SafeAreaView>
    );
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
                const image_header = `${finip}/${dataService.slide_image.image_path}/${dataService.slide_image.image}`
                return <View key={index} style={stylesTopic.Header} >
                    <FastImage
                        source={{ uri: image_header, }}
                        style={stylesTopic.Header_ImageBackground}
                        resizeMode={FastImage.resizeMode.stretch}
                    />
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
    onShare = async () => {
        try {
            const result = await Share.share({
                message: `หลายคนคงจะเคยอยากรู้ วิธีดูเพชรแท้ ว่าจริงๆแล้วเพชรแท้ดูยังไง?\n${finip}`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }
    render() {
        const { cokie, currentUser, dataService, navigation } = this.props
        const { activeFollow, activeGetServices, dataService2 } = this.state
        const uri = `${finip}/brand/follow_data`
        var dataBody = {
            id_customer: currentUser.id_customer,
            id_store: dataService.id_store,
            follow: activeFollow ? "active" : '',
        };
        const image_header = `${finip}/${dataService.image_head_path}/${dataService.image_head}`
        const image_store = `${finip}/${dataService.image_path}/${dataService.store_image}`
        activeGetServices == true && cokie &&
            GetServices({ uriPointer: uri, dataBody, Authorization: cokie, getDataSource: this.getData.bind(this), })
        return (
            <View style={{ backgroundColor: '#FFFFFF', width: '100%', marginVertical: 5 }}>
                <View>
                    <FastImage
                        style={stylesTopic.Store_Image}
                        source={{ uri: image_header }}
                        resizeMode={FastImage.resizeMode.stretch}
                    />
                    <View style={stylesTopic.Store_Box}>
                        <TouchableOpacity onPress={() => NavigationNavigateScreen({
                            goScreen: 'StoreScreen', setData: { id_item: dataService.id_store }, navigation
                        })}>
                            <View style={[stylesTopic.Store_Pro, stylesMain.ItemCenter]}>
                                <FastImage
                                    style={{ height: '70%', width: '70%' }}
                                    source={{ uri: image_store }}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={{ margin: 10, }}>
                            <TouchableOpacity onPress={() => NavigationNavigateScreen({
                                goScreen: 'StoreScreen', setData: { id_item: dataService.id_store }, navigation
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
                                        <TouchableOpacity onPress={() => this.setStateFollow()}>
                                            <Text style={[stylesFont.FontFamilyText, { textAlign: 'center', color: '#0A55A6' }]}>
                                                {dataService2 && dataService2.output}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPress={() => NavigationNavigateScreen({
                                        goScreen: 'StoreScreen', setData: { id_item: dataService.id_store }, navigation
                                    })} style={[stylesTopic.Store_Button, { backgroundColor: '#0A55A6', marginLeft: 8, }]}>
                                        <Text style={[stylesFont.FontFamilyText, { textAlign: 'center', color: '#FFFFFF' }]}>
                                            เข้าดูร้านค้า</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={stylesTopic.Store_BoxIcon}>
                                    <TouchableOpacity style={stylesTopic.Store_Icon} onPress={() => this.onShare()}>
                                        <IconEntypo name='share' size={20} />
                                        <Text style={stylesFont.FontFamilyText}> แชร์</Text>
                                    </TouchableOpacity>
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
                            {
                                dataService && dataService.product &&
                                <FlatProduct {...this.props} custumNavigation='Store_Detail' dataService={dataService.product}
                                    mode='row3' nameFlatProduct='Store_Detail' nameSize={14} priceSize={15} dispriceSize={15} />
                            }
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}