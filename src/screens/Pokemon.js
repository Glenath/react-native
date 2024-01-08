import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getPokemonDetailsApi } from '../api/pokemon';
import Header from '../components/Pokemon/Header';
import Stats from '../components/Pokemon/Stats';
import Type from '../components/Pokemon/Type';


export default function PokemonScreen({navigation, route:{params}}) {
  const [pokemon, setPokemon] = useState(null)
  useEffect(() => {
    navigation.setOptions({
       headerRight:()=>null,
       headerLeft:()=>(<Icon name='arrow-left' color='#fff' size={20} style={{marginLeft:0}}
       onPress={()=>navigation.goBack()}/>)
    })
  
  }, [navigation, params])
  useEffect(() => {
    (async ()=>{
      try {
        const reponse = await getPokemonDetailsApi(params.id)
       
        setPokemon(reponse)
       
      } catch (error) {
        navigation.goBack()
      }
    })();
  
  }, [params])
// 
  if(!pokemon) return null
 
  return (
    <ScrollView>
  
      <Header name={pokemon.name} 
    order={pokemon.order} 
    image={pokemon.sprites.other['official-artwork'].front_default} 
    type={pokemon.types[0].type.name}/>
    <Type types={pokemon.types}/>
    <Stats stats={pokemon.stats} />
    </ScrollView>
   
  )
}