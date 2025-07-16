import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { StyleHome } from './homeStyle';

export const Home = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={StyleHome.tela}>

            <Text>E-mail</Text>

            <TextInput
            style={StyleHome.styleInput}
            placeholder='Email'
            onChangeText={setEmail}
            value={email}
            />

            <Text>Senha</Text>

            <TextInput
            style={StyleHome.styleInput}
            placeholder='Senha'
            onChangeText={setPassword}
            value={password}
            />
        </View>
    )
}
