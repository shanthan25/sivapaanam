import React, { Component } from 'react';
import {Alert, AppRegistry, Button, StyleSheet, View, Text, AsyncStorage, Image} from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Confirm extends Component {
    static navigationOptions = {title: 'Confirmation'};
    state = {
        'delivery': ''
    }
    componentDidMount() {
        AsyncStorage.getItem('delivery', (err, value) => {
            this.setState({ 'delivery': value });
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image source={require('../images/confirm.jpg')}/>
                <Card title={'Order Details'}>
                    <Grid>
                        <Col>
                            <Text>1 Gas Mask</Text>
                        </Col>
                        <Col><Text>$$11.99</Text></Col>
                    </Grid>
                </Card>

                <Card title={'Shipping To'}>
                    <Text style={{marginBottom: 10}}>
                        497, Evergreen Road Roseville {'\n'} CA 95673
                    </Text>
                </Card>

                <Card title={'Delivery'}>
                    <Text style={{marginBottom: 10}}>
                        {this.state.delivery}
                    </Text>
                </Card>

                <Card title={'Payment Type'}>
                    <Text style={{marginBottom: 10}}>
                        Payment on Delivery
                    </Text>
                </Card>


                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={() => navigate('OrderPlaced')}
                        title="Place Order"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
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


