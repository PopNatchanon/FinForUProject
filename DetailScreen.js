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
import styles from './StylesMainScreen'

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <AppBar navigation={this.props.navigation}/>
      </View>
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
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <Icons RightItem name="arrow-left" size={20} style={{ marginTop: 5, }} />
              </TouchableOpacity>
              <TextInput style={styles.TextInput}
                  placeholder="ค้นหาสินค้า/ร้านค้า"
                  onChangeText={(text) => this.state({ text })}
              ></TextInput>
              <IconsFeather RightItem name="filter" size={20} style={{ marginTop: 5, }} />
              <Icons RightItem name="ellipsis-h" size={20} style={{ marginTop: 5, }} />
          </View>
      );
  }
}

