import React, { useState, useContext  } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Slider } from '@react-native-assets/slider'
import { MyContext } from '../modules/MyContext';
import styles from '../modules/styles';


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
      <View style={styles.topContainerMap}>
        < View style={styles.sideBox}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
      <View>
      <Text style={styles.buttonText}>PLAYERS?</Text>
      </View>
      <View style={styles.playerNumberBox}>
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
      </View>
      <View style={styles.bottomContainer}>
      <TouchableOpacity style={styles.homescreenButton} onPress={handleNextPress}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

export default JugarScreen;