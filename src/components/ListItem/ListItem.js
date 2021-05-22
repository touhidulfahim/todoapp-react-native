import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Text>{props.todo}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: { width: "100%", padding: 6, backgroundColor: "#eee", margin: 5 },
});
export default ListItem;
