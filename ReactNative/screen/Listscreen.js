import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

const students = [
    { name: "Gerti", surname: "Calaj", age: "13" },
    { name: "Amant", surname: "Zabeli", age: "14" },
    { name: "Deon", surname: "Beka", age: "15" },
];

const Listscreen = () => {
    return (
        <View>
            <Text>List Screen: </Text>
            <FlatList
                horizontal={true}
                data={students}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <Text>{item.name} {item.surname} {item.age}</Text>;
                }}
            />
        </View>
    );
};

// const styles = StyleSheet.create({});

export default Listscreen;
