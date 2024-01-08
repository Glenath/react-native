import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { getPokemonDetailsByUrl, getPokemonsApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList'




export default function PokedexScreen() {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  
  useEffect(()=>{
    (async()=>{
      await loadPokemons()
    })()
  }, [])
  const loadPokemons = async()=>{
    try {
      const reponse = await getPokemonsApi(nextUrl)
     
      setNextUrl(reponse.next)
    
      const pokemonsArray=[]
      for await (pokemon of reponse.results){
        const pokemonDetails= await getPokemonDetailsByUrl(pokemon.url)
         pokemonsArray.push({
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        type: pokemonDetails.types[0].type.name,
        order: pokemonDetails.order,
        image:pokemonDetails.sprites.other['official-artwork'].front_default
      })
      }
      setPokemons([...pokemons ,...pokemonsArray])
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <SafeAreaView>
      
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}/>
    </SafeAreaView>
  )
}