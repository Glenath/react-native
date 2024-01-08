import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AccountScreen from '../screens/Account';
import FavoriteScreen from '../screens/Favorite';
import PokedexNavigation from './PokedexNavigation';




const Tab =createBottomTabNavigator();

export default function NavigationTab() {
  return (
 
    <Tab.Navigator initialRouteName='Pokedex'  screenOptions={{headerShown:false}}>
    <Tab.Screen name='Favorite' component={FavoriteScreen}
     options={{
      tabBarLabel:'Favorites',
      tabBarIcon: ({color, size}) => (
        <Icon name='heart' color={color} size={size}/>
      )
     }}/>
    <Tab.Screen name='PokedexMain' component={PokedexNavigation}
     options={{
      tabBarLabel:'',
      tabBarIcon: () => renderPodex()
      
     }}/>
     

    <Tab.Screen name='Account' component={AccountScreen}
     options={{
      tabBarLabel:'My account',
      tabBarIcon: ({color, size}) => (
        <Icon name='user' color={color} size={size}/>
      )
     }}/> 
</Tab.Navigator>
   
  )
}
function renderPodex(){
  return(

    <Image source={require('../assets/pokeball.png')}
    style={{width:75, height:75, top:-15}}/>
  
  )

}
// const screenOptionStyle = {
//     tabBarIcon: ({ focused, color, size }) => {
//       let iconName;

//       if (route.name === 'Home') {
//         iconName = focused
//           ? 'ios-information-circle'
//           : 'ios-information-circle-outline';
//       } else if (route.name === 'Settings') {
//         iconName = focused ? 'ios-list' : 'ios-list-outline';
//       }

//       // You can return any component that you like here!
//       return <Ionicons name={iconName} size={size} color={color} />;
//     },
//     tabBarActiveTintColor: 'tomato',
//     tabBarInactiveTintColor: 'gray',
//   }
// const screenOptionStyle = {
//     headerStyle: {
//       backgroundColor: 'red',
//     },
//     headerTintColor: 'red',
//     headerBackTitle: "",
//     tabBarStyle: [{ backgroundColor: 'red',}], 
//   };
// const screenOptions={({ route }) => ({screenOptionStyle)}