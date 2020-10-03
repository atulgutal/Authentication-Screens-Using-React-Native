import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Heading from "../components/Heading";
import Input from "../components/Input";
import FilledButton from "../components/FilledButton";
import TextButton from "../components/TextButton";
import Error from "../components/Error";

export default function LoginScreen({ navigation }) {
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [error, setError] = useState(false);

  const handleEmailChange = input => {
    if (input.length !== 0) {
      setUserEmail({
        useremail: input
      });
    }
  };

  const handlePasswordChange = input => {
    if (input.length !== 0) {
      setUserPassword({
        userpassword: input
      });
    }
  };
  const handleLogin = () => {
    //console.log("email: ", useremail.useremail);
    // console.log("password: ", userpassword);
    if (
      useremail.useremail === "admin" &&
      userpassword.userpassword === "12345"
    ) {
      navigation.navigate("homeScreen");
    } else {
      //console.log("error");
      setError({
        error: true
      });
    }
  };
  const handleRegisterScreen = () => {
    navigation.navigate("registrationScreen");
  };
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Login </Heading>
      {error.error === true ? (
        <Error error={"Invalid Credentials"} />
      ) : (
        <Error error={""} />
      )}

      <Input
        name="useremail"
        style={styles.input}
        placeholder={"Email"}
        keyboardType={"email-address"}
        onChangeText={value => handleEmailChange(value)}
        value={useremail}
      />
      <Input
        name="userpassword"
        style={styles.input}
        placeholder={"Password"}
        onChangeText={value => handlePasswordChange(value)}
        value={userpassword}
        secureTextEntry
      />
      <FilledButton
        title={"Login"}
        style={styles.loginButton}
        onPress={handleLogin}
      />
      <TextButton
        title={"Have an account? Create one"}
        onPress={handleRegisterScreen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  }
});
