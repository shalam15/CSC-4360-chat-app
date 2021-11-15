import React , {useLayoutEffect, useState}from "react";
import { StyleSheet, Text, View } from "react-native";
import {Button, Input} from "react-native-elements"
import { Icon } from "react-native-elements";
import { db } from "../config/firebase";

const AddChatScreen = ({ navigation }) => {
    const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);
  const createChat = async () =>{
      await db.collection('chat').add({
          chatName: input
      }).then(()=>{
          navigation.goBack();
      }).catch((error)=>{alert(error)})
  }
  return (
    <View style={styles.container}>
      <Input 
      placeholder="Enter a chat name" 
      value={input}
      onChangeText={(text)=>setInput(text)}
      leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color={"black"}/>
      }
      
      />
      <Button onPress={createChat} title={"Create new chat"}></Button>
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
      padding:30,
      backgroundColor:"white",
      
  },
});
