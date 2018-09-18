import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class MainActivity extends Component {
    static navigationOptions = {title: 'MainActivity'};

    FunctionToOpenSecondActivity = () =>
    {
        this.props.navigation.navigate('Second');

    }

    render()
    {
        return(
            <View style = { styles.MainContainer }>
                <View style={{marginBottom: 20}}>
                    <Text style = { styles.TextStyle }> This is MainActivity </Text>
                </View>
                <Button onPress = { this.FunctionToOpenSecondActivity } title = 'Click Here To Open Second Activity'/>
            </View>
        );
    }
}

class SecondActivity extends Component
{
    static navigationOptions = {title: 'SecondActivity',};

    render()
    {
        return(
            <View style = { styles.MainContainer }>
                <Text style = { styles.TextStyle }> This is SecondActivity </Text>
            </View>
        );
    }
}

export default Project = createStackNavigator(
    {
        First: { screen: MainActivity },
        Second: { screen: SecondActivity }
    });

const styles = StyleSheet.create(
    {
        MainContainer: {justifyContent: 'center', flex:1, margin: 10},
        TextStyle: {fontSize: 23, textAlign: 'center', color: '#000',},
    });