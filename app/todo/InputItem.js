import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";
const InputItem = (props) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        placeholder="type here"
        value={props.inputVal}
        onChangeText={(inputVal) => props.setInputVal(inputVal)}
      />
      <TouchableHighlight
        onPress={() => {
          if (props.inputVal !== "") {
            props.setTodoList([
              ...props.todolist,
              { key: Math.random().toString(), value: props.inputVal },
            ]);
          }
          props.setInputVal("");
        }}
      >
        <View style={styles.button}>
          <Text style={styles.btnLabel}>ADD</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    padding: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderBottomWidth: 1,
    borderColor: "black",
    padding: 7,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#00bfff",
    padding: 10,
    marginTop: 2,
  },
  btnLabel: {
    fontWeight: "bold",
    color: "white",
  },
});

export default InputItem;
