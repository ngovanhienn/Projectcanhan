import {View, Text, Button} from 'react-native';
import React from 'react';

const Chitietccvp = ({navigation}) => {
  return (
    <View>
      <Text>chitietccvp</Text>
      <Button title='click' onPress={() => navigation.navigate('Onboarding')}/>
    </View>
  )
}

export default Chitietccvp;