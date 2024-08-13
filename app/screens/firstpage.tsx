import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


export const FirstPage = () => {
    const NavigationToLoginScreen = useNavigation();
    const handleNavigateToLogin = () => {
        NavigationToLoginScreen.navigate('Signin');
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={require("../images/default-removebg-preview.png")} />
        <Text style={styles.logoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonOne}>
          <Text style={styles.buttonOneText}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTwo} onPress={handleNavigateToLogin}>
          <Text style={styles.buttonTwoText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.textPassword}>Forgot Password?</Text>
      </View>

      <View style={styles.Footer}>
        <Text style={styles.FooterTextOne}>Keezars</Text>
        <Text style={styles.FooterTextTwo}>Copyright 2024 all right reserved</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    padding: 20,
    position: "relative",
  },
  logoWrapper: {
    alignItems: "center",
    padding: 20,
    marginBottom: 10,
    marginTop: 135,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 1,
  },
  logoText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonOne: {
    width: "100%",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonOneText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTwo: {
    width: "100%",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 1,
    alignItems: "center",
  },
  buttonTwoText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  textPassword: {
    marginTop: 30,
    textAlign: "center",
    color: "white",
  },
  Footer: {
    textAlign: "center",
    position: "absolute",
    bottom: 20,
  },
  FooterTextOne: {
    color: "white",
    textAlign: "center",
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 18
  },
  FooterTextTwo: {
    color: "white",
    textAlign: "center",
    fontSize: 12
  },
});


