import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, TextInput } from 'react-native';
import NoteItem from './components/NoteItem';

export default function App() {
  const [text, setText] =useState('');
  const [notes, setNotes] = useState([
    {name: 'Pop Tarts', key: '1'},
    {name: 'Pringles', key:'2'}
  ])

  const changeHandler = (val) => {
    setText(val)
  }

  const submitHandler = (text) =>{
    if (text == ''){
      console.log('enter something lol...')
    } else{
        setNotes((prevNotes) => {
          return [
            {name: text, key: Math.random().toString()},
            ...prevNotes
          ]
        })}
  }

  const pressHandler = (key) => {
    setNotes((prevNotes) => {
      return prevNotes.filter(note => note.key != key);
    })
  }

  return (
    <View style={styles.root}>
      <View style={styles.welcomeContainer}> 
        <Text style={styles.welcomeStyle}>Welcome, Adrian</Text>
        <Text style={{margin:5}}>Here is your list below, enjoy!</Text>
        <TextInput onChangeText={changeHandler} placeholder='Type here and press submit if you want to add more.' style={{margin:5, borderColor:'gray', borderBottomWidth:0.3}}/>
      </View>
      <View style={styles.listContainer}>
        <FlatList 
          data={notes}
          renderItem={({item}) => (
            <NoteItem item={item} pressHandler={pressHandler}/>
          )}
        />
        
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => submitHandler(text)}>
            
            <Text style={{fontSize:17, borderColor:'black', paddingHorizontal:35, paddingVertical:13, borderRadius:20, backgroundColor:'pink',overflow:'hidden'}}>Submit</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',

  },
  welcomeContainer:{
    flex:1.3,
    justifyContent:'center',
    padding:35,
    backgroundColor:'pink',
    borderColor:'white',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,

  },
  listContainer:{
    flex:2,
    alignItems:'center',
    backgroundColor:'white',
    margin:20,
  },
  welcomeStyle:{
    fontSize:35,
  },
  listStyle:{
    margin:10,
    fontSize:20,
    backgroundColor:'white',
    padding:20,
    textAlign:'center',
    borderColor:'gray',
    borderWidth:0.7,
    borderStyle:'dotted',
    borderRadius:10,
    width:250
  },
  buttonContainer:{
    alignItems:'center',
    backgroundColor:'white',
    flex:0.5,
    justifyContent:'center'
  }
});
