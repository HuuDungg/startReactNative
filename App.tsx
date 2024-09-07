
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Header } from '@rneui/themed';

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
  ])

  const [todo, setTodo] = useState<string>()

  const addTodo = () => {
    alert("clicked " + todo)
    const newTodo: Todo = { id: generateUDI(), name: todo };
    setListTodo([newTodo, ...listTodo])
    setTodo('')
  }

  const deleteTodo = (id: number) => {
    alert("delete " + id)
    setListTodo(listTodo.filter(item => (item.id !== id)))
  }

  const generateUDI = (): number => {
    // Lấy thời gian hiện tại tính bằng mili giây (số lớn, để tránh trùng lặp)
    const timestamp = Date.now();

    // Tạo một số ngẫu nhiên
    const randomNum = Math.floor(Math.random() * 1000000); // 1 số ngẫu nhiên từ 0 đến 999999

    // Kết hợp timestamp và số ngẫu nhiên để tạo ra một số độc nhất
    const udid = parseInt(`${timestamp}${randomNum}`);

    return udid;
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Tran Huu Dung</Text>
        <View>
          <TextInput onChange={
            (text) => {
              setTodo(text.nativeEvent.text);
            }
          } value={todo} style={styles.inputField} />
        </View>
        <View style={styles.btn}>
          <Button onPress={() => {
            addTodo()
          }} title='Add' />
        </View>
        <View>
          <FlatList
            data={listTodo}
            renderItem={
              ({ item }) => (
                <>
                  <Text>id: {item.id} | name: {item.name} </Text>
                  <Button onPress={() => {
                    deleteTodo(item.id)
                  }} title='delete'></Button>
                </>
              )
            }
            keyExtractor={item => item.id as unknown as string}
          />
        </View>
      </View>
    </>
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
    fontSize: 55,
    textAlign: 'center',
    paddingHorizontal: 33,
    borderBlockColor: '1px black'
  },
  inputField: {
    width: 300,
    height: 50,
    borderBlockColor: 'black',
    borderWidth: 1,
    marginTop: 30
  }, btn: {
    backgroundColor: 'red',
    width: 100,
    marginTop: 20,
    color: 'black'
  }

});
