import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import logo from '../assets/logo.png';

export default class Homescreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#0a355e' }}>
        {/* <Image source={logo} style={{width: 40, height: 40}} />; */}

        <Image source={require('../assets/logo.png')} style={{width: 145, height: 117}} />
        {/* <Text>Home Screen</Text> */}
      <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'flex-end', backgroundColor:'#0a355e' }}>
      <Button
          title="Iniciar"
          onPress={() => this.props.navigation.navigate('Init')}
        />
      </View>
      </View>
   
    )
  }
}