
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppNavigationParamList } from '../navigation/AppNavigation';
import COLORS from '../theme/theme';
import { Cast } from '../models/cast';
import { fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies, fetchTopRatedMovies } from '../api/moviesdb';
import CastList from '../components/cast/CastList';
import Loading from '../components/Loading';
import { Movie } from '../models/movie';
import MovieList from '../components/MovieList';
import MovieDetailSection from '../components/detail/MovieDetailSection';
import MovieDetailBackdrop from '../components/detail/MovieDetailBackdrop';
import DetailTopBar from '../components/detail/DetailTopBar';


type DetailsProps = NativeStackScreenProps<AppNavigationParamList, 'Detail'>

export default function Details({ route, navigation }: DetailsProps) {

  const movieId = route.params["id"]
  const [loading, setLoading] = useState(true)
  const [cast, setCast] = useState<Cast[]>([])
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([])
  const [movie, setMovie] = useState<Movie>()

  const getCast = async () => {
    const data = await fetchMovieCredits(movieId)
    if (data) setCast(data)
    setLoading(false)

  }

  const getSimilarMovies = async () => {
    const data = await fetchSimilarMovies(movieId)
    if (data) setSimilarMovies(data)
    setLoading(false)
  }

  const getMovieDetails = async () => {
    const data = await fetchMovieDetails(movieId)
    if (data) setMovie(data)
    setLoading(false)
  }

  useEffect(() => {
    getMovieDetails()
    getCast()
    getSimilarMovies()
  }, [])
  return (
    <ScrollView style={styles.mainView}>
      {
        loading ? <Loading /> : ( 
          movie ? 
          <>
          <DetailTopBar onNavigateBack={() => {
            navigation.goBack()
          }}/>
            <MovieDetailBackdrop posterPath={movie!.poster_path} />
            <MovieDetailSection movie={movie!}  />

            
          </>
: null
        )
        // movie && (
        // )
      }
      {/* {movie && (<MovieDetailSection movie={movie!} />)} */}

      {cast.length > 0 && <CastList casts={cast} />}

      {similarMovies.length > 0 &&  <View style={styles.similarContent}>
        <MovieList data={similarMovies} title='Similar Movies'/>
      </View>
      
      }

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  similarContent:{
    marginTop:16
  }
  
})