import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import styles from '../../main/styles';

interface props {navigation: any;}
interface state {}

export default class Login extends Component<props,state> {
    static navigationOptions = {
        drawerLabel: 'Login',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
      <View style={styles.container}>
        <Text style={styles.welcome}>There was a Login screen here</Text>
        <Text style={styles.instructions}>It's gone now</Text>
        <Button onPress={() => navigate('DrawerOpen')} title="Drawer" />
      </View>
        );
    }
}

AppRegistry.registerComponent('Login', () => Login);
