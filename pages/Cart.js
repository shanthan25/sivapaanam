import React, { Component } from 'react';
import {AppRegistry, SectionList, StyleSheet, Text, View, Image, AsyncStorage, TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {createStackNavigator} from "react-navigation";
import Checkout from "../pages/Checkout";
import { Col, Row, Grid } from "react-native-easy-grid";
import Shipping from "./Shipping";
import Checkout2 from "./Checkout2";
import Confirm from "./Confirm";

class Cart extends Component {
    constructor(state){
        super(state)
        this.state = {min: 0, totalPrice: 0, max: 99, default: 0, num: 0, color: '#33c9d6', numColor: '#333', numBgColor: 'white',
            showBorder: true, fontSize: 14, btnFontSize: 14, buttonTextColor: 'white', disabled: false, width: 90, height: 30
        };
    }
    /*state = {
        'pro': ''
    }
    componentDidMount() {
        AsyncStorage.getItem('myCart', (err, value) => {
            this.setState({ 'pro': value });
        });
    }*/
    _onNumChange (num) {
        if (this.props.onNumChange) this.props.onNumChange(num);
    };
    _increase (item: any) { console.log('val '+item.myQuantity);
        //console.log(this.state);
        if (this.state.disabled) return;
        if (this.state.max > item.myQuantity) {        /*item.myQuantity instaed of this.state.num*/
            var num = item.myQuantity + 1;
            if (typeof this.state.value === 'undefined') {
                this.setState({num: num});
                // this.setState({ [item.num]: num });
            };
            this._onNumChange(num);
        }
    };
    _decrease (item: any) {  console.log('val'+item.myQuantity);
        if (this.state.disabled) return;
        if (this.state.min < item.myQuantity) {
            var num = item.myQuantity - 1;
            if (typeof this.state.value === 'undefined') {
                this.setState({num: num});
            };
            this._onNumChange(num);
        }
    };
    static navigationOptions = {title: 'Cart'};
    FunctionToOpenSecondActivity = () =>
    {
        this.props.navigation.navigate('Checkout');

    }
    componentWillMount(){
        console.log('b');
        AsyncStorage.getItem('myCart', (err, result) => {
            global.products2 = JSON.parse(result);   //result;
            //console.log('result33');  console.log(JSON.parse(result));
        });
    }
    removeItem(item) {
        AsyncStorage.getItem('myCart', (err, result2) => {
           // console.log('myCart'+ item.id);  console.log(result2);
            var myArr = JSON.parse(result2); //[{id:'a'},{id:'myid'},{id:'c'}];
           // console.log('before - '+JSON.stringify(myArr));
            var index = myArr.findIndex(function(o){
                return o.id === item.id;
            });
            if (index !== -1) myArr.splice(index, 1);
            //console.log('after - '+JSON.stringify(myArr));
            console.log(JSON.stringify(item.name)+' removed');
            AsyncStorage.setItem('myCart', JSON.stringify(myArr));
        });
        this.props.navigation.navigate('Checkout');
    }
    render() {
        const { navigate } = this.props.navigation;
        const product = [{"id":3,"name":"Carrot","category":"vegetables","price":82,"image":"carrot.jpg","quantity":5,"discount":5,"color":"#000000"}]  //this.props.navigation.state.params.item;
        return (
            <View style={styles.container}>
                {/*{global.products.map(r => <Text style = { styles.textStyle }> {r.name} </Text>)}*/}
                <Image source={require('../images/cart.jpg')}/>
                <SectionList
                    sections={[
                        {title: 'J', data: global.products2},
                    ]}
                    renderItem={({item}) =>

                        <View style={{flex:1, flexDirection: 'row', borderBottomColor: '#bbb',borderBottomWidth: 1, backgroundColor: 'green',}} >
                            <Grid style={{paddingBottom:10}}>
                                <Col size={25}><Image source = {{ uri: 'http://shopapi.enxonetech.com/shop/public/images/products/'+item.image }} style={styles.imageViewContainer} />
                                </Col>
                                <Col size={60}>
                                    <Text style={styles.textViewContainer}> <Text style={{fontSize: 20, color: 'orange',
                                    fontWeight: 'bold'}}>{item.name}</Text> {'\n'} <Text style={{color: 'white'}}>The idea with React Native Elements is more about component structure than actual design </Text> {'\n'}{'\n'}
                                    </Text>
                                    <View style={[styles.container2,
                                        { borderColor: this.state.showBorder ? this.state.color : 'transparent' },
                                        { width: this.state.width } ]}>
                                        <TouchableOpacity
                                            style={[styles.btn,
                                                { backgroundColor: this.state.color },
                                                { borderColor: this.state.showBorder ? this.state.color : 'transparent' },
                                                { height: this.state.height } ]}
                                            onPress={() => this._decrease(item)}>
                                            <Text style={[styles.btnText,
                                                { color: this.state.buttonTextColor, fontSize: this.state.btnFontSize }]}>-</Text>
                                        </TouchableOpacity>
                                        <View style={[styles.num,
                                            { borderColor: this.state.showBorder ? this.state.color : 'transparent', backgroundColor: this.state.numBgColor, height: this.state.height
                                            }]}>
                                            <Text style={[styles.numText, {color: this.state.numColor, fontSize: this.state.fontSize}]}>{item.myQuantity}</Text>
                                        </View>
                                        <TouchableOpacity
                                            style={[styles.btn,
                                                { backgroundColor: this.state.color },
                                                { borderColor: this.state.showBorder ? this.state.color : 'transparent' },
                                                { height: this.state.height }]}
                                            onPress={() => this._increase(item)}>
                                            <Text style={[styles.btnText,
                                                { color: this.state.buttonTextColor, fontSize: this.state.btnFontSize
                                                }]}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Col>
                                <Col size={15}>
                                    <Text style={{textAlign: 'right', color: 'black', fontSize: 17}}> ${item.price*item.myQuantity} </Text>
                                    <Text onPress={() => this.removeItem(item)} style={{textAlign: 'right', color: 'red', fontSize: 25}}> X </Text>
                                </Col>
                            </Grid>

                            {/*<Text onPress={this.GetItem.bind(this, item.name)} style={styles.textViewContainer} >{item.name}</Text>*/}
                        </View>
                        /*<Card
                            title={item.name}
                            image={{uri: 'http://shopapi.enxonetech.com/shop/public/images/products/'+item.image}}>
                            <Text style={{marginBottom: 10}} onPress={() => navigate('Checkout', { item: item })}>
                                The idea with React Native Elements is more about component structure than actual design.
                            </Text>
                        </Card>*/
                        /*<Text style={styles.item}  onPress={() => navigate('Checkout', { item: item })}>{item.name}</Text>*/ }
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
                <Card >
                    <Grid style={{paddingBottom: 30}}>
                        <Col size={1}><Text style={{color: 'blue'}}>
                            $50.96
                        </Text>
                        </Col>
                        <Col size={1}>
                            <Button backgroundColor='#03A9F4' onPress={() => navigate('Shipping')}
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}} title='Shipping' />
                        </Col>
                    </Grid>

                </Card>
            </View>
        );
    }
}

