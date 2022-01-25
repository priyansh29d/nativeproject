import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name,setName] = useState('Priyansh')
  const [person, setPerson] = useState({name : 'Me' , age : 23})
  const clickHandler = () => {
    setName('jain')
  }
  return (
    <View style={styles.container}>
      <Text >My Name Is</Text>
      <Text> his name is {person.name} and his age is {person.age}</Text>
      <TextInput style = {styles.input}
      placeholder = 'Entre Name'/>
      <Button title = 'Update State' onPress = {clickHandler}/>
      
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  boxstyle :{
    width: 50, height: 50, backgroundColor: 'powderblue'
  },

  input: {
    border: '1px solid',
    borderColor: 'blue',
    padding: 8,

  }

});
