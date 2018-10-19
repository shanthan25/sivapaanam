import React, { Component } from 'react';
import {Alert, TextInput, Button, StyleSheet, View, Text, AsyncStorage, Image,FlatList, TouchableHighlight,TouchableOpacity, Modal} from 'react-native';
import { Card, ListItem, Icon, Divider } from 'react-native-elements'
import { Col, Row, Grid } from "react-native-easy-grid";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
    {label: 'Standard(7 days)', value: 'standard' },
    {label: 'Express(2 days)', value: 'express' },
    {label: 'Premium(1 day)', value: 'premium' }
];

export default class Confirm extends Component {
    static navigationOptions = {title: 'Confirmation'};
    state = {
        'delivery': '',
        'myCart': '',
        addressModalVisible: false,
        deliveryModalVisible: false,
        paymentTypeModalVisible: false,
        text:'',
        TextInputValueHolder: ''
    }
    fetchDelivery(){
        AsyncStorage.getItem('delivery', (err, value) => {
            this.setState({ 'delivery': value });
        });
    }
    componentDidMount() {
       this.fetchDelivery();
        AsyncStorage.getItem('myCart', (err, value1) => {
            this.setState({ 'myCart': JSON.parse(value1) });
        });
    }
    toggleModalAddress(visible) {
        this.setState({ addressModalVisible: visible });
    }
    toggleModalDelivery(visible) {
        this.setState({ deliveryModalVisible: visible });
    }
    toggleModalpaymentType(visible) {
        this.setState({ paymentTypeModalVisible: visible });
    }
    /*submit() {
        console.log('submitted '+'this.state.text');
        global.address = 'this.state.text';
        //this.toggleModalAddress(!this.state.addressModalVisible)
    }*/
    submitAddress = () =>{
        const { TextInputValueHolder }  = this.state;
        console.log('submitted' + TextInputValueHolder);
        global.address = TextInputValueHolder
    }
    setDelivery(value) {
        console.log(value.value);
        AsyncStorage.setItem('delivery', value.value);
        this.fetchDelivery()
    }
    setPaymentType(value) {
        console.log(value);
        global.PaymentType = value;
    }
    render() {
        const { navigate } = this.props.navigation;
        //const paymentType = this.props.navigation.state.params.paymentType;
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
                        <View style={styles.alternative}>
                            <Text style={{color: 'blue'}}>Shipping To</Text>
                        <TouchableHighlight onPress = {() => {this.toggleModalAddress(true)}}>
                            <Icon color='blue' name='edit' />
                        </TouchableHighlight>
                        </View>
                    <Text style={{marginBottom: 10}}>
                        {global.address}
                    </Text>

                        {/*Address*/}
                        <Modal animationType = {"slide"} transparent = {false}
                               visible = {this.state.addressModalVisible}
                               onRequestClose = {() => { console.log("Modal has been closed.") } }>
                            <Card>
                            <View style = {styles.modal}>
                                <TouchableHighlight style={styles.rightContainer} onPress = {() => {
                                    this.toggleModalAddress(!this.state.addressModalVisible)}}>
                                    <Icon color='red' name='close' />
                                </TouchableHighlight>
                                <Text style = {styles.text}>Change Address</Text>

                                <TextInput placeholder="address" onChangeText={TextInputValueHolder => this.setState({TextInputValueHolder})}
                                    style={{textAlign: 'center', marginBottom: 7, height: 50}}/>
                                <Button title="Submit" onPress={this.submitAddress} color="#2196F3" />

                                {/*<TouchableOpacity style={{ width: 80, marginTop: 10, padding:10, backgroundColor:'#841584', flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center'}}>
                                    <Text onPress={this.submit()} style={{ color:'white'}}>Submit</Text>
                                </TouchableOpacity>*/}
                            </View>
                            </Card>
                        </Modal>

                        {/*Delivery*/}
                        <Modal animationType = {"slide"} transparent = {false}
                               visible = {this.state.deliveryModalVisible}
                               onRequestClose = {() => { console.log("Modal has been closed.") } }>
                            <Card>
                                <View style = {styles.modal}>
                                    <TouchableHighlight style={styles.rightContainer} onPress = {() => {
                                        this.toggleModalDelivery(!this.state.deliveryModalVisible)}}>
                                        <Icon color='red' name='close' />
                                    </TouchableHighlight>
                                    <Text style = {styles.text}>Change Delivery</Text>

                                    <Grid style={{marginBottom:110}}>
                                        <Col style={{height:210}}><RadioForm radio_props={radio_props} initial={0} formHorizontal={false} labelHorizontal={true} buttonColor={'#2196f3'}
                                                                             animation={true} onPress={(value) => {this.setDelivery({value:value})}}/></Col>
                                        <Col>
                                            <Text style={{marginBottom: 10}}>Free {'\n'}{'\n'} $5.00 {'\n'}{'\n'} $10.00</Text>
                                        </Col>
                                    </Grid>

                                    <TouchableOpacity onPress={() => {
                                        this.toggleModalDelivery(!this.state.deliveryModalVisible)}} style={{ width: 80, marginTop: 10, padding:10, backgroundColor:'#841584', flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'}}>
                                        <Text style={{ color:'white'}}>Submit</Text>
                                    </TouchableOpacity>
                                </View>
                            </Card>
                        </Modal>

                        {/*Payment Type*/}
                        <Modal animationType = {"slide"} transparent = {false}
                               visible = {this.state.paymentTypeModalVisible}
                               onRequestClose = {() => { console.log("Modal has been closed.") } }>
                            <Card>
                                <View style = {styles.modal}>
                                    <TouchableHighlight style={styles.rightContainer} onPress = {() => {
                                        this.toggleModalpaymentType(!this.state.paymentTypeModalVisible)}}>
                                        <Icon color='red' name='close' />
                                    </TouchableHighlight>

                                        <Text style={{marginBottom: 10, color:'blue'}}>
                                            How would you like to pay?
                                        </Text>

                                        <View style={styles.alternativeLayoutButtonContainer}>
                                            <Text style={{marginBottom: 10}} onPress={() => navigate('Confirm', { item: 'item' })}>
                                                Payment on Delivery {'\n'} Message for payment on delivery what it means for customer
                                            </Text>
                                            <Icon onPress={() => this.setPaymentType('Payment on Delivery')} style={{paddingLeft:45, }} backgroundColor='white' color='blue' name='arrow-forward' />
                                        </View>

                                        <View style={styles.alternativeLayoutButtonContainer}>
                                            <Text style={{marginBottom: 10}} onPress={() => navigate('Confirm', { item: 'item' })}>
                                                Online over Phone/Email {'\n'} what it means to order online over phone or email
                                            </Text>
                                            <Icon onPress={() => this.setPaymentType('Online over Phone/Email')} color='blue' name='arrow-forward' />
                                        </View>

                                    <TouchableOpacity onPress={() => {
                                        this.toggleModalpaymentType(!this.state.paymentTypeModalVisible)}} style={{ width: 80, marginTop: 10, padding:10, backgroundColor:'#841584', flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'}}>
                                        <Text style={{ color:'white'}}>Submit</Text>
                                    </TouchableOpacity>
                                </View>
                            </Card>
                        </Modal>

                    </View>

                    <View style={{marginBottom:18, backgroundColor: '#F1F8FE',padding:10}}>
                        <View style={styles.alternative}>
                            <Text style={{color: 'blue'}}>Delivery</Text>
                            <TouchableHighlight onPress = {() => {this.toggleModalDelivery(true)}}>
                                <Icon color='blue' name='edit' />
                            </TouchableHighlight>
                        </View>
                        <Text style={{marginBottom: 10}}>
                            {this.state.delivery}
                        </Text>
                    </View>

                     <View style={{marginBottom:18, backgroundColor: '#F1F8FE',padding:10}}>
                         <View style={styles.alternative}>
                        <Text style={{color: 'blue'}}>Payment Type</Text>
                             <TouchableHighlight onPress = {() => {this.toggleModalpaymentType(true)}}>
                                 <Icon color='blue' name='edit' />
                             </TouchableHighlight>
                         </View>
                    <Text style={{marginBottom: 10}}>
                        {global.PaymentType}
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
    rightContainer: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        //backgroundColor: 'red',
    },
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
    alternative: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})


