import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Pantalla de Perfil</Text>
      <Button title="Ir a inicio" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default ProfileScreen;
