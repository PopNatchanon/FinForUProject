///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactNative, {
  Animated, Dimensions, View, ScrollView, StyleSheet, Text, TouchableOpacity, Modal, Image, PanResponder, SafeAreaView, StatusBar,
  UIManager, Easing,
} from 'react-native';
import {
  PanGestureHandler, State, gestureHandlerRootHOC,
} from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
  setImageClearSelect, setImageDragging, setImageIsGesture, setImageList, setImageOffsetGP, setImageScaling, setImageSelect,
  setImageValueGP, setImageValueSV,
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
import { ExitAppModule } from '../../../screens/Main/MainScreen';
import Images from './Images';
import SelectedImage from './SelectedImage';
import getDistance from './helpers/getDistance';
import getScale, { getScaleSub } from './helpers/getScale';
import measureNode from './helpers/measureNode';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>>
const NUM_OF_DUP = 3;
const zoomScaleMin = 1;
const zoomScaleMax = 6;
const approximatelyEqualTo = (a, b, epsilon = 0.01) => Math.abs(a - b) < epsilon;
const mapStateToProps = state => ({ ImageZ: state.ZoomImage, });
const mapDispatchToProps = {
  setImageClearSelect, setImageDragging, setImageIsGesture, setImageList, setImageOffsetGP, setImageScaling, setImageSelect,
  setImageValueGP, setImageValueSV,
};
export default connect(mapStateToProps, mapDispatchToProps,)(ImageZoom);
function ImageZoom(props) {
  const { loop, route } = props;
  const {
    ImageZ, setImageClearSelect, setImageDragging, setImageIsGesture, setImageList, setImageOffsetGP, setImageScaling, setImageSelect,
    setImageValueGP, setImageValueSV,
  } = props;
  const { gesturePosition, isDragging, isGesture, isScaling, scaleValue, selectedData, } = ImageZ;
  const data = route.params?.data;
  const [currentPages, setCurrentPage] = useState(1);
  const [prevPages, setPrevPage] = useState(1);
  const [_initialTouches, set_initialTouches] = useState(undefined);
  const scrollValue = useRef(new Animated.Value(0));
  const scrollView1 = useRef(null);
  let getScrollPosition = () => {
    return scrollValue.current.__getValue();
  };
  let onScroll = ({ nativeEvent: { contentOffset: { x }, }, }) => {
    scrollValue.current.setValue(x);
    const prevPage = currentPages;
    // const { animatedNextPage, currentPage: prevPage, childWidth, zoomModal } = this.state;
    // compute loop offset
    let loopOffset = 0;
    // raw float page number
    const rawCurrentPage = x / width;
    // rounded page number
    const roundCurrentPage = Math.round(rawCurrentPage);
    // cut front dup
    const normalizedPage = roundCurrentPage - loopOffset;
    // normalize page number
    let currentPage = normalizedPage + 1;
    if (normalizedPage < 0) {
      currentPage = data.length + normalizedPage + 1;
    } else if (normalizedPage >= data.length) {
      currentPage = (normalizedPage % data.length) + 1;
    }
    const isScrollEnd = approximatelyEqualTo(rawCurrentPage, roundCurrentPage);
    // // reset loop offset
    if (isScrollEnd && (normalizedPage < 0 || normalizedPage >= data.length)) {
      scrollView1.current.scrollTo({ x: (currentPage - 1 + loopOffset) * width, animated: false, });
    }
    // else {
    //     scrollView1.current.scrollTo({ x: (currentPage - 1 + loopOffset) * width, animated: true, });
    // }
    // restart autoplay
    // if (isScrollEnd && autoplay) {
    //     setAutoPlay(true);
    // };
    // page number changes
    if (currentPage !== prevPage) {
      setCurrentPage(currentPage);
    }
  };
  let onScrollEndDrag = () => {
    if (currentPages !== prevPages) {
      setPrevPage(currentPages);
      setImageClearSelect();
    }
    setImageIsGesture(false);
  };
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
  let animatedStyle = { transform: gesturePosition.getTranslateTransform() };
  animatedStyle.transform.push({ scale: scaleValue });
  return <SafeAreaView style={{ backgroundColor: '#000' }}>
    <StatusBar backgroundColor="#000" />
    <ScrollView bounces={false} horizontal pagingEnabled onScroll={onScroll} onScrollEndDrag={onScrollEndDrag} ref={scrollView1}
      scrollEnabled={isGesture || !isScaling} scrollEventThrottle={16} showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false} style={{ flexGrow: 0, height: '100%' }}>
      {ImageZ.data.map((value, index) => <View key={index}
        style={{ alignContent: 'center', alignItems: 'center', height, justifyContent: 'center', overflow: 'hidden', width, }}>
        <Images {...props} dataIndex={index} dataValue={value} scrollValue={{ x: getScrollPosition() }}
          scrollView1={scrollView1.current} />
      </View>)}
    </ScrollView>
    {/* {(isScaling) ?
            <View style={{ alignContent: 'center', alignItems: 'center', height, justifyContent: 'center', position: 'absolute', width }}>
                <Animated.View {...gestureHandler.panHandlers} style={[{ zIndex: 10, width: selectedData.w, height: selectedData.h, },
                    animatedStyle]}>
                    <SelectedImage {...props} />
                </Animated.View>
            </View> : null} */}
    <ExitAppModule {...props} />
  </SafeAreaView>;
}