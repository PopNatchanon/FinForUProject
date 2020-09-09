///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
// import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import { CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import ModalDropdown from 'react-native-modal-dropdown';
import DocumentPicker from 'react-native-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesProfile from '../../../style/StylesProfileScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, } from '../../../customComponents';
import { ExitAppModule } from '../../Main/Main';
import { Product_income } from '../../Seller/Income/Income';
import { TabBar } from '../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Business);
function Business(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
        <Growth />
        {/* <ExitAppModule /> */}
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Growth = (props) => {
    const arrayData1 = [50, 10, 40, 95, 4, 24, 50, 35, 53, 53, 24, 50,];
    const arrayData2 = [10, 20, 40, 80, 1, 12, 10, 20, 30, 20, 10, 40,];
    const data = arrayData1.concat(arrayData2);
    const fill = 'rgb(134, 65, 244)';
    const max = Math.max(...data);
    const min = Math.min(...data);
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const percen = [min, max,];
    const barData = [{
        data: data1.map((value) => ({ value })), svg: { fill: 'rgb(29, 70, 204)', },
    }, { data: data2.map((value) => ({ value })), },];
    return <>
        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', marginTop: 5, padding: 10, }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>กราฟ</Text>
            <View style={[stylesMain.ItemCenter,
            { borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, flexDirection: 'row', width: 100, }]}>
                <ModalDropdown defaultValue={'ทั้งหมด'} dropdownStyle={{ borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, width: 100 }}
                    dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'center' }]}
                    options={['ทั้งหมด', 'สัปดาห์', 'เดือน', 'ปี']} textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]} />
                <IconAntDesign name='caretdown' size={15} style={{ marginLeft: 5 }} />
            </View>
        </View>
        <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row', height: 200, padding: 20, }}>
            <YAxis contentInset={{ bottom: 30, top: 30, }} data={percen} formatLabel={(value) => `${value}%`} numberOfTicks={10}
                svg={{ fill: 'grey', fontSize: 9, }} />
            <View style={{ flex: 1, marginLeft: 5 }}>
                <BarChart contentInset={{ bottom: 30, left: 10, right: 10, top: 30, }} data={barData} showGrid={true} style={{ height: 160 }}
                    svg={{ fill }} yAccessor={({ item }) => item.value}>
                    <Grid />
                </BarChart>
                <XAxis contentInset={{ left: 10, right: 10, }} data={data1} formatLabel={(value, index) => month[index]}
                    style={{ marginHorizontal: 8 }} svg={{ fill: 'grey', fontSize: 9, }} />
            </View>
        </View>
        {/* <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 20, flexDirection: 'row', height: 150 }}>
          <YAxis
            data={data}
            contentInset={contentInset}
            svg={{ fill: 'grey', fontSize: 9,
            }}
            numberOfTicks={10}
          />
          <BarChart
            data={data}
            svg={{ fill }}
            contentInset={{ top: 10, bottom: 10 }}>
            <Grid />
          </BarChart>
          <XAxis
            data={data}
            formatLabel={(value, index) => index}
            contentInset={{ left: 10, right: 10 }}
            svg={{ fontSize: 9, fill: 'grey' }}
          />
        </View> */}
        {/* <View style={{ height: 200, padding: 20 }}>
          <LineChart
            style={{ flex: 1 }}
            data={data}
            gridMin={0}
            contentInset={{ top: 10, bottom: 10 }}
            svg={{ stroke: 'rgb(134, 65, 244)' }}>
            <Grid />
          </LineChart>
          <XAxis
            style={{ marginHorizontal: -10 }}
            data={data}
            formatLabel={(value, index) => index}
            contentInset={{ left: 10, right: 10 }}
            svg={{ fontSize: 10, fill: 'black' }}
          />
        </View> */}
        {/* <View style={{ backgroundColor: '#FFFFFF', padding: 10 }}>
          <StackedBarChart
            style={{ height: 150, }}
            keys={keys}
            colors={colors}
            data={data}
            showGrid={false}
            svg={{ fontSize: 10, fill: 'black' }}
            contentInset={{ top: 20, bottom: 10 }}
          />
          <XAxis
            style={{ marginHorizontal: 25}}
            data={data}
            formatLabel={(value, index) => index}
            contentInset={{ left: 10, right: 10, }}
            svg={{ fontSize: 10, fill: 'black' }}
          />
        </View> */}
        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', padding: 10 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>รายได้ประจำเดือน</Text>
            <View style={stylesMain.FlexRow}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>เปอร์เซ็นการเติบโต</Text>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#4DCD9A', marginLeft: 10 }]}>+0.01%</Text>
            </View>
        </View>
        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', padding: 10 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>การเติบโต (ยอดขาย)</Text>
            <View style={stylesMain.FlexRow}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>เปอร์เซ็นการเติบโต</Text>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#4DCD9A', marginLeft: 10 }]}>+0.01%</Text>
            </View>
        </View>
        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', padding: 10 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>รายได้ต่อคลิก</Text>
            <View style={stylesMain.FlexRow}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>เปอร์เซ็นการเติบโต</Text>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#4DCD9A', marginLeft: 10 }]}>+0.01%</Text>
            </View>
        </View>
        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', padding: 10 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>จำนวนคลิก</Text>
            <View style={stylesMain.FlexRow}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>เปอร์เซ็นการเติบโต</Text>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#4DCD9A', marginLeft: 10 }]}>+0.01%</Text>
            </View>
        </View>
    </>;
};