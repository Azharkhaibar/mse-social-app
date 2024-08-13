import React, { useState } from "react";
import { View, SafeAreaView, Text, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const SignInScreen = () => {
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const NavigationHomeScreen = useNavigation();

  const HandleNavigationToHomeScreen = () => {
    NavigationHomeScreen.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../images/default-removebg-preview.png")} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#666" keyboardType="email-address" value={emailUser} onChangeText={setEmailUser} />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#666" value={passwordUser} onChangeText={setPasswordUser} secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={HandleNavigationToHomeScreen}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginContainer}>
        <Text style={styles.loginText}>
          Don't have an account? <Text style={styles.loginTextBold}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  logo: {
    width: 180,
    height: 180,
    backgroundColor: "transparent",
  },
  formContainer: {
    width: "100%",
    borderRadius: 10,
    padding: 15,
  },
  input: {
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    borderBottomColor: "white",
    borderWidth: 1,
    backgroundColor: "transparent",
    color: "white", // Mengatur warna teks input menjadi putih
  },
  button: {
    marginTop: 20,
    backgroundColor: "black",
    padding: 15,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  loginText: {
    color: "white",
  },
  loginTextBold: {
    color: "#3498db",
    fontWeight: "bold",
  },
  backContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  backText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
