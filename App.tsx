
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>('Tran Huu Dung hihi');
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>

      <Text>{name}</Text>
      <Text>{count}</Text>
      <View >
        <Button
          color={'red'}
          onPress={() => {
            setCount(count + 1);
            alert('tab me ' + count)
          }} title='hub' />
        <TextInput
          onChange={(value) => {
            setName(value.nativeEvent.text)
          }}
          keyboardType='numeric'
          style={{
            borderColor: 'black',
            borderWidth: 1,
            paddingRight: 80,
          }}
          maxLength={2}
        />
      </View>
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
  div: {
    color: 'red',
    fontSize: 44,
    borderColor: '1px solid blue',
    borderWidth: 1,
  }
});
