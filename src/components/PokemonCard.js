import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react';
import { capitalize } from "lodash";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import getColorByPokemonType from '../utils/getColorByPokemonType';

export default function PokemonCard(props) {
    const { pokemon } = props;
    const navigation = useNavigation();

    const pokemonColor = getColorByPokemonType(pokemon.type);
    const pokemonColor2 = getColorByPokemonType(pokemon.type2);
  
  
    const goToPokemon = () => {
        navigation.navigate("Pokemon", { id: pokemon.id });
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <LinearGradient
                        colors={[pokemonColor, pokemonColor2]}
                        style={styles.linearGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        locations={[0, 0.9]}
                    >
                        <Text style={styles.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
                        <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                        <Image source={{ uri: pokemon.image}} 
                            style={styles.image}    
                        />
                    </LinearGradient>
                </View>
            </View>
        </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130
    },
    spacing:{
        flex: 1,
        padding: 5
    },
    linearGradient: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
        height: 120,
    },
    number:{
        position: "absolute",
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 11

    },
    name:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10
    },
    image:{
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 90,
        height: 90
    }
       
});