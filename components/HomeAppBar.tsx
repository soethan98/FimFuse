import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../theme/theme'
import Icon from 'react-native-vector-icons/Ionicons';


export default function HomeAppBar() {
    return (
        <View style={styles.appBarContent}>
            <Text style={styles.appBarTitle}>Movies</Text>
            <Icon name="search" size={24} color='#ffffff' />
        </View>
    )
}

const styles = StyleSheet.create({
    appBarContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 16,
        paddingTop: 32
    },
    appBarTitle: {
        fontSize: 24,
        color: COLORS.secondarytext,
        textAlign: 'center',
        fontWeight: '600',
        flex: 2
    }
})