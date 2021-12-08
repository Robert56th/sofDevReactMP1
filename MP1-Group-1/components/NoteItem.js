import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function NoteItem({item, pressHandler}){

  return(
    <TouchableOpacity onPress={()=> pressHandler(item.key)}>
      <Text style={styles.item}>{item.name}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    textAlign:'center',
    borderColor:'black',
    borderWidth:0.7,
    borderRadius:10,
    width:200

  }
})