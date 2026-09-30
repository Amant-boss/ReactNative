import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Projects = () => {
  return (
    <View style={styles.projectsSection}>
      
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>PROJECTS</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        
        <View style={styles.projectCard}>
          <Image 
            source={require("../images/project1.png")} 
            style={styles.projectImage} 
            resizeMode="cover" 
          />
        </View>

        <View style={styles.projectCard}>
          <Image 
            source={require("../images/project2.png")} 
            style={styles.projectImage} 
            resizeMode="cover" 
          />
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  projectsSection: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111111",
    letterSpacing: 0.5,
  },
  viewAllText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffcc00",
    backgroundColor: "#fff5cc",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    overflow: "hidden",
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  projectCard: {
    width: "48%",
    aspectRatio: 1, 
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#eeeeee",
    backgroundColor: "#fafafa",
  },
  projectImage: {
    width: "100%",
    height: "100%",
  },
});

export default Projects;
