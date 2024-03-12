import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { Cast } from '../../models/cast'
import CastItem from './CastItem'


export type CastProp = {
    casts: Cast[],
}


export default function CastList({ casts }: CastProp) {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.label}>Top Cast</Text>
            <FlatList keyExtractor={(item) => item.id.toString()} horizontal data={casts} renderItem={({ item }) => (<CastItem cast={item} onItemClick={() => { }} />)} />
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 8
    },
    mainContainer: {
        marginHorizontal: 16, marginTop: 16
    }
})