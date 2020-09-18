///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { SafeAreaView, Text, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import ModalDropdown from 'react-native-modal-dropdown';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize5, FontSize6, FontSize7, } = stylesFont;
const { FlexRow, ItemCenter, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Growth);
function Growth(props) {
  return <SafeAreaView style={SafeAreaViews}>
    <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
    <Growths />
    <ExitApp {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Growths = (props) => {
  const arrayData1 = [50, 10, 40, 95, 4, 24, 50, 35, 53, 53, 24, 50];
  const arrayData2 = [10, 20, 40, 80, 1, 12, 10, 20, 30, 20, 10, 40];
  const data = arrayData1.concat(arrayData2);
  const fill = 'rgb(134, 65, 244)';
  const max = Math.max(...data);
  const min = Math.min(...data);
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const percen = [min, max];
  const barData = [
    { data: arrayData1.map((value) => ({ value })), svg: { fill: 'rgb(29, 70, 204)', }, },
    { data: arrayData2.map((value) => ({ value })), }];
  const List = [
    { name: 'รายได้ประจำเดือน', value: '+0.01%' },
    { name: 'การเติบโต (ยอดขาย)', value: '+0.01%' },
    { name: 'รายได้ต่อคลิก', value: '+0.01%' },
    { name: 'จำนวนคลิก', value: '+0.01%' }];
  return <>
    <View style={[FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', marginTop: 5, padding: 10, }]}>
      <Text style={[FontFamilyText, FontSize5]}>กราฟ</Text>
      <View style={[ItemCenter, { borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, flexDirection: 'row', width: 100, }]}>
        <ModalDropdown defaultValue={'ทั้งหมด'} dropdownStyle={{ borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, width: 100 }}
          dropdownTextStyle={[FontFamilyText, FontSize6, { textAlign: 'center' }]} options={['ทั้งหมด', 'สัปดาห์', 'เดือน', 'ปี']}
          textStyle={[FontFamilyText, FontSize6]} />
        <IconAntDesign name='caretdown' size={15} style={{ marginLeft: 5 }} />
      </View>
    </View>
    <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row', height: 200, padding: 20, }}>
      <YAxis contentInset={{ bottom: 30, top: 30, }} data={percen} formatLabel={(v) => `${v}%`} numberOfTicks={10}
        svg={{ fill: 'grey', fontSize: 9, }} />
      <View style={{ flex: 1, marginLeft: 5 }}>
        <BarChart contentInset={{ bottom: 30, left: 10, right: 10, top: 30, }} data={barData} showGrid={true} style={{ height: 160 }}
          svg={{ fill }} yAccessor={({ item }) => item.value}>
          <Grid />
        </BarChart>
        <XAxis contentInset={{ left: 10, right: 10, }} data={arrayData1} formatLabel={(v, i) => month[i]} style={{ marginHorizontal: 8 }}
          svg={{ fill: 'grey', fontSize: 9, }} />
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
    {List.map((v, i) => <View key={i} style={[FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', padding: 10 }]}>
      <Text style={[FontFamilyText, FontSize6]}>{v.name}</Text>
      <View style={FlexRow}>
        <Text style={[FontFamilyBold, FontSize7]}>เปอร์เซ็นการเติบโต</Text>
        <Text style={[FontFamilyBold, FontSize7, { color: '#4DCD9A', marginLeft: 10 }]}>{v.value}</Text>
      </View>
    </View>)}
  </>;
};