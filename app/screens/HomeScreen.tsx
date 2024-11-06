//necesidades
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

function HomeScreen( { navigation } ) {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Preguntas')}>
        <Text style={styles.buttonText}>QUESTIONS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Jugar')}>
        <Text style={styles.buttonText}>PLAY</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={ require('../../assets/images/TRIVIA.png') }
        />
      </View>
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'TTLAKES',  //tengo que buscar como usar la custom font sin gastaar muchos recursos
    },
    logoBox: {
      position: 'absolute',
      top: 100,
      height: 100,
      width: 300,
    },
    logo: {
      resizeMode: 'contain',
      height: 100,
      width: 300,
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
    }
  });

export default HomeScreen;