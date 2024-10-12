import React, { useState, useContext  } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MyContext } from '../modules/MyContext';
import ErrorPopup from '../components/ErrorPopup.js';

const white = require('../../assets/images/tl.png');
const red = require('../../assets/images/rojo.png');
const green = require('../../assets/images/verde.png');
const pink = require('../../assets/images/rosa.png');
const blue = require('../../assets/images/azul.png');
const purple = require('../../assets/images/morado.png');
const yellow = require('../../assets/images/amarillo.png');

let errorMessage = 'PIUTAAIKJNDSIJHGASDIUYHGSAUIHKGJYSJHKGFUD'


function CategoriasMain({ navigation }) {

  const context = useContext(MyContext);

  const [showError, setShowError] = useState(false);

  let source_red = white
  let source_green = white
  let source_pink = white
  let source_blue = white
  let source_purple = white
  let source_yellow = white

  let cat_number = 0


  if (context.category_red) {
    source_red = red;
    cat_number += 1
  }
  if (context.category_green) {
    source_green = green;
    cat_number += 1
  }
  if (context.category_pink) {
    source_pink = pink;
    cat_number += 1
  }
  if (context.category_blue) {
    source_blue = blue;
    cat_number += 1
  }
  if (context.category_purple) {
    source_purple = purple;
    cat_number += 1
  }
  if (context.category_yellow) {
    source_yellow = yellow;
    cat_number += 1
  }
  const handleJugar = () => {
    if (cat_number === 6) {
    navigation.navigate('Tablero')
    console.log(cat_number)
    } else {
      setShowError(true);
      errorMessage = 'NECESITAS SELECCIONAR 6 CATEGORIAS'

    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <Text style={styles.buttonText}> ELIGE 6 CATEGORIAS </Text>
        </View>
        <View style={styles.midContainer}>
            <View style={styles.buttonBox}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CategoriasClasicas')}>
                    <Text style={styles.buttonText}>CATEGORIAS CLASICAS</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonBox}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CategoriasNuevas')}>
                    <Text style={styles.buttonText}>NUEVAS CATEGORIAS</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonBox}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CategoriasAmigos')}>
                    <Text style={styles.buttonText}>CONOCE A TUS AMIGOS</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.circlesContainer}>
                <View style={styles.circle}>
                <Image
                style={styles.imagenBrillo}
                source={source_red}
                />
                </View>
                <View style={styles.circle}>
                <Image
                style={styles.imagenBrillo}
                source={source_green}
                />
                </View>
                <View style={styles.circle}>
                <Image
                style={styles.imagenBrillo}
                source={source_pink}
                />
                </View>
                <View style={styles.circle}>
                <Image
                style={styles.imagenBrillo}
                source={source_blue}
                />
                </View>
                <View style={styles.circle}>
                <Image
                style={styles.imagenBrillo}
                source={source_purple}
                />
                </View>
                <View style={styles.circle}>
                <Image
                style={styles.imagenBrillo}
                source={source_yellow}
                />
                </View>
            </View>
            <TouchableOpacity style={styles.playButton} onPress={() => handleJugar()}>
                    <Text style={styles.buttonText}>JUGAR</Text>
            </TouchableOpacity>
        </View>
      {showError &&
      <TouchableOpacity style={styles.errorPopUp} onPress={() => setShowError(false)}>
      <View style={styles.errorBox}>
        <Text style={styles.errorText}>{errorMessage}</Text>
      </View>
      </TouchableOpacity>
      }     
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
    topContainer: {
        width: 400,
        height: 50,
        borderBottomWidth: 3,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    midContainer: {
        width: 400,
        height: 500,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
        width: 400,
        borderTopWidth: 3,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonBox: {
        width: 250,
        height: 100,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderWidth: 3,
        borderColor: '#ffffff',
        width: 250,
        height: 75,
        marginVertical: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButton: {
        borderWidth: 2,
        borderColor: '#ffffff',
        width: 250,
        height: 50,
        marginVertical: 10,
        borderRadius: 25,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'TTLAKES', 
    },
    circlesContainer: {
        width: 350,
        height: 50,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        borderWidth: 2,
        borderColor: '#ffffff',
        width: 50,
        height: 50,
        margin: 5,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagenBrillo: {
        width: 50,
        height: 50,
        margin: 5,
        resizeMode: "contain",
    },
    errorPopUp: {
      position: 'absolute',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 400,
      height: 800,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    errorBox: {
      width: 250,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderColor: '#ffffff',
      borderWidth: 2,
      borderRadius: 20,
      },
      errorText: {
      textAlign: 'center',
      color: '#141823',
      },
  });

export default CategoriasMain;