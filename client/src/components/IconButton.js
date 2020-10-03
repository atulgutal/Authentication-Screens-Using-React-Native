import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function IconButton({ name, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <AntDesign name={name} size={24} color={style.color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {}
});
