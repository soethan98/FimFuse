
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppNavigationParamList } from '../navigation/AppNavigation';
import COLORS from '../theme/theme';
import { Cast } from '../models/cast';
import { fetchMovieCredits, fetchSimilarMovies, fetchTopRatedMovies } from '../api/moviesdb';
import CastList from '../components/cast/CastList';
import Loading from '../components/Loading';
import { Movie } from '../models/movie';
import MovieList from '../components/MovieList';


type DetailsProps = NativeStackScreenProps<AppNavigationParamList, 'Detail'>

export default function Details({ route, navigation }: DetailsProps) {

  const movieId = route.params["id"]
  const [loading, setLoading] = useState(true)
  const [cast, setCast] = useState<Cast[]>([])
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([])

  const getCast = async () => {
    const data = await fetchMovieCredits(movieId)
    if (data) setCast(data)
    setLoading(false)

  }

  const getSimilarMovies =async () => {
    const data = await fetchSimilarMovies(movieId)
    if (data) setSimilarMovies(data)
    setLoading(false)
  }

  useEffect(() => {
    getSimilarMovies()
  }, [])
  return (
    <View style={styles.mainView}>

      {similarMovies.length > 0 && <MovieList data={similarMovies} title='Similar Movies'/>}

    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.background,
  }
})