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
import stylesMain, { mainColor } from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from './MainScreen';
import { TabBar } from '../customComponents/Tools';
import { Toolbar, BorderBottomTab, AppBar } from '../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
import { color } from 'react-native-reanimated';
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
        <AppBar titleHead={titleValue} menuBar noBottomColor />
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
        <BorderBottomTab data={item} fontStyle={[stylesFont.FontFamilySemiBold, stylesFont.FontSize6]}
            sendDataOut={(value) => getData(value)} />
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export let Button_Bar = (props) => {
    const { selectedIndex } = props;
    return <View>
        {selectedIndex == 0 ?
            <News {...props} /> :
            <Blog {...props} />}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Blog
export let Blog = (props) => {
    const item_Blog = [
        { image: `${ip}/MySQL/uploads/Group_image/1.jpg`, TitleBlog: 'โปรโมชั่นของแถม (Premium)', Detall: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ  โปรโมชั่นของแถม (Premium) ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/2.jpg`, TitleBlog: 'โปรโมชั่นลดราคา (Price off)', Detall: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ  โปรโมชั่นของแถม (Premium) ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/3.jpg`, TitleBlog: 'โปรโมชั่นยิ่งซื้อมาก ยิ่งประหยัดมาก', Detall: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ  โปรโมชั่นของแถม (Premium)ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/4.jpg`, TitleBlog: 'โปรโมชั่นสร้างโปรแกรมสำหรับลูกค้าประจำ', Detall: 'โปรโมชั่นลดราคา (Price off) ไม่ว่าจะเป็น ลดราคาเป็นเปอร์เซ็นต์ หรือลดราคาเป็นบาท เช่น ลด 10% หรือ ลดราคา 100 บาท  โปรโมชั่นของแถม (Premium)ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/5.jpg`, TitleBlog: 'โปรโมชั่นของแถม (Premium)', Detall: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ โปรโมชั่นของแถม (Premium)ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/6.jpg`, TitleBlog: 'โปรโมชั่นแลกซื้อ (Redeem Offer)', Detall: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ  โปรโมชั่นของแถม (Premium)ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/7.jpg`, TitleBlog: 'ชิงโชค (Lucky Draw)', Detall: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ  โปรโมชั่นของแถม (Premium)ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', }]
    let BlogItem = (
        item_Blog.map((value, index) => {
            return <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', marginTop: 3, paddingHorizontal: 10 }]} key={index}>
                <FastImage style={{ height: 100, width: 130, borderRadius: 8 }}
                    source={{ uri: value.image }}
                    resizeMode={FastImage.resizeMode.cover} />
                <View style={{ justifyContent: 'space-between', marginHorizontal: 3, width: '60%' }}>
                    <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>{value.TitleBlog}</Text>
                    <Text numberOfLines={3} style={[stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                        {value.Detall}</Text>
                    <View style={{ alignItems: 'flex-end', }}>
                        <TouchableOpacity style={[stylesMain.ItemCenter, { backgroundColor: mainColor, paddingHorizontal: 10, borderRadius: width / 2, marginTop: 3 }]}>
                            <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { color: '#FFFF' }]}>อ่านบทความเพื่อเติม</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        }))
    let onShare = async () => {
        try {
            const result = await Share.share({ message: `หลายคนคงจะเคยอยากรู้ วิธีดูเพชรแท้ ว่าจริงๆแล้วเพชรแท้ดูยังไง?\n${finip}`, });
            if (result.action === Share.sharedAction) {
                if (result.activityType) { } else { };
            } else if (result.action === Share.dismissedAction) { };
        } catch (error) { alert(error.message); };
    };
    return <>
        <View style={{ backgroundColor: '#FFFFFF', marginHorizontal: 3, padding: 3 }}>
            <FastImage source={{ uri: `${ip}/MySQL/uploads/Campaign/Voucher-07.jpg` }}
                style={{ height: 200, width: '100%', borderRadius: 5 }}
                resizeMode={FastImage.resizeMode.cover} />
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text numberOfLines={2} style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { width: '90 %' }]}>
                    ชิงโชค (Lucky Draw) ส่งชิงโชคเพื่อแลกของรางวัลใหญ่ เช่น ตั๋วเครื่องบิน ที่พัก ฯลฯ หลักการง่ายๆ คือ ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ</Text>
                <View style={[stylesMain.ItemCenter]}>
                    {/* <IconEntypo style={stylesStore.header_icon} name='eye' size={20} /> */}
                    <TouchableOpacity onPress={() => onShare()}>
                        <IconEntypo style={stylesStore.header_icon} name='share' size={25} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        {BlogItem}
    </>;
};
///----------------------------------------------------------------------------------------------->>>> Blog
export let News = (props) => {
    const item_Blog = [
        { image: `${ip}/MySQL/uploads/Group_image/1.jpg`, TitleBlog: 'โปรโมชั่นของแถม (Premium)', Detall: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ  โปรโมชั่นของแถม (Premium) ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/2.jpg`, TitleBlog: 'โปรโมชั่นลดราคา (Price off)', Detall: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ  โปรโมชั่นของแถม (Premium) ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/3.jpg`, TitleBlog: 'โปรโมชั่นยิ่งซื้อมาก ยิ่งประหยัดมาก', Detall: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ  โปรโมชั่นของแถม (Premium)ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/4.jpg`, TitleBlog: 'โปรโมชั่นสร้างโปรแกรมสำหรับลูกค้าประจำ', Detall: 'โปรโมชั่นลดราคา (Price off) ไม่ว่าจะเป็น ลดราคาเป็นเปอร์เซ็นต์ หรือลดราคาเป็นบาท เช่น ลด 10% หรือ ลดราคา 100 บาท  โปรโมชั่นของแถม (Premium)ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/5.jpg`, TitleBlog: 'โปรโมชั่นของแถม (Premium)', Detall: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ โปรโมชั่นของแถม (Premium)ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/6.jpg`, TitleBlog: 'โปรโมชั่นแลกซื้อ (Redeem Offer)', Detall: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ  โปรโมชั่นของแถม (Premium)ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/7.jpg`, TitleBlog: 'ชิงโชค (Lucky Draw)', Detall: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ  โปรโมชั่นของแถม (Premium)ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', }]
    let BlogItem = (
        item_Blog.map((value, index) => {
            return <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', marginTop: 3, padding: 5 }]} key={index}>
                <FastImage style={{ height: 100, width: 130, borderRadius: 8 }}
                    source={{ uri: value.image }}
                    resizeMode={FastImage.resizeMode.cover} />
                <View style={{ justifyContent: 'space-between', marginHorizontal: 3, width: width * 0.64 }}>
                    <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>{value.TitleBlog}</Text>
                    <Text numberOfLines={3} style={[stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                        {value.Detall}</Text>
                    <View style={{ alignItems: 'flex-end', }}>
                        <TouchableOpacity style={[stylesMain.ItemCenter, { backgroundColor: mainColor, paddingHorizontal: 10, borderRadius: width / 2, marginTop: 3 }]}>
                            <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { color: '#FFFF' }]}>อ่านบทความเพื่อเติม</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        }))
    let onShare = async () => {
        try {
            const result = await Share.share({ message: `หลายคนคงจะเคยอยากรู้ วิธีดูเพชรแท้ ว่าจริงๆแล้วเพชรแท้ดูยังไง?\n${finip}`, });
            if (result.action === Share.sharedAction) {
                if (result.activityType) { } else { };
            } else if (result.action === Share.dismissedAction) { };
        } catch (error) { alert(error.message); };
    };
    return <>
        <View style={{ backgroundColor: '#FFFFFF', marginHorizontal: 3, padding: 3 }}>
            <FastImage source={{ uri: `${ip}/MySQL/uploads/Campaign/Voucher-07.jpg` }}
                style={{ height: 200, width: '100%', borderRadius: 5 }}
                resizeMode={FastImage.resizeMode.cover} />
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text numberOfLines={2} style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { width: '90 %' }]}>
                    ชิงโชค (Lucky Draw) ส่งชิงโชคเพื่อแลกของรางวัลใหญ่ เช่น ตั๋วเครื่องบิน ที่พัก ฯลฯ หลักการง่ายๆ คือ ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ</Text>
                <View style={[stylesMain.ItemCenter]}>
                    {/* <IconEntypo style={stylesStore.header_icon} name='eye' size={20} /> */}
                    <TouchableOpacity onPress={() => onShare()}>
                        <IconEntypo style={stylesStore.header_icon} name='share' size={25} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        {BlogItem}
    </>;
};