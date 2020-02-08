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
import styles from '../../style/stylePromotion-src/styleDealScreen';
import stylesStore from '../../style/StylesStoreScreen';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import stylesFont from '../../style/stylesFont';
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
        <AppBar navigation={this.props.navigation} />
        <ScrollView style={{ paddingHorizontal: 3, }}>
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

///-------------------------------------------------------------------------///

export class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    const { Title, noIcon } = this.props
    return (
      <View style={stylesStore.Appbar}>
        <View style={styleMain.FlexRow}>
          <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
            <IconFeather style={styles.Icon_appbar} name="arrow-left" size={30} />
          </TouchableOpacity>
          <Text style={[styles.Text_appbar, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>{Title ? Title : 'ดีลสุดคุ้ม'}</Text>
        </View>
        {noIcon ?
          null :
          <View style={{ flexDirection: 'row', marginTop: 5, margin: 10, }}>
            <IconAntDesign RightItem name="search1" size={25} style={styles.Icon_appbar} />
            <IconAntDesign RightItem name="message1" size={25} style={styles.Icon_appbar} />
          </View>
        }
      </View>
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
        // console.log("responseJson")
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
      <View style={styles.child} key={indexs}>
        <FastImage
          source={{
            uri: dataMySQL,

          }}
          style={styles.childSlide}

        />
      </View>
    );
  }

  get pagination() {
    const { dataSourceSlide, activeSlide } = this.state;
    // console.log(width)
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
    // console.log(this.activeSlide)
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
      <View style={styles.Button_Bar}>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('DealScreen')}>
          <View style={styles.Button_Bar_Box}>
            <FastImage style={styles.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b01.png',
              }}
            />

            <Text style={[styles.Button_Bar_BoxText, stylesFont.FontFamilyText]}>ดีลสุดพิเศษ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('CoinScreen')}>
          <View style={styles.Button_Bar_Box}>
            <FastImage style={styles.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b02.png',
              }}
            />
            <Text style={[styles.Button_Bar_BoxText, stylesFont.FontFamilyText]}>FinCoin</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('CampaignScreen')}>
          <View style={styles.Button_Bar_Box}>
            <FastImage style={styles.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b03.png',
              }}
            />
            <Text style={[styles.Button_Bar_BoxText, stylesFont.FontFamilyText]}>แคมเปญ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('The_BestFinScreen')}>
          <View style={styles.Button_Bar_Box}>
            <FastImage style={styles.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b04.png',
              }}
            />
            <Text style={[styles.Button_Bar_BoxText, stylesFont.FontFamilyText]}>สุดคุ้มสุดฟิน</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('Installment_payScreen')}>
          <View style={styles.Button_Bar_Box}>
            <FastImage style={styles.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b05.png',
              }}
            />
            <Text style={[styles.Button_Bar_BoxText, stylesFont.FontFamilyText]}>ผ่อนชำระ 0%</Text>
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
      <View style={[styleMain.FrameBackground, { backgroundColor: '#B5F5D1', }]}>
        <View style={[styles.BoxText_T, { backgroundColor: '#5094EE', }]}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, styles.Text_Head]}>ดีลเด็ดตามปฏิทิน</Text>
        </View>
        <View style={styles.Deal_Calendar_Box}>
          <View style={styles.Deal_Calendar_BoxN}></View>
          <View style={styles.Deal_Calendar_BoxN}></View>
          <View style={styles.Deal_Calendar_BoxN}></View>
          <View style={styles.Deal_Calendar_BoxN}></View>
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
      <View style={[styleMain.FrameBackground, { backgroundColor: '#AF5F92' }]}>
        <View style={styles.BoxText_Row}>
          <View style={[styles.BoxText_T, { backgroundColor: '#D5CD5B', }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, styles.Text_Head]}>ดีลเด็ดประจำวัน</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Deal_Topic', { selectedIndex: 0 })} >
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, styles.Text_EndW]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10, }}>
          <View style={styles.Deal_Today_Box}>
            <Text style={stylesFont.FontFamilyText}> คูปองส่วนลดจาก FIN</Text>
            <ScrollView horizontal>
              <View style={styles.Deal_Today_BoxImage}>
                <FastImage style={styles.Deal_Today_Coinimage}
                  source={{
                    uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                  }}
                />
                <FastImage style={[styles.Deal_Today_Coinimage, { marginLeft: 5, }]}
                  source={{
                    uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                  }}
                />
                <FastImage style={[styles.Deal_Today_Coinimage, { marginLeft: 5, }]}
                  source={{
                    uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                  }}
                />
                <FastImage style={[styles.Deal_Today_Coinimage, { marginLeft: 5, }]}
                  source={{
                    uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                  }}
                />
              </View>
            </ScrollView>
          </View>
        </View>
        <View>
          <View style={{ padding: 10, }}>
            <View style={styles.Deal_Today_Box}>
              <Text style={stylesFont.FontFamilyText}> คูปองส่วนลดจากร้าน</Text>
              <ScrollView horizontal>
                <View style={styles.Deal_Today_BoxImage}>
                  <FastImage style={styles.Deal_Today_Coinimage}
                    source={{
                      uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                    }}
                  />
                  <FastImage style={[styles.Deal_Today_Coinimage, { marginLeft: 5, }]}
                    source={{
                      uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                    }}
                  />
                  <FastImage style={[styles.Deal_Today_Coinimage, { marginLeft: 5, }]}
                    source={{
                      uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                    }}
                  />
                  <FastImage style={[styles.Deal_Today_Coinimage, { marginLeft: 5, }]}
                    source={{
                      uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                    }}
                  />
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
      <View style={[styleMain.FrameBackground, { backgroundColor: '#CABA5A' }]}>
        <View style={styles.BoxText_Row}>
          <View style={[styles.BoxText_T, { backgroundColor: '#6170F8', }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, styles.Text_Head]}>ดีลสุด Exclusive</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Deal_Topic', { selectedIndex: 1 })} >
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, styles.Text_EndW]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Deal_Exclusive}>
          <View style={styles.Deal_Exclusive_BoxImageIcon}>
            <Text style={[stylesFont.FontFamilyText, { color: '#FFFFFF' }]}>สินค้าลด 60% </Text>
            <FastImage style={styles.Deal_Exclusive_Image}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/ht.png',
              }}
            />
          </View>
          <View style={styles.Deal_Exclusive_Box}>
          </View>
          <View style={styles.Deal_Exclusive_Box}>
          </View>
        </View>
        <View style={styles.Deal_Exclusive}>
          <View style={styles.Deal_Exclusive_Box}>
          </View>
          <View style={styles.Deal_Exclusive_Box}>
          </View>
          <View style={styles.Deal_Exclusive_Box}>
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
        // console.log("responseJson")
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
          style={styles.Second_Store_Slide_image}
        />
        <View style={styles.Second_Store_Slide_BoxText}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ร้าน K.O.D สินค้ามือสอง ลดสูงสุด 50 %</Text>
        </View>

      </View>
    );
  }

  get pagination() {
    const { dataSourceSlide, activeSlide } = this.state;
    // console.log(width)
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
      // console.log(getData.data);
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

              />
            </View>
            <Text style={[styles.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize5]}>{item.name}</Text>
            <NumberFormat
              value={item.full_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'฿'}
              renderText={
                value => <Text style={[styleMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                  {value}
                </Text>}
            />
          </View>
        </TouchableOpacity>
      );
    })
    return (
      <View style={styleMain.FrameBackground}>
        <View style={styles.BoxText_Row}>
          <View style={[styles.BoxText_T, { backgroundColor: '#95D370', }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, styles.Text_Head]}>ร้านมือสองลดราคา</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Deal_Topic', { selectedIndex: 2 })} >
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, styles.Text_EndB]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Second_Store}>
          <View style={styles.Second_Store_SlideA}>
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
          <View style={styles.Second_Store_SlideB}>
            <View style={styles.Second_Store_SlideB_Box}>
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
            <View style={styles.Second_Store_SlideB_Box}>
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
        <View style={styles.BoxText_Row}>
          <View style={[styles.BoxText_T, { backgroundColor: '#E43333', }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, styles.Text_Head]}>มือสองลดราคา</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Deal_Topic', { selectedIndex: 3 })} >
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, styles.Text_EndB]}>ดูทั้งหมด</Text>
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
      // console.log(getData.data);
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
        <View style={styles.ProDed_Store} key={indexs}>
          <FastImage
            source={{
              uri: dataMySQL,
            }}
            style={{ height: 100, width: 100, }}
          />
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}> ร้าน AVIRA ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่! </Text>
        </View>
      )
    })
    return (
      <View style={[styleMain.FrameBackground, { backgroundColor: '#9887E0' }]}>
        <View style={styles.BoxText_Row}>
          <View style={[styles.BoxText_T, { backgroundColor: '#F1F193', }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { marginTop: 3 }]}>ร้านนี้มีโปรเด็ด</Text>
          </View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, styles.Text_EndW]}>ดูทั้งหมด</Text>
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
      <View style={[styleMain.FrameBackground, { backgroundColor: '#F9AFF5' }]}>
        <View style={styles.BoxText_Row}>
          <View style={[styles.BoxText_T, { backgroundColor: '#F1F193', }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { marginTop: 3 }]}>โปรเด็ดร้านใหม่</Text>
          </View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, styles.Text_EndW]}>ดูทั้งหมด</Text>
        </View>
        <View style={styles.ProDed_New_Store}>
          <View style={styles.ProDed_New_Store_Box}>
            <View style={styles.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand1.png',
                }}
              />
              <View style={styles.ProDed_New_Store_Button}></View>
            </View>
            <View style={styles.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand2.png',
                }}
              />
              <View style={styles.ProDed_New_Store_Button}></View>
            </View>
            <View style={styles.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand3.png',
                }}
              />
              <View style={styles.ProDed_New_Store_Button}></View>
            </View>
            <View style={styles.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand4.png',
                }}
              />
              <View style={styles.ProDed_New_Store_Button}></View>
            </View>
          </View>
          <View style={styles.ProDed_New_Store_Box}>
            <View style={styles.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand3.png',
                }}
              />
              <View style={styles.ProDed_New_Store_Button}></View>
            </View>
            <View style={styles.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand9.png',
                }}
              />
              <View style={styles.ProDed_New_Store_Button}></View>
            </View>
            <View style={styles.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand25.png',
                }}
              />
              <View style={styles.ProDed_New_Store_Button}></View>
            </View>
            <View style={styles.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand5.png',
                }}
              />
              <View style={styles.ProDed_New_Store_Button}></View>
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
      // console.log(getData.data);
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
          <View style={styles.Deal_For_youBox}>
            <View style={styleMain.BoxProduct1ImageofLines}>
              <FastImage
                source={{
                  uri: dataMySQL,

                }}
                style={[styleMain.BoxProduct1Image, { marginLeft: 15, }]}

              />
            </View>
            <Text style={[styleMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize5]}>{item.name}</Text>
            <NumberFormat
              value={item.full_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'฿'}
              renderText={
                value => <Text style={[styleMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                  {value}
                </Text>}
            />
          </View>
        </TouchableOpacity>
      );
    })
    return (
      <View style={[styleMain.FrameBackground, { backgroundColor: '#5ACAC8' }]}>
        <View style={styles.BoxText_Row}>
          <View style={[styles.BoxText_T, { backgroundColor: '#CB2342', }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, styles.Text_Head]}>ช้อปทุกดีลเฉพาะคุณ</Text>
          </View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, styles.Text_EndW]}>ดูทั้งหมด</Text>
        </View>
        <View style={styles.Deal_For_you}>
          {dataFlashSale}
        </View>
      </View>
    );
  }
}

///-------------------------------------------------------------------------///



