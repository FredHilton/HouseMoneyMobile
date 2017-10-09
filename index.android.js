/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';

import MainScreen from './client/main/app';

const HouseMoneyMobile = () => {
    return <MainScreen />;
};

AppRegistry.registerComponent('HouseMoneyMobile', () => HouseMoneyMobile);
