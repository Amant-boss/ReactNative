import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const StudentDetails = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <View style={styles.imgWrapper}>
          <Image source={props.image} style={styles.img} />
        </View>

        <View style={styles.infoWrapper}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  cardWrapper: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    width: "90%",
    alignSelf: "center",
    marginBottom: 15,
    overflow: "hidden",
  },

  imgWrapper: {
    width: 100,
    height: 100,
  },

  img: {
    width: 100,
    height: 100,
  },

  infoWrapper: {
    marginLeft: 20,
    marginTop: 20,
  },

  name: {
    fontWeight: "bold",
    fontSize: 16,
  },

  description: {
    marginTop: 5,
  },
});

export default StudentDetails;
