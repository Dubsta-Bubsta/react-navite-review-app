import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

export default function FlatButton({ text, onPress, ...props }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		paddingVertical: 12,
		paddingHorizontal: 10,
		backgroundColor: '#666'
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center'
	}
})