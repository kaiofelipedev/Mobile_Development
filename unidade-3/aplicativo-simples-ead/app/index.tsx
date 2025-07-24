import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';



export default function Home () {

	const [valueApi, setValueApi] = useState('')
	const [loading, setLoading] = useState(false)

	const requestApi = async () => {
		setLoading(true)
		setTimeout(() => {
			// try {
			// 	axios.get('http://localhost:3000/teste').then((resp) => {
			// 		setValueApi(`A resposta é: ${resp.data}, e o status é: ${resp.status}`)
			// 	})
			// } catch (error) {
			// 	setValueApi('Erro interno no servidor. 500')
			// }
			axios.get('http://localhost:3000/teste').then((resp) => {
				setValueApi(`A resposta é: ${resp.data}, e o status é: ${resp.status}`)
			}).catch((error) => {
				setValueApi('Erro interno no servidor. 500');
			}).finally(() => {
				setLoading(false);
			})
		}, 3000)
	}

	useEffect(() => {
		requestApi()
	}, [])

	return (
		<View>

			{
				loading ? <ActivityIndicator size={40}/> : <Text>{valueApi}</Text>
			}

		</View>
	)
}