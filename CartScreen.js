import React, { Component } from 'react';
import {
    Image,
    View,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { CheckBox } from 'react-native-elements'
import axios from 'axios';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/FontAwesome';
import IconsFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles_A from './stylesCartScreen';
import styles from './StylesDetailScreen';
import NumberFormat from 'react-number-format';
import { ip } from './IpConfig';
export const { width, height } = Dimensions.get('window');


export default class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles_A.SafeAreaView}>
                <AppBar navigation={this.props.navigation} />
                <ScrollView>
                    <Product_Cart />
                    <Product_Like />
                    <Might_like />
                </ScrollView>
                <Buy_bar />
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
            <View style={styles_A.Appbar}>
                <View style={styles_A.Icon_appbar_Text}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                        <IconsFeather style={styles_A.Icon_appbar} name="arrow-left" size={30} />
                    </TouchableOpacity>
                    <Text style={styles_A.Text_appbar}>รถเข็น</Text>
                </View>
                <IconAntDesign RightItem name="message1" size={25} style={styles_A.Icon_appbar} />
            </View>
        );
    }
}

///--------------------------------------------------------------------------///


export class Product_Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles_A.Product_Cart}>
                <Text> สินค้าในรถเข็น </Text>
                {/* <CheckBox
                    title='Click Here'
                    checked={this.state.item1}
  onPress={() => this.setState({checked: !this.state.item1})}
                />
                <CheckBox
                    title='Click Here'
                    checked={this.state.item2}
  onPress={() => this.setState({checked: !this.state.item2})}
                /> */}
            </View>
        );
    }
}

///--------------------------------------------------------------------------///

export class Product_Like extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> รายการที่คุณชอบ </Text>
            </View>
        );
    }
}


///--------------------------------------------------------------------------///

export class Might_like extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourcePopularProduct: [],
        };
    }

    getDataPopularProduct() {
        var url = ip + '/mysql/DataServiceStore.php?type=todayproduct';
        axios.get(url)
            .then((getData) => {
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
        let dataToday = this.state.dataSourcePopularProduct.map((item, indexs) => {
            // console.log( indexs + '. ' + item.image ),
            var dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs} onPress={() => this.props.navigation.push('DetailScreen', { id_item: item.id_product })}>
                    <View style={styles.PopularProductBox} key={indexs}>
                        <Image
                            source={{
                                uri: dataMySQL,
                            }}
                            style={styles.PopularProductImage}
                            resizeMethod='resize'
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
                <Text style={styles.PopularProductText}>
                    คุณอาจชอบสิ่งนี้
                </Text>
                <View style={styles.PopularProductBoxProduct}>
                    {dataToday}
                </View>
            </View>
        )
    }
}

///--------------------------------------------------------------------------///

export class Buy_bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles_A.Bar}>
                <Text> CartScreen </Text>
                <View style={styles_A.Bar_Code} > Code</View>
            </View>
        );
    }
}
