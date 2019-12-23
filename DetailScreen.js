import React, { Component } from 'react';
import {
  Image,
  View,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
// import SwiperFlatList from 'react-native-swiper-flatlist';
import axios from 'axios';
// import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome';
import IconsFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo'
import styles from './StylesDetailScreen'
import NumberFormat from 'react-number-format';

import { ip } from './IpConfig'

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <AppBar navigation={this.props.navigation} />
        <ScrollView>
          <Detail_Image navigation={this.props.navigation} />
          <Store navigation={this.props.navigation} />
          <Conpon />
          <Selector />
          <Detail />
          <Score />
          <Reviews />
          <BannerBar />
          <Same_Store />
          <Similar_Product />
          <Might_like />
        </ScrollView>
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
        <TouchableOpacity style={{ opacity: 1 }} onPress={() => this.props.navigation.goBack()}>
          <View style={styles.Icon_Back}>
            <IconsFeather name="arrow-left-circle" size={30} />
          </View>
        </TouchableOpacity>
        {/* <Image
          style={styles.LOGO}
          source={require('./images/sj.png')}
          resizeMethod='resize'
        ></Image> */}
        <TextInput style={styles.TextInput}
          placeholder="ค้นหาสินค้า/ร้านค้า"
          onChangeText={(text) => this.state({ text })}
        ></TextInput>
        <Icons RightItem name="search" size={20} style={styles.Icon_appbar} />
        <Icons RightItem name="shopping-cart" size={20} style={styles.Icon_appbar} />
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
    var url = ip + '/mysql/DataService_Detall.php?type=store&id_product=' + id_item;
    // console.log(url);
    axios.get(url)
      .then((getData) => {
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
      //   // console.log(id_product);
      var dataMySQL = [ip + '/mysql/uploads', item.p_image].join('/');
      return (
        <View style={styles.Detail_Image}>
          <View style={styles.Image_Box}>
            <Image
              source={{
                uri: dataMySQL,
              }}
              style={styles.Image}
              resizeMethod='resize'
            />
          </View>
          <View style={styles.Price_Box}>

            <View style={styles.Price_Text_Name_Box}>
              <Text style={styles.Price_Text_Name}>
                {item.p_name}
              </Text>
              <View style={styles.Price_Icon_Box}>
                <Icons style={styles.Price_Icon} name='heart' size={20} />
                <Icons style={styles.Price_Icon} name='share-square-o' size={20} />
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
      <View>{ id_product }</View>
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
    var url = ip + '/mysql/DataService_Detall.php?type=store&id_product=' + id_item;
    //  console.log(url);
    axios.get(url)
      .then((getData) => {
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
              <Image
                source={{
                  uri: dataMySQL,
                }}
                style={styles.Store_Image}
                resizeMethod='resize'
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
            </View>

            <View style={styles.Store_Buttom_Box}>
              <Text style={styles.Store_Text_Button}>ติดตาม</Text>
              <Text style={styles.Store_Text_Button}>ดูร้านค้า</Text>
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
        <Text> คะแนนสินค้า</Text>
        <View style={styles.Price_Text_IconBox}>
          <View style={styles.Price_Text_IconBoxStar}>
            <Icons style={styles.Price_IconStar} name='star' size={20} color='#FFAC33' />
            <Icons style={styles.Price_IconStar} name='star' size={20} color='#FFAC33' />
            <Icons style={styles.Price_IconStar} name='star' size={20} color='#FFAC33' />
            <Icons style={styles.Price_IconStar} name='star' size={20} color='#FFAC33' />
            <Icons style={styles.Price_IconStar} name='star' size={20} color='#FFAC33' />
            <Text style={styles.Price_Text_RCM}>5/5</Text>
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
      dataSourcereviews: [],
    };
  }
  getDatareviews() {
    var url = ip + '/MySQL/DataService_Detall.php?type=view';
    axios.get(url)
      .then((getData) => {
        //console.log(getData.data);
        this.setState({
          dataSourcereviews: getData.data,
        })
      })
  }
  componentDidMount() {
    this.getDatareviews()
  }

  render() {
    let dataPromotionPopular = this.state.dataSourcereviews.map((item, indexs) => {
      var dataMySQL = [ip, '/MySQL/uploads', item.image].join('/');
      // console.log(dataMySQL)
      return <View style={styles.Reviews} key={indexs}>

        <Image
          source={{
            uri: dataMySQL,
          }}
          style={styles.Reviews_Image}
          resizeMethod='resize'
        ></Image>
      </View>
    })
    return (
      <View style={styles.Reviews_Box} >
        <Text>ภาพจากผู้ซื้อ</Text>
        <ScrollView >
          <View style={styles.Reviews_Image_Box}>
            {dataPromotionPopular}
          </View>
        </ScrollView>

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
      <Image
        style={styles.Banner_Bar_image}
        source={{ uri: ip + '/MySQL/uploads/slide/Banner_type/watch_BannerBar.jpg' }}
        resizeMethod='resize'
      ></Image>
    </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class Same_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Same_Store}>
        <Text>สินค้าจากร้านเดียวกัน</Text>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class Similar_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Similar_Product}>
        <Text>สินค้าที่คล้ายกัน</Text>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class Might_like extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Might_like}>
        <Text>คุณอาจชอบสิ่งนี้</Text>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///
