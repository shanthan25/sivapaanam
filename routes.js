import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Menu from './pages/Menu';
import {createDrawerNavigator} from 'react-navigation';
import Products from "./pages/Products";
import ProductView from "./pages/ProductView";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import OrderPlaced from "./pages/OrderPlaced";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";

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
    },
    /*Shipping: {
        screen: Shipping
    },*/
    OrderPlaced: {
        screen: OrderPlaced
    },
    Test: {
        screen: Test
    },
    Test2: {
        screen: Test2
    }
}, {
    contentComponent: Menu,
    drawerWidth: 300
});