import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
// import SwiperFlatList from 'react-native-swiper-flatlist';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import FastImage from 'react-native-fast-image';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo'
import styles from '../style/StylesDetailScreen'

import { ip } from '../navigator/IpConfig'

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // console.log('getid_product1: ' + this.props.navigation.getParam('id_item'))
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <AppBar navigation={this.props.navigation} />
        <ScrollView>
          <Detail_Image navigation={this.props.navigation} />
          <Store navigation={this.props.navigation} />
          <Conpon />
          <Selector />
          <Detail_Category navigation={this.props.navigation} />
          <Detail />
          <Score />
          <Reviews />
          <BannerBar />
          <Same_Store navigation={this.props.navigation} />
          <Similar_Product navigation={this.props.navigation} />
          <Might_like navigation={this.props.navigation} />
        </ScrollView>
        <Buy_bar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

///--------------------------------------------------------------------------///

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
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
          <IconFeather name="arrow-left" size={30} />
        </TouchableOpacity>
        {/* <Image
          style={styles.LOGO}
          source={require('../images/sj.png')}
          
        ></Image> */}
        <TextInput style={styles.TextInput}
          placeholder="ค้นหาสินค้า/ร้านค้า"
          onChangeText={(text) => this.state({ text })}
        ></TextInput>
        <IconAntDesign RightItem name="search1" size={25} style={styles.Icon_appbar} />

        <TouchableOpacity onPress={() => this.props.navigation.navigate('CartScreen')}>
          <IconAntDesign RightItem name="shoppingcart" size={25} style={styles.Icon_appbar} />
        </TouchableOpacity>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class Detail_Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataid_product: [],
    };
  }
  getid_product() {
    var id_item = this.props.navigation.getParam('id_item')
    // console.log('getid_product1: ' + this.props.navigation.getParam('id_item'))
    // console.log('getid_product2: ' + id_item)
    var url = ip + '/mysql/DataService_Detail.php';
    // console.log(url);
    var dataBody = {
      type: 'store',
      id_product: id_item,
    };
    axios.post(
      url,
      dataBody,
    ).then((getData) => {
      // console.log(getData.data);
      this.setState({
        dataid_product: getData.data,
      })
    })
  }
  componentDidMount() {
    this.getid_product();
  }

  render() {
    let id_product = this.state.dataid_product.map((item, indexs) => {
      // console.log(item);
      var dataMySQL = [ip + '/mysql',item.image_path, item.p_image].join('/');
      return (
        <View style={styles.Detail_Image} key={indexs}>
          <View style={styles.Image_Box}>
            <FastImage
              source={{
                uri: dataMySQL,
              }}
              style={styles.Image}
              
            />
          </View>
          <View style={styles.Price_Box}>

            <View style={styles.Price_Text_Name_Box}>
              <Text style={styles.Price_Text_Name}>
                {item.p_name}
              </Text>
              <View style={styles.Price_Icon_Box}>
                <Icons style={styles.Price_Icon} name='heart' size={20} />
                <IconEntypo style={styles.Price_Icon} name='share' size={20} />
              </View>
            </View>
            <NumberFormat
              value={item.full_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'฿'}
              renderText={
                value => <Text style={
                  styles.Price_Text_Int
                }>
                  {value}
                </Text>}
            />
            <View style={styles.Price_Text_IconBox}>
              <View style={styles.Price_Text_IconBoxStar}>
                <Icons style={styles.Price_IconStar} name='star' size={20} color='#FFAC33' />
                <Icons style={styles.Price_IconStar} name='star' size={20} color='#FFAC33' />
                <Icons style={styles.Price_IconStar} name='star' size={20} color='#FFAC33' />
                <Icons style={styles.Price_IconStar} name='star' size={20} color='#FFAC33' />
                <Icons style={styles.Price_IconStar} name='star' size={20} color='#FFAC33' />
                <Text style={styles.Price_Text_Icon}>|</Text>
                <Text style={styles.Price_Text_RCM}>สินค้าแนะนำ</Text>
              </View>
            </View>
          </View>
        </View>
      );
    })
    return (
      <View>{id_product}</View>
    )
  }
}

