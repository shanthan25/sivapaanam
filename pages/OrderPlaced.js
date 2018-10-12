import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
//import { Icon } from 'react-native-elements'

export default class ButtonBasics extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Card>
                    <Icon color='blue' size={120} name='done' />
                    <Text style={{marginBottom: 10, color: 'blue'}} >
                        Thank you for your order. We will contact you soon for verification {/*{'\n'}*/}
                    </Text>
                    <Icon color='blue' name='done' onPress={() => navigate('Categories')}/>
                </Card>

                {/*<View style={styles.alternativeLayoutButtonContainer}>
                    <Button title="Checkout"/>
                </View>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
