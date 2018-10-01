import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class Products extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {/*{global.products.map(r => <Text style = { styles.textStyle }> {r.name} </Text>)}*/}



                <SectionList
                    sections={[
                        {title: 'J', data: global.products},
                    ]}
                    renderItem={({item}) =>

                        <View style={{flex:1, flexDirection: 'row', borderBottomColor: '#bbb',borderBottomWidth: 1, backgroundColor: item.color,}} >

                            <Image source = {{ uri: 'http://shopapi.enxonetech.com/shop/public/images/products/'+item.image }} onPress={() => navigate('ProductView', { item: item })} style={styles.imageViewContainer} />

                            <Text style={styles.item} onPress={() => navigate('ProductView', { item: item })} style={styles.textViewContainer}> <Text style={{fontSize: 20, color: 'orange',
                                fontWeight: 'bold'}}>{item.name}</Text> {'\n'} <Text style={{color: 'white'}}>The idea with React Native Elements is more about component structure than actual design </Text> </Text>

                            {/*<Text onPress={this.GetItem.bind(this, item.name)} style={styles.textViewContainer} >{item.name}</Text>*/}

                        </View>


                        /*<Card
                            title={item.name}
                            image={{uri: 'http://shopapi.enxonetech.com/shop/public/images/products/'+item.image}}>
                            <Text style={{marginBottom: 10}} onPress={() => navigate('ProductView', { item: item })}>
                                The idea with React Native Elements is more about component structure than actual design.
                            </Text>
                        </Card>*/

                        /*<Text style={styles.item}  onPress={() => navigate('ProductView', { item: item })}>{item.name}</Text>*/ }
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const fetchAndLog = async () => {
    const response = await fetch('http://shopapi.enxonetech.com/shop/public/api/getProducts');
    global.products = await response.json();
    //[{"id":1,"name":"Apple","category":"fruits","price":50.00,"image":"apple.png","quantity":0,"discount":10},{"id":2,"name":"Mango","category":"fruits","price":105,"image":"mango.jpg","quantity":0,"discount":5},{"id":3,"name":"Carrot","category":"vegetables","price":82,"image":"carrot.jpg","quantity":0,"discount":5},{"id":4,"name":"Potato","category":"vegetables","price":170,"image":"potato.jpg","quantity":0,"discount":10},{"id":5,"name":"dhall","category":"groceries","price":240,"image":"dhall.jpg","quantity":0,"discount":12},{"id":6,"name":"salt","category":"groceries","price":60,"image":"salt.jpg","quantity":0,"discount":5},{"id":7,"name":"chicken","category":"non-veg","price":500,"image":"chicken.jpg","quantity":0,"discount":25},{"id":8,"name":"fish","category":"non-veg","price":400,"image":"fish.jpg","quantity":0,"discount":20},{"id":9,"name":"brinjal","category":"vegetables","price":70,"image":"brinjal.jpg","quantity":0,"discount":5}]
    //console.log(global.products);
}
fetchAndLog();

const styles = StyleSheet.create({
    textViewContainer: {
        textAlignVertical:'center',
        width:'70%',
        padding:20
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageViewContainer: {
        width: '30%',
        height: 90 ,
        margin: 5,
        borderRadius : 2

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
AppRegistry.registerComponent('AwesomeProject', () => Products);


//export default Products;