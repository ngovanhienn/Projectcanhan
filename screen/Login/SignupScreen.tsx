// import React, {useState} from 'react';
// import {View, TextInput, Button, Alert} from 'react-native';
// import {NavigationStackProp} from 'react-navigation-stack';

// interface SignupScreenProps {
//   navigation: NavigationStackProp;
// }

// const SignupScreen: React.FC<SignupScreenProps> = ({navigation}) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = () => {
//     // Kiểm tra nếu người dùng đã nhập đủ thông tin đăng ký
//     if (username && password) {
//       // Lưu thông tin đăng ký vào cơ sở dữ liệu hoặc lưu vào bộ nhớ
//       // Trong ví dụ này, chúng ta lưu thông tin vào một đối tượng JSON
//       const user = {username, password};
//       // Lưu thông tin người dùng đã đăng ký
//       registered_users[username] = user;

//       // Đăng ký thành công, chuyển đến màn hình đăng nhập
//       navigation.navigate('SigninScreen');
//     } else {
//       // Hiển thị cảnh báo nếu người dùng chưa nhập đủ thông tin
//       Alert.alert('Vui lòng nhập đầy đủ thông tin đăng ký');
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Tên đăng nhập"
//         value={username}
//         onChangeText={text => setUsername(text)}
//       />
//       <TextInput
//         placeholder="Mật khẩu"
//         secureTextEntry
//         value={password}
//         onChangeText={text => setPassword(text)}
//       />
//       <Button title="Đăng ký" onPress={handleSignup} />
//     </View>
//   );
// };

// export default SignupScreen;
