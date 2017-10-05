import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";
import { DrawerNavigator } from "react-navigation";
import Login from "../Login";
import Register from "../Register";
import MainScreen from "../../main/App.js";

class Nav extends Component {}

export const DrawerList = {
  Home: { screen: MainScreen },
  Login: { screen: Login },
  Register: { screen: Register }
};
