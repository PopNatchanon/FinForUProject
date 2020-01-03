import React, { Component } from 'react';
import {
    View,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import FastImage from 'react-native-fast-image';

import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconsFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo'
import styles from '../style/stylesNewsScreen';
import { ip } from '../navigator/IpConfig'
export const { width, height } = Dimensions.get('window');


export default class NewsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.SafeAreaView}>
                <AppBar />
                <ScrollView>
                    <Button_Bar />
                    {/* <Follow_up />
          <Highlights/> */}
                </ScrollView>
                <Toolbar navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}

///-------------------------------------------------------------------------///

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
                <View style={styles.Icon_appbar_Text}>
                    <Text style={styles.Text_appbar}>NEWS</Text>
                </View>
                <Icons RightItem name="store" size={25} style={styles.Icon_appbar} />
            </View>
        );
    }
}

///-------------------------------------------------------------------------///

export class Toolbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.Toolbar}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('MainScreen')} >
                    <View >
                        <IconAntDesign style={{ marginLeft: 5, }} name="home" size={25} />
                        <Text>Home</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('FeedScreen')} >
                    <View >
                        <IconAntDesign name="tagso" size={25} />
                        <Text> Feed</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('NewsScreen')} >
                    <View >
                        <IconAntDesign name="notification" size={25} />
                        <Text>News</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('BellScreen')} >
                    <View >
                        <IconAntDesign name="bells" size={25} />
                        <Text>เตือน</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('LoginScreen')} >
                    <View>
                        <IconAntDesign name="user" size={25} />
                        <Text> ฉัน</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


///-------------------------------------------------------------------------///

export class Button_Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }
    ViewSide(selectedIndex) {
        // const { s_name, s_image } = this.props;
        switch (selectedIndex) {
            case 0:
                return (
                    <SafeAreaView style={styles.SafeAreaView_A}>
                        <News />
                    </SafeAreaView>
                );
                break;
            case 1:
                return (
                    <SafeAreaView style={styles.SafeAreaView_A}>
                        <Blog />
                    </SafeAreaView>
                );
            default:
        }
    }

    render() {
        const component1 = () => <Text>NEWS</Text>
        const component2 = () => <Text>BLOG</Text>
        const buttons = [{ element: component1 }, { element: component2 }]
        const { selectedIndex } = this.state
        return (
            <View>
                <View style={styles.Button_Bar}>
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={{
                            height: 33,
                            width: 200,
                            borderWidth: 0,
                            backgroundColor: '#0A55A6'
                        }}
                        selectedButtonStyle={{
                            backgroundColor: '#ffffff',
                            borderTopColor: '#ffffff',
                            borderTopWidth: 4
                        }}
                        selectedTextStyle={{
                            // color: '#FFFFFF',
                        }}
                    />
                </View>
                {this.ViewSide(selectedIndex)}
            </View>
        );
    }
}

///-------------------------------------------------------------------------///

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.header_News}>
                <View style={styles.header_Box}>
                    <FastImage
                        style={styles.header_image}
                        source={{ uri: ip + '/MySQL/uploads/page_News/page_J_News.jpg' }}
                    />
                    <Text>หลายคนคงจะเคยอยากรู้ วิธีดูเพชรแท้ ว่าจริงๆแล้วเพชรแท้ดูยังไง?</Text>
                    <View style={styles.header_icon_Box}>
                        <IconEntypo style={styles.header_icon} name='eye' size={25} />
                        <IconEntypo style={styles.header_icon} name='share' size={25} />
                    </View>
                </View>
                <View style={styles.body_Box}>
                    <View style={styles.body_Box_A}>
                        <FastImage
                            style={styles.body_image}
                            source={{ uri: ip + '/MySQL/uploads/page_News/วิธีดูเข็มและรองเท้แตะกุชชี่ของแท้-660x330.jpg' }}>
                        </FastImage>
                        <Text style={styles.body_Text}>วันนี้เราจะมาสอนวิธีการแยกเข็มขัดกุชชี่และรองเท้าแตะกุชชี่</Text>
                    </View>
                </View>
                <View style={styles.body_Box}>
                    <View style={styles.body_Box_A}>
                        <FastImage
                            style={styles.body_image}
                            source={{ uri: ip + '/MySQL/uploads/page_News/page_J_News.jpg' }}>
                        </FastImage>
                        <Text style={styles.body_Text}>หลายคนคงจะเคยอยากรู้วิธีดูเพชรแท้ว่าจริงๆแล้วเพชรแท้ดูยังไง?</Text>
                    </View>
                </View>
                <View style={styles.body_Box}>
                    <View style={styles.body_Box_A}>
                        <FastImage
                            style={styles.body_image}
                            source={{ uri: ip + '/MySQL/uploads/page_News/Supreme.jpg' }}>
                        </FastImage>
                        <Text style={styles.body_Text}>ถ้าพูดถึงแบรนด์ที่มาแรงและหลายคนก็ยังคงชื่อชอบอยู่ในช่วง 2 – 3 ปีที่ผ่านมานี้ ก็ต้องแบรนด์ ‘Supreme’ นี่แหละค่ะ</Text>
                    </View>
                </View>
                <View style={styles.body_Box}>
                    <View style={styles.body_Box_A}>
                        <FastImage
                            style={styles.body_image}
                            source={{ uri: ip + '/MySQL/uploads/page_News/วิธีดูเข็มและรองเท้แตะกุชชี่ของแท้-660x330.jpg' }}>
                        </FastImage>
                        <Text style={styles.body_Text}>วันนี้เราจะมาสอนวิธีการแยกเข็มขัดกุชชี่และรองเท้าแตะกุชชี่</Text>
                    </View>
                </View>

            </View>

        );
    }

}

