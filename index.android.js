/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import MainScreen from "./client/main/App.js";

const HouseMoneyMobile = () => {
  return <MainScreen />;
};

AppRegistry.registerComponent("HouseMoneyMobile", () => HouseMoneyMobile);
