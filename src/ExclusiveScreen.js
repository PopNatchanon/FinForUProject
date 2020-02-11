import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import stylesTopic from '../style/styleTopic';
import stylesMain from '../style/StylesMainScreen';
import stylesFont from '../style/stylesFont';
import stylesDetail from "../style/StylesDetailScreen";
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { AppBar, Slide } from './src_Promotion/DealScreen';
import { TabBar } from './tools/Tools';
import { TodayProduct } from './MainScreen';
import SlidingView from 'rn-sliding-view';
export const { width, height } = Dimensions.get('window');

export default class ExclusiveScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderVisible: false,
    };
    this.setSlider = this.setSlider.bind(this)
  }
  setSlider(value) {
    this.setState({ sliderVisible: value })
  }
  render() {
    const { sliderVisible } = this.state
    return (
      <SafeAreaView style={stylesMain.SafeAreaView} >
        <AppBar navigation={this.props.navigation} Title='สินค้าสุด Exclusive' />
        <Slide />
        <Button_Bar setSliderVisible={this.setSlider} getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
        <ScrollView>
          <TodayProduct noTitle navigation={this.props.navigation} />
        </ScrollView>
        <SlidingView
          disableDrag
          componentVisible={sliderVisible}
          containerStyle={{
            backgroundColor: null,
            justifyContent: 'center',
            alignContent: 'stretch',
            width: '100%'
          }}
          position="right"
          changeVisibilityCallback={() => this.setState({ sliderVisible: !sliderVisible })}
        >
          <View style={stylesMain.FlexRow}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.setState({ sliderVisible: !sliderVisible })}
            >
              <View style={stylesTopic.BackgroundLeft}></View>
            </TouchableOpacity>
            <View style={[stylesMain.ItemCenter, stylesTopic.BackgroundRight, stylesMain.SafeAreaViewNoBackground]}>
              <View>
                <ScrollView>
                  <SlideTabGet />
                </ScrollView>
                <View style={[stylesMain.FlexRow, { height: 70 }]}>
                  <View style={[stylesMain.ItemCenter, stylesTopic.BoxReset]}>
                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize4, stylesFont.FontFamilyText, { color: '#0A55A6' }]}>
                      รีเซ็ต</Text>
                  </View>
                  <View style={[stylesMain.ItemCenter, stylesTopic.BoxReset, { backgroundColor: '#0A55A6' }]}>
                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize4, stylesFont.FontFamilyText, { color: '#fff' }]}>
                      เสร็จสิ้น</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </SlidingView>
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class SlideTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeText: false,
      selectedIndex: null,
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }
  dataItem(item) {
    const { selectedIndex } = this.state
    return (
      <View style={[stylesMain.FlexRow, { width: '100%', flexWrap: 'wrap' }]}>
        <TabBar
          sendData={this.updateIndex}
          SetValue={selectedIndex != null ? selectedIndex : -1}
          item={item}
          type='box'
          noLimit
          numberBox
          NoSelectTab
          radiusBox={4}
        />
      </View>
    )
  }
  dataContainer(Title, item) {
    return (
      <View>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, stylesMain.ItemCenterVertical, { marginLeft: 8, marginTop: 8, }]}>
          {Title}</Text>
        <View style={stylesMain.SafeAreaViewNoBackground}>
          <View style={{ width: '100%' }}>
            <View style={{ width: '100%', height: 140 }}>
              {
                this.state.activeText == true ?
                  this.dataItem(item) :
                  <ScrollView scrollEnabled={false}>
                    {this.dataItem(item)}
                  </ScrollView>
              }
              {item.length > 4 ?
                <TouchableOpacity onPress={() => {
                  this.state.activeText == true ?
                    this.setState({ activeText: false }) :
                    this.setState({ activeText: true })
                }}>
                  <View style={[stylesDetail.Detail_Box, stylesMain.ItemCenter, {
                    borderTopWidth: null,
                  }]}>
                    <Text style={[stylesDetail.Detail_Text_A, stylesMain.ItemCenterVertical, { fontFamily: 'SukhumvitSet-Text', }]}>
                      {
                        this.state.activeText == true ?
                          'ย่อ' :
                          'ดูเพิ่มเติม'
                      }</Text>
                    <IconEntypo name={this.state.activeText == true ? 'chevron-up' : 'chevron-down'} size={25} color='#0A55A6' />
                  </View>
                </TouchableOpacity> :
                null
              }
              <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                <View style={{
                  width: '80%', backgroundColor: '#fff', marginTop: 8, borderBottomColor: '#DCDCDC', borderBottomWidth: 3,
                }}></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
  render() {
    const { Title, item } = this.props
    return (
      <View style={{
        height: this.state.activeText == true ? 320 : 180
      }}>
        {this.dataContainer(Title, item)}
      </View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class SlideTabGet extends Component {
  render() {
    const item = [{
      name: 'กระเป๋าสะพายข้าง'
    }, {
      name: 'กระเป๋าสะพายหลัง'
    }, {
      name: 'กระเป๋าสตางค์'
    }, {
      name: 'กระเป๋าใส่นามบัตร'
    }, {
      name: 'กระเป๋าใส่เหรียญ'
    }, {
      name: 'กระเป๋าถือ'
    }, {
      name: 'อื่นๆ'
    }]
    const item2 = [{
      name: 'BP world'
    }, {
      name: 'Tokyo boy'
    }, {
      name: 'JJ'
    }, {
      name: 'ETONWEAG'
    }]
    return (
      <View>
        <View style={{ width: '100%' }}>
          <SlideTab Title='หมวดหมู่' item={item} />
          <SlideTab Title='แบรนด์' item={item2} />
          <PricesSlide />
        </View>
      </View >
    )
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class PricesSlide extends Component {
  render() {
    return (
      <View>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, stylesMain.ItemCenterVertical, { marginLeft: 8, marginTop: 8, }]}>
          ราคา</Text>
        <View style={stylesMain.SafeAreaViewNoBackground}>
          <View style={{ width: '100%' }}>
            <View style={[stylesMain.ItemCenter, stylesMain.FlexRow, { width: '100%', height: 80 }]}>
              <TextInput placeholder='ต่ำสุด' style={[
                stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesFont.FontSize4,
                stylesTopic.maxMinValue]}
              />
              <Text style={[stylesMain.ItemCenterVertical, { fontSize: 28, marginHorizontal: 8 }]}>-</Text>
              <TextInput placeholder='สูงสุด' style={[
                stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesFont.FontSize4,
                stylesTopic.maxMinValue]}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class Button_Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      sliderVisible: false,
    };
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }
  render() {
    const { getSliderVisible } = this.props;
    while (getSliderVisible.count < 1) {
      getSliderVisible.count = getSliderVisible.count + 1
      var Slider = getSliderVisible.getSlider
      this.setState({ sliderVisible: Slider, getSliderVisible })
    }
    const { sliderVisible } = this.state;
    const item = [{
      name: 'ยอดนิยม'
    }, {
      name: 'สินค้าขายดี'
    }, {
      name: 'ล่าสุด'
    }, {
      name: 'ราคา'
    }]
    return (
      <View>
        <View style={stylesTopic.Button_Bar}>
          <View style={stylesTopic.Button_Bar_BoxText}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>
              เรียงตาม</Text>
          </View>
          <View>
            <TabBar
              sendData={this.updateIndex}
              item={item}
              limitBox={width * 0.7}
              activeColor={'#fff'}
              activeFontColor={'#0A55A6'}
              type='tag'
            />
          </View>
          <TouchableOpacity onPress={() => {
            this.setState({ sliderVisible: !sliderVisible })
            this.props.setSliderVisible(!sliderVisible)
          }}>
            <View style={stylesTopic.Button_Bar_Icon}>
              <IconFeather RightItem name="filter" size={20} color='#0A55A6' />
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ตัวกรอง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}