import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShareTodo from "../shareTodo/ShareTodo";
import FindTodo from "../FindTodo/FindTodo";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const NavigationTab = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Share"
        component={ShareTodo}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon color={color} name="share-alt" size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Find"
        component={FindTodo}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon color={color} name="search" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
