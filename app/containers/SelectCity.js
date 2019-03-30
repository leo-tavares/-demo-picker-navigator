//@flow
import React, { useState, useEffect } from 'react';
import { View, Picker } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

type props = {
    navigation: NavigationScreenProp<>
};
const SelectCity = ({navigation}: props) => {
    const [pickerVal, setPickerVal] = useState('');
    useEffect(() => {
      console.log(pickerVal);
    }, [pickerVal])

    return(
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Picker
          style={{width: '100%'}}
          selectedValue={pickerVal}
          onValueChange={pickerVal => navigation.navigate(pickerVal)}>
          <Picker.Item label="City selection" value={null}/>
          <Picker.Item label="Cidade A" value="CityA"/>
          <Picker.Item label="Cidade B" value="CityB"/>
        </Picker>
      </View>
    )
}

export default SelectCity;