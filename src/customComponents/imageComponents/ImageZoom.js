///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Animated, Dimensions, View, ScrollView, StyleSheet, Text, TouchableOpacity, Modal, Image, PanResponder, SafeAreaView,
} from 'react-native';
import { PanGestureHandler, State, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart } from '../../actions'
///----------------------------------------------------------------------------------------------->>>> Import
import Animateds from 'react-native-reanimated';
const { cond, eq, add, set, Value, event } = Animateds;
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain, { color_up, mainColor, appBarColor, } from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from '../../screens/MainScreen';
import { Toolbar, NavigationNavigate, AppBar, GenArray, ImageList, } from '..';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>>
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(ImageZoom);
function ImageZoom(props) {
    const { route } = props;
    const data = route.params?.data;
    let _renderItem = (item, index) => {
        var dataMySQL;
        // banner ?
        (dataMySQL = `${finip}/${item.image_path}/${item.image}`)
        // : (dataMySQL = index % 2 == 0 ? `${ip}/mysql/uploads/Banner_Mobile/T-10.jpg` : `${ip}/mysql/uploads/Banner_Mobile/T-5.jpg`);
        return <View style={stylesMain.child} key={index}>
            <Image source={{ uri: dataMySQL }} style={stylesMain.child} resizeMode='contain' resizeMethod='resize' />
        </View>;
    };
    console.log(data)
    return <SafeAreaView>
        <ImageList data={data} renderItem={_renderItem} zoom />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};