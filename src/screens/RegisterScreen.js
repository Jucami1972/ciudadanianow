import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Pantalla de Registro</Text>
      <Button title="Registrarse" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default RegisterScreen;
