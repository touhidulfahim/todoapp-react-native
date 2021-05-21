import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "./ListItem/ListItem";

const TodoList = (props) => {
  return (
    <FlatList
      style={{
        width: "100%",
      }}
      data={props.todolist}
      renderItem={(info) => {
        return (
          <ListItem
            todo={info.item.value}
            onItemPressed={() => props.handleSelectedTodo(info.item.key)}
          />
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  todoList: {
    marginTop: 25,
    borderColor: "gray",
    width: "100%",
  },
});
export default TodoList;
