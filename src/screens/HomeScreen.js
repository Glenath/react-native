import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'

export default function HomeScreen(props) {
    const {navigation}=props
    const goToPage=()=>{
        navigation.navigate('Piggy Bank')
    }
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
   
      <Button
  onPress={goToPage}
  title="Ir a ajustes"
>
 
</Button>
    </SafeAreaView>
  )
}
