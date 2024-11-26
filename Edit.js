import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const Edit = ({ navigation, route }) => {
    const { index, pokemon, sectionTitle } = route.params;
    const [name, setName] = useState(pokemon.name);
    const [imageUrl, setImageUrl] = useState(pokemon.imageUrl);

    const handleSave = () => {
        navigation.navigate("Home", { updatedPokemon: { index, name, imageUrl, sectionTitle } });
    };

    const handleDelete = () => {
        Alert.alert("Confirm Delete", "Are you sure you want to delete this Pokémon?", [
            {
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "Delete",
                onPress: () => navigation.navigate("Home", { deleteIndex: index, sectionTitle })
            }
        ]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Pokémon Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.label}>Image URL:</Text>
            <TextInput
                style={styles.input}
                value={imageUrl}
                onChangeText={setImageUrl}
            />
            <Button title="Save" onPress={handleSave} />
            <Button title="Delete" onPress={handleDelete} color="red" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        marginVertical: 10,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
    },
});

export default Edit;
