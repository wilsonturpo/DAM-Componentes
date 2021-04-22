import AsyncStorage from '@react-native-community/async-storage';

class Storage {
    static instance = new Storage();

    store = async (key, value)=>{
        try{
            await AsyncStorage.setItem(key,value);
            return true;

        } catch(err){
            console.log("Storage store error: ", err);
            return false;
        }
    }

    get = async (key)=>{
        try{
            return await AsyncStorage.getItem(key);

        }catch(err){
            console.log("Storage get error: ", err);
            throw Error(err);
        }
    }

    multiGet = async(keys)=>{
        try {
            return await AsyncStorage.multiGet(keys);

        } catch (error) {
            console.log("Storage multiget error", error);
            throw Error(error);
        }
    }

    getAllKeys = async()=>{
        try {
            return await AsyncStorage.getAllKeys();

        } catch (error) {
            console.log("Storage getAllKeys error", error)
            throw Error(error)
        }
    }

    remove = async(key)=>{
        try {
            await AsyncStorage.removeItem(key);
            return true;

        } catch (error) {
            console.log("Storage remove error", error);
            return false;
        }
    }
}

export default Storage