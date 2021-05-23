import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
const Login = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
export default Login;
