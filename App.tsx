import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import InitScreen from './components/InitScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      headerShown: false,
      // title: `A`,
      // headerBackTitle: 'A much too long text for back button from B to A',
      // headerTruncatedBackTitle: `to A`,
      // headerMode: 'none'
    })
  },
  Init: {
    screen: InitScreen,
    navigationOptions: () => ({
      title: `Senhas`,
      headerBackTitle: 'A much too long text for back button from B to A',
      headerTruncatedBackTitle: `to A`,
      headerTintColor: `#fff`,
      headerStyle: {
        backgroundColor: '#0a355e',
      },
    })

    // static navigationOptions = {
    //   title: 'Home',
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // };
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a355e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});