import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Image } from "react-native";
import { capitalize } from "lodash";
import { LinearGradient } from 'expo-linear-gradient';
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Header(props) {
    const { name, order, image, type, type2 } = props;
    const color1 = getColorByPokemonType(type);
    const color2 = getColorByPokemonType(type2);

    const bgStyle = [{ ...styles.bg }];

    return (
        <>
            <LinearGradient
                colors={[color2, color1]}
                style={bgStyle}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                locations={[0, 0.9]}
            ></LinearGradient>

            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{capitalize(name)}</Text>
                    <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
                </View>
                <View style={styles.contentImg}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    bg: {
        width: "100%",
        height: 400,
        position: "absolute",
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }],
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 27,
    },
    order: {
        color: "#fff",
        fontWeight: "bold",
    },
    contentImg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 30,
    },
    image: {
        width: 250,
        height: 300,
        resizeMode: "contain",
    },
});