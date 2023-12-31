import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

const Signin = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'h' && password === '123') {
      navigation.navigate('Home');
    } else {
      alert('vui lòng đăng nhập lại');
    }
  };
  const handleFacebookLogin = () => {};

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Sign In</Text>
      </View>
      <TextInput
        style={styles.input1}
        placeholder="user name"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <View>
        <TouchableOpacity style={styles.but1} onPress={handleLogin}>
          <Text style={styles.but4}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OR</Text>

        <View>
          <TouchableOpacity style={styles.but3} onPress={handleFacebookLogin}>
            <Text style={styles.but4}>Facebook Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  title: {
    color: '#20C065',
    fontSize: 28,
    // fontWeight: 'bold',
    marginBottom: 50,
    paddingRight: 250,
  },
  input1: {
    height: 50,
    width: '80%',
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
  },
  input: {
    height: 50,
    width: '80%',
    marginTop: 30,

    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
  },
  but1: {
    width: 300,
    borderRadius: 30,
    height: 50,
    margin: 20,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20C065',
    color: 'white',
  },
  but3: {
    width: 300,
    borderRadius: 30,
    height: 50,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B5998',
    marginBottom: 70,
    color: 'white',
    borderWidth: 0.3,
    borderColor: 'red',
  },
  but2: {
    color: 'white',
    fontSize: 20,
  },
  but4: {
    color: 'white',
    fontSize: 20,
  },
  orText: {
    marginVertical: 30,
    textAlign: 'center',
    fontSize: 21,
  },
});

export default Signin;
