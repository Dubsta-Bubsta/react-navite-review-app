import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from '../shared/header'

const { Navigator, Screen } = createStackNavigator();

export const AboutNavigator = () => (
	<Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: '#128972',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		}}
	>
		<Screen name="About" component={About} options={({ navigation }) => {
			return {
				headerTitle: () => <Header navigation={navigation} title="Review App - About"/>
			}
		}} />
	</Navigator>
)