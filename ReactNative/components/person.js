import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Person = (props) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.imageContainer}>
        <Image source={props.image} style={styles.avatarImage} resizeMode="cover" />
      </View>

      <View style={styles.card}>
        <Text style={styles.nameText}>{props.name.toUpperCase()}</Text>
        <Text style={styles.titleText}>UI/UX Designer</Text>
        <Text style={styles.descriptionText}>{props.description}</Text>

        <TouchableOpacity style={styles.hireButton}>
          <Text style={styles.hireButtonText}>HIRE HIM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#72b2c4",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: 40,
    paddingBottom: 40,
    width: "100%",
  },
  imageContainer: {
    width: 260,
    height: 260,
    borderRadius: 130,
    overflow: "hidden",
    marginBottom: 24,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  card: {
    backgroundColor: "#fffef2",
    borderWidth: 1,
    borderColor: "#f6e6cd",
    borderRadius: 30,
    width: "90%",
    maxWidth: 360,
    paddingVertical: 30,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 5,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111111",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  titleText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666666",
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 15,
    color: "#333333",
    lineHeight: 21,
    marginBottom: 24,
    textAlign: "center",
    maxWidth: 280,
  },
  hireButton: {
    backgroundColor: "#ffd100",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 36,
  },
  hireButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.5,
    textAlign: "center",
  },
});

export default Person;
