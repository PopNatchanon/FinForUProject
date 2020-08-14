///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactNative, {
    Animated, Dimensions, View, ScrollView, StyleSheet, Text, TouchableOpacity, Modal, Image, PanResponder, SafeAreaView, StatusBar,
    UIManager, Easing,
} from 'react-native';
import { PanGestureHandler, State, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart } from '../../../actions';
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
import { Toolbar, NavigationNavigate, AppBar, GenArray, ImageList, } from '../..';
import getDistance from './helpers/getDistance';
import getScale from './helpers/getScale';
import measureNode from './helpers/measureNode';
import type { Measurement } from './Measurement-type';
import SelectedImage from './SelectedImage';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>>
const RESTORE_ANIMATION_DURATION = 200;
///----------------------------------------------------------------------------------------------->>>>
export default function Imageout(props) {
    const { dataIndex, dataValue, route, scrollValue, selectIndex } = props;
    const { ImageZ, setImageDragging, setImageOffsetGP, setImageScaling, setImageSelect, setImageValueGP, setImageValueSV, } = props;
    const { gesturePosition, isDragging, isScaling, scaleValue, selectedData, } = ImageZ;
    const imageH = route.params?.h;
    const imageW = route.params?.w;
    const [activeScale, setActiveScale] = useState(false);
    const [selectedPhotoMeasurement, setSelectedPhotoMeasurement] = useState(false);
    const [_initialTouches, set_initialTouches] = useState(undefined);
    // const gesturePosition = useRef(new Animated.ValueXY());
    // const scaleValue = useRef(new Animated.Value(1));
    const _lastOffset = { x: 0, y: 0 };
    const _parent = useRef(null);
    const _photoComponent = useRef(null);
    // let animatedStyle = { transform: gesturePosition.current.getTranslateTransform(), };
    // animatedStyle.transform.push({ scale: scaleValue.current, });
    async function _measureSelectedPhoto() {
        let parent = ReactNative.findNodeHandle(_parent.current);
        let photoComponent = ReactNative.findNodeHandle(_photoComponent.current);
        let [parentMeasurement, photoMeasurement] = await Promise.all([measureNode(parent), measureNode(photoComponent),]);
        return {
            x: parentMeasurement.x + photoMeasurement.x,
            y: parentMeasurement.y + photoMeasurement.y,
            w: photoMeasurement.w,
            h: photoMeasurement.h,
        };
    };
    async function _onGestureStart(event, gestureState) {
        let { touches } = event.nativeEvent;
        let selectedPhotoMeasurement = await _measureSelectedPhoto();
        setImageSelect({ ...selectedPhotoMeasurement, dataMySQL, index: dataIndex });
        setImageDragging(true);
        // set initial touches
        set_initialTouches(touches);
        setImageOffsetGP({ x: 0, y: /*selectedPhotoMeasurement.y - scrollValue.y*/0, });
        setImageValueGP(0, 0);
    };
    function _onGestureMove(event: Event, gestureState: GestureState) {
        let { touches } = event.nativeEvent;
        let { dx, dy } = gestureState;
        if (ImageZ.isScaling) {
            if (touches.length < 2) {
                return;
            } else {
                let scale = (JSON.stringify(scaleValue) * 1);
                if (_initialTouches && _initialTouches.length < 2) { set_initialTouches(touches); return; };
                let currentDistance = getDistance(touches);
                let initialDistance = getDistance(_initialTouches);
                let newScale = getScale(currentDistance, initialDistance) - 1;
                newScale = newScale > 0.25 ? 0.25 : newScale < -0.25 ? -0.25 : newScale;
                console.log('-----------------------newScale-----------------------')
                console.log(newScale)
                console.log('-----------------------newScale-----------------------')
                console.log('-----------------------scale-----------------------')
                console.log(scale)
                console.log('-----------------------scale-----------------------')
                newScale = newScale + scale;
                console.log('-----------------------newScale2-----------------------')
                console.log(newScale)
                console.log('-----------------------newScale2-----------------------')
                newScale != 1 && setImageScaling(true);
                if (newScale < 1) { newScale = 1; setImageScaling(false); };
                if (newScale > 7) { newScale = 7; };
                setImageValueSV(newScale);
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
                if (newScale > 5) { newScale = 5; };
                setImageValueSV(newScale);
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
        setImageOffsetGP({ x: 0, y: /*selectedPhotoMeasurement.y - scrollValue.y*/0, });
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
    var dataMySQL;
    dataMySQL = `${finip}/${dataValue.image_full_path ?? dataValue.image_path}/${dataValue.image}`;
    // banner ? dataMySQL = `${finip}/${dataValue.image_path}/${dataValue.image}` :
    //     (dataMySQL = index % 2 == 0 ? `${ip}/mysql/uploads/Banner_Mobile/T-10.jpg` : `${ip}/mysql/uploads/Banner_Mobile/T-5.jpg`);
    return <Animated.View ref={_parent} key={dataIndex}>
        <Animated.View {...gestureHandler.panHandlers} ref={_photoComponent} style={{
            height: imageH, opacity: isScaling && dataIndex == selectedData.index ? 0 : 1, width: imageW,
        }}>
            <Animated.Image source={{ uri: dataMySQL }} style={{ height: '100%', width: '100%' }} resizeMode='contain'
                resizeMethod='resize' />
        </Animated.View>
    </Animated.View>;
};