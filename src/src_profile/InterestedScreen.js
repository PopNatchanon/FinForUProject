import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  View,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../../style/stylesProfile-src/stylesLatestScreen';
import {ip} from '../../navigator/IpConfig';

export const { width, height } = Dimensions.get('window');

export default class InterestedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, }}>
        <Appbar navigation={this.props.navigation} />
        <ScrollView>
          <Product_Box />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

///----------------------------------Appbar----------------------------------------///

export class Appbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ height: 50, flexDirection: 'row', width,}} >
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
          <IconEntypo name='chevron-left' size={35} />
        </TouchableOpacity>
        <Text style={{ marginTop: 5, }}>สิ่งที่สนใจ</Text>
      </View>
    );
  }
}

///-----------------------------------------------------------------------------///



export class Product_Box extends Component {
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
      var dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
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
        <View style={styles.PopularProductBoxProduct}>
          {dataToday}
        </View>
      </View>
    )
  }
}