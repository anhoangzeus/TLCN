import 'react-native-gesture-handler';
import * as React from 'react';
import {Button,Text,View} from 'react-native';

const Login = ({ navigation }) => {
    return (
      <Button
        title="đến trang login"
        onPress={() =>
          navigation.navigate('History', { name: 'Jane' })
        }
      />
    );
  };

  export default Login