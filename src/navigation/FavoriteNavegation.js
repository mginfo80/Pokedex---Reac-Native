import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';;
import FavoriteScreen from "../screens/Favorite";
import PokemonScreen from "../screens/Pokemon";

const Stack = createStackNavigator();

export default function FavoriteNavegation() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Favoritos"
        component={FavoriteScreen}
        options={{ title: "", headerTransparent: true }}  
      />    
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ title: "", headerTransparent: true }}
      />       
    </Stack.Navigator>
  )
}