import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Pantalla de Login</Text>
      <Button title="Entrar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default LoginScreen;
