import React from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, View } from 'react-native';

export const Home = () => {
    return (
        <View style={Styles.tela}>
            <Text>Olá, mundo!</Text>
            <TextInput style={Styles.intext} placeholder='Digite aqui.'/>
        </View>
    )
}

const Styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    intext: {
        width: '90%',
        height: 46,
        borderWidth: 1.5,
        borderColor: 'black'
    }
})