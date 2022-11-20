import { Text } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState, useCallback } from 'react';
import { getPokemonsFavoriteApi } from '../api/favorite';
import { getPokemonDetailsApi } from '../api/pokemon';
import useAuth from "../hooks/useAuth";
import PokemonList from "../components/PokemonList";
import NoLogged from '../components/Pokemon/NoLogged';

export default function Favorite() {
  const [ pokemons, setPokemons ] = useState(null);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth)
        (async () => {
          const response = await getPokemonsFavoriteApi();
          const pokemonsArray = [];

          for await (const id of response) {

            const pokemonDetails = await getPokemonDetailsApi(id);
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              type2: pokemonDetails.types[1] ? pokemonDetails.types[1].type.name : pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image: pokemonDetails.sprites.other['official-artwork'].front_default
            })
          }

          setPokemons(pokemonsArray);
        })()
    }, [auth])
  )


  return !auth ? (
      <NoLogged />
  ) : (
    <PokemonList pokemons={pokemons} />
  )
}