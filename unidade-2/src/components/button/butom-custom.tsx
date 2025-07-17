import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyle } from './style-button';
import { router } from 'expo-router';

export const ButtonHome = (props: {name: string}) => {
    return (
        <TouchableOpacity
            style={buttonStyle.container}
            onPress={() => router.navigate('/first-page')}
        >
            <Text style={buttonStyle.title}>{props.name}</Text>
        </TouchableOpacity>
    )
}