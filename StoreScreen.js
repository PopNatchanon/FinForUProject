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
//import { styles } from 'mystyles';

import SwiperFlatList from 'react-native-swiper-flatlist';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconsFeather from 'react-native-vector-icons/Feather';
import styles from './StylesStoreScreen'
import { ip } from './IpConfig'

///----------------------------------Appbar----------------------------------------///

export default class StoreScreen extends Component {
    render() {
        return (
            console.log(JSON.stringify(navigation.getParam(item))),
            <SafeAreaView style={styles.SafeAreaView}>
                <AppBar navigation={this.props.navigation} />
                <ScrollView>
                    <StoreHead />
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

export class StoreHead extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.Appbar}>
                <View>
                    <Image
                        source={{
                            uri: dataMySQL,
                        }}
                        style={styles.childSlide}
                        resizeMethod='resize'
                    />
                </View>
            </View>
        );
    }
}