import React from 'react'
import { StyleSheet, Text, View, Image, } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, title, ...props }) {
	const openMenu = () => {
		navigation.openDrawer()
	}

	return (
		<View style={styles.header}>
			<MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
			<View style={styles.headerTitle}>
				<Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
				<Text style={styles.headerText}>{title}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerTitle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerText: {
		marginLeft: 8,
		fontWeight: 'bold',
		backgroundColor: '#128972',
		fontSize: 20,
		letterSpacing: 1,
		color: '#fff'
	},
	icon: {
		color: '#fff',
		position: 'absolute',
		left: 10
	},
	headerImage: {
		width: 26,
		height: 26
	}
})