import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert, AppRegistry } from 'react-native';
import Router from './routes';

export default class Myapp extends Component<{}>
{
    constructor(){
        super();
        this.state={
            isVisible : true,
        }
    }

    Hide_Splash_Screen=()=>{
        this.setState({
            isVisible : false
        });
    }

    componentDidMount(){
        var that = this;
        setTimeout(function(){
            that.Hide_Splash_Screen();
        }, 5000);
    }

    render()
    {
        let Splash_Screen = (
            <View style={styles.SplashScreen_RootView}>
                <View style={styles.SplashScreen_ChildView}>
                    {}
                    <Image source={{uri: 'https://reactnativecode.com/wp-content/uploads/2018/01/welcome.png'}}
                           style={{width:'100%', height: '100%', resizeMode: 'contain'}} />
                </View>

                <TouchableOpacity
                    activeOpacity = { 0.5 }
                    style={styles.TouchableOpacity_Style}
                    onPress={this.Hide_Splash_Screen} >

                    <Image source={{uri: 'https://reactnativecode.com/wp-content/uploads/2018/01/close_button.png'}}
                           style={{width:25, height: 25}} />
                </TouchableOpacity>

            </View> )

        return(     <Router/>
            /*<View style = { styles.MainContainer }>
                <Text style={{textAlign: 'center'}}> Hello Guys </Text>
                {
                    (this.state.isVisible === true) ? Splash_Screen : null
                }
            </View>*/
        );
    }
}

const styles = StyleSheet.create(
    {
        MainContainer:
            {
                flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
            },
        SplashScreen_RootView:
            {
                justifyContent: 'center', flex:1, margin: 10, position: 'absolute', width: '100%', height: '100%',
            },
        SplashScreen_ChildView:
            {
                justifyContent: 'center', alignItems: 'center', backgroundColor: '#00BCD4', flex:1, margin: 20,
            },
        TouchableOpacity_Style:
            {
                width:25, height: 25, top:9, right:9, position: 'absolute'
            }
    });

AppRegistry.registerComponent('CustomDrawer', () => CustomDrawer);