import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native'

import FavoritesEmptyState from './FavoritesEmptyState';
import CoinsItem from '../coins/CoinsItem';

import Colors from '../../res/colors'
import Storage from '../../libs/storage';

class FavoritesScreen extends Component{

    state={
        favorites:[]
    }

    getFavorites = async ()=>{
        try {
            const allkeys = await Storage.instance.getAllKeys();
            
            const keys = allkeys.filter((key)=>key.includes("favorite-"));

            const favs = await Storage.instance.multiGet(keys);

            const favorites = favs.map((fav)=> JSON.parse(fav[1]));
            console.log("favs", favs);

            this.setState({favorites});

        } catch (error) {
            console.log("get favorites error", error)
        }
    }

    handlePress = (coin)=>{
        this.props.navigate.navigation.navigate("CoinDetail", {coin})
    }

    componentDidMount(){
        this.getFavorites();
        this.props.navigation.addListener("focus", this.getFavorites);
    }

    componentWillUnmount(){
        this.props.navigation.removeListener("focus", this.getFavorites);
    }

    render(){

        const { favorites } = this.state;

        return (
            <View 
            style={styles.container}>
                {
                    favorites.length == 0 ?
                    <FavoritesEmptyState /> :
                    null
                }  

                {
                    favorites.length > 0 ?
                    <FlatList 
                        data={favorites}
                        renderItem={({item})=>
                        <CoinsItem 
                            item={item} 
                            onPress={()=> this.handlePress(item)}
                        />}
                    /> :
                    null
                }              
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.charade,
        flex:1
    }
})

export default FavoritesScreen;