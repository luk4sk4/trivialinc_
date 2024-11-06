import React, { useState, useContext  } from 'react';
import { View, Text, Image , StyleSheet, TouchableOpacity } from 'react-native';
import { Slider } from '@react-native-assets/slider'
import { MyContext } from '../modules/MyContext';

const one_player = require('../../assets/images/1j.png');
const two_player = require('../../assets/images/2j.png');
const three_player = require('../../assets/images/3j.png');
const four_player = require('../../assets/images/4j.png');
const five_player = require('../../assets/images/5j.png');
const six_player = require('../../assets/images/6j.png');
const seven_player = require('../../assets/images/7j.png');
const eight_player = require('../../assets/images/8j.png');

function JugarScreen({ navigation }) {

  const context = useContext(MyContext);
  const [imageSource, setImageSource] = useState(one_player);
  const [sliderValue, setSliderValue] = useState(1);

  const handleSliderChange = (value) => {
    if (value == 1) {
      setImageSource(one_player);
    } else if (value == 2){
      setImageSource(two_player);
    } else if (value == 3){
      setImageSource(three_player);
    } else if (value == 4){
      setImageSource(four_player);
    } else if (value == 5){
      setImageSource(five_player);
    } else if (value == 6){
      setImageSource(six_player);
    } else if (value == 7){
      setImageSource(seven_player);
    } else {
      setImageSource(eight_player);
    }
    setSliderValue(value);
  };

  const handleNextPress = () => {
    context.setNumberOfPlayers(sliderValue);
    navigation.navigate('CategoriasMain');

  };


  return (
    <View style={styles.container}>
      <View style={styles.textbox}>
      <Text style={styles.buttonText}>PLAYERS?</Text>
      </View>
      <View style={styles.imageBox}>
      <Image
        source={imageSource}
        style={styles.image}
      />
      </View>
      <View style={styles.sliderboxbox}>
      <View style={styles.sliderbox}>
      <Slider 
        value={1}                       
        minimumValue={1}                  
        maximumValue={8}                  
        step={1}
        slideOnTap={true}
        enabled={true}
        thumbSize={20}
        trackHeight={5}
        minimumTrackTintColor='white'
        maximumTrackTintColor='white'
        thumbTintColor='#ffffff'
        onValueChange={handleSliderChange}
      />
      </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.buttonText}>NEXT</Text>
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
  imageBox: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  textbox: {
    alignItems: 'center',
  },
  sliderbox: {
    width: 200,
    height: 50,
    justifyContent: 'center',
  },
  sliderboxbox: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  button: {
    position: 'relative',
    top: 200,
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
    fontFamily: 'TTLAKES',  //tengo que buscar como usar la custom font sin gastaar muchos recursos
  },
});

export default JugarScreen;