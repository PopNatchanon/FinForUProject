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

export default function Imageout(props) {
    const { dataIndex, dataValue, scrollValue } = props;
    const [selectedPhotoMeasurement, setSelectedPhotoMeasurement] = useState(false);
    const [_initialTouches, set_initialTouches] = useState(undefined);
    const [isDragging, setIsDragging] = useState(false);
    const _parent = useRef(null);
    const _photoComponent = useRef(null);
    const gesturePosition = useRef(new Animated.ValueXY());
    let animatedStyle = {
        transform: gesturePosition.current.getTranslateTransform(),
    };
    animatedStyle.transform.push({
        scale: scrollValue.y,
    });
    let initialStyle = {
        transform: [
            { translateY: selectedPhotoMeasurement.y - getScrollPosition() }
        ],
    };
    async function _measureSelectedPhoto() {
        let parent = ReactNative.findNodeHandle(_parent.current);
        let photoComponent = ReactNative.findNodeHandle(_photoComponent.current);
        let [parentMeasurement, photoMeasurement] = await Promise.all([
            measureNode(parent),
            measureNode(photoComponent),
        ]);
        console.log('parentMeasurement')
        console.log(parentMeasurement)
        console.log('photoMeasurement')
        console.log(photoMeasurement)
        return {
            x: photoMeasurement.x,
            y: parentMeasurement.y + photoMeasurement.y,
            w: photoMeasurement.w,
            h: photoMeasurement.h,
        };
    }
    function _onGestureStart(event, gestureState) {
        let { touches } = event.nativeEvent;
        gesturePosition.current.setOffset({
            x: 0,
            y: selectedPhotoMeasurement.y - getScrollPosition(),
        });
        gesturePosition.current.setValue({
            x: 0,
            y: 0,
        }); // to clear animation
        setIsDragging(true)
        // set initial touches
        set_initialTouches(touches);
    }
    function _onGestureMove(event: Event, gestureState: GestureState) {
        let { touches } = event.nativeEvent;
        if (touches.length < 2) {
            // Trigger a realease(event, gestureState);
            return Animated.event([null, {
                dx: gesturePosition.current.x,
                dy: gesturePosition.current.y,
            }], { useNativeDriver: false })(event, gestureState);
        }
        // for moving photo around
        let { dx, dy } = gestureState;
        gesturePosition.current.x.setValue(dx);
        gesturePosition.current.y.setValue(dy);
        // for scaling photo
        let currentDistance = getDistance(touches);
        let initialDistance = getDistance(_initialTouches);
        let newScale = getScale(currentDistance, initialDistance);
        console.log(newScale)
        scrollValue.y.setValue(newScale < 1 ? 1 : newScale);
    }
    function _onGestureRelease(event, gestureState) {
        Animated.parallel([
            Animated.timing(gesturePosition.current.x, {
                toValue: 0,
                duration: RESTORE_ANIMATION_DURATION,
                easing: Easing.ease,
                useNativeDriver: false,
            }),
            Animated.timing(gesturePosition.current.y, {
                toValue: 0,
                duration: RESTORE_ANIMATION_DURATION,
                easing: Easing.ease,
                useNativeDriver: false,
            }),
            Animated.timing(scrollValue.y, {
                toValue: 1,
                duration: RESTORE_ANIMATION_DURATION,
                easing: Easing.ease,
                useNativeDriver: false,
            }),
        ]).start(() => {
            gesturePosition.current.setOffset({
                x: 0,
                y: selectedPhotoMeasurement.y - getScrollPosition(),
            });
            setIsDragging(false);
            set_initialTouches(undefined);
        });
    }
    let gestureHandler = PanResponder.create({
        onStartShouldSetResponderCapture: () => true,
        onStartShouldSetPanResponderCapture: (event: Event) => {
            return event.nativeEvent.touches.length === 2;
        },
        onMoveShouldSetResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: (event: Event) => {
            return event.nativeEvent.touches.length === 2;
        },
        onPanResponderGrant: _onGestureStart,
        onPanResponderMove: _onGestureMove,
        onPanResponderRelease: _onGestureRelease,
    });
    var dataMySQL;
    // banner ?
    (dataMySQL = `${finip}/${dataValue.image_path}/${dataValue.image}`)
    // : (dataMySQL = index % 2 == 0 ? `${ip}/mysql/uploads/Banner_Mobile/T-10.jpg` :
    //  `${ip}/mysql/uploads/Banner_Mobile/T-5.jpg`);
    return <TouchableOpacity ref={_parent} key={dataIndex} onPress={async () => {
        let selectedPhotoMeasurement = await _measureSelectedPhoto();
        console.log('-------------------------------selectedPhotoMeasurement')
        console.log(index)
        console.log(selectedPhotoMeasurement)
        console.log('-------------------------------------------------------')
        setSelectedPhotoMeasurement({ ...selectedPhotoMeasurement, dataMySQL })
    }}>
        <Animated.View {...gestureHandler.panHandlers} ref={_photoComponent} style={[stylesMain.child,]}>
            <Animated.Image source={{ uri: dataMySQL }} style={{ height: '100%', width: '100%' }} resizeMode='contain'
                resizeMethod='resize' />
        </Animated.View>
    </TouchableOpacity>
}