import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    Appbar: {
        height: 50,
        flexDirection: 'row',
        width,
        borderColor: '#ECECEC',
        borderWidth: 1,
    },
    PopularProduct: {
        backgroundColor: '#FFFFFF',
        // borderColor: '#ECECEC',
        // borderWidth: 1,
        marginTop: 8,
        padding: 8,
    },
    PopularProductText: {
        width,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 12,
        marginLeft: 9,
        // marginBottom:8,
    },
    PopularProductBoxProduct: {
        width,
        marginTop: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    PopularProductBox: {
        width: width * 0.442,
        height: height * 0.355,
        borderColor: '#ECECEC',
        borderWidth: 1,
        margin: 8,

    },
    PopularProductImage: {
        width: '100%',
        height: '65%',
        resizeMode: 'stretch',
        padding: 4,
    },
    PopularProductImageName: {
        fontSize: 12,
        marginTop: 12,
        marginLeft: 8,
    },
    PopularProductImagePrice: {
        fontSize: 10,
        marginTop: 12,
        marginLeft: 8,
        color: '#0A55A6',
    },
    PopularProductIconBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    PopularProductIcon: {
        marginBottom: 5,
        marginRight: 8,
    },
    PopularProductIconStar: {
        paddingTop: 8,
        marginBottom: 5,
    },
    PopularProductIconBoxI: {
        flexDirection: 'row',
    },
    PopularProductIconBoxStar: {
        flexDirection: 'row',
        marginLeft: 8,
    },

})