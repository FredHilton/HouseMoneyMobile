import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { DrawerNavigator } from "react-navigation";
import { connect } from "react-redux";

export default class Register extends Component {
  static navigationOptions = {
    drawerLabel: "Register"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>There was a Register screen here</Text>
        <Text style={styles.instructions}>It's gone now</Text>
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
