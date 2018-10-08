import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import NumericInput,{ calcSize } from 'react-native-numeric-input'
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';
import { AsyncStorage } from "react-native"
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ProductView extends Component {
    constructor(state){
        super(state)
        this.state = {min: 0, max: 99, default: 0, num: 0, color: '#33c9d6', numColor: '#333', numBgColor: 'white',
            showBorder: true, fontSize: 14, btnFontSize: 14, buttonTextColor: 'white', disabled: false, width: 90, height: 30
        };
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.disabled) {
            this.setState({disabled: nextProps.disabled});
        }
        if (nextProps.min) {
            this.setState({min: nextProps.min
            });
        }
        if (nextProps.max) {
            this.setState({max: nextProps.max});
        }
        if (nextProps.value !== false) {
            this.setState({num: nextProps.value});
        }
    }

    _onNumChange (num) {
        if (this.props.onNumChange) this.props.onNumChange(num);
    };

    _increase () {
        //console.log(this.state);
        if (this.state.disabled) return;
        if (this.state.max > this.state.num) {
            var num = this.state.num + 1;
            if (typeof this.state.value === 'undefined') {
                this.setState({num: num});
            };
            this._onNumChange(num);
        }
    };

    _decrease () {  console.log('val54');
        if (this.state.disabled) return;
        if (this.state.min < this.state.num) {
            var num = this.state.num - 1;
            if (typeof this.state.value === 'undefined') {
                this.setState({num: num});
            };
            this._onNumChange(num);
        }
    };
    static navigationOptions = {title: 'Product Details'};

    _addToCart (product)  {
        AsyncStorage.getItem('myCart', (err, result) => {
            product.myQuantity = this.state.num;
            const item = [product];
            if (result !== null) {
                console.log('Data Found', result);
                var newItem = JSON.parse(result).concat(item);
                AsyncStorage.setItem('myCart', JSON.stringify(newItem));
            } else {
                console.log('Data Not Found');
                AsyncStorage.setItem('myCart', JSON.stringify(item));
            }
        });
    }

    get(product) {
        AsyncStorage.getItem('myCart', (err, result2) => {
            console.log('myCart');  console.log(result2);
        });
    }

    clear() {
        AsyncStorage.removeItem('myCart'); console.log('cleared');
        //AsyncStorage.removeItem('savedIds'); console.log('cleared');
    }

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


                    {/*https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/*/}



                    <Grid style={{marginBottom:-110}}>
                        <Col size={1}>
                            <View style={[styles.container2,
                                { borderColor: this.state.showBorder ? this.state.color : 'transparent' },
                                { width: this.state.width } ]}>
                                <TouchableOpacity
                                    style={[styles.btn,
                                        { backgroundColor: this.state.color },
                                        { borderColor: this.state.showBorder ? this.state.color : 'transparent' },
                                        { height: this.state.height } ]}
                                    onPress={() => this._decrease()}>
                                    <Text style={[styles.btnText,
                                        { color: this.state.buttonTextColor, fontSize: this.state.btnFontSize }]}>-</Text>
                                </TouchableOpacity>
                                <View style={[styles.num,
                                    { borderColor: this.state.showBorder ? this.state.color : 'transparent', backgroundColor: this.state.numBgColor, height: this.state.height
                                    }]}>
                                    <Text style={[styles.numText, {color: this.state.numColor, fontSize: this.state.fontSize}]}>{this.state.num}</Text>
                                </View>
                                <TouchableOpacity
                                    style={[styles.btn,
                                        { backgroundColor: this.state.color },
                                        { borderColor: this.state.showBorder ? this.state.color : 'transparent' },
                                        { height: this.state.height }]}
                                    onPress={() => this._increase()}>
                                    <Text style={[styles.btnText,
                                        { color: this.state.buttonTextColor, fontSize: this.state.btnFontSize
                                        }]}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </Col>
                        <Col size={1}><Text style={{marginBottom: 10}}>${this.state.num * product.price}</Text></Col>
                        <Col size={2}>
                            <Button backgroundColor='#03A9F4' onPress={() => this._addToCart(product)}
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}} title='ADD TO CART' />


                        </Col>
                    </Grid>
                    <Button style={{width: 50}} backgroundColor='green' onPress={() => this.clear()} title='Clear' />
                    <Button style={{width: 50}} backgroundColor='#05A9F6' onPress={() => this.get(product)} title='Get' />
                    <ScrollView style={{height: 300}}>
                        {this.renderCustomSegmentControlClone(product)}
                    </ScrollView>

                </Card>
            </View>
        );
    }
    renderCustomSegmentControlClone(product){
        const options = [
            { label:'1G       $'+product.price, value: '1G' }, { label:'1/8       $'+product.price/8, value: '1/8'},
            { label:'1/4       $'+product.price/4, value: '1/4' }, { label:'1/2       $'+product.price/2, value: '1/2' },
            { label:'OZ       $51.99', value: 'OZ' },
        ];

        function setSelectedOption(option){
            this.setState({
                selectedCustomSegment: option,
            });
        }

        return (
            <View style={{marginTop: 10, marginBottom: 10,padding: 20, backgroundColor: 'white'}}>
                <Text style={{paddingBottom: 10, fontWeight:'bold', color:'red'}}>Warning Text</Text>
                <SegmentedControls tint= {'#2799FA'} selectedTint= {'white'} backTint= {'white'}
                    optionStyle= {{fontSize: 12, fontWeight: 'bold'}}
                    containerStyle= {{marginLeft: 10, marginRight: 10,}}
                    options={ options }
                    onSelection={ setSelectedOption.bind(this) }
                    selectedOption={ this.state.selectedCustomSegment }
                    extractText={ (option) => option.label }
                    testOptionEqual={ (a, b) => {
                        if (!a || !b) {
                            return false;
                        }
                        return a.label === b.label
                    }}
                />
                <Text style={{marginTop: 10}}>Selected option: {this.state.selectedCustomSegment&& this.state.selectedCustomSegment.value || 'none'}</Text>
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
    btn: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    btnText: {color: 'white', textAlign: 'center'},
    num: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    numText: {textAlign: 'center'},
    welcome: {fontSize: 20, textAlign: 'center', margin: 10,},
    instructions: {textAlign: 'center', color: '#333333', marginBottom: 5,},
    container: {flex: 1, paddingTop: 22},
    container2: {borderWidth: 0.5, backgroundColor: '#2799FA', borderRadius: 4, flexDirection: 'row', overflow: 'hidden'},
    sectionHeader: {paddingTop: 2, paddingLeft: 10, paddingRight: 10, paddingBottom: 2, fontSize: 14, fontWeight: 'bold', backgroundColor: 'rgba(247,247,247,1.0)',},
    item: {padding: 10, paddingTop: 38, fontSize: 25,color: 'orange', textAlign: 'center', height: 120, backgroundColor: 'black',borderWidth: 5.5, borderColor: 'white',},
})

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => ProductView);

//export default ProductView;