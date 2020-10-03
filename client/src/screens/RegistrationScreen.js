import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import Heading from "../components/Heading";
import Input from "../components/Input";
import FilledButton from "../components/FilledButton";
import Error from "../components/Error";

export default function RegistrationScreen({ navigation }) {
  const handleLogin = () => {
    console.log("handle login");
  };
  const handleLoginScreen = () => {
    navigation.navigate("loginScreen");
  };
  return (
    <View style={styles.container}>
      <IconButton
        name={"closecircleo"}
        style={styles.closeIcon}
        onPress={handleLoginScreen}
      />
      <Heading style={styles.title}>Register</Heading>
      <Error error={""} />
      <Input
        style={styles.input}
        placeholder={"Email"}
        keyboardType={"email-address"}
      />
      <Input style={styles.input} placeholder={"Password"} secureTextEntry />
      <FilledButton
        title={"Register"}
        style={styles.loginButton}
        onPress={handleLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 100,
    alignItems: "center",
    backgroundColor: "white"
  },
  title: {
    marginBottom: 48
  },
  input: {
    marginVertical: 8
  },
  loginButton: {
    marginVertical: 32
  },
  closeIcon: {
    color: "purple",
    position: "absolute",
    top: 30,
    right: 16
  }
});
