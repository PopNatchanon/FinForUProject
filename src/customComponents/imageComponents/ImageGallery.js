///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import { Dimensions, TouchableOpacity, View, } from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> ImageGallery
function ImageGallery(props) {
    const { dataService } = props;
    const [aStoreIndex, setAStoreIndex] = useState({});
    const [bStoreIndex, setBStoreIndex] = useState([]);
    const [cStoreIndex, setCStoreIndex] = useState([]);
    const [randomLayout, setRandomLayout] = useState({});
    let imageColumn = (value, index, boxwidth, boxheight) => {
        return <View key={index} style={{ width: (width * 0.315 * boxwidth) + ((boxwidth - 1) * 5), height: (height * 0.15 * boxheight) + ((boxheight - 1) * 5), marginTop: 5, marginLeft: 5 }}>
            <TouchableOpacity onPress={() => console.log(`click => ${index} boxwidth => ${boxwidth} boxheight => ${boxheight}`)}>
                <FastImage
                    style={{ width: '100%', height: '100%' }}
                    source={{ uri: `${ip}/${value?.image_path}/${value?.image}`, }}
                    resizeMode={FastImage.resizeMode.cover} />
            </TouchableOpacity>
        </View >;
    };
    let imageRow = (value, index, boxwidth, boxheight, position, setbox) => {
        if (setbox == 'row3' && cStoreIndex.indexOf(index) == -1) {
            for (var n = 0; n < 3; n++) {
                cStoreIndex.indexOf(index + n) == -1 && cStoreIndex.push(index + n)
                cStoreIndex.indexOf(index + n) == -1 && setCStoreIndex(cStoreIndex);
            };
        }
        if (boxwidth < 3 && boxheight > 1 && aStoreIndex[index] == undefined) {
            var indexbox = [];
            aStoreIndex[index] = {};
            for (var n = 1; n <= boxheight; n++) {
                indexbox.push({ index: index + n, listdata: dataService[index + n] });
                bStoreIndex.indexOf(index + n) == -1 && bStoreIndex.push(index + n)
                bStoreIndex.indexOf(index + n) == -1 && setBStoreIndex(bStoreIndex);
            };
            aStoreIndex[index].data = indexbox;
            setAStoreIndex(aStoreIndex);
        }
        console.log('boxwidth|boxheight')
        console.log(`${boxwidth}|${boxheight}`)
        return <View key={index} style={{ flexDirection: 'row' }}>
            {position == 'left' && boxwidth < 3 && boxheight > 1 && <View>
                {aStoreIndex[index].data.map((value2) => value2.index < dataService.length && imageColumn(value2.listdata, value2.index, 1, 1))}
            </View>}
            <View style={{ width: (width * 0.315 * boxwidth) + ((boxwidth - 1) * 5), height: (height * 0.15 * boxheight) + ((boxheight - 1) * 5), marginTop: 5, marginLeft: 5 }}>
                <TouchableOpacity onPress={() => console.log(`click => ${index} boxwidth => ${boxwidth} boxheight => ${boxheight}`)}>
                    <FastImage
                        style={{ width: '100%', height: '100%' }}
                        source={{ uri: `${ip}/${value?.image_path}/${value?.image}`, }}
                        resizeMode={FastImage.resizeMode.cover} />
                </TouchableOpacity>
            </View>
            {position != 'left' && boxwidth < 3 && boxheight > 1 && <View>
                {aStoreIndex[index].data.map((value2) => value2.index < dataService.length && imageColumn(value2?.listdata, value2.index, 1, 1))}
            </View>}
        </View>;
    };
    ///bStoreIndex.indexOf(index) == -1
    let imagebox = dataService ?
        <>
            {/* <View style={{ width, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => console.log(aStoreIndex)} style={{ backgroundColor: '#465468', height: 50, width: 50 }}><Text>a</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    console.log('=====================================>aStoreIndex')
                    for (var n = 0; n < dataService.length; n++) {
                        aStoreIndex[n] && console.log(n)
                        aStoreIndex[n] && console.log(aStoreIndex[n].data)
                    }
                }} style={{ backgroundColor: '#465468', height: 50, width: 50 }}><Text>a.2</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => console.log(bStoreIndex)} style={{ backgroundColor: '#894562', height: 50, width: 50 }}><Text>b</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => console.log(cStoreIndex)} style={{ backgroundColor: '#145788', height: 50, width: 50 }}><Text>c</Text></TouchableOpacity>
            </View> */}
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', }}>
                {dataService?.map((value, index) => {
                    if (randomLayout[index] == undefined) {
                        randomLayout[index] = cStoreIndex.indexOf(index) == -1 ?
                            bStoreIndex.indexOf(index) == -1 ?
                                index < dataService.length - 3 ?
                                    Math.floor(Math.random() * 6) :
                                    99 :
                                '999' :
                            99;
                        setRandomLayout(randomLayout);
                    };
                    return randomLayout[index] == 0 ?
                        imageRow(value, index, 1, 1, undefined, 'row3') :
                        randomLayout[index] == 1 ?
                            // index != 1 ?
                            imageRow(value, index, 2, 2, 'right') :
                            // imageRow(value, index, 2, 2, 'left') :
                            randomLayout[index] == 2 ?
                                // index != 0 && index != 1 ?
                                imageRow(value, index, 2, 2, 'left') :
                                // imageRow(value, index, 1, 1, undefined) :
                                randomLayout[index] == 3 ?
                                    imageRow(value, index, 3, 2, undefined) :
                                    randomLayout[index] == 4 ?
                                        imageRow(value, index, 2, 3, 'right') :
                                        randomLayout[index] == 5 ?
                                            imageRow(value, index, 2, 3, 'left') :
                                            randomLayout[index] == 6 ?
                                                imageRow(value, index, 3, 3, undefined) :
                                                randomLayout[index] == 99 ?
                                                    imageRow(value, index, 1, 1, undefined) :
                                                    null
                })}
            </View>
        </> : <></>;
    return imagebox;
};

export default ImageGallery;