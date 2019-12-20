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

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView>
        <AppBar navigation={this.props.navigation} />
        <ScrollView>
          <Detail_Image navigation={this.props.navigation} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

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
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <View style={styles.Icon_Back}>
            <IconsFeather  name="arrow-left-circle" size={30} />
            </View>
          </TouchableOpacity>
        </View>
      
    );
  }
}


