import React, { Component } from 'react';
import {Alert, AppRegistry, Button, StyleSheet, View, Text, AsyncStorage, Image,FlatList} from 'react-native';
import { Card, ListItem, Icon, Divider } from 'react-native-elements'
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Confirm extends Component {
    static navigationOptions = {title: 'Confirmation'};
    state = {
        'delivery': '',
        'myCart': ''
    }
    componentDidMount() {
        AsyncStorage.getItem('delivery', (err, value) => {
            this.setState({ 'delivery': value });
        });
        AsyncStorage.getItem('myCart', (err, value1) => {
            this.setState({ 'myCart': JSON.parse(value1) });
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const paymentType = this.props.navigation.state.params.paymentType;
        return (
            <View style={styles.container}>
                <Image source={require('../images/confirm.jpg')}/>
                <Card>
                    <Text style={{color: 'blue'}}>Order Details</Text>

                    <FlatList
                        data={this.state.myCart}
                        renderItem={({item}) =>
                            <View style={styles.alternativeLayout}>
                                <Text>{item.myQuantity} {item.name}</Text>
                                <Text>${item.price*item.myQuantity}</Text>
                            </View>
                            }
                        keyExtractor={item => item.name}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                    <Divider style={{ backgroundColor: 'black' }} />
                    <View style={styles.alternativeLayout}>
                        <Text>Sub Total {'\n'} Taxes {'\n'} Delivery Charge</Text>
                        <Text>  ${global.total} {'\n'} 0 {'\n'} $35.2</Text>
                    </View>
                    <Divider style={{ backgroundColor: 'black' }} />
                    <View style={styles.alternativeLayout}>
                        <Text> Total </Text>
                        <Text> ${global.total-35.2} </Text>
                    </View>
                    {/*<Grid>
                        <Col>
                            <Text>1 Gas Mask</Text>
                        </Col>
                        <Col><Text>$11.99</Text></Col>
                    </Grid>*/}
                    <View style={{marginBottom:18,marginTop:10, backgroundColor: '#F1F8FE',padding:10}}>
                    <Text style={{color: 'blue'}}>Shipping To</Text>
                    <Text style={{marginBottom: 10}}>
                        497, Evergreen Road Roseville {'\n'} CA 95673
                    </Text>
                    </View>

                    <View style={{marginBottom:18, backgroundColor: '#F1F8FE',padding:10}}>
                    <Text style={{color: 'blue'}}>Delivery</Text>
                    <Text style={{marginBottom: 10}}>
                        {this.state.delivery}
                    </Text>
                    </View>

                     <View style={{marginBottom:18, backgroundColor: '#F1F8FE',padding:10}}>
                    <Text style={{color: 'blue'}}>Payment Type</Text>
                    <Text style={{marginBottom: 10}}>
                        {paymentType}
                    </Text>
                     </View>

                    <View style={styles.alternativeLayoutButtonContainer}>
                        <Button
                            onPress={() => navigate('OrderPlaced')}
                            title="Place Order"
                        />
                    </View>

                </Card>
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
    alternativeLayout: {
        margin: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //borderBottomColor: 'black',
        //borderBottomWidth: 1
    },
})


