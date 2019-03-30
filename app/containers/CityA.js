//@flow
import React from 'react'
import { View, Text } from 'react-native';

type props = {};
const CityA = (props: props) => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
            <Text style={{fontSize: 40}}>
                City A
            </Text>
        </View>
    )
}

export default CityA;
