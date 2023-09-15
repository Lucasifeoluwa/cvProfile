import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import Colors from "../config/Colors";

export default function ListItem({ name, title, tag }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconCtn}>
        <MaterialCommunityIcons name={name} size={20} color={"white"} />
      </View>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.tag}>{tag}</AppText>
    </View>
  );
}

/* export function SkillItem({ img, title, tag }) {
  <View style={styles.container}>
  <View style={styles.iconCtn}>
    <Image style = {styles.img} />
  </View>
  <AppText style={styles.title}>{title}</AppText>
  <AppText style={styles.tag}>{tag}</AppText>
</View>
} */

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: 150,
    padding: 15,
    elevation: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
  },

  iconCtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
    marginVertical: 5,
    backgroundColor: "#3581B8",
    borderRadius: 20,
    elevation: 1,
  },

  title: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "600",
  },

  tag: {
    fontSize: 18,
    color: Colors.primary,
    fontWeight: "700",
  },
});
