import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FirstComponent } from './shared/components/FirstComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyButton from './shared/components/MyButton';
export default function App() {
  return (
    <SafeAreaView>
      <MyButton onPress={() => console.log("Test") } order='1'>
        <Text>Login button</Text>
      </MyButton>
      <MyButton order='1'>
        <Text>Register button</Text>
      </MyButton>
    </SafeAreaView>
  );
}