///-------------------------------------------------------------------------///

export class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.header_News}>
                <View style={styles.header_Box}>
                    <FastImage
                        style={styles.header_image}
                        source={{ uri: ip + '/MySQL/uploads/page_News/page_J_News.jpg' }}
                    />
                    <Text>หลายคนคงจะเคยอยากรู้ วิธีดูเพชรแท้ ว่าจริงๆแล้วเพชรแท้ดูยังไง?</Text>
                    <View style={styles.header_icon_Box}>
                        <IconEntypo style={styles.header_icon} name='eye' size={25} />
                        <IconEntypo style={styles.header_icon} name='share' size={25} />
                    </View>
                </View>
                <View style={styles.body_Box}>
                    <View style={styles.body_Box_A}>
                        <FastImage
                            style={styles.body_image}
                            source={{ uri: ip + '/MySQL/uploads/page_News/วิธีดูเข็มและรองเท้แตะกุชชี่ของแท้-660x330.jpg' }}>
                        </FastImage>
                        <Text style={styles.body_Text}>วันนี้เราจะมาสอนวิธีการแยกเข็มขัดกุชชี่และรองเท้าแตะกุชชี่</Text>
                    </View>
                </View>
                <View style={styles.body_Box}>
                    <View style={styles.body_Box_A}>
                        <FastImage
                            style={styles.body_image}
                            source={{ uri: ip + '/MySQL/uploads/page_News/page_J_News.jpg' }}>
                        </FastImage>
                        <Text style={styles.body_Text}>หลายคนคงจะเคยอยากรู้วิธีดูเพชรแท้ว่าจริงๆแล้วเพชรแท้ดูยังไง?</Text>
                    </View>
                </View>
                <View style={styles.body_Box}>
                    <View style={styles.body_Box_A}>
                        <FastImage
                            style={styles.body_image}
                            source={{ uri: ip + '/MySQL/uploads/page_News/Supreme.jpg' }}>
                        </FastImage>
                        <Text style={styles.body_Text}>ถ้าพูดถึงแบรนด์ที่มาแรงและหลายคนก็ยังคงชื่อชอบอยู่ในช่วง 2 – 3 ปีที่ผ่านมานี้ ก็ต้องแบรนด์ ‘Supreme’ นี่แหละค่ะ</Text>
                    </View>
                </View>
                <View style={styles.body_Box}>
                    <View style={styles.body_Box_A}>
                        <FastImage
                            style={styles.body_image}
                            source={{ uri: ip + '/MySQL/uploads/page_News/วิธีดูเข็มและรองเท้แตะกุชชี่ของแท้-660x330.jpg' }}>
                        </FastImage>
                        <Text style={styles.body_Text}>วันนี้เราจะมาสอนวิธีการแยกเข็มขัดกุชชี่และรองเท้าแตะกุชชี่</Text>
                    </View>
                </View>

            </View>

        );
    }

}
