import React from 'react';
import { StyleSheet } from 'react-native';

export const StyleHome = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    styleInput: {
        width: '90%',
        height: 52,
        borderWidth: 1.5,
        borderColor: 'black',
        borderRadius: 8,
        paddingLeft: 12,
        marginBottom: 8
    },
    titleImput: {
        textAlign: 'left',
        width: '90%',
        marginBottom: 8
    },
    logoStyle: {
        width: 200,
        height: 300,
        resizeMode: 'contain'
    }
})