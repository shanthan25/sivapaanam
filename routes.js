import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
import Menu from './Menu';
import {createDrawerNavigator} from 'react-navigation';

export default createDrawerNavigator({
    Page1: {
        screen: Page1
    },
    Page2: {
        screen: Page2
    },
    Page3: {
        screen: Page3
    }
}, {
    contentComponent: Menu,
    drawerWidth: 300
});