import React from 'react';
import Navigation from './Navigation';

const App = () => {
  return (
      <Navigation />
  );
};

export default App;

// import React from 'react';
// import {View, Text, FlatList, StyleSheet, TouchableOpacity, SectionList, StatusBar, Button,Image} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome6';
//
// const datasource = [
//   {
//     title: 'Fairy', icon_name: 'dove',icon_color: 'pink',
//     data: [
//       {
//         name: 'Clefairy',
//         imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_35-2x.png',
//       },
//       {
//         name: 'Jigglypuff',
//         imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_39-2x.png',
//       },
//     ],
//     bgColor: 'pink',
//   },
//   {
//     title: 'Poison', icon_name: 'skull-crossbones',icon_color: 'purple',
//     data: [
//       {
//         name: 'Haunter',
//         imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_93-2x.png',
//       },
//       {
//         name: 'Ivysaur',
//         imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_2-2x.png',
//       },
//     ],
//     bgColor: 'lavender'
//   },
// ];
//
// const renderItem = ({item}) => {
//   return (
//       <TouchableOpacity style={styles.itemContainer}>
//         <Text style={styles.pokemonName}>{item.name}</Text>
//
//         <Image source={{uri: item.imageUrl}}
//                style={styles.cardImage} />
//       </TouchableOpacity>
//   );
// };
//
// const App = () => {
//   return (
//       <View style={[styles.container, {marginBottom: 50, margin: 10}]}>
//         <StatusBar hidden={true} />
//         <Button title="Add Pokémon" onPress={() => alert('Add Pokémon button pressed')} />
//         <SectionList
//             sections={datasource}
//             renderItem={renderItem}
//             renderSectionHeader={({ section: { title, icon_name, bgColor }}) => (
//                 <View style={[styles.headerContainer, { backgroundColor: bgColor}]}>
//                   <Text style={styles.headerText}>{title}<Icon name={icon_name} size={20}/></Text>
//                 </View>
//             )}
//         />
//       </View>
//   );
// };
// // Styles for the components
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     paddingVertical: 10,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   pokemonName: {
//     fontSize: 18,
//   },
//   cardImage: {
//     width: 300,
//     height: 300,
//     resizeMode: 'contain',
//   },
// });
//
// export default App;
