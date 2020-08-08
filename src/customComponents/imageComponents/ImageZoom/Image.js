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
///----------------------------------------------------------------------------------------------->>>>
export default function Imageout(props) {
    const { dataIndex, dataValue, isDragging, onGestureRelease, onGestureStart, scrollValue, selectIndex } = props;
    const [activeScale, setActiveScale] = useState(false);
    const [selectedPhotoMeasurement, setSelectedPhotoMeasurement] = useState(false);
    const [_initialTouches, set_initialTouches] = useState(undefined);
    const gesturePosition = useRef(new Animated.ValueXY());
    const scaleValue = useRef(new Animated.Value(1));
    const _lastOffset = { x: 0, y: 0 };
    const _parent = useRef(null);
    const _photoComponent = useRef(null);
    let animatedStyle = {
        transform: gesturePosition.current.getTranslateTransform(),
    };
    animatedStyle.transform.push({
        scale: scaleValue.current,
    });
    console.log('selectedPhotoMeasurement.y')
    console.log(selectedPhotoMeasurement.y)
    console.log('scrollValue.y')
    console.log(scrollValue.y)
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
    async function _onGestureStart(event, gestureState) {
        let { touches } = event.nativeEvent;
        let selectedPhotoMeasurement = await _measureSelectedPhoto();
        console.log('-------------------------------selectedPhotoMeasurement')
        console.log(dataIndex)
        console.log(selectedPhotoMeasurement)
        console.log('-------------------------------------------------------')
        setSelectedPhotoMeasurement({ ...selectedPhotoMeasurement, dataMySQL, index: dataIndex })
        onGestureStart(selectedPhotoMeasurement);
        // set initial touches
        set_initialTouches(touches);
        gesturePosition.current.setOffset({
            x: 0,
            y: /*selectedPhotoMeasurement.y - scrollValue.y*/0,
        });
        gesturePosition.current.setValue({
            x: 0,
            y: 0,
        }); // to clear animation
    }
    function _onGestureMove(event: Event, gestureState: GestureState) {
        let { touches } = event.nativeEvent;
        let { dx, dy } = gestureState;
        console.log('------------------------------------_onGestureMove');
        console.log(gestureState);
        console.log('------------------------------------_onGestureMove');
        if (activeScale) {
            if (touches.length < 2) {
                gesturePosition.current.x.setValue(dx);
                gesturePosition.current.y.setValue(dy);
                return;
            } else {
                if (_initialTouches && _initialTouches.length < 2) {
                    set_initialTouches(touches);
                    return;
                };
                let currentDistance = getDistance(touches);
                let initialDistance = getDistance(_initialTouches);
                console.log('currentDistance');
                console.log(currentDistance);
                console.log('initialDistance');
                console.log(initialDistance);
                let newScale = getScale(currentDistance, initialDistance);
                newScale != 1 && setActiveScale(true);
                if (newScale < 1) { newScale = 1; setActiveScale(false); };
                scaleValue.current.setValue(newScale);
            };
        } else {
            if (touches.length < 2) {
                return;
            } else {
                if (_initialTouches && _initialTouches.length < 2) {
                    set_initialTouches(touches);
                    return;
                };
                let currentDistance = getDistance(touches);
                let initialDistance = getDistance(_initialTouches);
                console.log('currentDistance');
                console.log(currentDistance);
                console.log('initialDistance');
                console.log(initialDistance);
                let newScale = getScale(currentDistance, initialDistance);
                newScale != 1 && setActiveScale(true);
                if (newScale < 1) { newScale = 1; setActiveScale(false); };
                scaleValue.current.setValue(newScale);
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
        //     onGestureRelease();
        //     set_initialTouches(undefined);
        // });
        gesturePosition.current.setOffset({
            x: 0,
            y: /*selectedPhotoMeasurement.y - scrollValue.y*/0,
        });
        onGestureRelease();
        set_initialTouches(undefined);
    }
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
    // banner ?
    (dataMySQL = `${finip}/${dataValue.image_path}/${dataValue.image}`)
    // : (dataMySQL = index % 2 == 0 ? `${ip}/mysql/uploads/Banner_Mobile/T-10.jpg` :
    //  `${ip}/mysql/uploads/Banner_Mobile/T-5.jpg`);
    return <Animated.View ref={_parent} key={dataIndex}>
        <Animated.View {...gestureHandler.panHandlers} ref={_photoComponent}
            style={[stylesMain.child, (isDragging || activeScale) ? animatedStyle : null,
            { elevation: (isDragging || activeScale) ? 10 : null, zIndex: (isDragging || activeScale) ? 10 : null, }]}>
            <Animated.Image source={{ uri: dataMySQL }} style={{ height: '100%', width: '100%' }} resizeMode='contain'
                resizeMethod='resize' />
        </Animated.View>
        {/* {isDragging ?
            <Animated.View style={[{
                    position: 'absolute', zIndex: 10, width: selectedPhoto.w, height: selectedPhoto.h,
                }, isDragging ? animatedStyle : initialStyle]}
                >
                <SelectedImage selectedPhotoMeasurement={selectedPhoto} />
            </Animated.View>
            : null} */}
    </Animated.View >
}