import React, { useLayoutEffect, useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Input } from "react-native-elements";
import { Icon } from "react-native-elements";
import { db } from "../config/firebase";
import * as firebase from "firebase";
import CustomListItem from "../components/CustomListItem";
import UserListItem from "../components/UserListItem";


const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [userList, setUserList] = useState([]);
  const [disabledState, setDisabledState]=useState();

  useEffect(() => {
    const unsubscribe = db.collection("users").onSnapshot((snapshot) =>
      setUserList(
        snapshot.docs.map((doc) => ({
          // email: doc.id,
          data: doc.data(),
        }))
      )
    );
    return unsubscribe;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);
  const createChat = async () => {
    await db
      .collection("chat")
      .add({
        chatName: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        alert(error);
      });
  };
  const enterUser = (displayName) => {
    setInput("");
    setInput(displayName);
    setDisabledState(true)

  };
  return (
   
    <SafeAreaView >
      <View style={styles.container}>
      <Input
      disabled={disabledState}
          placeholder="Enter a chat name"
          value={input}
          onChangeText={(text) => setInput(text)}
          leftIcon={
            <Icon name="wechat" type="antdesign" size={24} color={"black"} />
          }
        />

        <Button onPress={createChat} title={"Create new chat"}></Button>
        </View>
      <ScrollView style={styles.container}>
        <Text>User List</Text>
        {userList.map(({  data: { email, displayName, photoURL } }) => (
          <UserListItem
            key={email}
            id={email}
            email={email}
            photoURL={photoURL}
            displayName={displayName}
            enterUser={enterUser}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "white",
  },
});
