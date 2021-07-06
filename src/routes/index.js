import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'
import { Perfil } from '../screens/Perfil'

const AppStack = createStackNavigator();

export const Routes = () => {
    return (
        <AppStack.Navigator screenOptions={{ headerTransparent: true, headerShown: false }}>
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Perfil" component={Perfil} />
        </AppStack.Navigator>
    )
}