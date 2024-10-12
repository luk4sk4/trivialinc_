import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';

export default function Index() {
  return (
    <View colors={['#000428', '#004e92']} style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>PREGUNTAS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>JUGAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>AÑADIR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0004ff',
  },
  button: {
    borderWidth: 2,
    borderColor: '#ffffff',
    width: 200,
    height: 50,
    marginVertical: 10,
    borderRadius: 25,
    shadowColor: '#fff',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    justifyContent: 'center',  // Centra el contenido verticalmente
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'TTLAKES',  //tengo que buscar como usar la custom font sin gastaar muchos recursos
  },
});
