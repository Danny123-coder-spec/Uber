import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';
import { useSelector } from 'react-redux';

// import { FlatList } from 'react-native-gesture-handler';
import tw from 'twrnc';
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id:'123',
        title:'Get a ride',
        image:'https://links.papareact.com/3pn',
        screen:'MapScreen'
    },
    {
        id:'456',
        title:'Order food',
        image:'https://links.papareact.com/28w',
        screen:'EatsScreen'
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return (
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
             style={tw`ml-3 pl-7 pb-8 pt-4 bg-gray-200 w-40 h-55 rounded-md`}
             disabled={!origin}
             >
            
                <View style={tw`${!origin && "opacity-20"}`}>
                    <Image
                    style={{width:120, height:120, resizeMode:'contain'}}
                    source={{uri:item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    
                </View>
            </TouchableOpacity>
        )}
        
        />
    );
}

export default NavOptions;
