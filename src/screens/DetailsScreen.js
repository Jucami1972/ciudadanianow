import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';

const DetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Detalles</Text>
      <Text style={styles.subtitle}>Esta es la información detallada</Text>

      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.button}>
        Volver
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        Ir a Inicio
      </Button>

      <Button
        mode="text"
        onPress={() => navigation.navigate('Profile')}
        style={styles.button}>
        Ver Perfil
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    marginVertical: 10,
    width: '80%',
    borderRadius: 8,
  },
});

export default DetailsScreen;
