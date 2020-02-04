import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { AppBar, Slide } from './src_Promotion/DealScreen';
import { TodayProduct } from './MainScreen';
import { Button_Bar, SlideTab, PricesSlide } from './ExclusiveScreen';
import stylesTopic from '../style/styleTopic';
import stylesMain from '../style/StylesMainScreen';
import stylesFont from '../style/stylesFont';
import SlidingView from 'rn-sliding-view';
export const { width, height } = Dimensions.get('window');

export default class Product_for_youScreen extends Component {
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
      <SafeAreaView>
        <AppBar navigation={this.props.navigation} Title='FIN คัดมาเพื่อคุณ' />
        <Slide />
        <Button_Bar setSliderVisible={this.setSlider} getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
        <ScrollView>
          <TodayProduct noTitle />
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
              <View style={{ height: '90%' }}>
                <ScrollView>
                  <SlideTabGet />
                </ScrollView>
              </View>
              <View style={[stylesMain.FlexRow, stylesMain.SafeAreaViewNoBackground, { marginTop: 8 }]}>
                <View style={[stylesMain.ItemCenter, stylesTopic.BoxReset]}>
                  <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize3, stylesFont.FontFamilyText, { color: '#0A55A6' }]}>
                    รีเซ็ต</Text>
                </View>
                <View style={[stylesMain.ItemCenter, stylesTopic.BoxReset, { backgroundColor: '#0A55A6' }]}>
                  <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize3, stylesFont.FontFamilyText, { color: '#fff' }]}>
                    เสร็จสิ้น</Text>
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