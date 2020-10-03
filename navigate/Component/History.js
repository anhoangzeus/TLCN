import 'react-native-gesture-handler';
import * as React from 'react';
import {Button,Text,View} from 'react-native';

const HistoryScreen = ({ navigation }) => {
    return (
      <Button
        title="Den profile ò Jane"
        onPress={() =>
          navigation.navigate('Signin', { name: 'Jane' })
        }
      />
    );
  };

  export default HistoryScreen