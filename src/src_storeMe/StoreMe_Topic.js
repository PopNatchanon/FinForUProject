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
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import stylesPro from '../../style/stylesProfile-src/stylesProfile_Topic';
import stylesMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import { PopularProduct } from '../StoreScreen';
import { ip } from '../../navigator/IpConfig';

export const { width, height } = Dimensions.get('window');

export default class StoreMe_Topic extends Component {
    PathList() {
        const selectedIndex = this.props.navigation.getParam('selectedIndex')
        switch (selectedIndex) {
            case 0:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>   
                    </SafeAreaView>
                )
            case 1:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>                  
                    </SafeAreaView>)
            case 2:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>                  
                    </SafeAreaView>
                )
            case 3:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>               
                    </SafeAreaView>
                )
            case 4:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>             
                    </SafeAreaView>
                )
            case 5:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}> 
                    </SafeAreaView>
                )
        }
    }
    
  render() {
    return (
        <View style={{ flex: 1 }}>{this.PathList()}</View>
    );
  }
}

///------------------------------------------------------------------------------///


export class StoreMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> StoreMe_Topic </Text>
      </View>
    );
  }
}
