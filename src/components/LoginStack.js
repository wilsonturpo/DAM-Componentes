import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login';

import Colors from '../res/colors'

const Stack = createStackNavigator();

const LoginStack = ()=>{
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor:Colors.blackPearl,
                    shadowColor:Colors.blackPearl
                },
                headerTintColor:Colors.white
            }}
        >
            <Stack.Screen 
                name="Login"
                component={Login}
            />
        </Stack.Navigator>
    );
}

export default LoginStack