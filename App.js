import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import CoinsStack from './src/components/coins/CoinsStack'
import FavoritesStack from './src/components/favorites/FavoritesStack';
import LoginStack from './src/components/LoginStack';

import Colors from './src/res/colors'
const Tabs = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Tabs.Navigator
        tabBarOptions={{
          tintColor:"#fefefe",
          style:{
            backgroundColor:Colors.blackPearl
          }
        }}
      >

      <Tabs.Screen 
        name="Login"
        component={LoginStack}
        options={{
          tabBarIcon:({size, color})=>(
            <Image 
            style={{tintColor:color, width:size, height:size}}
            source={require('./src/assets/user.png')} />
          ),
          tabBarVisible: false,
        }}
      />      
      <Tabs.Screen 
        name="Coins"
        component={CoinsStack}
        options={{
          tabBarIcon:({size, color})=>(
            <Image 
            style={{tintColor:color, width:size, height:size}}
            source={require('./src/assets/bank.png')} />
          )
        }}
      />

      <Tabs.Screen 
        name="Favorites"
        component={FavoritesStack}
        options={{
          tabBarIcon:({size, color})=>(
            <Image 
            style={{tintColor:color, width:size, height:size}}
            source={require('./src/assets/star.png')} />
          )
        }}
      />

      </Tabs.Navigator>
    </NavigationContainer>
  );
}