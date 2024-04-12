import { StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View style={{flex:1}}>
    <View style={{width:50, height: 50, backgroundColor: 'blue'}}></View>
    <View style={{flex:1, backgroundColor: 'red'}}></View>
    <View style={{width: 100, height: 200, backgroundColor: 'green'}}></View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'  },
  box1: {
    flex:1,
    backgroundColor: 'blue'
  },
  box2: {
    flex:12,
    backgroundColor: 'red'
  },
  box3: {
    flex:5,
    backgroundColor: 'green'
  }
});

export default App;