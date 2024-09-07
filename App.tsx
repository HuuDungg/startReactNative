import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Huu Dung</Text>
      <Text style={{
        color: 'red',
        fontSize: 44,
        borderColor: '1px solid blue',
        borderWidth: 1
      }}>day là 1 div</Text>
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
});
