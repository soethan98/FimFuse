


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import Details from '../screens/Details'


export type AppNavigationParamList = {
  Home:undefined,
  Detail: {id:string}
}


const Stack = createNativeStackNavigator<AppNavigationParamList>()


export default function AppNavigation() {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}> 
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Detail' component={Details} />

    </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})