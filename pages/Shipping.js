import React, { Component } from 'react';
import {Alert, AppRegistry, Button, StyleSheet, View, Text, AsyncStorage, Image} from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {createStackNavigator} from "react-navigation";
import { Col, Row, Grid } from "react-native-easy-grid";

var radio_props = [
    {label: 'Standard(7 days)', value: 'standard' },
    {label: 'Express(2 days)', value: 'express' },
    {label: 'Premium(1 day)', value: 'premium' }
];

export default class Shipping extends Component {
    static navigationOptions = {title: 'Shipping'};
    setState(value) {
        console.log(value.value);
       AsyncStorage.setItem('delivery', value.value);
    }

    render() {
        global.address = '497, Evergreen Road Roseville, CA 95673';
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image source={require('../images/shipping.jpg')}/>
                <Card title={'Shipping To'}>
                    <Text style={{marginBottom: 10}} onPress={() => navigate('ProductView', { item: 'item' })}>
                        {global.address}
                    </Text>
                </Card>
                {/*isSelected={(value) => value=='express' ? 'true' : 'false'}*/}
                <Card title={'Delivery'}>
                    <Grid style={{marginBottom:210}}>
                        <Col style={{height:210}}><RadioForm radio_props={radio_props} initial={0} formHorizontal={false} labelHorizontal={true} buttonColor={'#2196f3'}
                                        animation={true} onPress={(value) => {this.setState({value:value})}}/></Col>
                        <Col>
                            <Text style={{marginBottom: 10}}>Free {'\n'}{'\n'} $5.00 {'\n'}{'\n'} $10.00</Text>
                        </Col>
                    </Grid>
                </Card>

            <Text>{this.setState.value}</Text>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={() => navigate('Checkout2')}
                        title="Checkout"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       // flex: 1,
        backgroundColor:'white',
        justifyContent: 'center',
        //height: 790
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



