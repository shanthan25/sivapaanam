import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    Image
} from 'react-native';

import styles from './styles';

class ScreenThree extends Component {
    static navigationOptions = {
        tabBarLabel: 'ScreenThree',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./images/11.jpg')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        )
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => navigate('Page1')}
                    style={[styles.button, {backgroundColor: '#8E84FB'}]}>
                    <Text style={styles.buttonText}>Go To Screen One </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default ScreenThree;