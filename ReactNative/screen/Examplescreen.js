import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

const information = { name: "Amant", surname: "Zabeli", age: "14", birthday: "06/07/2012", hobby: "Playing football", school: "British School Of Kosova" };
const information1 = { name: "Deon", surname: "Beka", age: "15", birthday: "02/12/2010", hobby: "Playing Basketball", school: "British Gymnasium Of Technology" };
const information2 = { name: "Gerti", surname: "Calaj", age: "13", birthday: "28/06/2013", hobby: "Programming", school: "Ismail Qemail" };

const Examplescreen = () => {
    return (  
        <View styles ={styles.main}>
            <View style ={styles.container}>
                <FlatList style = {styles.flatlist}
                    horizontal={true}
                    data={[information]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Text style = {styles.info}>Name and Surname: {item.name} {item.surname}</Text>;
                    }}
                />

                <FlatList style = {styles.flatlist}
                    horizontal={true}
                    data={[information]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Text style = {styles.info}>Age: {item.age}</Text>;
                    }}
                />

                <FlatList style = {styles.flatlist}
                    horizontal={true}
                    data={[information]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Text style = {styles.info}>Birthday: {item.birthday}</Text>;
                    }}
                />

                <FlatList style = {styles.flatlist}
                    horizontal={true}
                    data={[information]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Text style = {styles.info}>Hobby: {item.hobby}</Text>;
                    }}
                />
                <FlatList style = {styles.flatlist}
                    horizontal={true}
                    data={[information]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Text style = {styles.info}>School: {item.school}</Text>;
                    }}
                />
            </View>

            <View style ={styles.container2}>
                <FlatList style = {styles.flatlist2}
                    horizontal={true}
                    data={[information1]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Text style = {styles.info2}>Name and Surname: {item.name} {item.surname}</Text>;
                    }}
                />

                <FlatList style = {styles.flatlist2}
                    horizontal={true}
                    data={[information1]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Text style = {styles.info2}>Age: {item.age}</Text>;
                    }}
                />

                <FlatList style = {styles.flatlist2}
                    horizontal={true}
                    data={[information1]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Text style = {styles.info2}>Birthday: {item.birthday}</Text>;
                    }}
                />

                <FlatList style = {styles.flatlist2}
                    horizontal={true}
                    data={[information1]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Text style = {styles.info2}>Hobby: {item.hobby}</Text>;
                    }}
                />
                <FlatList style = {styles.flatlist2}
                    horizontal={true}
                    data={[information1]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Text style = {styles.info2}>School: {item.school}</Text>;
                    }}
                />
            </View>

            <View style ={styles.container3}>
                <FlatList style = {styles.flatlist3}
                    horizontal={true}
                    data={[information2]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Text style = {styles.info3}>Name and Surname: {item.name} {item.surname}</Text>;
                    }}
                />

                <FlatList style = {styles.flatlist3}
                    horizontal={true}
                    data={[information2]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Text style = {styles.info3}>Age: {item.age}</Text>;
                    }}
                />

                <FlatList style = {styles.flatlist3}
                    horizontal={true}
                    data={[information2]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Text style = {styles.info3}>Birthday: {item.birthday}</Text>;
                    }}
                />

                <FlatList style = {styles.flatlist3}
                    horizontal={true}
                    data={[information2]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Text style = {styles.info3}>Hobby: {item.hobby}</Text>;
                    }}
                />
                <FlatList style = {styles.flatlist3}
                    horizontal={true}
                    data={[information2]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Text style = {styles.info3}>School: {item.school}</Text>;
                    }}
                />
            </View>
       </View> 
    );
};

const styles = StyleSheet.create({
    main: {
        justifyContent: "center",
    },
    container: {
        borderWidth: 5,
        borderColor: "grey",
        borderRadius: 30,
        margin: 10,
        padding: 15,
    },
    info: {
        fontSize: 20,
        fontWeight: "300",
        borderWidth: 3,
        margin: 5,
        borderRadius: 10,
        borderColor: "darkgrey"
    },
    container2: {
        borderWidth: 5,
        borderColor: "grey",
        borderRadius: 30,
        margin: 10,
        padding: 15,
    },
    info2: {
        fontSize: 20,
        fontWeight: "300",
        borderWidth: 3,
        margin: 5,
        borderRadius: 10,
        borderColor: "darkgrey"
    },
    container3: {
        borderWidth: 5,
        borderColor: "grey",
        borderRadius: 30,
        margin: 10,
        padding: 15,
    },
    info3: {
        fontSize: 20,
        fontWeight: "300",
        borderWidth: 3,
        margin: 5,
        borderRadius: 10,
        borderColor: "darkgrey",
    }
});

export default Examplescreen;
