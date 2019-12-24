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
import Carousel, { Pagination } from 'react-native-snap-carousel';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconsFeather from 'react-native-vector-icons/Feather';
import {
    ButtonGroup,
    Button,
} from 'react-native-elements'
import styles from './StylesStoreScreen'
import { ip } from './IpConfig'
export const { width, height } = Dimensions.get('window');

///----------------------------------Appbar----------------------------------------///

export default class StoreScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={styles.SafeAreaView}>
                <Headbar />
            </SafeAreaView>
        );
    }
}

export class Headbar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <ImageBackground
                    source={require('./icon/bgprofile.jpg')}
                    style={styles.StoreHeadImage}
                    resizeMethod='resize'
                />
            </View>
        )
    }
}