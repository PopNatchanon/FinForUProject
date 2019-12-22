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
  }

  render() {
    item = this.props.navigation.getParam('item')
    console.log(item)
    var dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
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
              {item.name}
            </Text>
            <View style={styles.Price_Icon_Box}>
              <Icons style={styles.Price_Icon} name='heart' size={20} color='#FF00FF' />
              <Icons style={styles.Price_Icon} name='share-square-o' size={20} />
            </View>
          </View>
          <NumberFormat
            value={item.sale_price}
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
  }
}

///--------------------------------------------------------------------------///

export class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSourceStoreProduct: [],
      // dataSourceStoreProduct2: [],
    }

  }

  getStoreProduct(item) {
    // console.log( 'CategoryProductChild Process' )
    var url = ip + '/mysql/DataService_Detall.php?type=store&id=' + item.id_store;
    axios.get(url)
      .then((getData) => {
        //   console.log(getData.data);
        this.setState({
          dataSourceStoreProduct: getData.data,
        })
      })
  }
  // getcountstore(item) {
  //   // console.log( 'CategoryProductChild Process' )
  //   var url = ip + '/mysql/DataService_Detall.php?type=countstore&id=' + item.id_store;
  //   axios.get(url)
  //     .then((getData) => {
  //       //   console.log(getData.data);
  //       this.setState({
  //         dataSourceStoreProduct2: getData.data,
  //       })
  //       console.log(getData.data)
  //     })
  // }
  componentDidMount() {
    const item = this.props.navigation.getParam('item')
    // console.log('Store|componentDidMount')
    // console.log(item)
    this.getStoreProduct(item)
    // this.getcountstore(item)
  }
  render() {
    let dataCategoryProductSubStore = this.state.dataSourceStoreProduct.map((item, indexs) => {
    // console.log( 'CategoryProductNo. ' + indexs + ' ' + item.image ),
    var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.image].join('/');
    // console.log('Store|render')
    // console.log(dataMySQL)
    return (
        <View style={styles.Store} key={indexs}>
        <View style={styles.Store_Box}>
            <Image
                source={{
                    uri: dataMySQL,
                }}
                style={styles.Store_Image}
                resizeMethod='resize'
            />
            <Text>
              {item.name}
            </Text>
            </View>
        </View>
    );
})
return (
    <ScrollView horizontal>
        {dataCategoryProductSubStore}
    </ScrollView>
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
        <Text> คูปอง </Text>
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
        <Text> คะแนน </Text>
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
