import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Cast } from '../../models/cast'
import { fallbackPersonImage, image185 } from '../../api/moviesdb'


export type CastProp = {
    cast: Cast,
    onItemClick: () => void
}

export default function CastItem({ cast, onItemClick }: CastProp) {
    return (
        <TouchableOpacity onPress={onItemClick}>

            <View style={styles.container}>
                <Image style={styles.profileImage} source={{ uri: image185(cast?.profile_path) || fallbackPersonImage }} />

                <Text style={[styles.text, styles.characterText]}>{cast?.character.length > 10 ? `${cast?.character.slice(0, 10)}...` : cast?.
                    character}</Text>
                <Text style={[styles.text, styles.nameText]}>
                    {
                        cast?.original_name.length > 10 ? `${cast?.original_name.slice(0, 10)}...` : cast?.original_name
                    }
                </Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    profileImage: {
        width: 96,
        height: 96,
        borderRadius: 48,
        resizeMode: 'cover'
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 8,
    },
    text: {
        fontSize: 12
    },
    characterText: {
        color: '#fff'
    },
    nameText: {
        color: '#d4d4d4',
        marginTop: 2
    }
})