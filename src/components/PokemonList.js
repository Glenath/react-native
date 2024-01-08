import React from 'react'
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import PokemonCard from './PokemonCard'



export default function PokemonList({pokemons, loadPokemons, isNext}) {
const loadMore=()=>{
  loadPokemons()
  
}

  return (
    <FlatList data={pokemons} numColumns={2} 
      showsVerticalScrollIndicator={false} 
      keyExtractor={(pokemon)=>String(pokemon.id)} 
      renderItem={({item})=><PokemonCard pokemon={item}/>}
      contentContainerStyle={style.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext &&(<ActivityIndicator size="large" style={style.spinner}
        color='#AEAEAE'/>)
      }>
      
    </FlatList>
  )
}
const style=StyleSheet.create({
  flatListContentContainer:{
    paddingHorizontal:5
  },
  spinner:{
    marginTop:20,
    marginBottom:60
  }
})