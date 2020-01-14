import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Constants from 'expo-constants';
import { BorderlessButton } from 'react-native-gesture-handler';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

function ItemQueue({ id, title, selected, onSelect }) {
  return (
    <View
    style={[styles.item,{
      
      flexDirection: 'row',
      height: 100,
      //padding: 20,
    }]}>
      {/* #36669b */}
    <View style={{backgroundColor: '#408abf', flex: 0.7}}>
      <Text style={styles.title}>Hello World!</Text>
    </View>
    <View style={{backgroundColor: '#ff6b00', flex: 0.4}} />
    
  </View> 
    // <View
    // style={[
    //   styles.item,
    //   { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
    // ]}
    // >
    //   <View style={{backgroundColor: 'blue', flex: 0.3}} >
    //     <Text>Hello World!</Text>
    //   </View>
    //   <View style={{backgroundColor: 'red', flex: 0.5}} >
    //     <Text style={styles.title}>{title}</Text>
    //   </View>
      
      
    // </View>

    // <TouchableOpacity
    //   onPress={() => onSelect(id)}
    //   style={[
    //     styles.item,
    //     { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
    //   ]}
    // >
    //   <Text style={styles.title}>{title}</Text>
    //   <Text style={styles.title}>{title}</Text>
    // </TouchableOpacity>
  );
}

export default function App() {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
   
 

    <SafeAreaView style={styles.container}>
         
      {/* Tittle informations */}
      <View
        style={[styles.item,{
        flexDirection: 'row',
        height: 50,
        borderRadius: 600
        //padding: 20,
      }]}>
        <View style={[styles.header, {backgroundColor: '#36669b', flex: 0.7, borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5}]}>
          <Text style={styles.header}>Senha</Text>
        </View>
        <View style={{backgroundColor: '#36669b', flex: 0.4, borderTopRightRadius: 5,
          borderBottomRightRadius: 5}}>
            <Text style={styles.header}>Balcão</Text>
          </View>
      </View> 

      {/* First view */}
      {/* <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}>
        <View style={{backgroundColor: 'blue', flex: 0.3}} />
        <View style={{backgroundColor: 'red', flex: 0.5}} />
        <Text>Hello World!</Text>
      </View> */}

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            numColumns={2}
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
      
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => item.id }
        extraData={selected}
        renderItem={({ item }) => (
          <ItemQueue
            numColumns={2}
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
         
      />       


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    borderColor: 'white',
    borderRadius: 2,
    backgroundColor: '#f9c2ff',
    //padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'white'
  },
  header: {
    fontSize: 32,
    alignContent: "flex-end",
    alignItems:"center",
    color: 'white'
  },
  row: {
    flex: 1,
    justifyContent: "space-around"
  }
});


// import React, { Component } from 'react';
// import { Button, View, Text, Image } from 'react-native';


// export default function App() {
//   const [selected, setSelected] = React.useState(new Map());

//   const onSelect = React.useCallback(
//     id => {
//       const newSelected = new Map(selected);
//       newSelected.set(id, !selected.get(id));

//       setSelected(newSelected);
//     },
//     [selected],
//   );

//   return (
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
//   );
// }
