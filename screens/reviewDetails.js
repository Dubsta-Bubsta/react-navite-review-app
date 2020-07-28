import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/card'

export default function ReviewDetails({ route, ...props }) {
	console.log(props)
	return (
		<View style={globalStyles.container}>
			<Card>
				<Text>Title: {route.params.title}</Text>
				<Text>Body: {route.params.body}</Text>
				<View style={styles.rating}>
					<Text>Rating: </Text>
					{[...Array(route.params.rating)].map((elem, counter) => <Image key={counter} source={require('../assets/rating-1.png')} style={{ width: 21, height: 21 }}/>)}
				</View>
			</Card>

		</View>
	)
}

const styles = StyleSheet.create({
	rating: {
		flexDirection: 'row'
	}
})