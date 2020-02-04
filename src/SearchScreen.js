import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { AppBar } from './MainScreen';

export default class SearchScreen extends Component {
    render() {
        return (
            <View>
                <AppBar navigation={this.props.navigation} searchBar leftBar='backarrow' />
            </View>
        );
    }
}
