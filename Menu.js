import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu/SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image} from 'react-native';

class Menu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render () {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        {<Image
                            source={require('./images/11.jpg')} style = {{ width: 400, height: 130 }}
                        />}

                        <View style={styles.navSectionStyle2}>
                        </View>

                        <Text style={styles.sectionHeadingStyle}>
                            Section 1a
                        </Text>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page1')}>
                                Page1
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.sectionHeadingStyle}>
                            Section 2b
                        </Text>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                                Page2
                            </Text>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                                Page3
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                {/* <View style={styles.footerContainer}>
                    <Text>This is my fixed footer</Text>
                </View>*/}
            </View>
        );
    }
}

Menu.propTypes = {
    navigation: PropTypes.object
};

export default Menu;