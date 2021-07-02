import * as React from "react";
import { StyleSheet, View } from "react-native";
import CreateTheme from "./components/CreateNewTheme";

export default function App() {
  return (
    <View style={styles.container}>
      <CreateTheme />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "white",
  },
});
