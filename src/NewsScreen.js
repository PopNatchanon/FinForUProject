import React, { Component } from 'react';
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
import stylesStore from '../style/StylesStoreScreen';
import stylesMain from '../style/StylesMainScreen';
import stylesFont from '../style/stylesFont';
import { ip } from '../navigator/IpConfig'
export const { width, height } = Dimensions.get('window');
import { Toolbar, TabBar } from './tools/Tools'
import { AppBar1 } from './MainScreen';


export default class NewsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
        this.getData = this.getData.bind(this)
    }
    getData(val) {
        this.setState({
            selectedIndex: val
        });
    }
    render() {
        var titleValue
        this.state.selectedIndex == 0 ? titleValue = 'NEWS' : titleValue = 'BLOG'
        return (
            <SafeAreaView style={[stylesMain.SafeAreaViewNoBackground, stylesMain.BackgroundAreaView]}>
                <AppBar1 titleHead={titleValue} menuBar />
                <MenuBar sendText={this.getData} />
                <ScrollView>
                    <Button_Bar selectedIndex={this.state.selectedIndex} />
                </ScrollView>
                <Toolbar navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}

///-------------------------------------------------------------------------///

export class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            selectedIndex: 0
        }
        this.getData = this.getData.bind(this)
    }
    getData(val) {
        this.setState({
            selectedIndex: val
        });
        this.props.sendText(val);
    }
    render() {
        const item = [{
            name: 'NEWS'
        }, {
            name: 'BLOG'
        }];
        return (
            <View>
                <View>
                    <TabBar
                        sendData={this.getData}
                        item={item}
                        noSpace
                        widthBox={100}
                        spaceColor='#0A55A6'
                        activeColor='#fff'
                        fontColor='#fff'
                    />
                </View>
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
    }
    ViewSide(selectedIndex) {
        // const { s_name, s_image } = this.props;
        switch (selectedIndex) {
            case 0:
                return (
                    <SafeAreaView>
                        <Blog Body='News' />
                    </SafeAreaView>
                );
            case 1:
                return (
                    < SafeAreaView>
                        <Blog Body='Blog' />
                    </SafeAreaView >
                );
            default:
        }
    }
    render() {
        const { selectedIndex } = this.props
        return (
            <View>
                {this.ViewSide(selectedIndex)}
            </View>
        );
    }
}

export class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesStore.header_News}>
                <View style={stylesStore.header_Box}>
                    <FastImage
                        style={stylesStore.header_image}
                        source={{ uri: ip + '/MySQL/uploads/page_News/page_J_News.jpg' }}
                    />
                    <Text style={[stylesFont.FontSize4, stylesFont.FontFamilyText]}>
                        หลายคนคงจะเคยอยากรู้ วิธีดูเพชรแท้ ว่าจริงๆแล้วเพชรแท้ดูยังไง?</Text>
                    <View style={stylesStore.header_icon_Box}>
                        <IconEntypo style={stylesStore.header_icon} name='eye' size={25} />
                        <IconEntypo style={stylesStore.header_icon} name='share' size={25} />
                    </View>
                </View>
                <View style={stylesStore.body_Box}>
                    <View style={stylesStore.body_Box_A}>
                        <FastImage
                            style={stylesStore.body_image}
                            source={{ uri: ip + '/MySQL/uploads/page_News/วิธีดูเข็มและรองเท้แตะกุชชี่ของแท้-660x330.jpg' }}>
                        </FastImage>
                        <Text style={[stylesStore.body_Text, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
                            วันนี้เราจะมาสอนวิธีการแยกเข็มขัดกุชชี่และรองเท้าแตะกุชชี่</Text>
                    </View>
                </View>
                <View style={stylesStore.body_Box}>
                    <View style={stylesStore.body_Box_A}>
                        <FastImage
                            style={stylesStore.body_image}
                            source={{ uri: ip + '/MySQL/uploads/page_News/page_J_News.jpg' }}>
                        </FastImage>
                        <Text style={[stylesStore.body_Text, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
                            หลายคนคงจะเคยอยากรู้วิธีดูเพชรแท้ว่าจริงๆแล้วเพชรแท้ดูยังไง?</Text>
                    </View>
                </View>
                <View style={stylesStore.body_Box}>
                    <View style={stylesStore.body_Box_A}>
                        <FastImage
                            style={stylesStore.body_image}
                            source={{ uri: ip + '/MySQL/uploads/page_News/Supreme.jpg' }}>
                        </FastImage>
                        <Text style={[stylesStore.body_Text, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
                            ถ้าพูดถึงแบรนด์ที่มาแรงและหลายคนก็ยังคงชื่อชอบอยู่ในช่วง 2 – 3 ปีที่ผ่านมานี้ก็ต้องแบรนด์ ‘Supreme’ นี่แหละค่ะ</Text>
                    </View>
                </View>
                <View style={stylesStore.body_Box}>
                    <View style={stylesStore.body_Box_A}>
                        <FastImage
                            style={stylesStore.body_image}
                            source={{ uri: ip + '/MySQL/uploads/page_News/วิธีดูเข็มและรองเท้แตะกุชชี่ของแท้-660x330.jpg' }}>
                        </FastImage>
                        <Text style={[stylesStore.body_Text, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
                            วันนี้เราจะมาสอนวิธีการแยกเข็มขัดกุชชี่และรองเท้าแตะกุชชี่</Text>
                    </View>
                </View>
            </View>
        )
    }
}