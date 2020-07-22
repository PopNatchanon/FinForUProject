///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, } from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
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
            starBox.push(<IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={starSize ?? 20}
                color='#FFAC33' />);
        } else {
            starBox.push(<IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={starSize ?? 20}
                color='#E9E9E9' />);
        };
    };
    return starBox;
};
export default StarReview;