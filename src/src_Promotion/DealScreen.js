import React, { Component, PureComponent } from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import styleMain from '../../style/StylesMainScreen';
import stylesDeal from '../../style/stylePromotion-src/styleDealScreen';
import stylesStore from '../../style/StylesStoreScreen';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import stylesFont from '../../style/stylesFont';
import { AppBar1 } from '../MainScreen';
export const { width, height } = Dimensions.get('window');

export default class DealScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styleMain.SafeAreaView}>
        <AppBar1 titleHead={'ดีลสุดคุ้ม'} backArrow searchBar chatBar navigation={this.props.navigation} />
        <ScrollView>
          <Slide />
          <Deal_Calendar />
          <Deal_Today navigation={this.props.navigation} />
          <Deal_Exclusive navigation={this.props.navigation} />
          <Coupon_Store />
          <Second_Store navigation={this.props.navigation} />
          <ProDed_Store />
          <ProDed_New_Store />
          <Shop_Deal_ForU navigation={this.props.navigation} />
        </ScrollView>
        <Button_Bar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

///----------------------------------slide----------------------------------------///

export class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSourceSlide: [],
      activeSlide: 0,
    };
  }

  getDataSlide() {
    var dataBody = {
      slide: 'banner'
    };
    fetch(finip + '/home/home_mobile', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataBody),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSourceSlide: responseJson,
        })
      })
      .catch((error) => {
        console.error(error);
      })
  }
  componentDidMount() {
    this.getDataSlide()
  }
  _renderItem = ({ item, indexs }) => {
    var dataMySQL = [finip, item.image_path, item.image].join('/');
    return (
      <View style={stylesDeal.child} key={indexs}>
        <FastImage
          source={{
            uri: dataMySQL,
          }}
          style={stylesDeal.childSlide}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </View>
    );
  }

  get pagination() {
    const { dataSourceSlide, activeSlide } = this.state;
    return (
      <View style={{ marginTop: -60, height: 70, marginBottom: -10, }}>
        <Pagination
          dotsLength={dataSourceSlide.length}
          activeDotIndex={activeSlide}
          // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 30,
            // backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(255, 255, 255, 0.92)',
            borderWidth: 2,
          }}
          inactiveDotStyle={{
            width: 15,
            height: 5,
            borderRadius: 5,
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
          }}
          carouselRef={this.activeSlide}
          tappableDots={!!this.activeSlide}
          // inactiveDotOpacity={0.6}
          inactiveDotScale={0.6}
        />
      </View>
    );
  }
  render() {
    return (
      <View>
        <Carousel
          ref={c => this.activeSlide = c}
          data={this.state.dataSourceSlide}
          renderItem={this._renderItem}
          sliderWidth={width * 1}
          itemWidth={width * 1}
          sliderHeight={height * 0.5}
          loop={true}
          autoplay={true}
          autoplayDelay={3000}
          autoplayInterval={3000}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
        />
        {this.pagination}
      </View>
    );
  }
}

///-------------------------------------------------------------------------///

export class Button_Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={stylesDeal.Button_Bar}>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('DealScreen')}>
          <View style={stylesDeal.Button_Bar_Box}>
            <FastImage style={stylesDeal.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b01.png',
              }}
            />

            <Text style={[stylesDeal.Button_Bar_BoxText, stylesFont.FontFamilyText]}>ดีลสุดพิเศษ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('CoinScreen')}>
          <View style={stylesDeal.Button_Bar_Box}>
            <FastImage style={stylesDeal.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b02.png',
              }}
            />
            <Text style={[stylesDeal.Button_Bar_BoxText, stylesFont.FontFamilyText]}>FinCoin</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('CampaignScreen')}>
          <View style={stylesDeal.Button_Bar_Box}>
            <FastImage style={stylesDeal.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b03.png',
              }}
            />
            <Text style={[stylesDeal.Button_Bar_BoxText, stylesFont.FontFamilyText]}>แคมเปญ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('The_BestFinScreen')}>
          <View style={stylesDeal.Button_Bar_Box}>
            <FastImage style={stylesDeal.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b04.png',
              }}
            />
            <Text style={[stylesDeal.Button_Bar_BoxText, stylesFont.FontFamilyText]}>สุดคุ้มสุดฟิน</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('Installment_payScreen')}>
          <View style={stylesDeal.Button_Bar_Box}>
            <FastImage style={stylesDeal.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b05.png',
              }}
            />
            <Text style={[stylesDeal.Button_Bar_BoxText, stylesFont.FontFamilyText]}>ผ่อนชำระ 0%</Text>
          </View>
        </TouchableOpacity>
      </View>

    );
  }
}

