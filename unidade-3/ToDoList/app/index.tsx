import { Stack } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function Home() {
    return (
        <View style={styles.container}>

            <Stack.Screen
                options={{
                    title: 'Home'
                }}
            />

            <TextInput style={styles.textInput}/>

            <TouchableOpacity style={styles.containerButton}>

                <Text style={styles.textButton}>Adicionar</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    textInput: {
        height: 52,
        width: '90%',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 20
    },
    containerButton: {
        width: '90%',
        height: 52,
        backgroundColor: 'darkgreen',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20
    },
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})