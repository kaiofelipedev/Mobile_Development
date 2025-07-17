import React from 'react'
import { useState } from 'react';
import { Text, TextInput, View, Image, ScrollView } from 'react-native';
import { StyleHome } from './homeStyle';
import { ButtonHome } from '@/src/components/button/butom-custom';
import logo from '@/src/assets/logo-react-native.png'

export const Home = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={StyleHome.tela}>

            <Image
                source={logo}
                style={StyleHome.logoStyle}
            />

            <Text style={StyleHome.titleImput}>E-mail</Text>

            <TextInput
            style={StyleHome.styleInput}
            // placeholder='Email'
            onChangeText={setEmail}
            value={email}
            />

            <Text style={StyleHome.titleImput}>Senha</Text>

            <TextInput
            style={StyleHome.styleInput}
            // placeholder='Senha'
            onChangeText={setPassword}
            value={password}
            />
            <ButtonHome name='Login'/>
        </View>
    )
}
