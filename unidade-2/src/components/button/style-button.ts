import React from 'react';
import { StyleSheet } from 'react-native';

export const buttonStyle = StyleSheet.create({
    container: {
        width: '50%',
        height: 42,
        backgroundColor: 'red',
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 10
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#fff'
    }
})