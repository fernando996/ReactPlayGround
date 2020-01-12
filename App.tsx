import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  viewPager: {
    flex: 1,
  },
});

export default class LotsOfStyles extends Component {
  render() {
    return (
      <ViewPager style={styles.viewPager} initialPage={0}>
      <View key="1">
        <Text>First page</Text>
      </View>
      <View key="2">
        <Text style={styles.bigBlue}>Second page</Text>
      </View>
    </ViewPager>
      // <View>
      //   <Text style={styles.red}>just red</Text>
      //   <Text style={styles.bigBlue}>just bigBlue</Text>
      //   <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      //   <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
       
      // </View>
      
    );
  }
}
