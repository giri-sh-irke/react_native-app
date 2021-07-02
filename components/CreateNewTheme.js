import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, Alert, ImageBackground } from "react-native";
import {
  Provider as PaperProvider,
  TextInput,
  Button,
} from "react-native-paper";
import IntensitySlider from "./IntensitySlider";

export default function CreateTheme() {
  const [text, setText] = React.useState("");
  const sliderCount = 5;
  const img = require("../assets/SL-030720-28740-05.jpg");

  return (
    <PaperProvider>
      <ImageBackground
        source={img}
        style={styles.backgroundImage}
      >
        <Text style={styles.label}>Add new theme</Text>
        <View style={styles.form}>
          <TextInput
            style={{ paddingBottom: 30 }}
            mode="outlined"
            label="Name"
            placeholder="Enter name"
            right={<TextInput.Affix />}
          />
          <IntensitySlider count={sliderCount} />
          <View style={{ marginTop: 30 }}>
            <View style={styles.row}>
              <Button
                icon="check"
                mode="contained"
                styles={styles.button}
                onPress={applyTheme}
                color="white"
              >
                Apply
              </Button>
              <Button
                icon="content-save"
                mode="contained"
                styles={styles.button}
                color="white"
                onPress={saveTheme}
              >
                Save
              </Button>
              <Button
                icon="cancel"
                mode="contained"
                styles={styles.button}
                color="white"
                onPress={buttonCLickHandler}
              >
                Cancel
              </Button>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </PaperProvider>
  );
}

const buttonCLickHandler = () => {
  Alert.alert("Simple Button pressed");
};

const applyTheme = () => {
  Alert.alert("Apply theme");
};

const saveTheme = () => {
  Alert.alert("Save theme");
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch",
  },
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "white",
  },
  form: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "bold",
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
