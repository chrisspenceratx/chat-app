import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.blue}>Hello World!</Text>
    <Text style={styles.bigRed}>How are you?</Text>
    <Text style={styles.bigRedBold}>I'm feeling blue!</Text>
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

  blue: {
    color: 'blue',
    fontWeight: '600',
  },

  bigRed: {
    color: 'red',
    fontSize: 30,
  },

  bigRedBold: {
    color: 'red',
    fontSize: 30,
    fontWeight: '600',
  },
});

export default App;