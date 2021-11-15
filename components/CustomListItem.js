import React from "react";
import { StyleSheet, Text, View,  } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = () => {
  return (
    <ListItem>
      <Avatar
      rounded
        source={{
          uri: "https://www.gsu.edu/wp-content/themes/gsu-flex-2/images/logo.png",
        }}
/>
<ListItem.Content>
    <ListItem.Title
    style={{fontWeight: "800"}}
    >
        Youtube Chat
    </ListItem.Title>
    <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
        This is the Subtitle
    </ListItem.Subtitle>
</ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
