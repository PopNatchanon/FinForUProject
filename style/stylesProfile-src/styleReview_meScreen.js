import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    Appbar: {
        height: 50,
        flexDirection: 'row',
        width,
        backgroundColor: '#FFF',
    },
    Review_me: {
        marginBottom: 5,
        marginTop: 5,
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFF',
        padding: 10,
    },
    Review_me_Box: {
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    Review_me_Box_head: {
        height: 30,
        width: 60,
        backgroundColor: '#0A55A6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    Review_me_Box_image: {
        width: '100%',
        height: 100,
        backgroundColor: '#E9E9E9',
        paddingTop: 20,
        padding: 10,
    },
    Review_me_Box_imageA: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Review_me_image: {
        height: 60,
        width: 60,
    },

})