///--------------------------------------------------------------------------///

export class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataid_store: [],
    }

  }

  getid_store(id_item) {
    var id_item = this.props.navigation.getParam('id_item')
    // console.log( 'CategoryProductChild Process' )
    var url = ip + '/mysql/DataService_Detail.php';
    //  console.log(url);
    var dataBody = {
      type: 'store',
      id_product: id_item,
    };
    axios.post(
      url,
      dataBody,
    ).then((getData) => {
      // console.log(getData.data);
      this.setState({
        dataid_store: getData.data,
      })
    })
  }
  componentDidMount() {
    this.getid_store();
  }
  render() {
    let id_store = this.state.dataid_store.map((item, indexs) => {
      var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.s_image].join('/');
      // console.log(dataMySQL)
      return (
        <View style={styles.Store} key={indexs}>
          <View style={styles.Store_Box}>
            <View style={styles.Store_Box2}>
              <FastImage
                source={{
                  uri: dataMySQL,
                }}
                style={styles.Store_Image}
                
              />
              <View style={styles.Store_Text_Box}>
                <Text>
                  {item.s_name}
                </Text>
                <Text style={styles.Store_Text}>
                  Active เมื่อ 1 ชั่วโมงที่ผ่านมา
              </Text>
                <Text style={styles.Store_Text}>
                  <IconEntypo name='location-pin' size={20} />
                  กรุงเทพ
              </Text>
              </View>
              <View style={styles.Store_Buttom_Box}>
                <Text style={styles.Store_Text_Button}>ติดตาม</Text>
              </View>
            </View>

          </View>
          <View style={styles.Store_Bar_A}>
            <View style={styles.Store_Bar}>

              <View>
                <Text style={styles.Store_Bar_int}>100</Text>
                <Text style={styles.Store_Bar_Text}>รายการสินค้า</Text>
              </View>

              <Text style={{ fontSize: 25, }}>|</Text>

              <View>
                <Text style={styles.Store_Bar_int}>4.4</Text>
                <Text style={styles.Store_Bar_Text}>คะแนนร้านค้า</Text>
              </View>

              <Text style={{ fontSize: 25, }}>|</Text>

              <View>
                <Text style={styles.Store_Bar_int}>90%</Text>
                <Text style={styles.Store_Bar_Text}>การตอบกลับแชท</Text>
              </View>
            </View>
          </View>
        </View>
      );
    })
    return (
      <View>
        {id_store}
      </View>
    );
  }
}
///--------------------------------------------------------------------------///

export class Conpon extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Coupon}>
        <Text style={styles.Coupon_Text}> คูปอง </Text>
        <View style={styles.Coupon_Box}>
          <View style={styles.Coupon_Box_Pon}><Text style={styles.Coupon_Box_Pon_Text}>ลด ฿100.00</Text></View>
          <View style={styles.Coupon_Box_Pon}><Text style={styles.Coupon_Box_Pon_Text}>ลด ฿300.00</Text></View>
          <IconEntypo style={styles.Coupon_Icon} name='chevron-right' size={30} />
        </View>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Selector}>
        <Text> ตัวเลือก </Text>
        <View style={styles.Selector_Box}>
          <Text> ตัวอย่างเช่น สี ขนาด </Text>
          <IconEntypo style={styles.Selector_Icon} name='chevron-right' size={30} />
        </View>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class Detail_Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataid_store: [],
    }

  }

  getid_store(id_item) {
    var id_item = this.props.navigation.getParam('id_item')
    // console.log( 'CategoryProductChild Process' )
    var url = ip + '/mysql/DataService_Detail.php';
    //  console.log(url);
    var dataBody = {
      type: 'store',
      id_product: id_item,
    };
    axios.post(
      url,
      dataBody,
    ).then((getData) => {
      // console.log(getData.data);
      this.setState({
        dataid_store: getData.data,
      })
    })
  }
  componentDidMount() {
    this.getid_store();
  }

  render() {
    let id_store = this.state.dataid_store.map((item, indexs) => {
      return (
        <View style={styles.Detail_Catagory} key={indexs}>
          <View style={styles.Detail_Catagory_TextTop}>
            <Text> ข้อมูลจำเพาะ </Text>
          </View>
          <View style={styles.Detail_Catagory_TextBox}>
            <View>
              <Text> หมวดหมู่</Text>
              <Text> ยี่ห้อ </Text>
              <Text> จำนวนสินค้า </Text>
              <Text> ส่งจาก </Text>
            </View>
            <View style={styles.Detail_Catagory_TextBoxA}>
              <Text>{item.type}</Text>
              <Text>Rayban</Text>
              <Text>3041</Text>
              <Text>เขตสัมพันธวงศ์, จังหวัดกรุงเทพมหานคร</Text>
            </View>
          </View>
        </View>
      );
    })
    return (
      <View>{id_store}</View>
    )
  }
}

