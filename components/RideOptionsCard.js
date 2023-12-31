import { SafeAreaView, StyleSheet, Text, View , TouchableOpacity, FlatList, Image} from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
    {
        id:"Uber-X-123",
        title:"Uber X",
        multiplier:1,
        image:"https://links.papareact.com/3pn",
    },
    {
        id:"Uber-XL-456",
        title:"Uber XL",
        multiplier:1.2,
        image:"https://links.papareact.com/5w8",
    },
    {
        id:"Uber-X-789",
        title:"Uber LUX",
        multiplier:1.75,
        image:"https://links.papareact.com/7pf",
    },
];

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(data[0]);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('NavigateCard')} 
                style={tw`absolute  z-50 left-5 p-3 rounded-full`}>
                <Icon name='chevron-left' size={30} />
            </TouchableOpacity>
            {/* <Text style={tw`text-center p-1 text-xl`}>Select a Ride -</Text> */}
            <Text style={tw`text-center p-1 text-xl`}>Select a Ride - {travelTimeInformation?.distance.text}</Text>
        </View>
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item :{id, title, image}, item}) => (
            <TouchableOpacity onPress={() => setSelected(item)} style={tw`flex-row justify-between items-center px-10 ${id == selected?.id && "bg-gray-200"}`}>
                <Image
                 style={{
                    width:100,
                    height:100,
                    resizeMode:"contain",
                }}
                source={{uri:image}}
                />
                <View style={tw`ml-6`}>
                    <Text style={tw`text-xl font-semibold`}>{title}</Text>
                    <Text>Travel time...</Text>
                    {/* <Text>{travelTimeInformation ? `Travel time: ${travelTimeInformation.duration.text}` : ""}</Text> */}
                </View>
                <Text style={tw`text-xl`}>Ghc 20</Text>
            </TouchableOpacity>

        )}
        
        />
        <View>
            <TouchableOpacity disabled={!selected} style={tw`bg-black m-3 ${!selected && "bg-gray-300"}`}>
                <Text 
                style={tw`text-center py-3 text-white text-xl`}>
                    {selected && `Choose ${selected?.title}`}
                    </Text>
            </TouchableOpacity>
        </View>
     
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})