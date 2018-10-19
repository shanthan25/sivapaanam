import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

export default class Categories extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {/*{global.Categories.map(r => <Text style = { styles.textStyle }> {r.name} </Text>)}*/}
                <SectionList
                    sections={[
                        {title: 'J', data: global.Categories},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}  onPress={() => navigate('Products', { item: item })}>{item.name}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const fetchAndLog = async () => {
    const response = await fetch('http://shopapi.enxonetech.com/shop/public/api/getCategories');
    global.Categories = [{"id":1,"name":"indica","colour":"blue"},{"id":1,"name":"sativa","colour":"white"},{"id":1,"name":"hybrid","colour":"blue"}]  //await response.json();
        //[{"id":1,"name":"Apple","category":"fruits","price":50.00999999999999801048033987171947956085205078125,"image":"apple.png","quantity":0,"discount":10},{"id":2,"name":"Mango","category":"fruits","price":105,"image":"mango.jpg","quantity":0,"discount":5},{"id":3,"name":"Carrot","category":"vegetables","price":82,"image":"carrot.jpg","quantity":0,"discount":5},{"id":4,"name":"Potato","category":"vegetables","price":170,"image":"potato.jpg","quantity":0,"discount":10},{"id":5,"name":"dhall","category":"groceries","price":240,"image":"dhall.jpg","quantity":0,"discount":12},{"id":6,"name":"salt","category":"groceries","price":60,"image":"salt.jpg","quantity":0,"discount":5},{"id":7,"name":"chicken","category":"non-veg","price":500,"image":"chicken.jpg","quantity":0,"discount":25},{"id":8,"name":"fish","category":"non-veg","price":400,"image":"fish.jpg","quantity":0,"discount":20},{"id":9,"name":"brinjal","category":"vegetables","price":70,"image":"brinjal.jpg","quantity":0,"discount":5}]
    //console.log(global.Categories);
}
fetchAndLog();

const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: 22},
    sectionHeader: {paddingTop: 2, paddingLeft: 10, paddingRight: 10, paddingBottom: 2, fontSize: 14, fontWeight: 'bold', backgroundColor: 'rgba(247,247,247,1.0)',},
    item: {padding: 10, paddingTop: 38, fontSize: 25,color: 'orange', textAlign: 'center', height: 120, backgroundColor: 'black',borderWidth: 5.5, borderColor: 'white',},
})

