
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppNavigationParamList } from '../navigation/AppNavigation';
import COLORS from '../theme/theme';
import { Cast } from '../models/cast';
import { fetchMovieCredits, fetchTopRatedMovies } from '../api/moviesdb';
import CastList from '../components/cast/CastList';
import Loading from '../components/Loading';


type DetailsProps = NativeStackScreenProps<AppNavigationParamList, 'Detail'>

export default function Details({ route, navigation }: DetailsProps) {

  const movieId = route.params["id"]
  const [loading, setLoading] = useState(true)
  const [cast, setCast] = useState<Cast[]>([])

  const getCast = async () => {
    const data = await fetchMovieCredits(movieId)
    if (data) setCast(data)
    setLoading(false)

  }

  useEffect(() => {
    getCast()
  }, [])
  return (
    <View style={styles.mainView}>

      {cast.length > 0 && <CastList casts={cast} />}

    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.background,
  }
})