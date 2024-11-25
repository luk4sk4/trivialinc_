import React, { useState, useContext  } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MyContext } from '../modules/MyContext';
import styles from '../modules/styles';


const white = require('../../assets/images/star_white.png');
const red = require('../../assets/images/star_red.png');
const green = require('../../assets/images/star_green.png');
const pink = require('../../assets/images/star_pink.png');
const blue = require('../../assets/images/star_blue.png');
const purple = require('../../assets/images/star_purple.png');
const yellow = require('../../assets/images/star_yellow.png');

let errorMessage = 'error...'


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
    } else {
      errorMessage = 'MUST SELECT 6 CATEGORIES'
      setShowError(true);

    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.topContainerMap}>
        < View style={styles.sideBox}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={[styles.image50, {backgroundColor: 'green'}]}
              source={require('../../assets/images/back.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.leyendaBox, {backgroundColor: 'green'}]}>
          <Text style={styles.buttonText}>CHOOSE 6 CATEGORIES</Text>
        </View>
        <View>
          <Image
            style={[styles.image50, {backgroundColor: 'green'}]}
            source={require('../../assets/images/settings.png')}
          />
        </View>
      </View>
        <View style={styles.midContainer}>
            <View style={styles.categoryClassButtonBox}>
                <TouchableOpacity style={styles.categoryClassButton} onPress={() => navigation.navigate('CategoriasClasicas')}>
                    <Text style={styles.buttonText}>CLASSIC CATEGORIES</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.categoryClassButtonBox}>
                <TouchableOpacity style={styles.categoryClassButton} onPress={() => navigation.navigate('CategoriasNuevas')}>
                    <Text style={styles.buttonText}>NEW CATEGORIES</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.categoryClassButtonBox}>
                <TouchableOpacity style={styles.categoryClassButton} onPress={() => navigation.navigate('CategoriasAmigos')}>
                    <Text style={styles.buttonText}>FRIEND KNOWLEDGE</Text>
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
                    <Text style={styles.buttonText}>PLAY</Text>
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

export default CategoriasMain;