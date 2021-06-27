import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  Slider,
  Alert,
} from "react-native";
// import { Slider } from "@react-native-community/slider";

export default function App() {
  const calculateNumber = 600;
  return (
    <View style={styles.container}>
      <Text>Real time! {calculateNumber}</Text>
      <TextInput
        style={{
          height: 40,
          width: 100,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="Enter text here"
      ></TextInput>
      <Slider
        style={{ width: 250, marginTop: 30 }}
        step={1}
        minimumValue={18}
        maximumValue={71}
        //  onValueChange={val => this.setState({ age: val })}
        //  onSlidingComplete={ val => this.getVal(val)}
      />
      <Slider
        style={{ width: 250, marginTop: 30 }}
        step={1}
        minimumValue={18}
        maximumValue={71}
        //  onValueChange={val => this.setState({ age: val })}
        //  onSlidingComplete={ val => this.getVal(val)}
      />
      <Slider
        style={{ width: 250, marginTop: 30 }}
        step={1}
        minimumValue={18}
        maximumValue={71}
        //  onValueChange={val => this.setState({ age: val })}
        //  onSlidingComplete={ val => this.getVal(val)}
      />

      <Button style={{marginTop: 90}} title="Press me" onPress={buttonCLickHandler} />

      <StatusBar style="auto" />
    </View>
  );
}

const buttonCLickHandler = () => {
  Alert.alert("Simple Button pressed");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
