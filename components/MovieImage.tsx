import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fallbackMoviePoster, image500 } from '../api/moviesdb';



const { width, height } = Dimensions.get('window')
interface MovieImageProp {
    posterPath: string;
    onItemCallBack: () => void
}

const MovieImage = ({ posterPath, onItemCallBack }: MovieImageProp) => {
    return <TouchableOpacity onPress={onItemCallBack}>
        <Image source={{ uri: image500(posterPath) || fallbackMoviePoster  }} style={styles.imageContainer} />
    </TouchableOpacity>
}

export default MovieImage;

const styles = StyleSheet.create({
    imageContainer: {
        width: width * 0.6,
        height: height * 0.4,
        borderRadius: 24
    }
})