///-------------------------------------------------------------------------///

export class Deal_Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ paddingHorizontal: 2 }}>
        <View style={[styleMain.FrameBackground, { backgroundColor: '#B5F5D1', width: '100%' }]}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#5094EE', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ดีลเด็ดตามปฏิทิน</Text>
          </View>
          <View style={stylesDeal.Deal_Calendar_Box}>
            <View style={stylesDeal.Deal_Calendar_BoxN}>
              <FastImage style={{ height: '100%', width: '100%' }}
                source={{
                  uri: ip + '/MySQL/uploads/Deal_Today/ded1.jpg',
                }}
              />
            </View>
            <View style={stylesDeal.Deal_Calendar_BoxN}>
              <FastImage style={{ height: '100%', width: '100%' }}
                source={{
                  uri: ip + '/MySQL/uploads/Deal_Today/ded2.jpg',
                }}
              />
            </View>
            <View style={stylesDeal.Deal_Calendar_BoxN}>
              <FastImage style={{ height: '100%', width: '100%' }}
                source={{
                  uri: ip + '/MySQL/uploads/Deal_Today/ded6.jpg',
                }}
              />
            </View>
            <View style={stylesDeal.Deal_Calendar_BoxN}>
              <FastImage style={{ height: '100%', width: '100%' }}
                source={{
                  uri: ip + '/MySQL/uploads/Deal_Today/ded5.jpg',
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

///-------------------------------------------------------------------------///

export class Deal_Today extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={[styleMain.FrameBackground, { backgroundColor: '#AF5F92', width: '100%' }]}>
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#D5CD5B', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ดีลเด็ดประจำวัน</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Deal_Topic', { selectedIndex: 0 })} >
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndW]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10, }}>
          <View style={stylesDeal.Deal_Today_Box}>
            <Text style={stylesFont.FontFamilyText}> คูปองส่วนลดจาก FIN</Text>
            <ScrollView horizontal>
              <View style={stylesDeal.Deal_Today_BoxImage}>
                <View style={stylesDeal.Coupon_BOX}>
                  <View style={{ margin: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>รับเงินคืน 50% Coins</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>ใช้ได้ก่อน 31-01-2020</Text>
                  </View>
                  <View style={[stylesDeal.Coupon_BOX_A,{ backgroundColor: '#86CFFF',}]}>
                    <View style={stylesDeal.Coupon_BOX_B}>
                      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>50%</Text>
                    </View>
                    <TouchableOpacity>
                      <View style={stylesDeal.Coupon_BOX_Text}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เก็บ</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={stylesDeal.Coupon_BOX}>
                  <View style={{ margin: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>รับเงินคืน 50% Coins</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>ใช้ได้ก่อน 31-01-2020</Text>
                  </View>
                  <View style={[stylesDeal.Coupon_BOX_A,{ backgroundColor: '#86CFFF',}]}>
                    <View style={stylesDeal.Coupon_BOX_B}>
                      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>50%</Text>
                    </View>
                    <TouchableOpacity>
                      <View style={stylesDeal.Coupon_BOX_Text}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เก็บ</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={stylesDeal.Coupon_BOX}>
                  <View style={{ margin: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>รับเงินคืน 50% Coins</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>ใช้ได้ก่อน 31-01-2020</Text>
                  </View>
                  <View style={[stylesDeal.Coupon_BOX_A,{ backgroundColor: '#86CFFF',}]}>
                    <View style={stylesDeal.Coupon_BOX_B}>
                      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>50%</Text>
                    </View>
                    <TouchableOpacity>
                      <View style={stylesDeal.Coupon_BOX_Text}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เก็บ</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={stylesDeal.Coupon_BOX}>
                  <View style={{ margin: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>รับเงินคืน 50% Coins</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>ใช้ได้ก่อน 31-01-2020</Text>
                  </View>
                  <View style={[stylesDeal.Coupon_BOX_A,{ backgroundColor: '#86CFFF',}]}>
                    <View style={stylesDeal.Coupon_BOX_B}>
                      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>50%</Text>
                    </View>
                    <TouchableOpacity>
                      <View style={stylesDeal.Coupon_BOX_Text}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เก็บ</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <View>
          <View style={{ padding: 10, }}>
            <View style={stylesDeal.Deal_Today_Box}>
              <Text style={stylesFont.FontFamilyText}> คูปองส่วนลดจากร้าน</Text>
              <ScrollView horizontal>
                <View style={stylesDeal.Deal_Today_BoxImage}>
                <View style={stylesDeal.Coupon_BOX}>
                  <View style={{ margin: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>รับเงินคืน 50% Coins</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>ใช้ได้ก่อน 31-01-2020</Text>
                  </View>
                  <View style={[stylesDeal.Coupon_BOX_A,{ backgroundColor: '#E43333',}]}>
                    <View style={stylesDeal.Coupon_BOX_B}>
                      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>50%</Text>
                    </View>
                    <TouchableOpacity>
                      <View style={stylesDeal.Coupon_BOX_Text}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เก็บ</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={stylesDeal.Coupon_BOX}>
                  <View style={{ margin: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>รับเงินคืน 50% Coins</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>ใช้ได้ก่อน 31-01-2020</Text>
                  </View>
                  <View style={[stylesDeal.Coupon_BOX_A,{ backgroundColor: '#E43333',}]}>
                    <View style={stylesDeal.Coupon_BOX_B}>
                      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>50%</Text>
                    </View>
                    <TouchableOpacity>
                      <View style={stylesDeal.Coupon_BOX_Text}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เก็บ</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={stylesDeal.Coupon_BOX}>
                  <View style={{ margin: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>รับเงินคืน 50% Coins</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>ใช้ได้ก่อน 31-01-2020</Text>
                  </View>
                  <View style={[stylesDeal.Coupon_BOX_A,{ backgroundColor: '#E43333',}]}>
                    <View style={stylesDeal.Coupon_BOX_B}>
                      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>50%</Text>
                    </View>
                    <TouchableOpacity>
                      <View style={stylesDeal.Coupon_BOX_Text}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เก็บ</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={stylesDeal.Coupon_BOX}>
                  <View style={{ margin: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>รับเงินคืน 50% Coins</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>ใช้ได้ก่อน 31-01-2020</Text>
                  </View>
                  <View style={[stylesDeal.Coupon_BOX_A,{ backgroundColor: '#E43333',}]}>
                    <View style={stylesDeal.Coupon_BOX_B}>
                      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>50%</Text>
                    </View>
                    <TouchableOpacity>
                      <View style={stylesDeal.Coupon_BOX_Text}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เก็บ</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

///-------------------------------------------------------------------------///

export class Deal_Exclusive extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={[styleMain.FrameBackground, { backgroundColor: '#CABA5A', width: '100%' }]}>
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#6170F8', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ดีลสุด Exclusive</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Deal_Topic', { selectedIndex: 1 })} >
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndW]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesDeal.Deal_Exclusive}>
          <View style={stylesDeal.Deal_Exclusive_BoxImageIcon}>
            <Text style={[stylesFont.FontFamilyText, { color: '#FFFFFF' }]}>สินค้าลด 60% </Text>
            <FastImage style={stylesDeal.Deal_Exclusive_Image}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/ht.png',
              }}
            />
          </View>
          <View style={stylesDeal.Deal_Exclusive_Box}>
          </View>
          <View style={stylesDeal.Deal_Exclusive_Box}>
          </View>
        </View>
        <View style={stylesDeal.Deal_Exclusive}>
          <View style={stylesDeal.Deal_Exclusive_Box}>
          </View>
          <View style={stylesDeal.Deal_Exclusive_Box}>
          </View>
          <View style={stylesDeal.Deal_Exclusive_Box}>
          </View>
        </View>
      </View>
    );
  }
}

///-------------------------------------------------------------------------///

export class Coupon_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styleMain.FrameBackground}>

      </View>
    );
  }
}

///-------------------------------------------------------------------------///

export class Second_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSale: [],
      dataSourceSlide: [],
      activeSlide: 0,
    };
  }

  getDataSlide() {
    var dataBody = {
      slide: 'banner'
    };
    fetch(finip + '/home/home_mobile', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataBody),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSourceSlide: responseJson,
        })
      })
      .catch((error) => {
        console.error(error);
      })
  }
  _renderItem = ({ item, indexs }) => {
    var dataMySQL = [finip, item.image_path, item.image].join('/');
    return (
      <View key={indexs}>
        <FastImage
          source={{
            uri: dataMySQL,
          }}
          style={stylesDeal.Second_Store_Slide_image}
        />
        <View style={stylesDeal.Second_Store_Slide_BoxText}>
          <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ร้าน K.O.D สินค้ามือสอง ลดสูงสุด 50 %</Text>
        </View>

      </View>
    );
  }

  get pagination() {
    const { dataSourceSlide, activeSlide } = this.state;
    return (
      <View style={{ marginTop: -60 }}>
        <Pagination
          dotsLength={dataSourceSlide.length}
          activeDotIndex={activeSlide}
          // containerStyle={{ backgroundColor: 'rgba(120, 120, 120, 0.1)' }}
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 30,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(255, 255, 255, 0.92)',
            borderWidth: 2,
          }}
          inactiveDotStyle={{
            width: 15,
            height: 5,
            borderRadius: 5,
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
          }}
          carouselRef={this.activeSlide}
          tappableDots={!!this.activeSlide}
          // inactiveDotOpacity={0.6}
          inactiveDotScale={0.6}
        />
      </View>
    );
  }

  getFlashSale() {
    var url = ip + '/mysql/DataServiceMain.php';
    var dataBody = {
      type: 'sale'
    };
    axios.post(
      url,
      dataBody,
    ).then((getData) => {
      this.setState({
        dataSale: getData.data,
      })
    })
  }

  componentDidMount() {
    this.getFlashSale();
    this.getDataSlide()
  }


  render() {
    let dataFlashSale = this.state.dataSale.map((item, indexs) => {
      var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
      return (
        <TouchableOpacity
          activeOpacity={1}
          key={indexs}
          onPress={
            () => this.props.navigation.navigate(
              'DetailScreen', {
              id_item: item.id_product
            })
          }
        >
          <View style={styleMain.BoxProduct1Box}>
            <View style={styleMain.BoxProduct1ImageofLines}>
              <FastImage
                source={{
                  uri: dataMySQL,
                }}
                style={styleMain.BoxProduct1Image}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <View style={styleMain.BoxProduct1NameofLines}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                {item.name}</Text>
            </View>
            <View style={styleMain.BoxProduct1PriceofLines}>
              <NumberFormat
                value={item.full_price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'฿'}
                renderText={value =>
                  <Text style={[styleMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                    {value}</Text>
                }
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    })
    return (
      <View style={[styleMain.FrameBackground, { width: '100%' }]}>
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#95D370', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ร้านมือสองลดราคา</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Deal_Topic', { selectedIndex: 2 })} >
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndB]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesDeal.Second_Store}>
          <View style={stylesDeal.Second_Store_SlideA}>
            <Carousel
              ref={c => this.activeSlide = c}
              data={this.state.dataSourceSlide}
              renderItem={this._renderItem}
              sliderWidth={width * 0.89}
              itemWidth={width * 0.89}
              sliderHeight={160}
              loop={true}
              autoplay={true}
              autoplayDelay={3000}
              autoplayInterval={3000}
              onSnapToItem={(index) => this.setState({ activeSlide: index })}
            />
          </View>
          <View style={stylesDeal.Second_Store_SlideB}>
            <View style={stylesDeal.Second_Store_SlideB_Box}>
              <Carousel
                ref={c => this.activeSlide = c}
                data={this.state.dataSourceSlide}
                renderItem={this._renderItem}
                sliderWidth={width * 0.43}
                itemWidth={width * 0.43}
                sliderHeight={120}
                loop={true}
                autoplay={true}
                autoplayDelay={3000}
                autoplayInterval={3000}
                onSnapToItem={(index) => this.setState({ activeSlide: index })}
              />
            </View>
            <View style={stylesDeal.Second_Store_SlideB_Box}>
              <Carousel
                ref={c => this.activeSlide = c}
                data={this.state.dataSourceSlide}
                renderItem={this._renderItem}
                sliderWidth={width * 0.43}
                itemWidth={width * 0.43}
                sliderHeight={120}
                loop={true}
                autoplay={true}
                autoplayDelay={3000}
                autoplayInterval={3000}
                onSnapToItem={(index) => this.setState({ activeSlide: index })}
              />
            </View>
          </View>
        </View>
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#E43333', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>มือสองลดราคา</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Deal_Topic', { selectedIndex: 3 })} >
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndB]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          <View style={{ flexDirection: 'row', }}>{dataFlashSale}</View>
        </ScrollView>

      </View>
    );
  }
}

