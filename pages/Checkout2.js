import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, Image } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Col, Row, Grid } from "react-native-easy-grid";

var radio_props = [
    {label: 'Standard(7 days)', value: 0 },
    {label: 'Express(2 days)', value: 1 },
    {label: 'Premium(1 day)', value: 2 }
];

/*var RadioButtonProject = React.createClass({
    getInitialState: function () {
        return {
            value: 0,
        }
    },
});*/
export default class ButtonBasics extends Component {
    static navigationOptions = {title: 'Checkout'};
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image source={require('../images/checkout.jpg')}/>
                <Card>
                <Text style={{marginBottom: 10, color:'blue'}}>
                    How would you like to pay?
                </Text>
                </Card>

                <Card>
                    <View style={styles.alternativeLayoutButtonContainer}>
                        <Text style={{marginBottom: 10}} onPress={() => navigate('Confirm', { item: 'item' })}>
                            Payment on Delivery {'\n'} Message for payment on delivery what it means for customer
                        </Text>
                        <Icon onPress={() => navigate('Confirm', {paymentType: 'Payment on Delivery'})} style={{paddingLeft:45, }} backgroundColor='white' color='blue' name='arrow-forward' />
                    </View>
                </Card>
                {/*<Icon color='blue' name='arrowright' />*/}
                <Card>
                    <View style={styles.alternativeLayoutButtonContainer}>
                        <Text style={{marginBottom: 10}} onPress={() => navigate('Confirm', { item: 'item' })}>
                            Online over Phone/Email {'\n'} what it means to order online over phone or email
                        </Text>
                        <Icon onPress={() => navigate('Confirm', {paymentType: 'Online over Phone/Email'})} color='blue' name='arrow-forward' />
                    </View>
                </Card>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       // flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})


