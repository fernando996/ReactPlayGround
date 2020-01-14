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
    id: '438e89e1-361c-11ea-b9b9-901b0ef6f072',
    number: '255',
    desk_id:'8f486c93-c37b-49d0-91fc-7dc8a398d5a4',
    desk_tag: '1',
    ticket_tag:'A',
  },
  {
    id: '438e89e1-361c-11ea-b9b9-901b0ef6f072',
    number: '256',
    desk_id:'8f486c93-c37b-49d0-91fc-7dc8a398d5a4',
    desk_tag: '2',
    ticket_tag:'A',
  },
  {
    id: '438e89e1-361c-11ea-b9b9-901b0ef6f072',
    number: '257',
    desk_id:'8f486c93-c37b-49d0-91fc-7dc8a398d5a4',
    desk_tag: '3',
    ticket_tag:'A',
  },
  {
    id: '438e89e1-361c-11ea-b9b9-901b0ef6f072',
    number: '258',
    desk_id:'8f486c93-c37b-49d0-91fc-7dc8a398d5a4',
    desk_tag: '1',
    ticket_tag:'A',
  },
  {
    id: '438e89e1-361c-11ea-b9b9-901b0ef6f072',
    number: '257',
    desk_id:'8f486c93-c37b-49d0-91fc-7dc8a398d5a4',
    desk_tag: '3',
    ticket_tag:'A',
  },
  {
    id: '438e89e1-361c-11ea-b9b9-901b0ef6f072',
    number: '258',
    desk_id:'8f486c93-c37b-49d0-91fc-7dc8a398d5a4',
    desk_tag: '1',
    ticket_tag:'A',
  },
  {
    id: '438e89e1-361c-11ea-b9b9-901b0ef6f072',
    number: '257',
    desk_id:'8f486c93-c37b-49d0-91fc-7dc8a398d5a4',
    desk_tag: '3',
    ticket_tag:'A',
  },
  {
    id: '438e89e1-361c-11ea-b9b9-901b0ef6f072',
    number: '258',
    desk_id:'8f486c93-c37b-49d0-91fc-7dc8a398d5a4',
    desk_tag: '1',
    ticket_tag:'A',
  },
    {
    id: '438e89e1-361c-11ea-b9b9-901b0ef6f072',
    number: '257',
    desk_id:'8f486c93-c37b-49d0-91fc-7dc8a398d5a4',
    desk_tag: '3',
    ticket_tag:'A',
  },
  {
    id: '438e89e1-361c-11ea-b9b9-901b0ef6f072',
    number: '258',
    desk_id:'8f486c93-c37b-49d0-91fc-7dc8a398d5a4',
    desk_tag: '1',
    ticket_tag:'A',
  },
];

function ItemQueue({ id, ticket_tag, number, desk_tag, selected, onSelect }) {
  return (
    <View
    style={[styles.item,{
      flexDirection: 'row',
      height: 50,
      //padding: 20,
    }]}>
      {/* #36669b */}
    <View style={[styles.leftData, styles.header, {backgroundColor: '#408abf', flex: 0.7}]}>
      <Text style={styles.title}>{ticket_tag} {number}</Text>
    </View>
    <View style={[styles.rightData, styles.header, {backgroundColor: '#ff6b00', flex: 0.4}]}>
      <Text style={styles.title}>{desk_tag}</Text>
    </View>
  </View> 
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
        height: 50
      }]}>
        <View style={[styles.header, styles.leftData, {backgroundColor: '#36669b', flex: 0.7}]}>
          <Text style={styles.header}>Senha</Text>
        </View>
        <View style={[styles.header, styles.rightData, {backgroundColor: '#36669b', flex: 0.4}]}>
            <Text style={styles.header}>Balcão</Text>
          </View>
      </View> 
      
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => item.id }
        extraData={selected}
        renderItem={({ item }) => (
          <ItemQueue
          // id, ticket_tag, number, desk_tag, 
            numColumns={2}
            id={item.id}
            ticket_tag={item.ticket_tag}
            number={item.number}
            desk_tag={item.desk_tag}
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
    //backgroundColor: '#f9c2ff',
    //padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
  header: {
    fontSize: 32,
    alignContent: "flex-end",
    alignItems:"center",
    color: 'white'
  },
  leftData:{
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  rightData:{
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
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
