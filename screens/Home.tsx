
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../theme/theme'
import HomeAppBar from '../components/HomeAppBar'
import Loading from '../components/Loading'
import MovieImage from '../components/MovieImage'
import { fallbackMoviePoster } from '../api/moviesdb'
import TrendingMovies from '../components/TrendingMovies'

export default function Home() {
  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar barStyle={'light-content'} />
      {/* <HomeAppBar /> */}
      <TrendingMovies movies={['/sMp34cNKjIb18UBOCoAv4DpCxwY.jpg','/cEuX73Q1wpMypB1cr4l3MoMGpL4.jpg','/95VlSEfLMqeX36UVcHJuNlWEpwf.jpg','/8b8R8l88Qje9dn9OE8PY05Nxl1X.jp','/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg']} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex:1,
    backgroundColor: COLORS.background,

  },
 
})