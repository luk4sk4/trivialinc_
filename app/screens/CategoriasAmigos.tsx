import React, { useContext  } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MyContext } from '../modules/MyContext';
import styles from '../modules/styles';
import know_your_friends from '../cards/friends.json'


const white = require('../../assets/images/star_white.png');
const red = require('../../assets/images/star_red.png');
const green = require('../../assets/images/star_green.png');
const pink = require('../../assets/images/star_pink.png');
const blue = require('../../assets/images/star_blue.png');
const purple = require('../../assets/images/star_purple.png');
const yellow = require('../../assets/images/star_yellow.png');


function CategoriasAmigos({ navigation }) {
  const category_selection = () => {
    for (let i = 0; i<know_your_friends.length; i++){
      category_array.push(know_your_friends[i].category)
    }
  }
  const category_array = [];
  category_selection();
  
  

  

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
            <Text style={styles.buttonText}>TEST YOUR FRIENDS</Text>
        </View>
        <View style={styles.midContainer}>
          <ScrollView>
          {Array.from({ length: Math.ceil(category_array.length / 2) }).map((_, index) => (
      <View style={styles.rowBox} key={index}>
        {Array.from({ length: 2 }).map((_, subIndex) => {
          const elementIndex = index * 2 + subIndex;
          if (elementIndex < category_array.length) {
            const element = category_array[elementIndex];
            return (
              <TouchableOpacity
                key={`${index}-${subIndex}`}
                style={[styles.category,
                  context?.category_red === element ? styles.red : null,
                  context?.category_green === element ? styles.green : null,
                  context?.category_pink === element ? styles.pink : null,
                  context?.category_blue === element ? styles.blue : null,
                  context?.category_purple === element ? styles.purple : null,
                  context?.category_yellow === element ? styles.yellow : null,
                ]}
                onPress={() => category_selected({ name: element })}
              > 
                <Text style={styles.buttonText}>{element}</Text>
              </TouchableOpacity>
            );
          }
          return null; // Return null to avoid rendering an empty space
        })}
      </View>
    ))}
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

export default CategoriasAmigos;