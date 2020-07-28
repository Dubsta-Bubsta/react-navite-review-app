import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header'

const { Navigator, Screen } = createStackNavigator();

export const HomeNavigator = () => (
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
		<Screen name="Home" component={Home} options={({ navigation }) => {
			return {
				headerTitle: () => <Header navigation={navigation} title="Review App"/>
			}
		}} />
		<Screen name="Details" component={ReviewDetails} options={({ route }) => ({ title: `Details of ${route.params.title}` })} />
	</Navigator>
);
