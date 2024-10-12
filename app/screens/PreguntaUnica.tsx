import React, { useEffect, useState, useContext  } from 'react';
import { View, Text, Image , StyleSheet, TouchableOpacity } from 'react-native';
import { Slider } from '@react-native-assets/slider'
import { MyContext } from '../modules/MyContext';
import { useRoute } from '@react-navigation/native';
import { useEvent } from 'react-native-reanimated';

//declaraciones de los require de las imagenes apra los jugadores  y para los uesitos de colores
const jugador1 = require('../../assets/images/astro_red.png');
const jugador2 = require('../../assets/images/astro_green.png');
const jugador3 = require('../../assets/images/astro_pink.png');
const jugador4 = require('../../assets/images/astro_blue.png');
const jugador5 = require('../../assets/images/astro_purple.png');
const jugador6 = require('../../assets/images/astro_yellow.png');
const jugador7 = require('../../assets/images/astro_white.png');
const jugador8 = require('../../assets/images/astro_brown.png');

const star_red = require('../../assets/images/rojo.png');
const star_green = require('../../assets/images/verde.png');
const star_pink = require('../../assets/images/rosa.png');
const star_blue = require('../../assets/images/azul.png');
const star_purple = require('../../assets/images/morado.png');
const star_yellow = require('../../assets/images/amarillo.png');

const star_background = require('../../assets/images/tl.png');






