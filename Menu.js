import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu/SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image} from 'react-native';
import Categories from "./pages/Categories";

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
                            source={require('./images/logo.png')} style = {{ width: 300, height: 290 }}
                        />}

                        {/*<View style={styles.navSectionStyle2}>
                        </View>*/}

                        {/*<Text style={styles.sectionHeadingStyle}>
                            Section 1a
                        </Text>*/}
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page1')}>
                                Home
                            </Text>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                                About Us
                            </Text>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Categories')}>
                                Categories
                            </Text>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                                Contact Us
                            </Text>
                        </View>
                    </View>
                    {/*<View>
                        <Text style={styles.sectionHeadingStyle}>
                            Section 2b
                        </Text>
                        <View style={styles.navSectionStyle}>

                        </View>
                    </View>*/}
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