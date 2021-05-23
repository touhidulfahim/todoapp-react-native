import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
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
      <View>
        <TouchableOpacity>
          <Tex>Upload image</Tex>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
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
