///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, Share, TouchableOpacity,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from './MainScreen';
import { TabBar } from '../customComponents/Tools';
import { Toolbar } from '../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
function NewsScreen(props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    var titleValue;
    selectedIndex == 0 ? titleValue = 'NEWS' : titleValue = 'BLOG';
    return <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
        <AppBar1 titleHead={titleValue} menuBar />
        <MenuBar getData={value => setSelectedIndex(value)} />
        <ScrollView>
            <Button_Bar selectedIndex={selectedIndex} />
        </ScrollView>
        <Toolbar {...props} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> MenuBar
export let MenuBar = (props) => {
    const { getData } = props;
    const item = [{ name: 'NEWS' }, { name: 'BLOG' }];
    return <View>
        <View>
            <TabBar sendData={value => getData(value.selectedIndex)} item={item} noSpace setVertical={2} widthBox={100}
                spaceColor='#0A55A6' activeColor='#fff' fontColor='#fff' />
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export let Button_Bar = (props) => {
    const { selectedIndex } = props;
    return <View>
        <Blog Body={selectedIndex == 0 ? 'News' : 'Blog'} />
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Blog
export let Blog = (props) => {
    let onShare = async () => {
        try {
            const result = await Share.share({ message: `หลายคนคงจะเคยอยากรู้ วิธีดูเพชรแท้ ว่าจริงๆแล้วเพชรแท้ดูยังไง?\n${finip}`, });
            if (result.action === Share.sharedAction) {
                if (result.activityType) { } else { };
            } else if (result.action === Share.dismissedAction) { };
        } catch (error) { alert(error.message); };
    };
    return <View style={stylesStore.header_News}>
        <View style={stylesStore.header_Box}>
            <FastImage style={stylesStore.header_image} source={{ uri: `${ip}/MySQL/uploads/page_News/page_J_News.jpg` }} />
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <Text numberOfLines={2} style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { width: '80%' }]}>
                    หลายคนคงจะเคยอยากรู้ วิธีดูเพชรแท้ ว่าจริงๆแล้วเพชรแท้ดูยังไง?</Text>
                <View>
                    <View style={stylesStore.header_icon_Box}>
                        <IconEntypo style={stylesStore.header_icon} name='eye' size={25} />
                        <TouchableOpacity onPress={() => onShare()}>
                            <IconEntypo style={stylesStore.header_icon} name='share' size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        <View style={stylesStore.body_Box}>
            <View style={stylesStore.body_Box_A}>
                <FastImage style={stylesStore.body_image}
                    source={{ uri: `${ip}/MySQL/uploads/page_News/วิธีดูเข็มและรองเท้แตะกุชชี่ของแท้-660x330.jpg` }} />
                <Text numberOfLines={5} style={[stylesStore.body_Text, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                    วันนี้เราจะมาสอนวิธีการแยกเข็มขัดกุชชี่และรองเท้าแตะกุชชี่</Text>
            </View>
        </View>
        <View style={stylesStore.body_Box}>
            <View style={stylesStore.body_Box_A}>
                <FastImage style={stylesStore.body_image} source={{ uri: `${ip}/MySQL/uploads/page_News/page_J_News.jpg` }} />
                <Text numberOfLines={5} style={[stylesStore.body_Text, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                    หลายคนคงจะเคยอยากรู้วิธีดูเพชรแท้ว่าจริงๆแล้วเพชรแท้ดูยังไง?</Text>
            </View>
        </View>
        <View style={stylesStore.body_Box}>
            <View style={stylesStore.body_Box_A}>
                <FastImage style={stylesStore.body_image} source={{ uri: `${ip}/MySQL/uploads/page_News/Supreme.jpg` }} />
                <Text numberOfLines={5} style={[stylesStore.body_Text, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                    ถ้าพูดถึงแบรนด์ที่มาแรงและหลายคนก็ยังคงชื่อชอบอยู่ในช่วง 2 – 3 ปีที่ผ่านมานี้ก็ต้องแบรนด์ ‘Supreme’ นี่แหละค่ะ</Text>
            </View>
        </View>
        <View style={stylesStore.body_Box}>
            <View style={stylesStore.body_Box_A}>
                <FastImage style={stylesStore.body_image}
                    source={{ uri: `${ip}/MySQL/uploads/page_News/วิธีดูเข็มและรองเท้แตะกุชชี่ของแท้-660x330.jpg` }} />
                <Text numberOfLines={5} style={[stylesStore.body_Text, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                    วันนี้เราจะมาสอนวิธีการแยกเข็มขัดกุชชี่และรองเท้าแตะกุชชี่</Text>
            </View>
        </View>
    </View>;
};