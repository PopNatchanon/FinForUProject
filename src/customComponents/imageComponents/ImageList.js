///----------------------------------------------------------------------------------------------->>>> React
import React, { useRef, useState, useEffect } from 'react';
import {
    Dimensions, ScrollView, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
function imageList(props) {
    const [indexScroll, setIndexScroll] = useState(1);
    const ScrollViewRef = useRef(null);
    console.log(`==--===-=>index-=>{${indexScroll}}<=--=>maxIndex-=>{${props.data.length}}<=-===--==`);
    console.log(indexScroll);
    console.log(`00==>=======>{==}<====>==========>{==}<==00`);
    useEffect(() => {
        props.data.length > 1 && setTimeout(() => {
            const interval = setInterval(() => {
                console.log(`==---==-=>index-=>{${indexScroll}}<=--=>maxIndex-=>{${props.data.length}}<=-==---==`);
                console.log(indexScroll);
                console.log(`88==>=======>{==}<====>==========>{==}<==88`);
                console.log(indexScroll == props.data.length);
                setIndexScroll(indexScroll + 1);
                if (indexScroll == props.data.length) { setIndexScroll(1); };
            }, 3000);
            return () => clearInterval(interval);
        }, 1000);
    }, []);
    return <ScrollView bounces={false} horizontal={true} onContentSizeChange={() =>
        ScrollViewRef.current.scrollTo({ x: indexScroll * width, y: 0, animated: true })} ref={ScrollViewRef} scrollEnabled={false}
        showsHorizontalScrollIndicator={false}>
        {props.data.map((value, index) => {
            var dataMySQL;
            props.banner ?
                (dataMySQL = `${finip}/${value.image_path}/${value.image}`) :
                (dataMySQL = index % 2 == 0 ?
                    `${ip}/mysql/uploads/Banner_Mobile/T-10.jpg` : `${ip}/mysql/uploads/Banner_Mobile/T-5.jpg`);
            return <View key={index}>
                <FastImage resizeMethod='resize' resizeMode='contain' source={{ uri: dataMySQL }} style={stylesMain.child} />
            </View>
        })}
    </ScrollView>;
};
export default imageList;