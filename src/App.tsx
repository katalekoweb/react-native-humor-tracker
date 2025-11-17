import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputBase,
  TouchableOpacity,
  View,
} from "react-native";
import { FirstComponent } from "./shared/components/FirstComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "./shared/components/MyButton";
import { useState } from "react";
export default function App() {
  const [state, setState] = useState("Teste");
  const [hide, setHide] = useState(false);
  const [list, setList] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ]);

  return (
    <SafeAreaView>
      {/* {hide ? <Text>Showed</Text> : <Text>Hided</Text>} */}

      {/* <Text style={{display:  hide ? 'none' : undefined}}>Showed</Text> */}

      {/* <TouchableOpacity onPress={() => setHide(!hide)}>
        <Text>Toggle</Text> 
      </TouchableOpacity> */}

      <FlatList
        data={list}
        keyExtractor={(item, index) => item.toString()}
        renderItem={({ item, index }) => (
          <Text key={index}>
            {" "}
            Hided {item} index {index}{" "}
          </Text>
        )}
      />

      <View style={styles.container}>
        <Pressable style={({pressed}) => pressed ? styles.buttonPressed : styles.button}>
          <Text>Press me</Text>
        </Pressable>
      </View>

      <ScrollView>
        {/* <Button title="Hello"></Button> */}

        {/* {list.map((item, index) => (
          <Text key={index}>
            Hided {item} index {index}{" "}
          </Text>
        ))} */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    width: 100,
    padding: 8,
    alignItems: "center",
    borderRadius: 4,
  },
  buttonPressed: {
    backgroundColor: "blue",
    width: 100,
    padding: 8,
    alignItems: "center",
    borderRadius: 4,
  },
  container: {
    margin: 16
  }
});
