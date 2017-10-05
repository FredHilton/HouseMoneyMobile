import { DrawerNavigator } from "react-navigation";
import Login from "../components/Login";
import Register from "../components/Register";
export default class Nav extends component {
    render() {
        const Nav = DrawerNavigator({
            Home: { screen: MainScreen },
            Login: { screen: Login },
            Register: { screen: Register }
        });
    }
}
//# sourceMappingURL=Nav.js.map