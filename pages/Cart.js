import React, { Component } from 'react';
import {AppRegistry, SectionList, StyleSheet, Text, View, Image, AsyncStorage} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {createStackNavigator} from "react-navigation";
import Checkout from "../pages/Checkout";

class Cart extends Component {
    static navigationOptions = {title: 'Cart'};
    FunctionToOpenSecondActivity = () =>
    {
        this.props.navigation.navigate('Checkout');

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {/*{global.products.map(r => <Text style = { styles.textStyle }> {r.name} </Text>)}*/}

                <SectionList
                    sections={[
                        {title: 'J', data: global.products2},
                    ]}
                    renderItem={({item}) =>

                        <View style={{flex:1, flexDirection: 'row', borderBottomColor: '#bbb',borderBottomWidth: 1, backgroundColor: 'green',}} >
                            <Image source = {{ uri: 'http://shopapi.enxonetech.com/shop/public/images/products/'+item.image }} onPress={() => navigate('Checkout', { item: item })} style={styles.imageViewContainer} />
                            <Text style={styles.item} onPress={() => navigate('Checkout', { item: item })} style={styles.textViewContainer}> <Text style={{fontSize: 20, color: 'orange',
                                fontWeight: 'bold'}}>{item.name}</Text> {'\n'} <Text style={{color: 'white'}}>The idea with React Native Elements is more about component structure than actual design </Text> </Text>

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
            </View>
        );
    }
}

const fetchAndLog = async () => {
    AsyncStorage.getItem('myCart', (err, result) => {
        global.products2 = JSON.parse(result)   //result;
        console.log('result33');  console.log(JSON.parse(result));
    });
}
fetchAndLog();

const styles = StyleSheet.create({
    textViewContainer: {textAlignVertical:'center', width:'70%', padding:20},
    titleText: {fontSize: 20, fontWeight: 'bold',},
    imageViewContainer: {width: '30%', height: 90 , margin: 5, borderRadius : 2},
    container: {flex: 1, paddingTop: 22},
    sectionHeader: {paddingTop: 2, paddingLeft: 10, paddingRight: 10, paddingBottom: 2, fontSize: 14, fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',},
    item: {padding: 10, paddingTop: 38, fontSize: 25,color: 'orange', textAlign: 'center', height: 120, backgroundColor: 'black',borderWidth: 5.5,
        borderColor: 'white',},
})

export default Project = createStackNavigator(
    {
        Cart: { screen: Cart },
        Checkout: { screen: Checkout }
    });

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => Products);

//export default Products;