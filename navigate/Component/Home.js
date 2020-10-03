import 'react-native-gesture-handler';
import * as React from 'react';
import {Button,Text,View} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <Button
        title="Go to Jane profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
    );
  };

  export default HomeScreen