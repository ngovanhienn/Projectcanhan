import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Button,
  StyleSheet,
} from 'react-native';
import React from 'react';
import ProfileScreen from './ProfileScreen';

const Header = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#00FF00',
          height: 68,
        }}>
        <View style={{}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../Image/ngoinha.jpg')}
              style={{width: 50, height: 50}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginRight: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <ImageBackground
              source={require('../Image/profile.jpg')}
              style={{width: 46, height: 46}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// const styles= StyleSheet.create({
//  container:{
//   height:150,
//  }

// });

export default Header;
