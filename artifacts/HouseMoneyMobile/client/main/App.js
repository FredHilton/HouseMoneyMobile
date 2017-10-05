import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";
import { DrawerNavigator } from "react-navigation";
import Login from "../components/Login";
import Register from "../components/Register";
class MainScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.welcome }, "Welcome to HouseMoneyMobile!"),
            React.createElement(Button, { onPress: () => navigate("DrawerOpen"), title: "Drawer" })));
    }
}
MainScreen.navigationOptions = {
    drawerLabel: "Welcome"
};
const HomeScreen = DrawerNavigator({
    Home: { screen: MainScreen },
    Login: { screen: Login },
    Register: { screen: Register }
});
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
AppRegistry.registerComponent("MainScreen", () => MainScreen);
//# sourceMappingURL=App.js.map