 import React, { Component } from 'react';
// import { Button, View, Text, Image } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
// // import logo from '../assets/logo.png';

// export default class Homescreen extends Component {
//   render() {
//     return (
//     <View
//         style={{
//           flexDirection: 'row',
//           height: 100,
//           padding: 20,
//         }}>
//         <View style={{backgroundColor: 'blue', flex: 0.3}} />
//         <View style={{backgroundColor: 'red', flex: 0.5}} />
//         <Text>Hello World!</Text>
//       </View>
   
//     )
//   }
// }

// import React from 'react';
// import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
// import Constants from 'expo-constants';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// function Item({ title }) {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={({ item }) => <Item title={item.title} />}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 40,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });



   import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView  } from 'react-native'
   import { Card, ListItem, Button, Icon } from 'react-native-elements'
  
   

export default function App() {
    const users = [
        {
           name: 'brynn',
           avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
        {
            name: 'asasa',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
         },
    ] 
  return (
    // <View>


    <SafeAreaView>
         <ScrollView >

        <Card
            title='Utentes - Atendimento Geral'
            imageStyle={{margin:1}}
            image={require('../assets/abc.png')}>
            <Text style={{marginBottom: 10}}>
            ddsd
            </Text>
            <Text style={{marginBottom: 10}}>
            ddsd
            </Text>
            <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>

        <Card
            title='Utentes - Atendimento Geral'
            imageStyle={{margin:1}}
            image={require('../assets/abc.png')}>
            <Text style={{marginBottom: 10}}>
            ddsd
            </Text>
            <Text style={styles.titleText}>
            123
            </Text>

      
            <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>
        
      </ScrollView>
    </SafeAreaView>
  
    //   </View>
   
  );
}


const styles = StyleSheet.create({
 
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

  