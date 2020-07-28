import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './reviewForm'

export default function Home({ navigation, ...props }) {
	const [reviews, setReviews] = useState([
		{ id: 1, title: 'A', rating: 1, body: 'asdasd' },
		{ id: 2, title: 'B', rating: 2, body: 'ksahdbjasbd' },
		{ id: 3, title: 'C', rating: 3, body: 'khwqgeuqwgehgqw' },
	])


	const addReview = (review) => {
		let ids = reviews.map(review => review.id)
		let maxID = Math.max(...ids)
		console.log(review)
		if (!maxID)
			maxID = 1

		setReviews([
			...reviews,
			{ ...review, id: maxID + 1 }
		])
		setModalOpen(false)
	}

	const deleteReview = (id) => {
		let filteredReview = reviews.filter(review => review.id !== id)

		setReviews([...filteredReview])
	}

	const [modalOpen, setModalOpen] = useState(false)

	return (
		<View style={globalStyles.container} >
			<Modal visible={modalOpen} animationType={'slide'}>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.modalContent}>
						<MaterialIcons
							name="close"
							size={24}
							style={{ ...styles.modalToggle, ...styles.modalClose }}
							onPress={() => { setModalOpen(false) }}
						/>
						<ReviewForm submitFunction={addReview} />
					</View>
				</TouchableWithoutFeedback>

			</Modal>

			<MaterialIcons
				name="add"
				size={24}
				style={styles.modalToggle}
				onPress={() => { setModalOpen(true) }}
			/>


			{!reviews.length && <Text>No reviews</Text>}
			<FlatList
				keyExtractor={(item) => item.id.toString()}
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => { navigation.navigate('Details', item) }}>
						<Card>
							<View style={styles.row}>
								<Text style={globalStyles.titleText}>{item.title}</Text>
								<TouchableOpacity onPress={() => { deleteReview(item.id); }}>
									<MaterialIcons name="delete" size={22} />
								</TouchableOpacity>

							</View>

						</Card>
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	modalToggle: {
		marginBottom: 10,
		borderWidth: 1,
		borderColor: '#f2f2f2',
		padding: 10,
		borderRadius: 10,
		alignSelf: 'center'
	},
	modalClose: {
		marginTop: 20,
		marginBottom: 0,
		justifyContent: 'flex-end'
	},
	modalContent: {
		flex: 1
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
})