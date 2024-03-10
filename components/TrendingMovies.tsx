import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { Movie } from '../models/movie'
import MovieImage from './MovieImage'
import { useNavigation } from '@react-navigation/native'
import { AppNavigationParamList, StackNavigation } from '../navigation/AppNavigation'



const { width, height } = Dimensions.get('window')

interface TrendingMoviesProps {
  data: Movie[]
}

export default function TrendingMovies({ data }: TrendingMoviesProps) {
  const navigation = useNavigation<StackNavigation>()
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.label}>Trending Movies</Text>
      <Carousel data={data}
        firstItem={1}
        inactiveSlideOpacity={0.60}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: 'flex', alignItems: "center" }}
        renderItem={({ item, index }) => (<MovieImage posterPath={item.poster_path} onItemCallBack={() => {
          navigation.navigate('Detail', { id: item.id })
          // navigation.navigate("Detail",{id:1})
          // navigation("Detail",{id:1})
        }}
        />)} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 24,

  },
  label: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 5,
    marginHorizontal: 16,

  }
})