///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactNative, {
    Animated, Dimensions, View, ScrollView, StyleSheet, Text, TouchableOpacity, Modal, Image, PanResponder, SafeAreaView, StatusBar,
    UIManager,
    Easing,
} from 'react-native';
import { PanGestureHandler, State, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart } from '../../../actions'
///----------------------------------------------------------------------------------------------->>>> Import
import Animateds from 'react-native-reanimated';
const { cond, eq, add, set, Value, event } = Animateds;
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { color_up, mainColor, appBarColor, } from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from '../../../screens/MainScreen';
import Imageout from './Image'
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>>
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(ImageZoom);
function ImageZoom(props) {
    const { route } = props;
    const data = route.params?.data;
    const [isDragging, setIsDragging] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState(false)
    // const gesturePosition = useRef(new Animated.ValueXY());d
    const scrollValue = useRef(new Animated.Value(0));
    let getScrollPosition = () => { return scrollValue.current.__getValue(); }
    let onScroll = Animated.event([
        { nativeEvent: { contentOffset: { y: scrollValue.current } } },
    ], { useNativeDriver: false });
    // let animatedStyle = {
    //     transform: gesturePosition.current.getTranslateTransform(),
    // };
    // animatedStyle.transform.push({
    //     scale: getScrollPosition(),
    // });

    let initialStyle = {
        transform: [
            { translateY: selectedPhoto.y - getScrollPosition() }
        ],
    };
    return <SafeAreaView style={{ backgroundColor: '#000' }}>
        <StatusBar backgroundColor='#000' />
        <ScrollView onScroll={onScroll} scrollEventThrottle={16} scrollEnable={!isDragging}>
            {data.map((value, index) => {
                return <Imageout key={index} dataIndex={index} dataValue={value} isDragging={isDragging}
                    onGestureStart={(value) => { setSelectedPhoto(value); setIsDragging(true) }}
                    onGestureRelease={() => setIsDragging(false)} scrollValue={{ y: getScrollPosition() }} />
            })}
        </ScrollView>
        <ExitAppModule {...props} />
    </SafeAreaView>;
};