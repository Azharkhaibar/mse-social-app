import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const SignUpScreen = () => {
    const [ fullnameUser, setFullnameUser ] = useState('');
    const [ emailUser, setEmailUser ] = useState('');
    const [ passwordUser, setPasswordUser ] = useState('');
    const NavigationHomeScreen = useNavigation();
    const HandleNavigationToHomeScreen = () => {
        NavigationHomeScreen.navigate('Home')
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../images/default-removebg-preview.png")} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#666" keyboardType="email-address" value={emailUser} onChangeText={setEmailUser} />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#666" value={passwordUser} onChangeText={setPasswordUser} secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={HandleNavigationToHomeScreen}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginContainer} >
        <Text style={styles.loginText}>
          Don't have an account? <Text style={styles.loginTextBold}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 200,
    backgroundColor: 'transparent',
    
  },
  formContainer: {
    borderRadius: 10,
    padding: 15,
  },
  input: {
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#3aa6b9",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
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
    color: "#666",
  },
  loginTextBold: {
    color: "#3498db",
    fontWeight: "bold",
  },
});

