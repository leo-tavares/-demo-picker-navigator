//@flow
import React from 'react'
import { View, Text } from 'react-native';

type props = {};
const CityB = (props: props) => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
            <Text style={{fontSize: 40}}>
                City B
            </Text>
        </View>
    )
}

export default CityB;