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
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        paddingHorizontal: 16,
        marginBottom:16,
        height:75
    },
    appBarTitle: {
        fontSize: 24,
        color: COLORS.secondarytext,
        textAlign: 'center',
        fontWeight: '600',
        flex: 2
    }
})