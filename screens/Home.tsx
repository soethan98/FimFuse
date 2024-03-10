
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../theme/theme'
import HomeAppBar from '../components/HomeAppBar'
import Loading from '../components/Loading'
import MovieImage from '../components/MovieImage'
import { fallbackMoviePoster, fetchTrendingMovies, fetchUpcomingMovies } from '../api/moviesdb'
import TrendingMovies from '../components/TrendingMovies'
import { Movie } from '../models/movie'
import MovieList from '../components/MovieList'

export default function Home() {

  const [trending, setTrending] = useState<Movie[]>([])
  const [upcoming, setupcoming] = useState<Movie[]>([])
  const [topRated, setTopRated] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTrendingMovies()
    // getUpcomingMovies()
    // getTopRatedMovies()
  }, [])

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies()
    if (data) setTrending(data)
    setLoading(false)

  }

  //  getting upcoming movies
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies()
    if (data) setupcoming(data)
    setLoading(false)
  }

  //  getting top rated movies
  const getTopRatedMovies = async () => {
    const data = await fetchTrendingMovies()
    if (data) setTopRated(data)
    setLoading(false)
  }

  return (
    <View style={styles.mainView}>
      <StatusBar barStyle={'light-content'} />
      <HomeAppBar />

      {
        loading ? <Loading /> : <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}>
          {trending.length > 0 && <TrendingMovies data={trending} />}
          {/* upcoming movies row */}
          <MovieList title="Upcoming" data={upcoming} />

          {/* Top rated movies row */}
          <MovieList title="Top rated" data={topRated} />
        </ScrollView>
      }
    </View>

  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'

  },

})