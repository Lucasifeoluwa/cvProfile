import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <ScrollView>
        <View style={[styles.view, style]}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  view: {
    flex: 1,
  },
});
export default Screen;
