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
import stylemain from '../../style/StylesMainScreen';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../../style/stylePromotion-src/styleDealScreen';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { AppBar, Slide, Button_Bar, } from './DealScreen';
import { TabBar } from '../tools/Tools';
import stylesFont from '../../style/stylesFont';
export const { width, height } = Dimensions.get('window');

export default class The_BestFinScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={stylemain.SafeAreaView}>
        <AppBar navigation={this.props.navigation} Title='สุดคุ้มสุดฟิน' />
        <ScrollView>
          <Slide />
          <Fin_sale navigation={this.props.navigation} />
          <Store_Sale />
          <Product_Cool navigation={this.props.navigation} />
          <Second_Store navigation={this.props.navigation} />
        </ScrollView>
        <Button_Bar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

///-------------------------------------------------------------------------///

export class Fin_sale extends Component {
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
          <View style={stylemain.BoxProduct1Box}>
            <FastImage
              source={{
                uri: dataMySQL,

              }}
              style={stylemain.BoxProduct1Image}

            />
            <Text style={[stylemain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize4]}>{item.name}</Text>
            <NumberFormat
              value={item.full_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'฿'}
              renderText={
                value => <Text style={[stylemain.BoxProduct1ImagePrice, stylesFont.FontSize5, stylesFont.FontFamilyText]}>
                  {value}
                </Text>}
            />
          </View>
        </TouchableOpacity>
      );
    })
    return (
      <View >
        <View style={[stylemain.FrameBackground, { marginTop: 20, }]}>
          <View style={[styles.BoxText_T, { backgroundColor: '#C4C4C4', marginTop: -10, }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}> Fin จัดหนักลดสูงสุด 80 %  </Text>
          </View>
          <View style={styles.Fin_sale_BoxHead}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#0A55A6' }]}>ดูทั้งหมด</Text>
          </View>
          <ScrollView horizontal>
            <View style={styles.Fin_sale_BoxProduct}>
              {dataFlashSale}</View>
          </ScrollView>
        </View>
      </View>

    );
  }
}

///-------------------------------------------------------------------------///

export class Store_Sale extends Component {
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
  _renderItem = ({ item, indexs }) => {
    var dataMySQL = [finip, item.image_path, item.image].join('/');
    return (
      <View key={indexs}>
        <FastImage
          source={{
            uri: dataMySQL,
          }}
          style={{height:'100%', width:'100%'}}
        />
      </View>
    );
  }

