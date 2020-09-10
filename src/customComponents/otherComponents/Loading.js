import React from 'react';
import { View, } from 'react-native';
import FastImage from 'react-native-fast-image';
import stylesLayout from '../../style/stylesLayout';
const LOADING_ICON = require('../../../images/icon.png');
const { cacheOnly } = FastImage.cacheControl;
const { contain } = FastImage.resizeMode
const { HW100p } = stylesLayout;
export default function () {
    return <View style={HW100p}>
        <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
    </View>;
};