import React from 'react';
import { View } from "react-native";
import { WebView } from 'react-native-webview';
import { AppBar } from "..";
///----------------------------------------------------------------------------------------------->>>> BrowerScreen
export default function BrowerScreen(props) {
    const { route } = props;
    const uri = route.params?.uri;
    return <View style={{ flex: 1 }}>
        <AppBar {...props} backArrow  titleHead='ข่าวสาร' />
        <WebView source={{ uri: uri }} style={{ flex: 1 }} />
    </View>;
};