import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import NumericInput,{ calcSize } from 'react-native-numeric-input'
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';

const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    }
]

/*quantity = 1;
amnt = 15;*/
export default class ProductView extends Component {
    constructor(state){
        super(state)
        this.state = {
           /* value: 2,*/
            amount:1,
        }
        /*this.amount = 1*/
    }
    changeAmount = (amount) => {
        this.setState({amount})
        console.log('amount is '+amount)
        console.log('amount is '+this.state.amount)
        /*this.state = {
            amount:amount
        }*/
    }
    /*setState2 = (value) => {
        quantity =  quantity + value.value
        this.state.value = quantity + value.value
        console.log('value is '+value.value)
        console.log('quantity is '+quantity)
    }*/
    state = {}
    render() {
        const product = this.props.navigation.state.params.item;
        return (
            <View style={styles.container}>
                <Card
                    title={product.name}
                    image={{uri: 'http://shopapi.enxonetech.com/shop/public/images/products/'+product.image}}>
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>

                       {/* <Button onPress={this.IncrementItem} title='+'/>
                        <Button onPress={this.DecreaseItem} title='-'/>*/}
                        {/*<Button onPress={this.ToggleClick} title='n'>
                            { this.state.show ? 'Hide number' : 'Show number' }
                        />*/}
                        {/*{ this.state.show ? <Text>{ this.state.clicks }</Text> : '' }*/}
                    {/*{this.quantity}*/}
                    {/*{this.state.amount}*/}

                    {/*<Text style={{marginBottom: 10}}>The {this.state.amount}</Text>*/}
                    <TextInput style={{height: 40, width: 50, marginLeft: 10, borderColor: 'gray', borderWidth: 1}} value={ this.state.amount.toString() }/>
                    {/*https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/*/}
                    {/*your props you are passing numerical value of value.You have to passed it in the form of string.  use value={String(value)} rather than value={${value}} */}
                    <NumericInput value={this.state.amount} onChange={(amount) => { this.changeAmount(amount) }} totalWidth={150}
                        totalHeight={35} minValue={0} maxValue={9999} step={1} iconStyle={{ fontSize: 15, color: '#434A5E' }}
                        inputStyle={{ fontSize: 18, color: '#434A5E' }} valueType='real' textColor='#B0228C' borderColor='#C7CBD6'
                        rightButtonBackgroundColor='#C7CBD6' leftButtonBackgroundColor='#C7CBD6'/>

                    <Text style={{marginBottom: 10}}>Total {this.state.amount * product.price}</Text>
                    <Button icon={{name: 'code'}} backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}} title='ADD TO CART' />
                    <ScrollView>
                        {this.renderSegmentControlClone()}
                    </ScrollView>

                </Card>

               {/* {global.products.map(r => <Text style = { styles.textStyle }> {r.name} </Text>)}
                <SectionList
                    sections={[
                        {title: 'J', data: global.products},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}  onPress={() => navigate('productView')}>{item.name}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />*/}
            </View>
        );
    }
    renderSegmentControlClone(){
        const options = [
            '1G',
            '1/8',
            '1/4',
            '1/2',
            'OZ',
        ];

        function setSelectedOption(selectedSegment){
            this.setState({
                selectedSegment
            });
        }

        return (
            <View style={{marginTop: 10, padding: 20, backgroundColor: 'white'}}>
                <Text style={{paddingBottom: 10, fontWeight:'bold', color:'red'}}>Warning Text</Text>
                <SegmentedControls
                    options={ options }
                    onSelection={ setSelectedOption.bind(this) }
                    selectedOption={ this.state.selectedSegment }
                />
                <Text style={{marginTop: 10}}>Selected option: {this.state.selectedSegment || 'none'}</Text>
            </View>);
    }
}

const fetchAndLog = async () => {
    const response = await fetch('http://shopapi.enxonetech.com/shop/public/api/getProducts');
    global.products = await response.json();
    //console.log(global.products);
}
fetchAndLog();

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10, paddingTop: 38,
        fontSize: 25,color: 'orange', textAlign: 'center',
        height: 120, backgroundColor: 'black',borderWidth: 5.5,
        borderColor: 'white',
    },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ProductView);


//export default ProductView;