function PreguntaUnica({ route, navigation }) {
  const { player, place, onGoBack } = route.params;
  const context = useContext(MyContext);

  const [color, setColor] = useState("#ffffff");
  const [position, setPosition] = useState(0);
  const [isQuesito, setIsQuesito] = useState(false);

  let jugador;
  let question = 'me cagoe en todo';
  let answer = 'pues yo también';
  const [see_question, setSeeQuestion] = useState(true);


  const handleBack = (actionToDo) => {
    if (actionToDo == "throwAgain" && isQuesito == true){
      switch (player) {
        case 1: context.quesitos_one[position]=1; break;
        case 2: context.quesitos_two[position]=1; break;
        case 3: context.quesitos_three[position]=1; break;
        case 4: context.quesitos_four[position]=1; break;
        case 5: context.quesitos_five[position]=1; break;
        case 6: context.quesitos_six[position]=1; break;
        case 7: context.quesitos_seven[position]=1; break;
        case 8: context.quesitos_eight[position]=1; break;
        default: console.log("problem with the switch going to default");
      }
    }
    if (onGoBack) {
      onGoBack(actionToDo);
    }
    navigation.navigate('Tablero');
  };

  const handleFlip = () => {
    setSeeQuestion(prevSeeQuestion => !prevSeeQuestion);
    console.log(!see_question);
  };

  let quesitos;
  if (player == 1){
    quesitos = context?.quesitos_one;
    jugador = jugador1;
  } else if (player == 2){
    quesitos = context?.quesitos_two;
    jugador = jugador2;
  } else if (player == 3){
    quesitos = context?.quesitos_three;
    jugador = jugador3;
  } else if (player == 4){
    quesitos = context?.quesitos_four;
    jugador = jugador4;
  } else if (player == 5){
    quesitos = context?.quesitos_five;
    jugador = jugador5;
  } else if (player == 6){
    quesitos = context?.quesitos_six;
    jugador = jugador6;
  } else if (player == 7){
    quesitos = context?.quesitos_seven;
    jugador = jugador7;
  } else {
    quesitos = context?.quesitos_eight;
    jugador = jugador8;
  }

  const takeQuestion = ({ color }) => {

  }

  //comprobar quesito y color de este
  //if (place in [])
  //comprobar color

useEffect(() => {

  if ([1, 8, 15, 22, 29, 36].includes(place)){
    setIsQuesito(true);
  } else {
    setIsQuesito(false);
  }

  if ([5, 11, 16, 29, 42, 52, 63, 74, 85, 101].includes(place)){
    setColor('#f90a0a'); //red
    setPosition(0);
  } else if ([7, 12, 18, 23, 36, 51, 62, 73, 84, 95].includes(place)){
    setColor('#37ee2e'); //green
    setPosition(1);
  } else if ([14, 19, 26, 30, 1, 61, 72, 83, 94, 105].includes(place)){
    setColor('#ff00c6'); //pink
    setPosition(2);
  } else if ([2, 15, 28, 33, 39, 54, 65, 81, 92, 103].includes(place)){
    setColor('#00eaff'); //blue
    setPosition(3);
  } else if ([4, 9, 22, 35, 40, 53, 64, 75, 91, 102].includes(place)){
    setColor('#ba00ff'); //purple
    setPosition(4);
  } else {
    setColor('#fff600'); //yellow
    setPosition(5);
  }
  console.log(color);

},[place]);


  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.astronautBox}>
            <Image
              style={styles.astro}
              source={jugador}/>
          </View>
          {quesitos[0] === 1 ? (
          <Image
            style={[styles.stars, { position: 'absolute', top: 75, left: 35,}]}
            source={star_red}/>
          ):null}
          {quesitos[1] === 1 ? (
          <Image
            style={[styles.stars, { position: 'absolute', top: 15, left: 45,}]}
            source={star_green}/>
          ):null}
          {quesitos[2] === 1 ? (
          <Image
            style={[styles.stars, { position: 'absolute', top: 135, left: 45,}]}
            source={star_pink}/>
          ):null}
          {quesitos[3] === 1 ? (
          <Image
            style={[styles.stars, { position: 'absolute', top: 135, left: 310,}]}
            source={star_blue}/>
          ):null}
          {quesitos[4] === 1 ? (
          <Image
            style={[styles.stars, { position: 'absolute', top: 15, left: 310,}]}
            source={star_purple}/>
          ):null}
          {quesitos[5] === 1 ? (
          <Image
            style={[styles.stars, { position: 'absolute', top: 75, left: 320,}]}
            source={star_yellow}/>
          ):null}
        </View>
        <View style={styles.midContainer}>
        {isQuesito ? 
          <View>
            <Image
            source={star_background}
            style={[styles.starsBackground, { position: 'absolute', top: 0, left: -100,}]}
            />
            <Image
            source={star_background}
            style={[styles.starsBackground, { position: 'absolute', top: -200, left: -400,}]}
            />
          </View>
        : null}
          <View style={[styles.questionBox, { borderColor: color }]}>
            {see_question ? 
            <Text style={styles.text2}>{see_question}{question} KJHDFKJ HSDFKJHSDJKFHKLS JFHLKAH SFKDSAHF LKJHASDFI ULKJHSAULIFKJDHA LSUKJFHKAJ SFHL KJASDHFLKJ   ASHFLKJASHDKLFJ</Text>
            : <Text style={styles.text2}>{answer} ESTO SERIA UNA RESPUESTA RESPUESTA RESPUESTA RESPUESTA RESPUESTA RESPUESTA</Text>}
            <TouchableOpacity style={styles.flipCard} onPress={handleFlip} activeOpacity={1}>
              <Image
              style={styles.stars}
              source={require('../../assets/images/flip.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonsBox}>
            <View style={styles.buttonBox}>
            <TouchableOpacity onPress={() => handleBack('nextTurn')}>
              <Image
                style={styles.correctIncorrect}
                source={require('../../assets/images/incorrect.png')}
                />
            </TouchableOpacity>
            </View>
            <View style={styles.buttonBox}>
            <TouchableOpacity onPress={() => handleBack('throwAgain')}>
              <Image
                style={styles.correctIncorrect}
                source={require('../../assets/images/correct.png')}
                />
            </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
  );
}

// onPress={handleBack('nextTurn')}
//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0004ff',
  },
  topContainer: {
      width: 400,
      height: 200,
      borderBottomWidth: 3,
      borderColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
  },
  midContainer: {
      width: 400,
      height: 400,
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
  buttonsBox: {
    width: 400,
    height: 100,
    marginVertical: 20,
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonBox: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  astronautBox: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  astro:{
    width: 150,
    height: 150,
  },
  correctIncorrect: {
    width: 100,
    height: 100,
  },
  questionBox: {
    width: 350,
    height: 250,
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white', //quitar esto
    borderWidth: 5,
    borderRadius: 50,
  },
  stars: {
    width: 50,
    height: 50,
  },
  text1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'TTLAKES',
  },
  text2: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'TTLAKES',
    padding: 15,
  },
  flipCard: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: 'blue',
    borderRadius: 20,
  },
  starsBackground: {
    width: 500,
    height: 500,
    opacity: 0.2,
  }
});

export default PreguntaUnica;
