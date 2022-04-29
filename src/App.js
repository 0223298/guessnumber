import {StyleSheet, Text, View} from 'react-native'
import Header from './src/Header'
import StartGameScreen from './src/StartGameScreen'

function App() {
  return (
    <View style={StyleSheet.screen}>
      <Header title={'Hello There!'}/>
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});



