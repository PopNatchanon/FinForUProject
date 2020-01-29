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
import styleMain from '../style/StylesMainScreen';
import styles from '../style/stylePromotion-src/styleDealScreen';
import stylesStore from '../style/StylesStoreScreen';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import stylesFont from '../style/stylesFont';
import { Slide } from './src_Promotion/DealScreen';
import { TodayProduct, AppBar } from './MainScreen';
import { Button_Bar } from '../src/HighlightScreen';
export const { width, height } = Dimensions.get('window');

export default class Second_productScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <SafeAreaView>
         <AppBar leftBar ='backarrow' navigation={this.props.navigation}  />
         <Slide/>
         <Button_Bar/>
         <ScrollView>
             <TodayProduct noTitle navigation={this.props.navigation}/>
         </ScrollView>
     </SafeAreaView>
    );
  }
}

///--------------------------------------------------------------------------///

