import React from "react";
import {Text , StyleSheet , View , Button, TouchableOpacity } from "react-native";

const Buttonscreen =()=> {
        let counter , counterT = 0;

    return(
    <View>
        <Text> Button test</Text>
        <Button
        title="Click me"
        color= "red"
        onPress={()=> console.log("Button clicked", counter++)}
        />

        <TouchableOpacity
        style = {styles.touchable}
        activeOpacity={0.7}
        onPress={()=> console.log("Touchable clicked", counterT++)}
        >
        <Text>Click me</Text>
        </TouchableOpacity>
    </View>);
};

const styles = StyleSheet.create({
    touchable: {
        borderWidth: 5,
        borderColor: "grey",
        borderRadius: 30,
        padding: 15,
        margin: 10
    }
});

export default Buttonscreen;