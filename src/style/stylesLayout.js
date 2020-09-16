import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
export default StyleSheet.create({
    FColumn: { flexDirection: 'column', },
    FRow: { flexDirection: 'row', },
    H75pW100p: { height: '75%', width: '100%', },
    HW100p: { height: '100%', width: '100%', },
    HxW75p: { aspectRatio: 1, height: 'auto', width: '75%', },
    HxWfull: { aspectRatio: 6.8, height: 'auto', width: width, },
});