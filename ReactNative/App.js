import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screen/MainScreen';
import Listscreen from './screen/Listscreen';
import Challscreen from './screen/Challscreen';
import Examplescreen from './screen/Examplescreen';
import Buttonscreen from './screen/Buttonscreen';




const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <Buttonscreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
