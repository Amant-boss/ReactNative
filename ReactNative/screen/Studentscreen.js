import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StudentDetails from "./StudentDetails";

const Studentscreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Students</Text>

      <StudentDetails
        name="Gerti"
        image={require("../images/gerti.png")}
        description=""
      />

      <StudentDetails
        name="Deon"
        image={require("../images/deon.png")}
        description=""
      />

      <StudentDetails
        name="Amant"
        image={require("../images/amant.png")}
        description=""
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },

  text: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 20,
  },
});

export default Studentscreen;
