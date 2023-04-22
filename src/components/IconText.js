import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";

const IconText = ({ name, text, color, style }) => {
  return (
    <View style={styles.container}>
      <Feather name={name} size={50} color="white" />
      <Text style={[styles.textTheme, style]}>{text}</Text>
    </View>
  );
};

export default IconText;

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
  },
});
