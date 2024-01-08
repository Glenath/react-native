import { capitalize } from 'lodash'
import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import getColorByPokemonType from '../../utils/getColorByPokemon'


export default function Header({name, order, image, type}) {
   
 const color=getColorByPokemonType(type)
 const bgStyles={backgroundColor: color, ...style.bgStyle}

  return (
    <>
        <View style={bgStyles}/>
            <SafeAreaView style={style.contentImg}>
            <View style={style.header}>
                <Text style={style.name}>{capitalize(name)}</Text>
                <Text style={style.order}>#{`${order}`.padStart(3, 0)}</Text>
            </View>
            <View style={style.contentImg}>
              <Image source={{uri: image}} style={style.image}/>
            </View>
            
            </SafeAreaView>
       
      
    </>
  )
}
const style=StyleSheet.create({
    contentImg:{
     flex:1,
     justifyContent:"center",
     alignItems:'center',
     top:30
    },
    content:{
        marginHorizontal:20,
        marginTop:30
    },
    bgStyle:{
       width:"100%",
       height:400,
       position:'absolute',
       borderBottomEndRadius:300,
       borderBottomLeftRadius:300,
       transform:[{scaleX:2}]
     
    },
    image:{
        width:250,
        height:250
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40
      },
      name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 26,
      },
      order: {
        color: 'white',
        fontWeight: 'bold',
      },
  })