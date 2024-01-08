import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { capitalize } from 'lodash';

export default function Stats({stats}) {
    

    const barStyles = ( num) => {
        const color = num >= 70 ? "#31BB09" : num < 70 && num>=30 ? "#D7CA25": "#E01C1C";
    
      return {backgroundColor: color,width: `${num}%`}
    };
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((item,index) => (
      <View
        key={index}
        style={styles.block}>
            <View style={styles.blockTitle}>
                <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>

            </View>
       
       <View style={styles.blockInfo}> 
        <Text style={styles.number}>{capitalize(item.base_stat)}</Text>
        <View style={styles.bgBar}> 
            <View style={[styles.bar, barStyles(item.base_stat)]}/> 
            
        </View>
       </View>
      </View>
    ))
    }
    </View>
  )
}
const styles = StyleSheet.create({
    content: {
      paddingHorizontal: 20,
      marginTop: 40,
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        paddingBottom:5
    },
    block:{
        flexDirection: 'row',
        paddingVertical: 5,
    },
    blockTitle:{
        width: '30%',
      
    },
    statName:{
        fontSize:12,
        color: '#6B6B6B'
    },
    blockInfo:{
        width: '70%',
        flexDirection: 'row',
        alignItems:'center'
    },
    number:{
        width: '12%',
        fontSize:12
    },
    bgBar:{
        backgroundColor:'#dedede',
        width:"88%",
        height: 5,
        borderRadius:20,
        overflow:'hidden'
    },
    bar:{
        height: 5,
        borderRadius:20,
    }
  })