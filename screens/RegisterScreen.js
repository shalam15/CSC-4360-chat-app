import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, View, KeyboardAvoidingView,Image } from "react-native";
import { Button, Text } from "react-native-elements";
import { Input } from "react-native-elements/dist/input/Input";
import { auth, db } from "../config/firebase";
import * as firebase from "firebase";
import dummyImage from "../assets/example.png";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const dummyImageUri = Image.resolveAssetSource(dummyImage).uri;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user
          .updateProfile({
            displayName: name,
            photoURL: imageUrl || dummyImageUri,
          })
          .then(() => {
            db.collection("users").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              displayName: auth.currentUser.displayName,
              email: email,
              photoURL: auth.currentUser.photoURL,
            });
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="Light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create an account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="text"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Photo"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        onPress={register}
        title={"Register"}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
