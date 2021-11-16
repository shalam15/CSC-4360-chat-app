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
        <View>
            <Text>This is the profile screen</Text>
      <Button containerStyle={styles.button} onPress={signOutUser} title={"Sign out"}/>

        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    button:{
        width:200,
        marginTop:10,
    },
})
