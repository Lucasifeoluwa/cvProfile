import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../config/Colors";
import AppText from "./AppText";

function AppTextInput({ label, width = "100%", ...otherProps }) {
  return (
    <>
      <AppText style={styles.label}>{label}</AppText>
      <View style={[styles.container, { width }]}>
        <TextInput style={styles.text} {...otherProps} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 25,
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    alignContent: "center",
    borderColor: "#444",
    borderWidth: 1,
    opacity: 0.4,
  },
  label: {
    fontSize: 18,
    color: "#111111",
  },
  text: {
    color: Colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppTextInput;
