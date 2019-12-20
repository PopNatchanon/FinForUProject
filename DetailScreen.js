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
// import axios from 'axios';
// import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconsFeather from 'react-native-vector-icons/Feather';
import styles from './StylesDetailScreen'
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
          <Store/>
          <Conpon/>
          <Selector/>
          <Detail/>
          <Score/>
          <Reviews/>
          <BannerBar/>
          <Same_Store />
          <Similar_Product />
          <Might_like/>
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
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <View style={styles.Icon_Back}>
            <IconsFeather  name="arrow-left-circle" size={30} />
            </View>
          </TouchableOpacity>
        <Image
          style={styles.LOGO}
          source={require('./images/sj.png')}
          resizeMethod='resize'
        ></Image>
        <TextInput style={styles.TextInput}
          placeholder="ค้นหาสินค้า/ร้านค้า"
          onChangeText={(text) => this.state({ text })}
        ></TextInput>
        <IconsFeather RightItem name="search" size={20} style={styles.Icon_appbar} />
        <IconsFeather RightItem name="shopping-cart" size={20} style={styles.Icon_appbar} />
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class Detail_Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Detail_Image}>
          <View style={styles.Image}>
          <Text>รูปภาพ</Text>
          </View> 
          <View style={styles.Price}>
            <Text>ราคา</Text>
          </View>
        </View>
    );
  }
}

///--------------------------------------------------------------------------///

export  class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Store}> 
      <Text>ร้านค้า</Text>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export  class Conpon extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Coupon}>
        <Text> คูปอง </Text>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export  class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Selector}>
        <Text> ตัวเลือก </Text>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export  class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Detail}>
        <Text> รายละเอียดสินค้า </Text>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export  class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Score}>
        <Text> คะแนน </Text>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export  class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Reviews}>
        <Text> ความคิดเห็น </Text>
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
