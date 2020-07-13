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
///----------------------------------------------------------------------------------------------->>>> BorderBottomTabBar
function BorderBottomTabBar(props) {
    const [selected, setSelected] = useState(0);
    return <LinearGradient colors={props.colors} start={props.start} end={props.end} style={[{
        borderBottomColor: props.borderBottomColor, borderBottomWidth: 2, flexDirection: 'row', justifyContent: 'space-between'
    }, props.boxInStyle,]}>
        <View style={{ flexDirection: 'row', }}>
            {props.data.map((value, index) => <TouchableOpacity key={index} onPress={() => {
                props.changeSelect ? setSelected(index) : undefined; props.sendDataOut(index)
            }} style={[styleMain.ItemCenter, {
                borderBottomColor: selected == index ? props.borderBottomColor : props.noSelectBorderBottomColor,
                borderBottomWidth: props.borderBottomWidth, paddingHorizontal: 8, flexDirection: props.colunmItem ? 'column' : 'row',
            }, props.boxOutStyle,]}>
                {value.icon && <Text style={[props.fontStyle, { color: props.fontColors, marginRight: 4, }]}>{value.icon}</Text>}
                <Text style={[props.fontStyle, { color: props.fontColors }]}>{value.name}</Text>
            </TouchableOpacity>)}
        </View>
        <TouchableOpacity onPress={() => {
            props.changeSelect ? setSelected(props.data.length + 1) : undefined; props.sendDataOut(props.data.length + 1)
        }}>
            <View style={{ paddingHorizontal: 6 }}>
                {props.rightIcon}
            </View>
        </TouchableOpacity>
    </LinearGradient>
}
BorderBottomTabBar.propTypes = {
    borderBottomColor: PropTypes.string,
    borderBottomWidth: PropTypes.number,
    boxInStyle: ViewPropTypes.style,
    boxOutStyle: ViewPropTypes.style,
    changeSelect: PropTypes.bool,
    colors: PropTypes.array,
    data: PropTypes.array,
    end: PropTypes.object,
    fontColors: PropTypes.string,
    fontStyle: Text.propTypes.style,
    noSelectBorderBottomColor: PropTypes.string,
    rightIcon: PropTypes.object,
    start: PropTypes.object,
    sendDataOut: PropTypes.func,
    setSelectedOut: PropTypes.number,
}
BorderBottomTabBar.defaultProps = {
    borderBottomColor: '#ffbf00',
    borderBottomWidth: 4,
    changeSelect: true,
    colors: ['#284d8fff', '#284d8fff'],
    end: { x: 1, y: 0 },
    fontColors: '#fff',
    noSelectBorderBottomColor: '#284d8fff',
    start: { x: 0, y: 0 },
}
export default BorderBottomTabBar;