///-------------------------------------------------------------------------///

export class ProDed_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataStore: [],
    };
  }

  getNewstore() {
    var url = ip + '/mysql/DataServiceMain.php';
    var dataBody = {
      type: 'store'
    };
    axios.post(
      url,
      dataBody,
    ).then((getData) => {
      this.setState({
        dataStore: getData.data,
      })
    })
  }

  componentDidMount() {
    this.getNewstore();
  }
  render() {
    let dataNewStore = this.state.dataStore.map((item, indexs) => {
      var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.image].join('/');
      return (
        <View style={stylesDeal.ProDed_Store} key={indexs}>
          <FastImage
            source={{
              uri: dataMySQL,
            }}
            style={{ height: 100, width: 100, }}
          />
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}> ร้าน AVIRA ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่! </Text>
        </View>
      )
    })
    return (
      <View style={[styleMain.FrameBackground, { backgroundColor: '#9887E0', width: '100%' }]}>
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#F1F193', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 3 ,marginLeft:8}]}>ร้านนี้มีโปรเด็ด</Text>
          </View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndW]}>ดูทั้งหมด</Text>
        </View>
        <ScrollView horizontal>
          {dataNewStore}
        </ScrollView>
      </View>

    );
  }
}

///-------------------------------------------------------------------------///

