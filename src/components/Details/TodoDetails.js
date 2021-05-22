import React from "react";
import {
  View,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";

const TodoDetails = (props) => {
  return (
    <View style={styles.centeredView}>
      <Modal>
        <View style={styles.modalView}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 40,
            }}
          >
            {props.todo.value}
          </Text>
          <View style={styles.buttos}>
            <TouchableOpacity
              style={styles.delbutton}
              onPress={() => {
                props.handleDeleteItem(props.todo.key);
              }}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => props.handleHideModal()}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttos: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 60,
    padding: 20,
  },
  delbutton: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: { color: "white", fontSize: 15, fontWeight: "bold" },
  closeButton: {
    alignItems: "center",
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 10,
  },
});
export default TodoDetails;
