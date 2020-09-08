///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, Share, TouchableOpacity,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
const { contain, cover, stretch, } = FastImage.resizeMode;
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesStore from '../../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from '../Main/Main';
import { TabBar } from '../../customComponents/Tools';
import { Toolbar, BorderBottomTab, AppBar, NavigationNavigate } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main

const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(FinService);
function FinService(props) {
    return (
        <SafeAreaView>
            <AppBar {...props} backArrow titleHead='FIN SERVICE' />
            <Banner_Service />
            <Button_Bar />
            <Menu_Bar />
        </SafeAreaView>
    );
}
///----------------------------------------------------------------------------------------------->>>>banner
export let Banner_Service = (props) => {
    const Service_image = { uri: `${ip}/MySQL/uploads/Service/Fin_Service.jpg`, };
    return <View>
        <FastImage resizeMode={cover} source={Service_image} style={{ height: 150, width: '100%', }} />
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
export let Button_Bar = (props) => {
    return <View>
        <Text>เมนู</Text>
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
export let Menu_Bar = (props) => {
    return <View style={{ borderColor: '#C9C9C9', borderWidth: 2, height: 'auto', aspectRatio: 1.5, marginHorizontal: 5, alignItems: 'center' }}>
        <View style={{ backgroundColor: mainColor, paddingHorizontal: 20, borderRadius: width / 2, margin: 5 }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>Digital Agency Services</Text>
        </View>
        <View style={{ width: '90%', }}>
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-around', marginTop: 5 }]}>
                <View style={{ borderColor: mainColor, borderWidth: 1, height: 100, width: '48.5%', borderRadius: 5 }}>
                    <FastImage />
                    <Text>CONTENT MARKETING</Text>
                </View>
                <View style={{ borderColor: mainColor, borderWidth: 1, height: 100, width: '48.5%', borderRadius: 5 }}>
                    <Text>ADMIN</Text>
                </View>
            </View>
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-around', marginTop: 5 }]}>
                <View style={{ borderColor: mainColor, borderWidth: 1, height: 100, width: '48.5%', borderRadius: 5 }}>
                    <Text>PHOTOGRAPH</Text>
                </View>
                <View style={{ borderColor: mainColor, borderWidth: 1, height: 100, width: '48.5%', borderRadius: 5 }}>
                    <Text>VIDEO CONTENT</Text>
                </View>
            </View>
        </View>
    </View>
}