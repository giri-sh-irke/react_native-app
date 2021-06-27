import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Slider from "@react-native-community/slider";
import {
  Provider as PaperProvider,
  TextInput,
  Button,
} from "react-native-paper";

//Components
import IntensitySlider from "./components/IntensitySlider";
//0.63.2
export default function App() {
  const [text, setText] = React.useState("");
  const sliderCount = 5;

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.label}>Set new theme</Text>

        <View style={{ paddingTop: 50 }}>
          <TextInput
            mode="outlined"
            label="Name"
            placeholder="Enter name"
            right={<TextInput.Affix />}
          />

          <IntensitySlider count={sliderCount}/>
          <View style={{ marginTop: 30 }}>
            <View style={styles.row}>
              <Button
                icon="check"
                mode="contained"
                styles={styles.button}
                onPress={buttonCLickHandler}
              >Apply
              </Button>
              <Button
                icon="content-save"
                mode="contained"
                styles={styles.button}
                onPress={buttonCLickHandler}
              >
                Save
              </Button>
              <Button
                icon="cancel"
                mode="outlined"
                styles={styles.button}
                onPress={buttonCLickHandler}
              >
                Cancel
              </Button>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const buttonCLickHandler = () => {
  Alert.alert("Simple Button pressed");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    padding: 20,
    backgroundColor: "#eaeff3",
    // alignItems: "center",
    // justifyContent: "center",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
  button: {
    width: "30",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
