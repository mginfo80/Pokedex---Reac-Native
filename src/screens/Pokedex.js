import { SafeAreaView, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';


export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  },[]);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      const pokemonsArray = [];

      for await (const pokemon of response.results){
      
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        console.log(pokemonDetails.types);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          type2: pokemonDetails.types[1] ? pokemonDetails.types[1].type.name : pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
        })
      }

      setPokemons([...pokemons, ...pokemonsArray]);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView>
      <PokemonList 
        pokemons={pokemons} 
        loadPokemons={loadPokemons} 
        isNext={nextUrl}
      />
    </SafeAreaView>
  )
}