///--------------------------------------------------------------------------///

export class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Detail}>
        <Text> รายละเอียดสินค้า </Text>
        <View style={styles.Detail_Text_Box}>
          <Text style={styles.Detail_Text}>
            liojkl;efwsdcoiwe wdksol;weds;xlwdaspk,l
            wedkoasx;lweoijskl;wemkslz,.qewjikolwkoas
            liojkl;efwsdcoiwe wdksol;weds;xlwdaspk,l
            wedkoasx;lweoijskl;wemkslz,.qewjikolwkoas
          </Text>
          <View style={styles.Detail_Box}>
            <Text style={styles.Detail_Text_A}>ดูเพิ่มเติม</Text>
            <IconEntypo name='chevron-down' size={25} color='#0A55A6' />
          </View>
        </View>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Score}>
        <View style={styles.Score_icon}>
          <Text> คะแนนสินค้า</Text>
          <View style={styles.Score_iconA} >
            <Text style={styles.Score_icontext}>
              ดูทั้งหมด
        </Text>
            <IconFeather style={styles.Score_iconB} name='edit' size={20} color='#0A55A6' />
          </View>
        </View>
        <View style={styles.Price_Text_IconBox}>
          <View style={styles.Price_Text_IconBoxStar}>
            <Icons style={styles.Price_IconStar} name='star' size={20} color='#FFAC33' />
            <Icons style={styles.Price_IconStar} name='star' size={20} color='#FFAC33' />
            <Icons style={styles.Price_IconStar} name='star' size={20} color='#FFAC33' />
            <Icons style={styles.Price_IconStar} name='star' size={20} color='#FFAC33' />
            <Icons style={styles.Price_IconStar} name='star' size={20} color='#FFAC33' />
            <Text style={styles.Price_Text_RCM}>5/5</Text>
            <Text style={styles.Price_Text_RCM}>( 10 รีวิว)</Text>
          </View>
        </View>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class Reviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <View style={styles.Reviews_Box}>
        <Text> ภาพจากผู้ซื้อ</Text>
        <View>
          <ScrollView horizontal>
            <View style={styles.Reviews_Image_Box}>
              <FastImage
                style={styles.Reviews_Image}
                source={{ uri: ip + '/MySQL/uploads/2019-06-09-1560016588.jpg' }}
              />
              <FastImage
                style={styles.Reviews_Image}
                source={{ uri: ip + '/MySQL/uploads/2019-06-09-1560016588.jpg' }}
                />
              <FastImage
                style={styles.Reviews_Image}
                source={{ uri: ip + '/MySQL/uploads/2019-06-09-1560016588.jpg' }}
                />
              <FastImage
                style={styles.Reviews_Image}
                source={{ uri: ip + '/MySQL/uploads/2019-06-09-1560016588.jpg' }}
                />
              <FastImage
                style={styles.Reviews_Image}
                source={{ uri: ip + '/MySQL/uploads/2019-06-09-1560016588.jpg' }}
                />
              <FastImage
                style={styles.Reviews_Image}
                source={{ uri: ip + '/MySQL/uploads/2019-06-09-1560016588.jpg' }}
                />
            </View>
          </ScrollView>
          <View style={styles.Comment_R}>
            <FastImage
              style={styles.Comment_R_Image}
              source={{ uri: ip + '/MySQL/uploads/2019-06-09-1560016588.jpg' }}
              />
            <View style={styles.Comment_R_Text}>
              <Text>p********n</Text>
              <View style={styles.Comment_R_Iconstar}>
                <Icons name='star' size={15} color='#FFAC33' />
                <Icons name='star' size={15} color='#FFAC33' />
                <Icons name='star' size={15} color='#FFAC33' />
                <Icons name='star' size={15} color='#FFAC33' />
                <Icons name='star' size={15} color='#FFAC33' />
              </View>
              <Text>สั่งซื้อซ้ำเป็นรอบที่ 2 ติดใจโรงแรมสะอาดราคาไม่แพง โลเคชั่นดี</Text>
              <Text style={styles.Comment_text_day}>16-11-2019 15:56 | กรอบแว่นขนาด 50 cm</Text>
            </View>
            <IconAntDesign style={styles.Comment_text_iconheart} name='hearto' size={20} />
          </View>
          <View style={styles.Comment_R}>
            <FastImage
              style={styles.Comment_R_Image}
              source={{ uri: ip + '/MySQL/uploads/2019-06-09-1560016588.jpg' }}
              />
            <View style={styles.Comment_R_Text}>
              <Text>p********n</Text>
              <View style={styles.Comment_R_Iconstar}>
                <Icons name='star' size={15} color='#FFAC33' />
                <Icons name='star' size={15} color='#FFAC33' />
                <Icons name='star' size={15} color='#FFAC33' />
                <Icons name='star' size={15} color='#FFAC33' />
                <Icons name='star' size={15} color='#FFAC33' />
              </View>
              <Text>สั่งซื้อซ้ำเป็นรอบที่ 2 ติดใจโรงแรมสะอาดราคาไม่แพง โลเคชั่นดี</Text>
              <View style={styles.Comment_Image_A}>
                <FastImage
                  style={styles.Reviews_Image}
                  source={{ uri: ip + '/MySQL/uploads/2019-06-09-1560016588.jpg' }}
                  />
                <FastImage
                  style={styles.Reviews_Image}
                  source={{ uri: ip + '/MySQL/uploads/2019-06-09-1560016588.jpg' }}
                  />
                <FastImage
                  style={styles.Reviews_Image}
                  source={{ uri: ip + '/MySQL/uploads/2019-06-09-1560016588.jpg' }}
                  />
              </View>
              <Text style={styles.Comment_text_day}>16-11-2019 15:56 | กรอบแว่นขนาด 50 cm</Text>
            </View>
            <IconAntDesign style={styles.Comment_text_iconheart} name='hearto' size={20} />
          </View>
          <View style={styles.Comment_R}>
            <FastImage
              style={styles.Comment_R_Image}
              source={{ uri: ip + '/MySQL/uploads/2019-06-09-1560016588.jpg' }}
              />
            <View style={styles.Comment_R_Text}>
              <Text>p********n</Text>
              <View style={styles.Comment_R_Iconstar}>
                <Icons name='star' size={15} color='#FFAC33' />
                <Icons name='star' size={15} color='#FFAC33' />
                <Icons name='star' size={15} color='#FFAC33' />
                <Icons name='star' size={15} color='#FFAC33' />
                <Icons name='star' size={15} color='#FFAC33' />
              </View>
              <Text>สั่งซื้อซ้ำเป็นรอบที่ 2 ติดใจโรงแรมสะอาดราคาไม่แพง โลเคชั่นดี</Text>
              <Text style={styles.Comment_text_day}>16-11-2019 15:56 | กรอบแว่นขนาด 50 cm</Text>
            </View>
            <IconAntDesign style={styles.Comment_text_iconheart} name='hearto' size={20} />
          </View>
        </View>
      </View>

    );
  }
}


