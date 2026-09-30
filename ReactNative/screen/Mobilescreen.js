import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Person from "../components/person"; 
import Projects from "../components/projects"; 

const Mobilescreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Person 
        image={require("../images/johndoe.png")}
        name="John Doe" 
        description="We're passionate about creating beautiful desing for startups & leading brands"
      />
      <Projects /> 
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
});

export default Mobilescreen;
