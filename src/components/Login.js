import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {useState} from "react";
import Colors from '../res/colors'
import { Alert} from 'react-native'

export default function Login({navigation}){

  const [userEmail, setUserEmail] = useState('-')
  const [userPassword, setUserPassword] = useState('-')

  const handlePress = () =>{
    console.log(userEmail);
    console.log(userPassword);
    
    
    if(userEmail=="wilson.turpo@hotmail.com" && userPassword=="123"){
      navigation.navigate('Coins');
    }
    else{
      alert('Las credenciales son incorrectas');
    }
    
  }

  const name = "Wilson"

  return (
      <View style={styles.container}>
        
        <Image  source={require('../assets/tecsup.png')}/>

        <Text style={styles.logo}>Login</Text>

        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setUserEmail(text)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setUserPassword(text)}
            />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}
             onPress={() => handlePress()} 
            >
            LOGIN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.loginText}
          >
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});



/*
https://aboutreact.com/react-native-alert/
*/