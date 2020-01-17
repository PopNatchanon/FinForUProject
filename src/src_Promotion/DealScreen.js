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
import styles from '../../style/stylePromotion-src/styleDealScreen';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
export const { width, height } = Dimensions.get('window');


export default class DealScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <AppBar navigation={this.props.navigation} />
        <ScrollView style={{ padding: 3, }}>
          <Slide />
          <Deal_Calendar />
          <Deal_Today />
          <Deal_Exclusive />
          <Coupon_Store />
          <Second_Store />
          <ProDed_Store />
          <ProDed_New_Store />
          <Shop_Deal_ForU />
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
    return (
      <View style={styles.Appbar}>
        <View style={styles.Icon_appbar_Text}>
          <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
            <IconFeather style={styles.Icon_appbar} name="arrow-left" size={30} />
          </TouchableOpacity>
          <Text style={styles.Text_appbar}>โปรโมชั่น</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5, margin: 10, }}>
          <IconAntDesign RightItem name="search1" size={25} style={styles.Icon_appbar} />
          <IconAntDesign RightItem name="message1" size={25} style={styles.Icon_appbar} />
        </View>
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
      <View style={{ marginTop: -60, height: 70 }}>
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
        <View style={styles.Box_Text_Head}>
          <Text>โปรโมชั่น</Text>
        </View>
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

            <Text style={styles.Button_Bar_BoxText}>ดีลสุดพิเศษ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('CoinScreen')}>
          <View style={styles.Button_Bar_Box}>
            <FastImage style={styles.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b02.png',
              }}
            />
            <Text style={styles.Button_Bar_BoxText}>FinCoin</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('CampaignScreen')}>
          <View style={styles.Button_Bar_Box}>
            <FastImage style={styles.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b03.png',
              }}
            />
            <Text style={styles.Button_Bar_BoxText}>แคมเปญ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('WorthFinScreen')}>
          <View style={styles.Button_Bar_Box}>
            <FastImage style={styles.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b04.png',
              }}
            />
            <Text style={styles.Button_Bar_BoxText}>สุดคุ้มสุดฟิน</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('Installment_payScreen')}>
          <View style={styles.Button_Bar_Box}>
            <FastImage style={styles.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b05.png',
              }}
            />
            <Text style={styles.Button_Bar_BoxText}>ผ่อนชำระ 0%</Text>
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
      <View style={styles.Deal_Calendar}>
        <View style={[styles.BoxText_T, { backgroundColor: '#5094EE', }]}>
          <Text style={styles.Text_Head}>ดีลเด็ดตามปฏิทิน</Text>
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
      dataSale: [],
    };
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
          <View style={styles.FlashSaleBox}>
            <FastImage
              source={{
                uri: dataMySQL,

              }}
              style={styles.FlashSaleImage}

            />
            <Text style={styles.FlashSaleImageName}>{item.name}</Text>
            <NumberFormat
              value={item.full_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'฿'}
              renderText={
                value => <Text style={
                  styles.FlashSaleImagePrice
                }>
                  {value}
                </Text>}
            />
          </View>
        </TouchableOpacity>
      );
    })
    return (
      <View style={[styles.Deal_Box, { backgroundColor: '#AF5F92', }]}>
        <View style={styles.BoxText_Row}>
          <View style={[styles.BoxText_T, { backgroundColor: '#D5CD5B', }]}>
            <Text style={styles.Text_Head}>ดีลเด็ดประจำวัน</Text>
          </View>
          <Text style={styles.Text_Totel}>ดูทั้งหมด</Text>
        </View>
        <View style={{ padding: 10, }}>
          <View style={styles.Deal_Today_Box}>
            <Text>คูปองส่วนลดจาก FIN</Text>
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
          <View style={styles.BoxText_Row}>
            <View style={[styles.BoxText_T, { backgroundColor: '#C4C4C4', }]}>
              <Text style={{ margin: 3, }}>FLASH SALE</Text>
            </View>
            <Text style={styles.Text_Totel}>ดูทั้งหมด</Text>
          </View>
          <ScrollView horizontal>
            <View style={{ flexDirection: 'row', }}>{dataFlashSale}</View>
          </ScrollView>
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
      <View style={[styles.Deal_Box, { backgroundColor: '#CABA5A', }]}>
        <View style={styles.BoxText_Row}>
          <View style={[styles.BoxText_T, { backgroundColor: '#6170F8', }]}>
            <Text style={styles.Text_Head}>ดีลสุด Exclusive</Text>
          </View>
          <Text style={styles.Text_Totel}>ดูทั้งหมด</Text>
        </View>
        <View style={styles.Deal_Exclusive}>
          <View style={styles.Deal_Exclusive_BoxImageIcon}>
            <Text style={styles.Deal_Exclusive_Text}>สินค้าลด 60% </Text>
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
      <View style={[styles.Deal_Box, { backgroundColor: '#FFFFFF', }]}>
        <View style={styles.BoxText_Row}>
          <View style={[styles.BoxText_T, { backgroundColor: '#BE70D3', }]}>
            <Text style={styles.Text_Head}>คูปองส่วนลดจากร้าน</Text>
          </View>
          <Text style={{ margin: 10, }}>ดูทั้งหมด</Text>
        </View>
        <View style={{ padding: 10, }}>
          <View style={styles.Coupon_Store_Box}>
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
          <Text style={{ fontSize: 12, }}>ร้าน K.O.D สินค้ามือสอง ลดสูงสุด 50 %</Text>
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
          <View style={styles.FlashSaleBox}>
            <FastImage
              source={{
                uri: dataMySQL,

              }}
              style={styles.FlashSaleImage}

            />
            <Text style={styles.FlashSaleImageName}>{item.name}</Text>
            <NumberFormat
              value={item.full_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'฿'}
              renderText={
                value => <Text style={
                  styles.FlashSaleImagePrice
                }>
                  {value}
                </Text>}
            />
          </View>
        </TouchableOpacity>
      );
    })
    return (
      <View style={[styles.Deal_Box, { backgroundColor: '#FFFFFF', }]}>
        <View style={styles.BoxText_Row}>
          <View style={[styles.BoxText_T, { backgroundColor: '#95D370', }]}>
            <Text style={styles.Text_Head}>ร้านมือสองลดราคา</Text>
          </View>
          <Text style={{ margin: 10, }}>ดูทั้งหมด</Text>
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
            <Text style={styles.Text_Head}>มือสองลดราคา</Text>
          </View>
          <Text style={{ margin: 10, }}>ดูทั้งหมด</Text>
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
        <View style={styles.ProDed_Store}>
          <FastImage
            source={{
              uri: dataMySQL,
            }}
            style={{ height: 100, width: 100, }}
          />
          <Text style={{ fontSize: 10, }}> ร้าน AVIRA ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่! </Text>
        </View>
      )
    })
    return (
      <View style={[styles.Deal_Box, { backgroundColor: '#9887E0', }]}>
        <View style={styles.BoxText_Row}>
          <View style={[styles.BoxText_T, { backgroundColor: '#F1F193', }]}>
            <Text style={{ margin: 3, }}>ร้านนี้มีโปรเด็ด</Text>
          </View>
          <Text style={{ margin: 10, }}>ดูทั้งหมด</Text>
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
      <View style={[styles.Deal_Box, { backgroundColor: '#F9AFF5', }]}>
        <View style={styles.BoxText_Row}>
          <View style={[styles.BoxText_T, { backgroundColor: '#F1F193', }]}>
            <Text style={{ margin: 3, }}>โปรเด็ดร้านใหม่</Text>
          </View>
          <Text style={{ margin: 10, }}>ดูทั้งหมด</Text>
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
    };
  }

  render() {
    return (
      <View style={[styles.Deal_Box, { backgroundColor: '#5ACAC8', }]}>
        <View style={styles.BoxText_Row}>
          <View style={[styles.BoxText_T, { backgroundColor: '#CB2342', }]}>
            <Text style={styles.Text_Head}>ช้อปทุกดีลเฉพาะคุณ</Text>
          </View>
          <Text style={styles.Text_Totel}>ดูทั้งหมด</Text>
        </View>
        <View style={styles.Deal_Exclusive}>
          <View style={styles.Deal_Exclusive_Box}>
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



