import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { fallbackMoviePoster, image500 } from '../../api/moviesdb'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import COLORS from '../../theme/theme'


const { width, height } = Dimensions.get("window")

type MovieDetailBackdropProps = {
    posterPath: string;
}

export default function MovieDetailBackdrop({ posterPath }: MovieDetailBackdropProps) {
    return (
        <View>
            <Image
                source={{ uri: image500(posterPath) || fallbackMoviePoster }}
                style={{ width, height: height * 0.55 }}
            />
            <LinearGradient
                colors={['transparent', 'rgba(23, 23, 23, 0.8)', COLORS.background]}
                style={styles.linear}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />
        </View>
    )
}

// 


const styles = StyleSheet.create({
    linear:{
        position:'absolute',
        bottom:0,
        width,height : height * 0.40

    }
})