export class ProDed_New_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={[styleMain.FrameBackground, { backgroundColor: '#F9AFF5', width: '100%' }]}>
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#F1F193', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 3, marginLeft:8 }]}>โปรเด็ดร้านใหม่</Text>
          </View>
        </View>
        <View style={stylesDeal.ProDed_New_Store}>
          <View style={stylesDeal.ProDed_New_Store_Box}>
            <View style={stylesDeal.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand1.png',
                }}
              />
              <TouchableOpacity>
                <View style={stylesDeal.ProDed_New_Store_Button}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={stylesDeal.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand2.png',
                }}
              />
              <TouchableOpacity>
                <View style={stylesDeal.ProDed_New_Store_Button}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={stylesDeal.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand3.png',
                }}
              />
              <TouchableOpacity>
                <View style={stylesDeal.ProDed_New_Store_Button}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={stylesDeal.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand4.png',
                }}
              />
              <TouchableOpacity>
                <View style={stylesDeal.ProDed_New_Store_Button}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={stylesDeal.ProDed_New_Store_Box}>
            <View style={stylesDeal.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand3.png',
                }}
              />
              <TouchableOpacity>
                <View style={stylesDeal.ProDed_New_Store_Button}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={stylesDeal.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand9.png',
                }}
              />
              <TouchableOpacity>
                <View style={stylesDeal.ProDed_New_Store_Button}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={stylesDeal.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand25.png',
                }}
              />
              <TouchableOpacity>
                <View style={stylesDeal.ProDed_New_Store_Button}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={stylesDeal.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand5.png',
                }}
              />
              <TouchableOpacity>
                <View style={stylesDeal.ProDed_New_Store_Button}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

