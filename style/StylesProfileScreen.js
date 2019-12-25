import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    SafeAreaView: {
        flex: 1,
    },
    HeadbarImage: {
        width,
        height: 132,
        opacity: 0.9,
        flex: 1,
        flexDirection: 'row',
    },
    HeadbarBox1: {
        width: '30%',
    },
    HeadbarBoxImage: {
        backgroundColor: '#ECECEC',
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 8,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    HeadbarText: {
        color: '#FFFFFF',
        marginTop: 20,
        marginLeft: 60,
        fontSize: 16,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    HeadbarBox2: {
        color: '#FFFFFF',
        width: 200,
        height: 40,
        marginTop: 20,
        marginLeft: 60,
        backgroundColor: '#0A55A6',
        borderRadius: 6,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    HeadbarBox2Text: {
        color: '#FFFFFF',
        fontSize: 16,
        marginBottom: 'auto',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})