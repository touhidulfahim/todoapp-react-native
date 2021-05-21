import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InputItem from "./app/todo/InputItem";
import TodoList from "./app/todo/TodoList";
import TodoDetails from "./app/todo/Details/TodoDetails";

export default function App() {
  const [inputVal, setInputVal] = useState("");
  const [todolist, setTodoList] = useState([]);
  const [selectedTodo, setselectedTodo] = useState(null);

  const handleSelectedTodo = (key) => {
    const todo = todolist.find((todo) => {
      return todo.key === key;
    });
    setselectedTodo(todo);
  };

  const handleHideModal = () => {
    setselectedTodo(null);
  };

  const handleDeleteItem = (key) => {
    setTodoList(todolist.filter((todo) => todo.key !== key));
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
      <InputItem
        inputVal={inputVal}
        setInputVal={setInputVal}
        todolist={todolist}
        setTodoList={setTodoList}
      />
      <TodoList todolist={todolist} handleSelectedTodo={handleSelectedTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    marginTop: 40,
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
