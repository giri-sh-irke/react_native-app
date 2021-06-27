import * as React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Slider from "@react-native-community/slider";
import {
  Provider as PaperProvider,
  TextInput,
  Button,
} from "react-native-paper";

export default function IntensitySlider(props) {
  let slidersList = [];
  for (let i = 0; i < props.count; i++) {
    slidersList.push(i + 1);
  }
  return (
    <View>
      {slidersList.map((sliderName) => (
        <View style={styles.sliderRow}>
          <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
            Channel {sliderName}
          </Text>
          <Slider
            key={sliderName}
            style={{ width: 250, height: 40 }}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#6c00f8"
            maximumTrackTintColor="#caaceb"
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  sliderRow: {
    marginBottom: 15,
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
