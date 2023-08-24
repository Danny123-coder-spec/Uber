import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
// import {Icon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc'

const data = [
    {
        id:"123",
        icon:"home",
        location:"Home",
        destination:"Code Street, London, UK",
    },
    {
        id:"456",
        icon:"briefcase",
        location:"Work",
        destination:"London Eye, London, UK",
    },
];

const NavFavourite = () => {

  return (
    <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={() => (
        <View style={tw`bg-gray-200 h-0.5`}/>
    )}
    renderItem={({item}) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={item.icon}
            size={18}
            color="white"
            />
            <View>
                <Text style={tw`font-semi-bold text-lg`}>{item.location}</Text>
                <Text style={tw`text-gray-500`}>{item.destination}</Text>
            </View>
        </TouchableOpacity>
    )}
    
    />
  )
}

export default NavFavourite

const styles = StyleSheet.create({})