import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [people, setPeople] = useState(
    [
      { name: 'Priyansh', key: '1' },
      { name: 'Jain', key: '2' },
      { name: 'Avichal', key: '3' },
      { name: 'Pathak', key: '4' },
      { name: 'Divyang', key: '5' },
      { name: 'Sharma', key: '6' },
      { name: 'Trainer1', key: '7' },
      { name: 'Trainer2', key: '8' },
      { name: 'Trainer3', key: '9' },
      { name: 'Trainer4', key: '10' },
      { name: 'Trainer5', key: '11' },
      { name: 'Trainer6', key: '12' },
      { name: 'Trainer7', key: '13' },
      { name: 'Trainer8', key: '14' },
      { name: 'Trainer9', key: '15' },
    ]
  )

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          people.map((item) => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
          }
          )}
      </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxStyle: {
    width: 50, height: 50, backgroundColor: 'powderblue'
  },

  input: {
    border: '1px solid',
    borderColor: 'blue',
    padding: 8,
  },
  item: {
    marginTop: 24,
    padding: 30,
    height: 30,
    backgroundColor: 'yellow',
    fontSize: 24,
  }

});


