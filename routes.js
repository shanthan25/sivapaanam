import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
import Menu from './pages/Menu';
import {createDrawerNavigator} from 'react-navigation';
import Products from "./pages/Products";
import ProductView from "./pages/ProductView";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";


export default createDrawerNavigator({
    Page1: {
        screen: Page1
    },
    Page2: {
        screen: Page2
    },
    Page3: {
        screen: Page3
    },
    Categories: {
        screen: Categories
    },
    Products: {
        screen: Products
    },
    ProductView: {
        screen: ProductView
    },
    Cart: {
        screen: Cart
    }
}, {
    contentComponent: Menu,
    drawerWidth: 300
});