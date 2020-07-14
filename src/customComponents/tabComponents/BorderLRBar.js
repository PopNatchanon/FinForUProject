///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextPropTypes, ViewPropTypes, ScrollView, } from "react-native"
///----------------------------------------------------------------------------------------------->>>> Import
import LinearGradient from 'react-native-linear-gradient';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import styleMain from '../../style/StylesMainScreen'
import StylesMainScreen from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> BorderBottomTabBar
function BorderBottomTabBar(props) {
    const [selected, setSelected] = useState(0);
    return <LinearGradient colors={props.colors} start={props.start} end={props.end} style={[{
        borderBottomColor: props.borderBottomColor, borderBottomWidth: props.noBottomColor ? 0 : 2,
        flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'
    }, props.boxInStyle,]}>
        {props.leftIcon && <View style={{ margin: 2 }}>
            <View style={{
                borderRightWidth: 2
            }}>
                <TouchableOpacity activeOpacity={props.noOpacityLeftIcon ? 1 : 0.2} onPress={() => {
                    props.changeSelectLeft ? setSelected(props.data.length) : undefined; props.sendDataOut(props.data.length)
                }}>
                    <View style={{
                        paddingHorizontal: 6,
                        marginTop: props.typeActive == 'bottom' ? props.leftType == 'text' ? props.borderBottomWidth + 1.5 :
                            props.borderBottomWidth - 2 : 0,
                        marginBottom: props.typeActive == 'bottom' ? props.leftType == 'text' ? props.borderBottomWidth + 1.5 :
                            props.borderBottomWidth - 2 : 0,
                    }}>
                        {props.leftIcon}
                    </View>
                </TouchableOpacity>
            </View>
        </View>}
        <ScrollView horizontal>
            <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                {props.data.map((value, index) => <View key={index} style={{
                    borderLeftWidth: index == 0 ? props.leftIcon ? 0 : 2 : 1,
                    borderRightWidth: index == props.data.length - 1 ? props.rightIcon ? 0 : 2 : 1,
                    paddingLeft: index == 0 && props.leftIcon ? 0 : 2,
                    paddingRight: index == props.data.length - 1 && props.rightIcon ? 0 : 2
                }}>
                    <TouchableOpacity onPress={() => {
                        props.changeSelect ? setSelected(index) : undefined; props.sendDataOut(index)
                    }} style={[styleMain.ItemCenter, {
                        borderBottomColor: props.typeActive == 'bottom' && selected == index ? props.activeColor :
                            props.noSelectBorderBottomColor,
                        borderBottomWidth: props.typeActive == 'bottom' ? props.borderBottomWidth : 0,
                        borderTopColor: props.noSelectBorderBottomColor,
                        borderTopWidth: props.typeActive == 'bottom' ? props.borderBottomWidth : 0,
                        paddingHorizontal: 8,
                        flexDirection: props.colunmItem ? 'column' : 'row',
                    }, props.boxOutStyle,]}>
                        {value.icon && <Text style={[props.fontStyle, { color: props.fontColors, marginRight: 4, }]}>{value.icon}</Text>}
                        <Text style={[props.fontStyle, {
                            color: props.typeActive == 'font' && selected == index ? props.activeColor : props.fontColors
                        }]}>{value.name}</Text>
                    </TouchableOpacity>
                </View>)}
            </View>
        </ScrollView>
        {props.rightIcon && <View style={{ margin: 2 }}>
            <View style={{
                borderLeftWidth: 2
            }}>
                <TouchableOpacity activeOpacity={props.noOpacityRightIcon ? 1 : 0.2} onPress={() => {
                    props.changeSelectRight ? setSelected(props.data.length + 1) : undefined; props.sendDataOut(props.data.length + 1)
                }}>
                    <View style={{
                        paddingHorizontal: 6,
                        marginTop: props.typeActive == 'bottom' ? props.rightType == 'text' ? props.borderBottomWidth + 1.5 :
                            props.borderBottomWidth - 2 : 0,
                        marginBottom: props.typeActive == 'bottom' ? props.rightType == 'text' ? props.borderBottomWidth + 1.5 :
                            props.borderBottomWidth - 2 : 0,
                    }}>
                        {props.rightIcon}
                    </View>
                </TouchableOpacity>
            </View>
        </View>}
    </LinearGradient>
}
BorderBottomTabBar.propTypes = {
    activeColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    borderBottomWidth: PropTypes.number,
    boxInStyle: ViewPropTypes.style,
    boxOutStyle: ViewPropTypes.style,
    changeSelect: PropTypes.bool,
    changeSelectLeft: PropTypes.bool,
    changeSelectRight: PropTypes.bool,
    colors: PropTypes.array,
    data: PropTypes.array,
    end: PropTypes.object,
    fontColors: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    fontStyle: Text.propTypes.style,
    inactiveColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    leftIcon: PropTypes.object,
    leftType: PropTypes.string,
    noBottomColor: PropTypes.bool,
    noOpacityLeftIcon: PropTypes.bool,
    noOpacityRightIcon: PropTypes.bool,
    noSelectBottomColor: PropTypes.bool,
    noSelectBorderBottomColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    rightIcon: PropTypes.object,
    rightType: PropTypes.string,
    start: PropTypes.object,
    sendDataOut: PropTypes.func,
    setSelectedOut: PropTypes.number,
    typeActive: PropTypes.oneOf(['bottom', 'font'])
}
BorderBottomTabBar.defaultProps = {
    activeColor: '#ffbf00',
    borderBottomColor: '#ffffff00',
    borderBottomWidth: 4,
    changeSelect: true,
    changeSelectLeft: false,
    changeSelectRight: false,
    colors: ['#ffffffff', '#ffffffff'],
    end: { x: 1, y: 0 },
    fontColors: '#000000',
    noBottomColor: false,
    noSelectBottomColor: false,
    noSelectBorderBottomColor: '#ffffffff',
    start: { x: 0, y: 0 },
    typeActive: 'bottom',
}
export default BorderBottomTabBar;