///--------------------------------------------------------------------------///

export class BannerBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (<View style={styles.Banner_Bar}>
      <FastImage
        style={styles.Banner_Bar_image}
        source={{ uri: ip + '/MySQL/uploads/slide/Banner_type/watch_BannerBar.jpg' }}
        />
    </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class Same_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSale: [],
    };
  }

  getSaleProduct() {
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
    this.getSaleProduct();
  }

  render() {
    let dataSaleProduct = this.state.dataSale.map((item, indexs) => {
      //   console.log('Sale' + [ indexs, item.image ].join(' ')),
      var dataMySQL = [ip + '/mysql',item.image_path, item.image].join('/');
      return (
        <TouchableOpacity activeOpacity={1} key={indexs} onPress={() => this.props.navigation.push('DetailScreen', { id_item: item.id_product })}>
          <View style={styles.Same_StoreBox} key={indexs}>
            <FastImage
              source={{
                uri: dataMySQL,
              }}
              style={styles.Same_StoreImage}
            />
            <Text style={styles.Same_StoreImageName}>{item.name}</Text>
            <NumberFormat
              value={item.full_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'฿'}
              renderText={
                value => <Text style={
                  styles.Same_StoreImagePrice
                }>
                  {value}
                </Text>}
            />
            <View style={styles.Same_StoreIconBox}>
              <View style={styles.Same_StoreIconBoxStar}>
                <Icons style={styles.Same_StoreIconStar} name='star' size={8} />
                <Icons style={styles.Same_StoreIconStar} name='star' size={8} />
                <Icons style={styles.Same_StoreIconStar} name='star' size={8} />
                <Icons style={styles.Same_StoreIconStar} name='star' size={8} />
                <Icons style={styles.Same_StoreIconStar} name='star' size={8} />
              </View>
              <View style={styles.Same_StoreIconBoxI}>
                <Icons style={styles.Same_StoreIcon} name='heart' size={10} />
                <Icons style={styles.Same_StoreIcon} name='share' size={10} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    })
    return (
      <View style={styles.Same_Store}>
        <View style={styles.Same_StoreTextBox}>
          <Text style={styles.Same_StoreText}>
            สินค้าจากร้านเดียวกัน
                </Text>
        </View>
        <ScrollView horizontal>
          {dataSaleProduct}
        </ScrollView>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class Similar_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSale: [],
    };
  }

  getSaleProduct() {
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
    this.getSaleProduct();
  }

  render() {
    let dataSaleProduct = this.state.dataSale.map((item, indexs) => {
      //   console.log('Sale' + [ indexs, item.image ].join(' ')),
      var dataMySQL = [ip + '/mysql',item.image_path,item.image].join('/');
      return (
        <TouchableOpacity activeOpacity={1} key={indexs} onPress={() => this.props.navigation.push('DetailScreen', { id_item: item.id_product })}>
          <View style={styles.Same_StoreBox} key={indexs}>
            <FastImage
              source={{
                uri: dataMySQL,
              }}
              style={styles.Same_StoreImage}
            />
            <Text style={styles.Same_StoreImageName}>{item.name}</Text>
            <NumberFormat
              value={item.full_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'฿'}
              renderText={
                value => <Text style={
                  styles.Same_StoreImagePrice
                }>
                  {value}
                </Text>}
            />
            <View style={styles.Same_StoreIconBox}>
              <View style={styles.Same_StoreIconBoxStar}>
                <Icons style={styles.Same_StoreIconStar} name='star' size={8} />
                <Icons style={styles.Same_StoreIconStar} name='star' size={8} />
                <Icons style={styles.Same_StoreIconStar} name='star' size={8} />
                <Icons style={styles.Same_StoreIconStar} name='star' size={8} />
                <Icons style={styles.Same_StoreIconStar} name='star' size={8} />
              </View>
              <View style={styles.Same_StoreIconBoxI}>
                <Icons style={styles.Same_StoreIcon} name='heart' size={10} />
                <Icons style={styles.Same_StoreIcon} name='share' size={10} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    })
    return (
      <View style={styles.Same_Store}>
        <View style={styles.Same_StoreTextBox}>
          <Text style={styles.Same_StoreText}>
            สินค้าที่คล้ายกัน
                </Text>
        </View>
        <ScrollView horizontal>
          {dataSaleProduct}
        </ScrollView>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class Might_like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSourcePopularProduct: [],
    };
  }

  getDataPopularProduct() {
    var url = ip + '/mysql/DataServiceStore.php';
    var dataBody = {
      type: 'todayproduct'
    };
    axios.post(
      url,
      dataBody,
    ).then((getData) => {
      //   console.log(getData.data);
      this.setState({
        dataSourcePopularProduct: getData.data,
      })
    })
  }

  componentDidMount() {
    this.getDataPopularProduct();
  }

  render() {
    // console.log( 'Might_like|render' )
    let dataToday = this.state.dataSourcePopularProduct.map((item, indexs) => {
      var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
      // console.log( dataMySQL )
      return (
        <TouchableOpacity activeOpacity={1} key={indexs} onPress={() => this.props.navigation.push('DetailScreen', { id_item: item.id_product })}>
          <View style={styles.PopularProductBox} key={indexs}>
            <FastImage
              source={{
                uri: dataMySQL,
              }}
              style={styles.PopularProductImage}
            />
            <Text style={styles.PopularProductImageName}>
              {item.name}
            </Text>
            <NumberFormat
              value={item.full_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'฿'}
              renderText={
                value => <Text style={
                  styles.PopularProductImagePrice
                }>
                  {value}
                </Text>
              }
            />
            <View style={styles.PopularProductIconBox}>
              <View style={styles.PopularProductIconBoxStar}>
                <Icons style={styles.PopularProductIconStar} name='star' size={8} />
                <Icons style={styles.PopularProductIconStar} name='star' size={8} />
                <Icons style={styles.PopularProductIconStar} name='star' size={8} />
                <Icons style={styles.PopularProductIconStar} name='star' size={8} />
                <Icons style={styles.PopularProductIconStar} name='star' size={8} />
              </View>
              <View style={styles.PopularProductIconBoxI}>
                <Icons style={styles.PopularProductIcon} name='heart' size={10} />
                <Icons style={styles.PopularProductIcon} name='share' size={10} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    })
    return (
      <View style={styles.PopularProduct}>
        <Text style={styles.PopularProductText}>
          คุณอาจชอบสิ่งนี้
            </Text>
        <View style={styles.PopularProductBoxProduct}>
          {dataToday}
        </View>
      </View>
    )
  }
}

///--------------------------------------------------------------------------///

export class Buy_bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataid_product: [],
    };
  }
  getid_product() {
    var id_item = this.props.navigation.getParam('id_item')
    var url = ip + '/mysql/DataService_Detail.php';
    // console.log(url);
    var dataBody = {
      type: 'store',
      id_product: id_item,
    };
    axios.post(
      url,
      dataBody,
    ).then((getData) => {
      // console.log(getData.data);
      this.setState({
        dataid_product: getData.data,
      })
    })
  }
  componentDidMount() {
    this.getid_product();
  }
  render() {
    var s_id_store = this.state.dataid_product.map((item) => { return (item.s_id_store) })
    return (
      <View style={styles.Buy_bar}>
        <View >
          <IconAntDesign name='message1' size={25}></IconAntDesign>
          <Text>แชท</Text>
        </View>
        <Text style={{ fontSize: 30, }}>|</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('StoreScreen', { id_item: s_id_store })}>
          <View >
            <Icons name='store' size={25} style={{ marginLeft: 3, }}></Icons>
            <Text style={{ textAlign: 'center', }}>ร้านค้า</Text>
          </View></TouchableOpacity>

        <View style={styles.Buy_bar_Iconshop}>
          <IconAntDesign name='shoppingcart' size={25}></IconAntDesign>
          <Text> เพิ่มลงรถเข็น</Text>
        </View>
        <View style={styles.Buy_bar_IconBuy}>
          <Text style={styles.Buy_bar_IconBuytext}>ซื้อเลย</Text>
        </View>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///
