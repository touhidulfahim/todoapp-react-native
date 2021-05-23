import React, { useState } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import InputItem from "../InputItems/InputItem";
import { addTodo } from "../../redux/actionCreators";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};

const ShareTodo = (props) => {
  const [inputVal, setInputVal] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headingText}>TODO APP</Text>
      </View>
      <InputItem inputVal={inputVal} setInputVal={setInputVal} />

      <TouchableHighlight
        onPress={() => {
          if (inputVal !== "") {
            props.addTodo([
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    marginTop: 0,
    width: "100%",
    height: 50,
  },
  headingText: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#00bfff",
  },
});

export default connect(null, mapDispatchToProps)(ShareTodo);
