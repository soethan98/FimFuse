import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../theme/theme'

export default function Loading() {
  return (
    <View style = {styles.mainContainer}>
      <ActivityIndicator size={'large'} color={COLORS.secondarytext} />
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    }
})