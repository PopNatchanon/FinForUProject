///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactNative, {
  Dimensions, Image,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import Animateds from 'react-native-reanimated';
const { cond, eq, add, set, Value, event } = Animateds;
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from '../../../screens/Main/Main';
import { Toolbar, NavigationNavigate, AppBar, GenArray, ImageList } from '../..';
import getDistance from './helpers/getDistance';
import getScale from './helpers/getScale';
import type { Measurement } from './Measurement-type';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>>
const RESTORE_ANIMATION_DURATION = 200;

export default function SetectedImage(props) {
  const { ImageZ, setImageDragging } = props;
  const selectedPhotoMeasurement = ImageZ.selectedData;
  return <Image resizeMethod="resize" resizeMode="contain" source={{ uri: selectedPhotoMeasurement.dataMySQL }}
    style={{ height: '100%', width: '100%' }} />;
};