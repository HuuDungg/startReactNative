import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import FlexBox from './component/flex.box';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
interface Todo {
  id: number,
  name?: string
}

export default function App() {
  const [listTodo, setListTodo] = useState<Todo[]>([
    { id: 7, name: 'a' },
    { id: 1, name: 'b' },
    { id: 2, name: 'v' },
    { id: 3, name: 'd' },
    { id: 4, name: 'e' },
    { id: 5, name: 'r' },
    { id: 6, name: '6' },
  ]);

  const [todo, setTodo] = useState<string>("");

  const addTodo = () => {
    if (todo) {
      const newTodo: Todo = { id: listTodo.length + 1, name: todo };
      setListTodo([newTodo, ...listTodo]);
      setTodo(''); // Reset input field
    } else {
      alert("Todo cannot be empty!");
    }
  };

  const deleteTodo = (id: number) => {
    alert("Delete Todo ID: " + id);
    setListTodo(listTodo.filter(item => item.id !== id));
  };

  const generateUDI = (): number => {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000000);
    const udid = parseInt(`${timestamp}${randomNum}`);
    return udid;
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.header}>Tran Huu Dung</Text>
        <TextInput
          onChangeText={(text) => setTodo(text)}
          value={todo}
          style={styles.inputField}
          placeholder="Enter a todo"
          onSubmitEditing={() => {
            addTodo()
          }}
        />
        <View style={styles.btn}>
          <Ionicons onPress={addTodo} name="create-outline" size={24} color="black" />
        </View>
        <FlatList
          data={listTodo}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Text style={styles.text}>id: {item.id} | name: {item.name} </Text>
              <Feather onPress={() => deleteTodo(item.id)} name="trash" size={24} color="black" />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </TouchableWithoutFeedback>
    // <View>
    //   <FlexBox />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 40,

  },
  header: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    paddingHorizontal: 33,
  },
  inputField: {
    width: 300,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 30,
    paddingHorizontal: 10,
  },
  btn: {
    width: 100,
    marginTop: 20,

    borderColor: 'gray',
    borderWidth: 1
  },
  todoItem: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 30,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10
  },
  text: {
    width: 150
  }
});
