import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../../style/StylesMainScreen';
export const { width, height } = Dimensions.get('window');
import AsyncStorage from '@react-native-community/async-storage';
///--------------------------------------------------------------------------///

export class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
        }
    }
    getDataasync = async () => {
        const currentUser = await AsyncStorage.getItem('@MyKey')
        this.setState({ currentUser: JSON.parse(currentUser) })

        // console.log('tool:')
        // console.log(this.state.currentUser)
    }
    componentDidMount() {
        this.getDataasync()
    }
    render() {
        const { currentUser } = this.state;
        // console.log(currentUser.name);
        return (
            <View style={styles.Toolbar}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('MainScreen')} >
                    <View style={{ alignItems: 'center' }}>
                        <IconAntDesign style={{ marginLeft: 5, }} name="home" size={25} />
                        <Text>Home</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('FeedScreen')} >
                    <View style={{ alignItems: 'center' }}>
                        <IconAntDesign name="tagso" size={25} />
                        <Text> Feed</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('NewsScreen')} >
                    <View style={{ alignItems: 'center' }}>
                        <IconAntDesign name="notification" size={25} />
                        <Text>News</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('BellScreen')} >
                    <View style={{ alignItems: 'center' }}>
                        <IconAntDesign name="bells" size={25} />
                        <Text>เตือน</Text>
                    </View>
                </TouchableOpacity>
                {currentUser == null ?
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('LoginScreen')} >
                        <View style={{ alignItems: 'center' }}>
                            <IconAntDesign name="user" size={25} />
                            <Text>ฉัน</Text>
                        </View>
                    </TouchableOpacity> :
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('ProfileScreen')} >
                        <View style={{ alignItems: 'center' }}>
                            <IconAntDesign name="user" size={25} />
                            <Text>บัญชีของ{currentUser.name}</Text>
                        </View>
                    </TouchableOpacity>
                }
            </View >
        )
    }
}