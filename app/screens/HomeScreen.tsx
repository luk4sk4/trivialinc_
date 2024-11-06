//necesidades
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from '../modules/styles';


function HomeScreen( { navigation } ) {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.homescreenButton} onPress={() => navigation.navigate('Preguntas')}>
        <Text style={styles.buttonText}>QUESTIONS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.homescreenButton} onPress={() => navigation.navigate('Jugar')}>
        <Text style={styles.buttonText}>PLAY</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.homescreenButton}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={ require('../../assets/images/TRIVIA.png') }
        />
      </View>
    </View>
  );
}

export default HomeScreen;