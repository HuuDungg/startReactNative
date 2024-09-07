
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState([
    { id: 7, age: 12, name: 'a' },
    { id: 1, age: 12, name: 'b' },
    { id: 2, age: 12, name: 'v' },
    { id: 3, age: 12, name: 'd' },
    { id: 4, age: 12, name: 'e' },
    { id: 5, age: 12, name: 'r' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
    { id: 6, age: 12, name: '6' },
  ]);

  return (
    <View style={styles.container}>
      <Text>My application</Text>
      <ScrollView>
        {
          name.map(item => (
            <View
              style={{
                backgroundColor: 'pink',
                marginBottom: 30,
                padding: 30
              }}
            >
              <Text key={item.id}>id: {item.id}/ age: {item.age}/ name: {item.name}</Text>
            </View>
          ))
        }
      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 50,
    marginVertical: 50
  },

});
