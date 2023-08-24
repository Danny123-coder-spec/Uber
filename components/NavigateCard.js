import { StyleSheet, SafeAreaView,Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_APIKEY} from '@env';
import { useDispatch } from 'react-redux';
import { setDetination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourite from './NavFavourite';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Daniel</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete
            
            placeholder='Where to?'
            styles={toInputBoxStyles}
            fetchDetails={true}
            enablePoweredByContainer={false}
            returnTypeKey={"search"}
            minLength={2}
            onPress={(data, details=null) => {
                dispatch(setDetination({
                    location:details.geometry.location,
                    description:data.description,
                }));
                navigation.navigate('RideOptionsCard');
            }}
            query={{
                key:GOOGLE_MAPS_APIKEY,
                language:'en'
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={200}
            />
            
            
        </View>
        <NavFavourite/>
        <View style={tw`flex-row bg-white justify-evenly border-gray-100 py-2 mt-auto`}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('RideOptionsCard')}
            style={tw`flex-row justify-between bg-black w-26 px-4 py-3 rounded-full`}>
                <Icon
                name="car" 
                color="white"
                size={16}
                />
                <Text style={tw`text-white text-center`}>Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                <Icon
                name="food" 
                color="black"
                size={16}
                />
                <Text style={tw`text-center`}>Eats</Text>
            </TouchableOpacity>
        </View>
        

      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:20,
        flex:0,
        
    },
    textInput:{
        fontSize:18,
        padding:20,
        backgroundColor:'lightgray',
    },
})
