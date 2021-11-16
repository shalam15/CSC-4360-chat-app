import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import AddChatScreen from './screens/AddChatScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';


const Stack = createNativeStackNavigator();
const globalScreenOptions ={
  headerStyle: {backgroundColor:"blue"},
  headerTitleStyle:{color:"white"},
  headerTintColor: {color:"white"}
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={globalScreenOptions}>
      <Stack.Screen 
      options={{
        title: "Home",
      }}
      name="Home" component= {HomeScreen}/>
      <Stack.Screen 
      options={{
            title: "Login",
      }}
      name="Login" component= {LoginScreen}/>
      <Stack.Screen 
      options={{
        title: "Register",
      }}
      name="Register" component= {RegisterScreen}/>
       <Stack.Screen 
      options={{
        title: "Add Chat",
      }}
      name="AddChat" component= {AddChatScreen}/>
      <Stack.Screen 
      options={{
        title: "ChatScreen",
      }}
      name="Chat" component= {ChatScreen}/>
      <Stack.Screen 
      options={{
        title: "Profile Screen",
      }}
      name="Profile" component= {ProfileScreen}/>
      </Stack.Navigator>
  </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});