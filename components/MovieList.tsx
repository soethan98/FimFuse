import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Movie } from '../models/movie';
import { fallbackMoviePoster, image185 } from '../api/moviesdb';



interface MovieListProps {
    title: string;
    data: Movie[]
}

const { width, height } = Dimensions.get('window')

export default function MovieList({ title, data }: MovieListProps) {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.label}>{title}</Text>
            <FlatList data={data}
                horizontal
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.contentContainer}>
                                <Image
                                    style={styles.imageContainer}
                                    source={{ uri: image185(item.poster_path) || fallbackMoviePoster }}
                                />
                                <Text style={styles.caption}>{
                                    item.title.length > 14 ? `${item.title.slice(0, 14)}...` : item.title
                                }</Text>
                            </View>
                        </TouchableOpacity>

                    )
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 16,
        marginBottom:24
    },
    contentContainer: {
        marginRight: 8, marginTop: 16
    },
    imageContainer: {
        width: width * 0.33,
        height: height * 0.22,
        borderRadius: 24
    },
    label: {
        color: '#fff',
        fontSize: 20,
    },
    caption: {
        color: '#d4d4d4',
        marginTop: 4, marginLeft: 4
    },

})