import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import InputItem from "../InputItems/InputItem";
import TodoList from "../List/TodoList";
import TodoDetails from "../Details/TodoDetails";
import { connect } from "react-redux";
import { addTodo, delTodo } from "../../redux/actionCreators";

const mapStateToProps = (state) => {
  return { todoList: state.todoList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delTodo: (key) => dispatch(delTodo(key)),
  };
};

const FindTodo = (props) => {
  const [selectedTodo, setselectedTodo] = useState(null);

  const handleSelectedTodo = (key) => {
    const todo = props.todoList.find((todo) => {
      return todo.key === key;
    });
    setselectedTodo(todo);
  };

  const handleHideModal = () => {
    setselectedTodo(null);
  };

  const handleDeleteItem = (key) => {
    props.delTodo(key);
    setselectedTodo(null);
  };

  let todoDetails = null;
  if (selectedTodo !== null) {
    todoDetails = (
      <TodoDetails
        todo={selectedTodo}
        handleHideModal={handleHideModal}
        handleDeleteItem={handleDeleteItem}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headingText}>TODO APP</Text>
      </View>
      <View style={styles.modalsView}>{todoDetails}</View>
      <TodoList
        todoList={props.todoList}
        handleSelectedTodo={handleSelectedTodo}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          position: "fixed",
          marginBottom: 30,
        }}
      ></View>
      <StatusBar style="auto" />
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
  modalsView: {
    marginTop: 50,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FindTodo);
