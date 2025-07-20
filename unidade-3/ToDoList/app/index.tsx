import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';


export default function Home() {

    const [text, setText] = useState('')
    const [list, setList] = useState<string[]>([])
    // const [list, setList] = useState([])

    const buttonClick = () => {

        if(text.length < 1) {
            // Alert.alert('Campo vazio!') Não funciona na Web
            alert('Campo vazio!')
            return
        }

        setList([...list, text])
        setText('')

    }

    return (

        <View style={styles.container}>

            <Stack.Screen
                options={{
                    title: 'Home'
                }}
            />

            <TextInput
                style={styles.textInput}
                onChangeText={setText}
                value={text}
            />

            <ScrollView style={styles.scrollView}>
                {
                    list.map((item, index) => {
                        return (
                            <View
                                key={item + index}
                                style={styles.viewItem}
                            >
                                <Text style={styles.textItem}>{item}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>

            <TouchableOpacity
                style={styles.containerButton}
                onPress={buttonClick}>

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
    },
    viewItem: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        justifyContent: 'center',
        paddingLeft: 14,
        marginVertical: 7
    },
    textItem: {
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    scrollView: {
        width: '90%',
        margin: 'auto',
        marginBottom: 90
    }
})