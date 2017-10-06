import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";
import { DrawerNavigator } from "react-navigation";
import Login from "../components/Login";
import Register from "../components/Register";
import Nav from "../components/Nav";
import styles from "./Style";

export class MainScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to HouseMoneyMobile!</Text>
        <Button onPress={() => navigate("DrawerOpen")} title="Drawer" />
      </View>
    );
  }
}

// const DrawerMenu = DrawerNavigator({
//   Home: { screen: MainScreen },
//   Login: { screen: Login },
//   Register: { screen: Register }
// });

export default Nav;

AppRegistry.registerComponent("MainScreen", () => MainScreen);