  componentDidMount() {
        this.getDataSlide()
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

  render() {
    return (
      <View >
        <View style={[stylemain.FrameBackground, { marginTop: 20, }]}>
          <View style={[styles.BoxText_T, { backgroundColor: '#C4C4C4', marginTop: -10, }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}> ร้านนี้มีของลด </Text>
          </View>
          <View style={styles.Fin_sale_BoxHead}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#0A55A6' }]}>ดูทั้งหมด</Text>
          </View>
          <View style={styles.Store_Sale}>
            <View style={styles.Store_Sale_Box}>

              {/* BoxA */}
              <View style={styles.Store_Sale_BoxA}>
                <View style={styles.Store_Sale_BoxA_Carousel}>
                  <Carousel
                    ref={c => this.activeSlide = c}
                    data={this.state.dataSourceSlide}
                    renderItem={this._renderItem}
                    sliderWidth={width * 0.585}
                    itemWidth={width * 0.585}
                    sliderHeight={100}
                    loop={true}
                    autoplay={true}
                    autoplayDelay={3000}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                  />
                </View>
                <View style={styles.Store_Sale_BoxA_Boximage}>
                  <View style={styles.Store_Sale_BoxA_image}>
                    <FastImage style={styles.Store_Sale_Image}
                      source={{
                        uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                      }}
                    />
                  </View>
                  <View style={styles.Store_Sale_BoxA_image}>
                    <FastImage style={styles.Store_Sale_Image}
                      source={{
                        uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                      }}
                    />
                  </View>
                </View>
              </View>

              {/* BoxB */}
              <View style={styles.Store_Sale_BoxB_Boximage}>
                <View style={styles.Store_Sale_BoxB_image}>
                  <FastImage style={styles.Store_Sale_Image}
                    source={{
                      uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                    }}
                  />
                </View>
                <View style={styles.Store_Sale_BoxB_image}>
                  <FastImage style={styles.Store_Sale_Image}
                    source={{
                      uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

///-------------------------------------------------------------------------///

export class Product_Cool extends Component {
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
          <View style={[styles.Deal_For_youBox, { marginTop: 10 }]}>
            <FastImage
              source={{
                uri: dataMySQL,

              }}
              style={[stylemain.BoxProduct1Image, { marginLeft: 15, }]}

            />
            <Text style={[stylemain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize4]}>{item.name}</Text>
            <NumberFormat
              value={item.full_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'฿'}
              renderText={
                value => <Text style={[stylemain.BoxProduct1ImagePrice, stylesFont.FontSize5, stylesFont.FontFamilyText]}>
                  {value}
                </Text>}
            />
          </View>
        </TouchableOpacity>
      );
    })
    return (
      <View>
        <View style={[stylemain.FrameBackground, { marginTop: 20, }]}>
          <View style={[styles.BoxText_T, { backgroundColor: '#C4C4C4', marginTop: -10, }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}> สินค้าราคาโคตรคูล </Text>
          </View>
          <View style={styles.Fin_sale_BoxHead}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#0A55A6' }]}>ดูทั้งหมด</Text>
          </View>
          <View>
            <View style={styles.Deal_For_you}>
              {dataFlashSale}
            </View>
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
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>ร้าน K.O.D สินค้ามือสอง ลดสูงสุด 50 %</Text>
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
          <View style={[styles.Deal_For_youBox, { marginTop: 10 }]}>
            <FastImage
              source={{
                uri: dataMySQL,

              }}
              style={[stylemain.BoxProduct1Image, { marginLeft: 15 }]}

            />
            <Text style={[styles.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize4]}>{item.name}</Text>
            <NumberFormat
              value={item.full_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'฿'}
              renderText={
                value => <Text style={[stylemain.BoxProduct1ImagePrice, stylesFont.FontSize5, stylesFont.FontFamilyText]}>
                  {value}
                </Text>}
            />
          </View>
        </TouchableOpacity>
      );
    })
    return (
      <View style={stylemain.FrameBackground}>
        <View style={styles.BoxText_Row}>
          <View style={[styles.BoxText_T, { backgroundColor: '#95D370', }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, styles.Text_Head]}>ร้านมือสองลดราคา</Text>
          </View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, styles.Text_EndB, { color: '#0A55A6' }]}>ดูทั้งหมด</Text>
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
          <View style={{ height: 80, marginTop: 10, width: '90%', justifyContent: 'space-between', flexDirection: 'row', }}>
            <View style={{ width: 125, backgroundColor: 'red', height: '100%', }}>
              <FastImage style={styles.Store_Sale_Image}
                source={{
                  uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                }}
              />
            </View>
            <View style={{ width: 125, backgroundColor: 'red', height: '100%', }}>
              <FastImage style={styles.Store_Sale_Image}
                source={{
                  uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                }}
              />
            </View>
            <View style={{ width: 125, backgroundColor: 'red', height: '100%', }}>
              <FastImage style={styles.Store_Sale_Image}
                source={{
                  uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.BoxText_Row}>
          <View style={[styles.BoxText_T, { backgroundColor: '#E43333', }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, styles.Text_Head]}>มือสองลดราคา</Text>
          </View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, styles.Text_EndB, { color: '#0A55A6' }]}>ดูทั้งหมด</Text>
        </View>
        <View style={styles.Deal_For_you}>
          {dataFlashSale}
        </View>
      </View>
    );
  }
}


