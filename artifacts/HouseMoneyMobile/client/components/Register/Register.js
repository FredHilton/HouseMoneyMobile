import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
export default class Register extends Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.welcome }, "There was a Register screen here"),
            React.createElement(Text, { style: styles.instructions }, "It's gone now")));
    }
}
Register.navigationOptions = {
    drawerLabel: "Register"
};
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
AppRegistry.registerComponent("Register", () => Register);
//# sourceMappingURL=Register.js.map