import React from "react";
import { View, Text } from 'react-native';
import { styleFirstPage } from "./firstStyles";

export const PrimeiraTela = () => {
    return (
        <View style={styleFirstPage.screen}>
            <Text>Esta é a primeira página!</Text>
        </View>
    )
}