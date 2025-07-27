import React from "react";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentButton: {
        width: '90%',
        height: 53,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    contentRemoveButton: {
        width: '90%',
        height: 53,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterText: {
        color: '#fff',
        fontSize: 64,
        fontWeight: 'bold'
    }
})