import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Movie } from '../../models/movie'


type MovieDetailSectionProps = {
    movie: Movie
}

export default function MovieDetailSection({ movie }: MovieDetailSectionProps) {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text style={styles.movieReleaseInfo}>
                {movie?.status} • {movie?.release_date?.split('-')[0] || 'N/A'} • {movie?.runtime} min
            </Text>
            <View style = {styles.genres}>
                    {
                        movie?.genres?.map((genre,index)=>{
                            let showDot = index+1 != movie.genres.length;
                            return (
                                <Text key={index} style={styles.movieReleaseInfo}>
                                    {genre?.name} {showDot? "•":null}
                                </Text>
                            )
                        })
                    }
                </View>
            <Text style={styles.description}>
                {
                    movie?.overview
                }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    movieTitle: {
        color: "#fff",
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 30,
        marginBottom:8
    },
    movieReleaseInfo: {
        fontWeight: '600',
        textAlign: 'center',
        color: '#a3a3a3',
        marginBottom:8

    },
    description: {
        color: '#a3a3a3'
    },
    mainContainer:{
        marginHorizontal:16
    },
    genres:{
        flexDirection:'row',
        justifyContent:'center'
    },

})