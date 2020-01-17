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
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../../style/stylePromotion-src/styleDealScreen';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { AppBar, Slide, Button_Bar, Second_Store } from './DealScreen';
import { TabBar } from '../tools/Tools';
export const { width, height } = Dimensions.get('window');

export default class WorthFinScreen extends Component {
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
          <Slide />
          <Fin_sale />
          <Store_Sale />
          <Product_Cool />
          <Second_Store/>
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
      <View >
        <View style={styles.Fin_sale_Box}>
          <View style={[styles.Box_Text_Head, { marginTop: -10 }]}>
            <Text> Fin จัดหนักลดสูงสุด 80 %  </Text>
          </View>
          <View style={styles.Fin_sale_BoxHead}>
            <Text style={styles.Fin_sale_BoxTextEnd}>ดูทั้งหมด</Text>
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
    };
  }

  render() {
    return (
      <View style={{marginTop:10,}}>
        <View style={styles.Fin_sale_Box}>
          <View style={[styles.Box_Text_Head, { marginTop: -10 }]}>
            <Text> ร้านนี้มีของลด </Text>
          </View>
          <View style={styles.Fin_sale_BoxHead}>
            <Text style={styles.Fin_sale_BoxTextEnd}>ดูทั้งหมด</Text>
          </View>
          <View style={styles.Store_Sale}>
            <View style={styles.Store_Sale_Box}>

              {/* BoxA */}
              <View style={styles.Store_Sale_BoxA}>
                <View style={styles.Store_Sale_BoxA_Carousel}></View>
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
    };
  }

  render() {
    return (
      <View style={{marginTop:10,}}>
        <View style={styles.Fin_sale_Box}>
          <View style={[styles.Box_Text_Head, { marginTop: -10 }]}>
            <Text> ร้านนี้มีของลด </Text>
          </View>
          <View style={styles.Fin_sale_BoxHead}>
            <Text style={styles.Fin_sale_BoxTextEnd}>ดูทั้งหมด</Text>
          </View>
          <View style={styles.Deal_Box}>
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
        </View>
      </View>
    );
  }
}

///-------------------------------------------------------------------------///




