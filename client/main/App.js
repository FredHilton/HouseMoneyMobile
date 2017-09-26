import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import Login from "../components/Login";
import Register from "../components/Register";

class MainScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to HouseMoneyMobile!</Text>
        <Button onPress={() => navigate("Login")} title="Login" />
        <Button onPress={() => navigate("Register")} title="Register" />
      </View>
    );
  }
}

const HomeScreen = StackNavigator({
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
