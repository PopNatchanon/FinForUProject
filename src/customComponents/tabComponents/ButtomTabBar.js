///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextPropTypes, ViewPropTypes, } from "react-native"
///----------------------------------------------------------------------------------------------->>>> Import
import LinearGradient from 'react-native-linear-gradient';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import styleMain from '../../style/StylesMainScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> ButtomTabBar
function ButtomTabBar(props) {
    const [selected, setSelected] = useState(props.selectedIndex);
    return props.data.map((value, index) => <TouchableOpacity key={index} onPress={() => {
        props.changeSelect ? setSelected(index) : undefined; props.sendDataOut(index);
    }} style={[{
        borderColor: props.borderColor, borderRadius: props.borderRadius, borderWidth: props.borderWidth, margin: props.margin,
        overflow: 'hidden'
    }, props.boxOutStyle,]}>
        {props.linearGradient ?
            <LinearGradient colors={index == selected ? value.colors ?? props.colors : props.notSelectColors} end={props.end}
                start={props.start} style={[styleMain.ItemCenter, { width: props.setWidthBox, height: props.setHeightBox, },
                props.boxInStyle,]}>
                <Text style={[props.fontStyle,
                { color: index == selected ? value.fontColors ?? props.fontColors : props.notSelectFontColors }]}>{value.name}</Text>
            </LinearGradient> :
            <View style={[styleMain.ItemCenter, {
                backgroundColor: index == selected ? value.backgroundColor ?? props.backgroundColor : props.notBackgroundColor,
                height: props.setHeightBox, width: props.setWidthBox,
            }, props.boxInStyle,]}>
                <Text style={[props.fontStyle,
                { color: index == selected ? value.fontColors ?? props.fontColors : props.notSelectFontColors }]}>{value.name}</Text>
            </View>}
    </TouchableOpacity>);
};
ButtomTabBar.propTypes = {
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.number,
    borderWidth: PropTypes.number,
    boxInStyle: ViewPropTypes.style,
    boxOutStyle: ViewPropTypes.style,
    changeSelect: PropTypes.bool,
    colors: PropTypes.array,
    data: PropTypes.array,
    end: PropTypes.object,
    fontColors: PropTypes.string,
    fontStyle: Text.propTypes.style,
    linearGradient: PropTypes.bool,
    margin: PropTypes.number,
    notBackgroundColor: PropTypes.string,
    notSelectColors: PropTypes.array,
    notSelectFontColors: PropTypes.string,
    start: PropTypes.object,
    selectedIndex: PropTypes.number,
    sendDataOut: PropTypes.func,
    setHeightBox: PropTypes.number,
    setSelectedOut: PropTypes.number,
    setWidthBox: PropTypes.number,
};
ButtomTabBar.defaultProps = {
    backgroundColor: '#123456',
    borderColor: '#FFAC33',
    borderRadius: 6,
    borderWidth: 1,
    changeSelect: true,
    colors: ['#234567', '#123456'],
    end: { x: 1, y: 0 },
    fontColors: '#fff',
    linearGradient: false,
    margin: 2,
    notBackgroundColor: '#fff',
    notSelectColors: ['#fff', '#fff'],
    notSelectFontColors: '#FFAC33',
    start: { x: 0, y: 0 },
    selectedIndex: 0,
    setHeightBox: 40,
    setWidthBox: 100,
};
export default ButtomTabBar;