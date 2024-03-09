import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { Movie } from '../models/movie'
import MovieImage from './MovieImage'



const {width,height} = Dimensions.get('window')

interface TrendingMoviesProps {
    movies:string[]
}

export default function TrendingMovies({movies}:TrendingMoviesProps) {
  return (
    <View style = {styles.mainContainer}>
      <Carousel data={movies}
      firstItem={1}
      inactiveSlideOpacity={0.60}
      sliderWidth={width}
      itemWidth={width*0.62}
      slideStyle={{display: 'flex', alignItems:"center"}}
       renderItem={({item,index}) => (<MovieImage posterPath={item} onItemCallBack={() => {
        
       }}
        />)}/> 
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom:8
    }
})