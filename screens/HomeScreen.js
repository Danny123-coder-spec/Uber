import React from 'react';
// import {SafeAreaView, StyleSheet,View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {View, StyleSheet,Text, Image} from 'react-native';
import tw from 'twrnc';
import NavOptions from '../components/navOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import { useDispatch } from 'react-redux';
import {setDetination, setOrigin } from '../slices/navSlice';
import NavFavourite from '../components/NavFavourite';

const HomeScreen = () => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                style={{width:100,height:100,resizeMode:"contain"}}
                source={{
                    uri:'https://links.papareact.com/gzs'
                }}/>
                <GooglePlacesAutocomplete

                placeholder='Where From?'
                styles={{
                    container:{
                        flex:0,
                        
                    },
                    textInput:{
                        fontSize:18,
                    },
                }}
                onPress={(data, details=null) => {
                    dispatch(
                        setOrigin({
                            location:details.geometry.location,
                            description:data.description,
                        })
                    );
                    dispatch(setDetination(null));
                    // console.log(data);
                    // console.log(details);
                }}
                fetchDetails={true}
                enablePoweredByContainer={false}
                minLength={2}
                query={{
                    key:GOOGLE_MAPS_APIKEY,
                    language:'en'
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={200}
                />
                <NavOptions/>
                <NavFavourite/>
            </View>
            
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    text:{
        color:'blue',
    },
});
