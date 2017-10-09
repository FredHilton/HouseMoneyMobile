import { DrawerNavigator } from 'react-navigation';
import Login from '../Login';
import Register from '../Register';

const Nav = DrawerNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
});

export default Nav;
