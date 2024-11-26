import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [selectedSection, setSelectedSection] = useState('Fairy');

    const handleAdd = () => {
        navigation.navigate("Home", { newPokemon: { name, imageUrl, section: selectedSection } });
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
            <Text style={styles.label}>Select Section:</Text>
            <View style={styles.buttonContainer}>
                <Button title="Fairy" onPress={() => setSelectedSection('Fairy')} color={selectedSection === 'Fairy' ? 'blue' : 'gray'} />
                <Button title="Poison" onPress={() => setSelectedSection('Poison')} color={selectedSection === 'Poison' ? 'yellow' : 'gray'} />
            </View>
            <Button title="Add Pokémon" onPress={handleAdd} />
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
});

export default Add;
