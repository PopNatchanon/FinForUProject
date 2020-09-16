///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, } from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDetail from '../../style/StylesDetailScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>>
function StarReview(star, starSize) {
    let starBox = []
    for (var n = 0; n < 5; n++) {
        if (star > n) {
            starBox.push(<IconFontAwesome color='#FFAC33' key={n} name='star' size={starSize ?? 20} style={stylesDetail.Price_IconStar} />);
        } else {
            starBox.push(<IconFontAwesome color='#E9E9E9' key={n} name='star' size={starSize ?? 20} style={stylesDetail.Price_IconStar} />);
        };
    };
    return starBox;
};
export default StarReview;