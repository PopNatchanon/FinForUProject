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
import stylesFont from '../../style/stylesFont';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> BorderBottomTabBar
function BorderBottomTabBar(props) {
    const [actionIndex, setActionIndex] = useState(0);
    const [selected, setSelected] = useState(0);
    return <LinearGradient colors={props.colors} start={props.start} end={props.end}>
        <View style={[styleMain.ItemCenter, {
            borderColor: props.borderBottomColor, borderWidth: props.noBottomColor ? 0 : 2, width: '100%',
            flex: 1, flexDirection: 'row', alignContent: 'center',
        }, props.boxInStyle,]}>
            {props.leftIcon && <View style={{
                borderRightWidth: 2,
            }}>
                <TouchableOpacity activeOpacity={props.noOpacityLeftIcon ? 1 : 0.2} onPress={() => {
                    props.changeSelectLeft ? setSelected(props.data.length) : undefined; props.sendDataOut(props.data.length)
                }}>
                    <View style={{
                        paddingHorizontal: 6,
                        marginTop: props.leftType == 'text' ? props.borderBottomWidth + 1.5 : props.borderBottomWidth - 2,
                        marginBottom: props.leftType == 'text' ? props.borderBottomWidth + 1.5 : props.borderBottomWidth - 2,
                    }}>
                        {props.leftIcon}
                    </View>
                </TouchableOpacity>
            </View>}
            <ScrollView horizontal>
                <View style={{ flexDirection: 'row' }}>
                    {props.data.map((value, index) => <View key={index} style={[styleMain.ItemCenter, {
                        borderLeftWidth: index == 0 ? props.leftIcon ? 0 : 2 : 1,
                        borderRightWidth: index == props.data.length - 1 ? props.rightIcon ? 0 : 2 : 1,
                        paddingLeft: 2,
                        paddingRight: 2
                    }]}>
                        <TouchableOpacity onPress={() => {
                            props.changeSelect ? setSelected(index) : undefined;
                            if (value.actionItem) {
                                actionIndex == 1 ? setActionIndex(2) : setActionIndex(1);
                                props.sendDataOut(index, value.actionItem[actionIndex == 1 ? 2 : 1].value);
                            } else {
                                setActionIndex(0);
                                props.sendDataOut(index);
                            };
                        }} style={[styleMain.ItemCenter, {
                            borderBottomColor: props.typeActive == 'bottom' && selected == index ? props.activeColor :
                                props.noSelectBorderBottomColor,
                            borderBottomWidth: props.borderBottomWidth,
                            borderTopColor: props.noSelectBorderBottomColor,
                            borderTopWidth: props.borderBottomWidth,
                            paddingHorizontal: 8,
                            flexDirection: props.colunmItem ? 'column' : 'row',
                        }, props.boxOutStyle,]}>
                            {value.icon && <Text style={[props.fontStyle, { color: props.fontColors, marginRight: 4, }]}>{value.icon}</Text>}
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, props.fontStyle, {
                                color: props.typeActive == 'font' && selected == index ? props.activeColor : props.fontColors
                            }]}>{value.name}</Text>
                            {value.actionItem && <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, props.fontStyle, {
                                color: props.typeActive == 'font' && selected == index ? props.activeColor : props.fontColors
                            }]}>{(selected == index ? value.actionItem[actionIndex].name : value.actionItem[0].name)}</Text>}
                        </TouchableOpacity>
                    </View>)}
                </View>
            </ScrollView>
            {props.rightIcon && <View style={{ paddingVertical: props.rightType == 'mix' ? 0 : 0 }}>
                <View style={{ borderLeftWidth: 2, }}>
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
                            {props.rightType == 'mix' ?
                                <View style={styleMain.ItemCenter}>
                                    {props.rightIcon.icon}
                                    {props.rightIcon.text}
                                </View>
                                : props.rightIcon}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>}
        </View>
    </LinearGradient >
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