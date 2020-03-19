///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, TodayProduct, ExitAppModule } from './MainScreen';
import { Button_Bar, } from './ExclusiveScreen';
import { GetServices, } from './tools/Tools';
import { Slide } from './src_Promotion/DealScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Product_for_youScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderVisible: false,
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
  setSlider(sliderVisible) {
    this.setState({ sliderVisible })
  }
  render() {
    const { navigation } = this.props
    const { dataService, sliderVisible } = this.state
    var uri = ip + '/mysql/DataServiceMain.php';
    var dataBody = {
      type: 'sale'
    };
    const data = [{
      title: 'หมวดหมู่',
      subtitle: [{
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
    }, {
      title: 'แบรนด์',
      subtitle: [{
        name: 'BP world'
      }, {
        name: 'Tokyo boy'
      }, {
        name: 'JJ'
      }, {
        name: 'ETONWEAG'
      }]
    }]
    return (
      <SafeAreaView>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
        <AppBar1 backArrow navigation={navigation} titleHead='FIN คัดมาเพื่อคุณ' />
        <ScrollView stickyHeaderIndices={[2]}>
          <Slide />
          <View style={{ marginBottom: 10 }}></View>
          <Button_Bar setSliderVisible={this.setSlider.bind(this)} getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
          {
            dataService &&
            <TodayProduct noTitle navigation={navigation} loadData={dataService} typeip prepath='mysql' />
          }
        </ScrollView>
        <SlideTab2 data={data} sliderVisible={sliderVisible} setStateSliderVisible={this.setSlider.bind(this)} />
        <ExitAppModule navigation={navigation} />
      </SafeAreaView>
    );
  }
}