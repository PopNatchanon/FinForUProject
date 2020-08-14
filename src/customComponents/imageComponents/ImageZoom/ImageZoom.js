///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactNative, {
    Animated, Dimensions, View, ScrollView, StyleSheet, Text, TouchableOpacity, Modal, Image, PanResponder, SafeAreaView, StatusBar,
    UIManager, Easing,
} from 'react-native';
import { PanGestureHandler, State, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
    setImageDragging, setImageList, setImageOffsetGP, setImageScaling, setImageSelect, setImageValueGP, setImageValueSV
} from '../../../actions';
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
import Images from './Images';
import SelectedImage from './SelectedImage';
import getDistance from './helpers/getDistance';
import getScale, { getScaleSub } from './helpers/getScale';
import measureNode from './helpers/measureNode';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>>
const mapStateToProps = (state) => ({
    ImageZ: state.ZoomImage,
});
const mapDispatchToProps = ({
    setImageDragging, setImageList, setImageOffsetGP, setImageScaling, setImageSelect, setImageValueGP, setImageValueSV,
});
export default connect(mapStateToProps, mapDispatchToProps)(ImageZoom);
function ImageZoom(props) {
    const {
        ImageZ, route, setImageDragging, setImageList, setImageOffsetGP, setImageScaling, setImageSelect, setImageValueGP, setImageValueSV,
    } = props;
    const { gesturePosition, isDragging, isScaling, scaleValue, selectedData, } = ImageZ;
    const data = route.params?.data;
    !ImageZ.isActiveData && data.length > 0 && setImageList(data);
    const [_initialTouches, set_initialTouches] = useState(undefined);
    const scrollValue = useRef(new Animated.Value(0));
    let getScrollPosition = () => { return scrollValue.current.__getValue(); };
    let onScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollValue.current } } }], { useNativeDriver: false });
    // let animatedStyle = {
    //     transform: gesturePosition.current.getTranslateTransform(),
    // };
    // animatedStyle.transform.push({
    //     scale: getScrollPosition(),
    // });
    // let initialStyle = {
    //     transform: [
    //         { translateY: selectedPhoto.y - getScrollPosition() }
    //     ],
    // };
    async function _onGestureStart(event, gestureState) {
        let { touches } = event.nativeEvent;
        setImageDragging(true);
        // set initial touches
        set_initialTouches(touches);
        setImageOffsetGP({ x: JSON.stringify(gesturePosition.x) * 1, y: /*selectedPhotoMeasurement.y - scrollValue.y*/0, });
        setImageValueGP(0, 0);
    };
    function _onGestureMove(event: Event, gestureState: GestureState) {
        let { touches } = event.nativeEvent;
        let { dx, dy } = gestureState;
        if (isScaling) {
            if (touches.length < 2) {
                let newDx = (JSON.stringify(gesturePosition.x) * 1) + dx;
                let procressDx = ((width * ((JSON.stringify(scaleValue) * 1) - 1)) / 2);
                console.log('---------->Dx<----------')
                console.log(newDx)
                console.log('---------->Dx<----------')
                newDx = newDx > procressDx ? procressDx : newDx < -procressDx ? -procressDx : newDx;
                console.log('---------->procress<----------')
                console.log(procressDx)
                console.log('---------->procress<----------')
                console.log('---------->newDx<----------')
                console.log(newDx)
                console.log('---------->newDx<----------')
                setImageOffsetGP({ x: newDx, y: /*selectedPhotoMeasurement.y - scrollValue.y*/0, });
                return;
            } else {
                if (_initialTouches && _initialTouches.length < 2) { set_initialTouches(touches); return; };
                let currentDistance = getDistance(touches);
                let initialDistance = getDistance(_initialTouches);
                let newScale = getScale(currentDistance, initialDistance);
                newScale != 1 && setImageScaling(true);
                if (newScale < 1) { newScale = 1; setImageScaling(false); };
                if (newScale > 4) { newScale = 4; };
                setImageValueSV(newScale);
                let newDx = (JSON.stringify(gesturePosition.x) * 1) + dx;
                let procressDx = ((width * (newScale - 1)) / 2);
                console.log('---------->Dx<----------')
                console.log(newDx)
                console.log('---------->Dx<----------')
                newDx = newDx > procressDx ? procressDx : newDx < -procressDx ? -procressDx : newDx;
                console.log('---------->procress<----------')
                console.log(procressDx)
                console.log('---------->procress<----------')
                console.log('---------->newDx<----------')
                console.log(newDx)
                console.log('---------->newDx<----------')
                setImageOffsetGP({ x: newDx, y: /*selectedPhotoMeasurement.y - scrollValue.y*/0, });
            };
        } else {
            if (touches.length < 2) { return; }
            else {
                if (_initialTouches && _initialTouches.length < 2) { set_initialTouches(touches); return; };
                let currentDistance = getDistance(touches);
                let initialDistance = getDistance(_initialTouches);
                let newScale = getScale(currentDistance, initialDistance);
                newScale != 1 && setImageScaling(true);
                if (newScale < 1) { newScale = 1; setImageScaling(false); };
                if (newScale > 4) { newScale = 4; };
                setImageValueSV(newScale);
                let newDx = (JSON.stringify(gesturePosition.x) * 1) + dx;
                let procressDx = ((width * (newScale - 1)) / 2);
                console.log('---------->Dx<----------')
                console.log(newDx)
                console.log('---------->Dx<----------')
                newDx = newDx > procressDx ? procressDx : newDx < -procressDx ? -procressDx : newDx;
                console.log('---------->procress<----------')
                console.log(procressDx)
                console.log('---------->procress<----------')
                console.log('---------->newDx<----------')
                console.log(newDx)
                console.log('---------->newDx<----------')
                setImageOffsetGP({ x: newDx, y: /*selectedPhotoMeasurement.y - scrollValue.y*/0, });
            };
        };
    };
    function _onGestureRelease(event, gestureState) {
        // Animated.parallel([
        //     Animated.timing(gesturePosition.current.x, {
        //         toValue: 0,
        //         duration: RESTORE_ANIMATION_DURATION,
        //         easing: Easing.ease,
        //         useNativeDriver: false,
        //     }),
        //     Animated.timing(gesturePosition.current.y, {
        //         toValue: 0,
        //         duration: RESTORE_ANIMATION_DURATION,
        //         easing: Easing.ease,
        //         useNativeDriver: false,
        //     }),
        //     Animated.timing(scaleValue.current, {
        //         toValue: 1,
        //         duration: RESTORE_ANIMATION_DURATION,
        //         easing: Easing.ease,
        //         useNativeDriver: false,
        //     }),
        // ]).start(() => {
        //     gesturePosition.current.setOffset({
        //         x: 0,
        //         y: /*selectedPhotoMeasurement.y - scrollValue.y*/0,
        //     });
        //     set_initialTouches(undefined);
        // });
        setImageValueGP(0, 0);
        setImageDragging(false);
        set_initialTouches(undefined);
    };
    let gestureHandler = PanResponder.create({
        onStartShouldSetResponderCapture: () => true,
        onStartShouldSetPanResponderCapture: () => true,
        onMoveShouldSetResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: _onGestureStart,
        onPanResponderMove: _onGestureMove,
        onPanResponderRelease: _onGestureRelease,
    });
    let animatedStyle = { transform: gesturePosition.getTranslateTransform(), };
    animatedStyle.transform.push({ scale: scaleValue, });
    return <SafeAreaView style={{ backgroundColor: '#000' }}>
        <StatusBar backgroundColor='#000' />
        <ScrollView horizontal onScroll={onScroll} scrollEventThrottle={16} scrollEnabled={!isScaling}
            style={{ height: '100%', }}>
            {ImageZ.data.map((value, index) => {
                return <View key={index} style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <Images {...props} dataIndex={index} dataValue={value} scrollValue={{ y: getScrollPosition() }} />
                </View>;
            })}
        </ScrollView>
        {(isScaling) ?
            <View style={{ height, position: 'absolute', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Animated.View {...gestureHandler.panHandlers} style={[{
                    zIndex: 10, width: selectedData.w, height: selectedData.h,
                }, animatedStyle]}>
                    <SelectedImage {...props} />
                </Animated.View>
            </View>
            : null}
        <ExitAppModule {...props} />
    </SafeAreaView>;
};