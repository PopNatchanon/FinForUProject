import React, { Component } from 'react';
import {
    Image,
    View,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
} from 'react-native';
//import { styles } from 'mystyles';

import SwiperFlatList from 'react-native-swiper-flatlist';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconsFeather from 'react-native-vector-icons/Feather';

import styles from './StylesMainScreen'

const ip = 'http://192.168.0.131';

///----------------------------------Appbar----------------------------------------///

export default class StoreScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.SafeAreaView}>
                <AppBar navigation={this.props.navigation}/>
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
            <Icons RightItem name="arrow-left" size={20} style={{ marginTop: 5, }} onPress={()=>this.props.navigation.goBack()}/>
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