const fetchAndLog = async () => { console.log('a4');
    AsyncStorage.getItem('myCart', (err, result) => {
        if(result){
            global.products2 = JSON.parse(result);
        }
        else {
            global.products2 = []   //result;
        }

      //  console.log('result33');  console.log(JSON.parse(result));
        /*global.products2.forEach( (value, key, index) => {
            this.state.totalPrice +=  value.price * value.quantity;
            console.log(value);
            console.log(value.price);
            console.log(this.state.totalPrice);
        });*/

    });
}
fetchAndLog();

const styles = StyleSheet.create({
    textViewContainer: {textAlignVertical:'center', width:'100%', paddingLeft:20},
    titleText: {fontSize: 20, fontWeight: 'bold',},
    container2: {marginLeft:20, borderWidth: 0.5, backgroundColor: '#2799FA', borderRadius: 4, flexDirection: 'row', overflow: 'hidden'},
    btn: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    btnText: {color: 'white', textAlign: 'center'},
    num: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    numText: {textAlign: 'center'},
    imageViewContainer: {width: '100%', height: 90 , margin: 5, borderRadius : 2},
    container: { paddingTop: 22},/*flex: 1,*/
    sectionHeader: {paddingTop: 2, paddingLeft: 10, paddingRight: 10, paddingBottom: 2, fontSize: 14, fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',},
    /*item: {padding: 10, paddingTop: 38, fontSize: 25,color: 'orange', textAlign: 'center', height: 120, backgroundColor: 'black',borderWidth: 5.5,
        borderColor: 'white',},*/
})

export default Project = createStackNavigator(
    {
        Cart: { screen: Cart },
        Shipping: { screen: Shipping },
        Checkout2: { screen: Checkout2 },
        Confirm: { screen: Confirm }
    });

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => Products);

//export default Products;