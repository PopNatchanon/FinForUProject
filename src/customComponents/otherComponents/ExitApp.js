///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, useRef, } from 'react';
import { Animated, BackHandler, Dimensions, Text, View, YellowBox, } from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> set value
const { FontFamilyText, } = stylesFont;
const { animatedView, animatedViewSub, exitTitleText, } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> ExitAppModule
export default function ExitAppModule(props) {
    const { navigation, route } = props;
    const routeProps = route.name;
    const [backClickCount, setBackClickCount] = useState(0);
    const pathMain = ['Main', 'Feed', 'News', 'Bell', 'Customer_Login', 'Customer_Profile'];
    const springValue = useRef(new Animated.Value(0));
    const transformValue = useRef(new Animated.Value(100));
    YellowBox.ignoreWarnings(["Require cycle:", "VirtualizedList:", "VirtualizedLists should never", "*"]);
    const handleBackButton = () => {
        if (pathMain.indexOf(routeProps) != -1) {
            if (backClickCount == 1) { BackHandler.exitApp(); }
            else {
                setBackClickCount(1);
                Animated.sequence([
                    Animated.timing(transformValue.current, {
                        toValue: -.08 * height,
                        friction: 5,
                        duration: 200,
                        useNativeDriver: true,
                    }),
                    Animated.timing(springValue.current, {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true,
                    }),
                    Animated.timing(springValue.current, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(springValue.current, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true,
                    }),
                    Animated.timing(transformValue.current, {
                        toValue: 100,
                        duration: 200,
                        useNativeDriver: true,
                    }),
                ]).start(() => setBackClickCount(0));
            }
        } else { navigation.pop(); }
        return true;
    };
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        return () => backHandler.remove();
    });
    return <Animatable.View style={[animatedView, { opacity: springValue.current, transform: [{ translateY: transformValue.current, }], }]}>
        <View style={animatedViewSub}>
            <Text style={[exitTitleText, FontFamilyText]}>กดอีกครั้งเพื่อออก</Text>
        </View>
    </Animatable.View>;
};