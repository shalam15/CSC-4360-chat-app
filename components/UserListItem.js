import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const UserListItem = ({ displayName, email, enterUser,photoURL, navigation }) => {
  return (
    <ListItem onPress={()=>enterUser(displayName)} key={email} bottomDivider>
      <Avatar
        rounded
        source={{
          uri: photoURL,
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {displayName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {email}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default UserListItem;

const styles = StyleSheet.create({});
