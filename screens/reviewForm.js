import React from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import * as yup from 'yup'
import FlatButton from '../shared/button'

const ReviewSchema = yup.object({
	title: yup.string().min(4).required(),
	body: yup.string().min(8).required(),
	rating: yup.number().min(1).max(5).required().test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
		return(parseInt(val) < 6 && parseInt(val) > 0)
	}),
})

export default function ReviewForm({ submitFunction, ...props }) {
	return (
		<View style={globalStyles.container}>
			<Formik
				validateOnChange={true}
				initialValues={{ title: '', body: '', rating: '0' }}
				onSubmit={(values) => {
					submitFunction(values)
				}}
				validationSchema={ReviewSchema}
			>
				{({ values, errors, touched, handleChange, handleSubmit, handleBlur, ...formProps }) => (
					<View>
						<TextInput
							style={globalStyles.input}
							placeholder="Title"
							onChangeText={handleChange('title')}
							value={values.title}
							onBlur={handleBlur('title')}
						/>	
						<Text style={globalStyles.error}>{touched.title && errors.title}</Text>
						<TextInput
							multiline
							style={globalStyles.input}
							placeholder="Body"
							onChangeText={handleChange('body')}
							value={values.body}
							onBlur={handleBlur('body')}
						/>
						<Text style={globalStyles.error}>{touched.body && errors.body}</Text>

						<TextInput
							keyboardType="number-pad"
							style={globalStyles.input}
							placeholder="Rating"
							onChangeText={handleChange('rating')}
							value={values.rating}
							onBlur={handleBlur('body')}
						/>
						<Text style={globalStyles.error}>{touched.rating && errors.rating}</Text>

						<FlatButton text="Submit" onPress={handleSubmit}/>

					</View>
				)}

			</Formik>
		</View>
	)
} 
