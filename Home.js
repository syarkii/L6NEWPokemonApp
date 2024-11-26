import React from 'react';
import { View, Text, SectionList, StatusBar, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { datasource } from './Data';

const Home = ({ navigation, route }) => {
    if (route.params?.newPokemon) {
        const newPokemon = route.params.newPokemon;

        const sectionIndex = datasource.findIndex(section => section.title === newPokemon.section);

        if (sectionIndex !== -1) {
            datasource[sectionIndex].data.push({ name: newPokemon.name, imageUrl: newPokemon.imageUrl });
        }
    }

    if (route.params?.updatedPokemon) {
        const { index, name, imageUrl, sectionTitle } = route.params.updatedPokemon;

        const sectionIndex = datasource.findIndex(section => section.title === sectionTitle);

        if (sectionIndex !== -1) {
            datasource[sectionIndex].data[index] = { name, imageUrl };
        }
    }

    if (route.params?.deleteIndex !== undefined) {
        const { deleteIndex, sectionTitle } = route.params;

        // Find correct section for deletion
        const sectionIndex = datasource.findIndex(section => section.title === sectionTitle);

        if (sectionIndex !== -1) {
            datasource[sectionIndex].data.splice(deleteIndex, 1);
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}
                          onPress={() => navigation.navigate('Edit', {
                              index: datasource.find(section => section.data.includes(item)).data.indexOf(item),
                              pokemon:item,
                              sectionTitle: datasource.find(section => section.data.includes(item)).title
                          })}>
            <Text style={styles.pokemonName}>{item.name}</Text>
            <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, {marginBottom: 50, margin: 10}]}>
            <StatusBar hidden={true} />
            <Button title="Add Pokémon" onPress={() => navigation.navigate('Add')} />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, icon_name, bgColor }}) => (
                    <View style={[styles.headerContainer, { backgroundColor: bgColor}]}>
                        <Text style={styles.headerText}>{title}<Icon name={icon_name} size={20}/></Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingVertical: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    pokemonName: {
        fontSize: 18,
    },
    cardImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
});

export default Home;
