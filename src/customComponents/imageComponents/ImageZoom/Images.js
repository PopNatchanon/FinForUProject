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
const ZOOM_SCALE_MIN = 1;
const ZOOM_SCALE_MAX = 6;
const ZOOM_SCALE_SPEED = 0.15;
const ZOOM_SCALE_LIMIT = 0.10;
///----------------------------------------------------------------------------------------------->>>>
export default function Imageout(props) {
    const { dataIndex, dataValue, route, scrollValue, scrollView1, selectIndex } = props;
    const {
        ImageZ, setImageClearSelect, setImageDragging, setImageIsGesture, setImageOffsetGP, setImageScaling, setImageSelect,
        setImageValueGP, setImageValueSV,
    } = props;
    const { gesturePosition, isDragging, isGesture, isScaling, scaleValue, selectedData, } = ImageZ;
    const [imageHeight, setImageHeight] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);
    const [_initialTouches, set_initialTouches] = useState(undefined);
    const [edge, setEdge] = useState(false);
    const _parent = useRef(null);
    const _photoComponent = useRef(null);
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
        setImageOffsetGP({ x: JSON.stringify(gesturePosition.x) * 1, y: JSON.stringify(gesturePosition.y) * 1, });
        setImageValueGP(0, 0);
    };
    function _onGestureMove(event: Event, gestureState: GestureState) {
        let { touches } = event.nativeEvent;
        let { dx, dy } = gestureState;
        if (isScaling) {
            if (touches.length < 2) {
                let newDx = (JSON.stringify(gesturePosition.x) * 1) + dx;
                let newDy = (JSON.stringify(gesturePosition.y) * 1) + dy;
                let procressDx = (((selectedData.w * (JSON.stringify(scaleValue) * 1)) - width) / 2);
                let procressDy = (((selectedData.h * (JSON.stringify(scaleValue) * 1)) - height) / 2);
                procressDx = procressDx < 0 ? 0 : procressDx;
                procressDy = procressDy < 0 ? 0 : procressDy;
                edge && (newDx >= procressDx ?
                    setImageIsGesture(true) :
                    newDx <= -procressDx ?
                        setImageIsGesture(true) :
                        setImageIsGesture(false));
                newDx = newDx > procressDx ? procressDx : newDx < -procressDx ? -procressDx : newDx;
                newDy = newDy > procressDy ? procressDy : newDy < -procressDy ? -procressDy : newDy;
                setImageOffsetGP({ x: newDx, y: newDy, });
                return;
            } else {
                let scale = (JSON.stringify(scaleValue) * 1);
                if (_initialTouches && _initialTouches.length < 2) { set_initialTouches(touches); return; };
                let currentDistance = getDistance(touches);
                let initialDistance = getDistance(_initialTouches);
                let newScale = getScale(currentDistance, initialDistance) - 1;
                newScale = newScale > ZOOM_SCALE_LIMIT ? ZOOM_SCALE_SPEED : newScale < -ZOOM_SCALE_LIMIT ? -ZOOM_SCALE_SPEED : newScale;
                newScale = newScale + scale;
                newScale != 1 && setImageScaling(true);
                if (newScale < ZOOM_SCALE_MIN) { newScale = 1; setImageScaling(false); };
                if (newScale > ZOOM_SCALE_MAX) { newScale = ZOOM_SCALE_MAX; };
                setImageValueSV(newScale);
                let newDx = (JSON.stringify(gesturePosition.x) * 1) + dx;
                let newDy = (JSON.stringify(gesturePosition.y) * 1) + dy;
                let procressDx = (((selectedData.w * newScale) - width) / 2);
                let procressDy = (((selectedData.h * newScale) - height) / 2);
                procressDx = procressDx < 0 ? 0 : procressDx;
                procressDy = procressDy < 0 ? 0 : procressDy;
                edge && (newDx >= procressDx ?
                    setImageIsGesture(true) :
                    newDx <= -procressDx ?
                        setImageIsGesture(true) :
                        setImageIsGesture(false));
                newDx = newDx > procressDx ? procressDx : newDx < -procressDx ? -procressDx : newDx;
                newDy = newDy > procressDy ? procressDy : newDy < -procressDy ? -procressDy : newDy;
                setImageOffsetGP({ x: newDx, y: newDy, });
            };
        } else {
            if (touches.length < 2) { return; }
            else {
                let scale = (JSON.stringify(scaleValue) * 1);
                if (_initialTouches && _initialTouches.length < 2) { set_initialTouches(touches); return; };
                let currentDistance = getDistance(touches);
                let initialDistance = getDistance(_initialTouches);
                let newScale = getScale(currentDistance, initialDistance) - 1;
                newScale = newScale > ZOOM_SCALE_LIMIT ? ZOOM_SCALE_SPEED : newScale < -ZOOM_SCALE_LIMIT ? -ZOOM_SCALE_SPEED : newScale;
                newScale = newScale + scale;
                newScale != 1 && setImageScaling(true);
                if (newScale < ZOOM_SCALE_MIN) { newScale = 1; setImageScaling(false); };
                if (newScale > ZOOM_SCALE_MAX) { newScale = ZOOM_SCALE_MAX; };
                setImageValueSV(newScale);
                let newDx = (JSON.stringify(gesturePosition.x) * 1) + dx;
                let newDy = (JSON.stringify(gesturePosition.y) * 1) + dy;
                let procressDx = (((selectedData.w * newScale) - width) / 2);
                let procressDy = (((selectedData.h * newScale) - height) / 2);
                procressDx = procressDx < 0 ? 0 : procressDx;
                procressDy = procressDy < 0 ? 0 : procressDy;
                edge && (newDx >= procressDx ?
                    setImageIsGesture(true) :
                    newDx <= -procressDx ?
                        setImageIsGesture(true) :
                        setImageIsGesture(false));
                newDx = newDx > procressDx ? procressDx : newDx < -procressDx ? -procressDx : newDx;
                newDy = newDy > procressDy ? procressDy : newDy < -procressDy ? -procressDy : newDy;
                setImageOffsetGP({ x: newDx, y: newDy, });
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
        let newDx = (JSON.stringify(gesturePosition.x) * 1);
        let procressDx = (((selectedData.w * (JSON.stringify(scaleValue) * 1)) - width) / 2);
        newDx >= procressDx ? setEdge(true) : newDx <= -procressDx ? setEdge(true) : setEdge(false);
        if (JSON.stringify(scaleValue) * 1 == 1) { setImageScaling(false); };
        setImageValueGP(0, 0);
        setImageDragging(false);
        set_initialTouches(undefined);
    };
    let gestureHandler = PanResponder.create({
        onStartShouldSetResponderCapture: () => true,
        onStartShouldSetPanResponderCapture: (event: Event) => {
            return (isScaling && !isGesture) || event.nativeEvent.touches.length === 2;
        },
        onMoveShouldSetResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: (event: Event) => {
            return (isScaling && !isGesture) || event.nativeEvent.touches.length === 2;
        },
        onPanResponderGrant: _onGestureStart,
        onPanResponderMove: _onGestureMove,
        onPanResponderRelease: _onGestureRelease,
    });
    var dataMySQL;
    dataMySQL = `${finip}/${dataValue.image_full_path ?? dataValue.image_path}/${dataValue.image}`;
    Image.getSize(dataMySQL, (width, height) => { setImageHeight(height); setImageWidth(width); });
    // console.log('---------------------------------==============================================')
    // console.log(dataIndex)
    // console.log(imageHeight)
    // console.log(imageWidth)
    // console.log(dataMySQL)
    // console.log('---------------------------------==============================================')
    // banner ? dataMySQL = `${finip}/${dataValue.image_path}/${dataValue.image}` :
    //     (dataMySQL = index % 2 == 0 ? `${ip}/mysql/uploads/Banner_Mobile/T-10.jpg` : `${ip}/mysql/uploads/Banner_Mobile/T-5.jpg`);
    let animatedStyle = { transform: gesturePosition.getTranslateTransform(), };
    animatedStyle.transform.push({ scale: scaleValue, });
    return imageHeight > 0 && imageWidth > 0 && <View {...gestureHandler.panHandlers} ref={_parent} key={dataIndex}>
        <Animated.View ref={_photoComponent} style={[{
            height: (imageHeight * width) / imageWidth, opacity: /*isScaling && dataIndex == selectedData.index ? 0 :*/ 1, width: width,
        }, isScaling && dataIndex == selectedData.index ? animatedStyle : null]}>
            <Animated.Image source={{ uri: dataMySQL }} style={{ height: '100%', width: '100%' }} resizeMode='contain'
                resizeMethod='resize' />
        </Animated.View>
    </View>;
};