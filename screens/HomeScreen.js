import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import CustomListItem from "../components/CustomListItem";
import {AntDesign, SimpleLineIcons} from "@expo/vector-icons"
import{auth} from "../config/firebase"
const HomeScreen = ({ navigation }) => {
const [chats, setChats]= useState([])

  const signOutUser = () =>{
    auth.signOut().then(()=>{
      navigation.replace("Login");
    })
  }
useEffect(() => {
  const unsubscribe = db.collection('chats').onSnapshot(snapshot =>(
    setChats(snapshot.docs.map(doc=>({

    })))
  ))
}, [])
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chats",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
            <Avatar
              rounded
              source={{
                uri: "https://www.gsu.edu/wp-content/themes/gsu-flex-2/images/logo.png",
              }}
            ></Avatar>
          </TouchableOpacity>
        </View>
      ),
      headerRight:() =>(
        <View
        style={{
          flexDirection:"row",
          justifyContent:"space-between",
          width:80,
          marginRight:20,
        }}
        >
          <TouchableOpacity>
            <AntDesign name="camerao" size={24} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("AddChat")}>
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
    ),
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
