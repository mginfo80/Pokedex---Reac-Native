import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function NoLogged() {
    const navigation = useNavigation();

  return (
    <View style={styles.content}>
        <Text style={styles.text}>
            Tienes que iniciar sesión para ver tus Pokemones favoritos.
        </Text>
        <Button
            title="Iniciar sesión"
            onPress={() => navigation.navigate("Account")}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        marginVertical: 50,
        paddingHorizontal: 50
    },
    text:{
        textAlign: "center",
        marginBottom: 10,
        padding: 50
    }
})