import 'react-native-gesture-handler';
import * as React from 'react';
import {Button,Text,View} from 'react-native';


  function Profile({navigation}){
    return(
      <View><Text> profile ò Jane</Text>
      <Button title="chuyen den trang dang nhap" 
      onPress ={()=> navigation.navigate('Login', {name : 'gi cung duoc'})}>

      </Button>
      </View>
      
    )
  }

  export default Profile