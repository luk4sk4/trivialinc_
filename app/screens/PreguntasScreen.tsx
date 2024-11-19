import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from '../modules/styles';


function PreguntasScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainerMap}>
        < View style={styles.sideBox}>
          <TouchableOpacity onPress={() => navigation.navigate('CategoriasMain')}>
            <Image
              style={styles.image50}
              source={require('../../assets/images/back.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.leyendaBox}>
          <Image
            style={styles.leyenda}
            source={require('../../assets/images/TRIVIA.png')}
          />
        </View>
        <View>
          <Image
            style={styles.image50}
            source={require('../../assets/images/settings.png')}
          />
        </View>
      </View>
      <View style={styles.midContainer}>
        <View style={styles.categoryClassButtonBox}>
          <TouchableOpacity style={styles.categoryClassButton} onPress={() => navigation.navigate('CategoriasNuevasAdd')}>
            <Text style={styles.buttonText}>NEW CATEGORIES</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryClassButtonBox}>
          <TouchableOpacity style={styles.categoryClassButton} onPress={() => navigation.navigate('CategoriasAmigosAdd')}>
            <Text style={styles.buttonText}>FRIEND KNOWLEDGE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
      </View>
    </View>
  );
}

export default PreguntasScreen;