import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeNavigator } from './AppNavigator'
import { AboutNavigator } from './AboutNavigator'

import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();



export function MyDrawer() {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="Home" component={HomeNavigator} />
				<Drawer.Screen name="About" component={AboutNavigator} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}