import { Dimensions, PixelRatio, Platform, StyleSheet, } from 'react-native';
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

export function normalize(size) {
    const scale = SCREEN_WIDTH / 320;
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}
export default StyleSheet.create({
    ///----------------------------------------------Handset----------------------------------------------///
    FontCenter: {
        textAlign: 'center',
    },
    FontFamilyText: {
        fontFamily: 'ThaiSansNeue-SemiBold',
    },
    FontFamilySemiBold: {
        fontFamily: 'ThaiSansNeue-Bold',
    },
    FontFamilyBold: {
        fontFamily: 'ThaiSansNeue-ExtraBold',
    },
    FontFamilyBoldBold: {
        fontFamily: 'ThaiSansNeue-UltraBold',
    },
    FontSize1: {
        fontSize: normalize(26),
    },
    FontSize2: {
        fontSize: normalize(24),
    },
    FontSize3: {
        fontSize: normalize(22),
    },
    FontSize4: {
        fontSize: normalize(20),
    },
    FontSize5: {
        fontSize: normalize(18),
    },
    FontSize6: {
        fontSize: normalize(16),
    },
    FontSize7: {
        fontSize: normalize(14),
    },
    FontSize8: {
        fontSize: normalize(12),
    },
    FontSize9: {
        fontSize: normalize(10),
    },
})