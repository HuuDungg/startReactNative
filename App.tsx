import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import FlexBox from './component/flex.box';

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
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    //   <View style={styles.container}>
    //     <Text style={styles.header}>Tran Huu Dung</Text>
    //     <TextInput
    //       onChangeText={(text) => setTodo(text)}
    //       value={todo}
    //       style={styles.inputField}
    //       placeholder="Enter a todo"
    //     />
    //     <View style={styles.btn}>
    //       <Button onPress={addTodo} title='Add' />
    //     </View>
    //     <FlatList
    //       data={listTodo}
    //       renderItem={({ item }) => (
    //         <View style={styles.todoItem}>
    //           <Text>id: {item.id} | name: {item.name} </Text>
    //           <Button onPress={() => deleteTodo(item.id)} title='Delete' />
    //         </View>
    //       )}
    //       keyExtractor={item => item.id.toString()}
    //     />
    //   </View>
    // </TouchableWithoutFeedback>
    <View>
      <FlexBox />
    </View>
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
  },
  todoItem: {
    marginVertical: 10,
    alignItems: 'center',
  },
});
