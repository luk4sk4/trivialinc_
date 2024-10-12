import React, { useState, useContext  } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MyContext } from '../modules/MyContext';

const white = require('../../assets/images/tl.png');
const red = require('../../assets/images/rojo.png');
const green = require('../../assets/images/verde.png');
const pink = require('../../assets/images/rosa.png');
const blue = require('../../assets/images/azul.png');
const purple = require('../../assets/images/morado.png');
const yellow = require('../../assets/images/amarillo.png');


function CategoriasClasicas({ navigation }) {

  const context = useContext(MyContext);

  let source_red = white
  let source_green = white
  let source_pink = white
  let source_blue = white
  let source_purple = white
  let source_yellow = white

  if (context.category_red) {
    source_red = red;
  }
  if (context.category_green) {
    source_green = green;
  }
  if (context.category_pink) {
    source_pink = pink;
  }
  if (context.category_blue) {
    source_blue = blue;
  }
  if (context.category_purple) {
    source_purple = purple;
  }
  if (context.category_yellow) {
    source_yellow = yellow;
  }

  type CategorySelectedProps = {
    name: string;
  };

  const category_selected = ({ name }: CategorySelectedProps) => {
    if (context?.category_red === name || context?.category_green === name || context?.category_pink === name || context?.category_blue === name || context?.category_purple === name || context?.category_yellow === name){
      if (context?.category_red === name){
        context?.setCategoryRed("");
      } else if (context?.category_green === name){
        context?.setCategoryGreen("");
      } else if (context?.category_pink === name){
        context?.setCategoryPink("");
      } else if (context?.category_blue === name){
        context?.setCategoryBlue("");
      } else if (context?.category_purple === name){
        context?.setCategoryPurple("");
      } else if (context?.category_yellow === name){
        context?.setCategoryYellow("");
      }
    }
    else {
      if (!context?.category_red) {
        context?.setCategoryRed(name);
        console.log('DONE')
        console.log(context?.category_red)
      }
      else if (!context?.category_green) {
        context?.setCategoryGreen(name);
      }
      else if (!context?.category_pink) {
        context.setCategoryPink(name);
      }
      else if (!context?.category_blue) {
        context?.setCategoryBlue(name);
      }
      else if (!context.category_purple) {
        context?.setCategoryPurple(name);
      }
      else if (!context.category_yellow) {
        context?.setCategoryYellow(name);
      }
      else {
        console.log('ERROR')
      }
    }
  };

  

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <Text style={styles.buttonText}>CATEGORIAS CLASICAS</Text>
        </View>
        <View style={styles.midContainer}>
          <ScrollView>
          <View style={styles.rowBox}>
            <TouchableOpacity
            style={[styles.category,
            context?.category_red === "HISTORIA" ? styles.red : null,
            context?.category_green === "HISTORIA" ? styles.green : null,
            context?.category_pink === "HISTORIA" ? styles.pink : null,
            context?.category_blue === "HISTORIA" ? styles.blue : null,
            context?.category_purple === "HISTORIA" ? styles.purple : null,
            context?.category_yellow === "HISTORIA" ? styles.yellow : null,
            ]}
            onPress={() => category_selected({ name: 'HISTORIA' })}> 
            <Text style={styles.buttonText}>HISTORIA</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.category,
              context?.category_red === "GEOGRAFIA" ? styles.red : null,
              context?.category_green === "GEOGRAFIA" ? styles.green : null,
              context?.category_pink === "GEOGRAFIA" ? styles.pink : null,
              context?.category_blue === "GEOGRAFIA" ? styles.blue : null,
              context?.category_purple === "GEOGRAFIA" ? styles.purple : null,
              context?.category_yellow === "GEOGRAFIA" ? styles.yellow : null,
              ]}
              onPress={() => category_selected({ name: 'GEOGRAFIA' })}> 
            <Text style={styles.buttonText}>GEOGRAFIA</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowBox}>
          <TouchableOpacity
            style={[styles.category,
              context?.category_red === "ARTEYLITERATURA" ? styles.red : null,
              context?.category_green === "ARTEYLITERATURA" ? styles.green : null,
              context?.category_pink === "ARTEYLITERATURA" ? styles.pink : null,
              context?.category_blue === "ARTEYLITERATURA" ? styles.blue : null,
              context?.category_purple === "ARTEYLITERATURA" ? styles.purple : null,
              context?.category_yellow === "ARTEYLITERATURA" ? styles.yellow : null,
              ]}
              onPress={() => category_selected({ name: 'ARTEYLITERATURA' })}> 
            <Text style={styles.buttonText}>ARTE Y LITERATURA</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.category,
              context?.category_red === "CIENCIA" ? styles.red : null,
              context?.category_green === "CIENCIA" ? styles.green : null,
              context?.category_pink === "CIENCIA" ? styles.pink : null,
              context?.category_blue === "CIENCIA" ? styles.blue : null,
              context?.category_purple === "CIENCIA" ? styles.purple : null,
              context?.category_yellow === "CIENCIA" ? styles.yellow : null,
              ]}
              onPress={() => category_selected({ name: 'CIENCIA' })}> 
            <Text style={styles.buttonText}>CIENCIA</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowBox}>
          <TouchableOpacity
            style={[styles.category,
              context?.category_red === "ENTRETENIMIENTO" ? styles.red : null,
              context?.category_green === "ENTRETENIMIENTO" ? styles.green : null,
              context?.category_pink === "ENTRETENIMIENTO" ? styles.pink : null,
              context?.category_blue === "ENTRETENIMIENTO" ? styles.blue : null,
              context?.category_purple === "ENTRETENIMIENTO" ? styles.purple : null,
              context?.category_yellow === "ENTRETENIMIENTO" ? styles.yellow : null,
              ]}
              onPress={() => category_selected({ name: 'ENTRETENIMIENTO' })}> 
            <Text style={styles.buttonText}>ENTRETENIMIENTO</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.category,
              context?.category_red === "DEPORTES" ? styles.red : null,
              context?.category_green === "DEPORTES" ? styles.green : null,
              context?.category_pink === "DEPORTES" ? styles.pink : null,
              context?.category_blue === "DEPORTES" ? styles.blue : null,
              context?.category_purple === "DEPORTES" ? styles.purple : null,
              context?.category_yellow === "DEPORTES" ? styles.yellow : null,
              ]}
              onPress={() => category_selected({ name: 'DEPORTES' })}> 
            <Text style={styles.buttonText}>DEPORTES</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
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
            <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate('CategoriasMain')}>
                    <Text style={styles.buttonText}>ATRAS</Text>
            </TouchableOpacity>
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
        height: 550,
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
    rowBox: {
      width: 400,
      height: 190,
      justifyContent: 'space-evenly',
      flexDirection: 'row',
    },
    category: {
      height: 150,
      width: 150,
      marginVertical: 10,
      borderWidth: 3,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#ffffff',
    },
    red: {
      borderColor: '#f90a0a',
    },
    green: {
      borderColor: '#37ee2e',
    },
    pink: {
      borderColor: '#ff00c6',
    },
    blue: {
      borderColor: '#00eaff',
    },
    purple: {
      borderColor: '#ba00ff',
    },
    yellow: {
      borderColor: '#fff600',
    },
    white: {
      borderColor: '#ffffff',
    },
    playButton: {
        borderWidth: 2,
        borderColor: '#ffffff',
        width: 250,
        height: 50,
        marginVertical: 10,
        borderRadius: 25,
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
        justifyContent: 'center',  // Centra el contenido verticalmente
        alignItems: 'center',
    },
    imagenBrillo: {
        width: 50,
        height: 50,
        margin: 5,
        resizeMode: "contain",
    },
  });

export default CategoriasClasicas;