///-------------------------------------------------------------------------///

export class Shop_Deal_ForU extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSale: [],
    };
  }

  getFlashSale() {
    var url = ip + '/mysql/DataServiceMain.php';
    var dataBody = {
      type: 'product'
    };
    axios.post(
      url,
      dataBody,
    ).then((getData) => {
      this.setState({
        dataSale: getData.data,
      })
    })
  }

  componentDidMount() {
    this.getFlashSale();
  }

  render() {
    let dataFlashSale = this.state.dataSale.map((item, indexs) => {
      var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
      return (
        <TouchableOpacity
          activeOpacity={1}
          key={indexs}
          onPress={
            () => this.props.navigation.navigate(
              'DetailScreen', {
              id_item: item.id_product
            })
          }
        >
          <View style={stylesDeal.Deal_For_youBox}>
            <View style={styleMain.BoxProduct1ImageofLines}>
              <FastImage
                source={{
                  uri: dataMySQL,

                }}
                style={[styleMain.BoxProduct1Image, { marginLeft: 15, }]}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <View style={styleMain.BoxProduct1NameofLines}>
              <Text style={[styleMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                {item.name}</Text>
            </View>
            <View style={styleMain.BoxProduct1PriceofLines}>
              <NumberFormat
                value={item.full_price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'฿'}
                renderText={value =>
                  <Text style={[styleMain.BoxProduct1ImagePrice, stylesFont.FontSize8, stylesFont.FontFamilyText]}>
                    {value}</Text>
                }
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    })
    return (
      <View style={[styleMain.FrameBackground, { backgroundColor: '#5ACAC8', width: '100%' }]}>
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#CB2342', marginLeft: -3, width: 130 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ช้อปทุกดีลเฉพาะคุณ</Text>
          </View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndW]}>ดูทั้งหมด</Text>
        </View>
        <View style={stylesDeal.Deal_For_you}>
          {dataFlashSale}
        </View>
      </View>
    );
  }
}

///-------------------------------------------------------------------------///



