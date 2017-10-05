import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";
import { DrawerNavigator } from "react-navigation";
import { connect } from "react-redux";
import Login from "../Login";
import MainScreen from "../../main/App.js";

export default class Register extends Component {
  static navigationOptions = {
    drawerLabel: "Register"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>There was a Register screen here</Text>
        <Text style={styles.instructions}>It's gone now</Text>
        <Button onPress={() => navigate("DrawerOpen")} title="Drawer" />
      </View>
    );
  }
}

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
