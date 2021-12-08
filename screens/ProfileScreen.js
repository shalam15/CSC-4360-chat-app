import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements';
import {auth} from "../config/firebase"

const ProfileScreen = ({navigation}) => {
    const signOutUser = () => {
        auth.signOut().then(() => {
          navigation.replace("Login");
        });
      };
    return (
        <View style={styles.container}>
            <Text>This is the profile screen</Text>
            <Text>This avergae chat rating for {auth.currentUser.displayName} is </Text>
            <Text style={styles.textStyle}>0 </Text>


            
      <Button containerStyle={styles.button} onPress={signOutUser} title={"Sign out"}/>

        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    margin: 50
  },
    button:{
        width:200,
        marginTop:100,
    },
    textStyle:{
      fontSize:200
      
    }
})
