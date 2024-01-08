import { useNavigation } from '@react-navigation/native'
import { capitalize } from 'lodash'
import React from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import getColorByPokemonType from '../utils/getColorByPokemon'


export default function PokemonCard({pokemon}) {
    const navigation=useNavigation()
 
    const pokemonColor= getColorByPokemonType(pokemon.type)
    const bgStyles={backgroundColor: pokemonColor, ...style.bgStyle}
    const goToPokemon=()=>{
        navigation.navigate('Pokemon', {id: pokemon.id})

    }
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={style.card}>
            <View style={style.spacing}>
                <View  style={bgStyles}>   
                <Text style={style.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
                <Text style={style.name}>{capitalize(pokemon.name) }</Text>
                 <Image source={{uri:pokemon.image}} style={style.image}/>
                 </View>
         
            </View>
            
        </View>
        
    </TouchableWithoutFeedback>
  )
}
const style=StyleSheet.create({
    card:{
     flex:1,
     height:130
    },
    spacing:{
        flex:1,
        padding:5
    },
    bgStyle:{
       flex:1,
       borderRadius:15,
       padding:10
    },
    image:{
        position:"absolute",
        bottom:2,
        right:2,
       
        width:90,
        height:90
    },
    name:{
        color:'#fff',
        fontWeight:"bold",
        fontSize:15,
        paddingTop:10
    },
    number:{
        color:'#fff',
        fontWeight:"bold",
        fontSize:15,
        paddingTop:10
    },
  })