///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, } from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>>
function GenArreyNumber(numberofBox, arrayList) {
    const numberOfList = arrayList?.length;
    var countOfList = 0;
    var box = [];
    for (var n = 0; n < numberofBox; n++) {
        box.push(numberOfList ? arrayList[countOfList] : n);
        if (numberOfList) { if (countOfList == numberOfList - 1) { countOfList = 0; } else { countOfList++; }; };
    };
    return box;
};
export default GenArreyNumber;