import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import { MyContext } from '../modules/MyContext';
import styles from '../modules/styles';



const redAsteroid = require('../../assets/images/asteroid_red.png')
const greenAsteroid = require('../../assets/images/asteroid_green.png')
const pinkAsteroid = require('../../assets/images/asteroid_pink.png')
const blueAsteroid = require('../../assets/images/asteroid_blue.png')
const purpleAsteroid = require('../../assets/images/asteroid_purple.png')
const yellowAsteroid = require('../../assets/images/asteroid_yellow.png')

const redPlanet = require('../../assets/images/planet_red.png')
const greenPlanet = require('../../assets/images/planet_green.png')
const pinkPlanet = require('../../assets/images/planet_pink.png')
const bluePlanet = require('../../assets/images/planet_blue.png')
const purplePlanet = require('../../assets/images/planet_purple.png')
const yellowPlanet = require('../../assets/images/planet_yellow.png')


const satellite = require('../../assets/images/satellite.png')
const rocket = require('../../assets/images/rocket.png')

const star_red = require('../../assets/images/star_red.png');
const star_green = require('../../assets/images/star_green.png');
const star_pink = require('../../assets/images/star_pink.png');
const star_blue = require('../../assets/images/star_blue.png');
const star_purple = require('../../assets/images/star_purple.png');
const star_yellow = require('../../assets/images/star_yellow.png');

function Tablero({ navigation }) {

  const handleGoBack = (value) => {
    if (value === 'nextTurn') {
      HandleNextTurn();
    } else if (value === 'throwAgain') {
      setDice4(false);
      setDice(true);
    }
  };
 

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const context = useContext(MyContext);

  const [leyenda_pop_up, setLeyendaPopUp] = useState(false);

  const [turn, setTurn] = useState(1);
  const [dice, setDice] = useState(false);
  const [dice2, setDice2] = useState(false);
  const [dice3, setDice3] = useState(false);
  const [dice4, setDice4] = useState(true);
  const [annoyingText, setAnnoyingText] = useState(true);
  const [diceNumber, setDiceNumber] = useState(0);

  const [position1, setPosition1] = useState(1000);
  const [position2, setPosition2] = useState(1000);
  const [position3, setPosition3] = useState(1000);
  const [position4, setPosition4] = useState(1000);
  const [position5, setPosition5] = useState(1000);
  const [position6, setPosition6] = useState(1000);
  const [position7, setPosition7] = useState(1000);
  const [position8, setPosition8] = useState(1000);

  const [movementOptions, setMovementOptions] = useState([]);
  //cordendas
  const [red_cords, setRed_cords] = useState([155, 155]);
  const [green_cords, setGreen_cords] = useState([155, 155]);
  const [pink_cords, setPink_cords] = useState([155, 155]);
  const [blue_cords, setBlue_cords] = useState([155, 155]);
  const [purple_cords, setPurple_cords] = useState([155, 155]);
  const [yellow_cords, setYellow_cords] = useState([155, 155]);
  const [white_cords, setWhite_cords] = useState([155, 155]);
  const [brown_cords, setBrown_cords] = useState([155, 155]);



  const HandleMovement = ({ diceResult }) => {
    let main_position
    let result= []

    if (turn ==1){main_position = position1}
    else if (turn ==2){main_position = position2}
    else if (turn ==3){main_position = position3}
    else if (turn ==4){main_position = position4}
    else if (turn ==5){main_position = position5}
    else if (turn ==6){main_position = position6}
    else if (turn ==7){main_position = position7}
    else if (turn ==8){main_position = position8}


    
    if (main_position < 50){result = HandleCircleMovement({ diceResult, main_position, check: true })}
    else if (main_position > 50 && main_position < 1000){result = HandleVerticalMovement(diceResult, main_position)}
    else if (main_position == 1000){result = HandleTopMovement(diceResult, 0)}
    
    setMovementOptions(result)
  }

  const HandleCircleMovement = ({diceResult, main_position, check}) => {
    let movimientos = diceResult
    
    let possibilities = []
    
    let temporal_positionA = main_position
    let temporal_positionB = main_position

    while (movimientos > 0){
      if (check === true && movimientos >= 1) {
        if (temporal_positionA == 1 || temporal_positionA == 8 || temporal_positionA == 15 || temporal_positionA == 22 || temporal_positionA == 29 || temporal_positionA == 36){
          let temp_posiblidad = HandleCheckBaby(temporal_positionA, movimientos)
          possibilities.push(temp_posiblidad)
        }
        if (temporal_positionB == 1 || temporal_positionB == 8 || temporal_positionB == 15 || temporal_positionB == 22 || temporal_positionB == 29 || temporal_positionB == 36){
          let temp_posiblidad = HandleCheckBaby(temporal_positionB, movimientos)
          possibilities.push(temp_posiblidad)
        }
      }
      movimientos -= 1
      temporal_positionA += 1
      temporal_positionB -= 1
    }

    if (temporal_positionA > 42){
      temporal_positionA -= 42
    }
    if (temporal_positionB < 1){
      temporal_positionB += 42
    }

    possibilities.push(temporal_positionA)
    possibilities.push(temporal_positionB)


    return possibilities
  }

  const HandleCheckBaby = (positionCheck, movements_left) => {
    let square
    if (positionCheck === 1) {
      square = 50 + movements_left;
      if (square === 56) {
        square = 1000;
      }
    } else if (positionCheck === 8) {
      square = 60 + movements_left;
      if (square === 66) {
        square = 1000;
      }
    } else if (positionCheck === 15) {
      square = 70 + movements_left;
      if (square === 76) {
        square = 1000;
      }
    } else if (positionCheck === 22) {
      square = 80 + movements_left;
      if (square === 86) {
        square = 1000;
      }
    } else if (positionCheck === 29) {
      square = 90 + movements_left;
      if (square === 96) {
        square = 1000;
      }
    } else if (positionCheck === 36) {
      square = 100 + movements_left;
      if (square === 106) {
        square = 1000;
      }
    }
    return square
  }
 

  const HandleVerticalMovement = (diceResult, main_position) => {
    let temporal_positionA = main_position + diceResult
    let temporal_positionB = main_position - diceResult
    let possibilities = []
    
    let low_number
    let top_number
    let except_number
    let planet_number
    
    if (main_position > 50 && main_position < 60){
      low_number = 50
      top_number = 56
      except_number = 1
      planet_number = 1
    } else if (main_position > 60 && main_position < 70){
      low_number = 60
      top_number = 66
      except_number = 2
      planet_number = 8
    } else if (main_position > 70 && main_position < 80){
      low_number = 70
      top_number = 76
      except_number = 3
      planet_number = 15
    } else if (main_position > 80 && main_position < 90){
      low_number = 80
      top_number = 86
      except_number = 4
      planet_number = 22
    } else if (main_position > 90 && main_position < 100){
      low_number = 90
      top_number = 96
      except_number = 5
      planet_number = 29
    } else if (main_position > 100 && main_position < 110){
      low_number = 100
      top_number = 106
      except_number = 6
      planet_number = 36
    }

    if (temporal_positionA == top_number){
      possibilities.push(1000)
    } else if (temporal_positionA > top_number){
      let movimientos = temporal_positionA - top_number
      possibilities = [...possibilities, ...HandleTopMovement(movimientos, except_number)];
    } else {
      possibilities.push(temporal_positionA)
    }
    if (temporal_positionB == low_number){
      possibilities.push(planet_number)
    } else if (temporal_positionB < low_number){
      let movimientos = low_number - temporal_positionB
      temporal_positionB = planet_number
      possibilities = [...possibilities, ...HandleCircleMovement({ diceResult: movimientos, main_position: temporal_positionB, check: false })];
    } else {
      possibilities.push(temporal_positionB)
    }


    return possibilities
  }

  const HandleTopMovement = (diceResult, except) => {
    let possibilities = []
    let op_A = 56 - diceResult; if (op_A == 50){op_A = 1}; if (except != 1) {possibilities.push(op_A)}
    let op_B = 66 - diceResult; if (op_B == 60){op_B = 8}; if (except != 2) {possibilities.push(op_B)}
    let op_C = 76 - diceResult; if (op_C == 70){op_C = 15}; if (except != 3) {possibilities.push(op_C)}
    let op_D = 86 - diceResult; if (op_D == 80){op_D = 22}; if (except != 4) {possibilities.push(op_D)}
    let op_E = 96 - diceResult; if (op_E == 90){op_E = 29}; if (except != 5) {possibilities.push(op_E)}
    let op_F = 106 - diceResult; if (op_F == 100){op_F = 36}; if (except != 6) {possibilities.push(op_F)}
    return possibilities
  }

  const HandleTeleport = (value, cordY, cordX) => {
    if (turn == 1) {
      setRed_cords([cordY, cordX]);
      setPosition1(value);
      setMovementOptions([]);
    }
    else if (turn == 2) {
      setGreen_cords([cordY, cordX]);
      setPosition2(value);
      setMovementOptions([]);
    }
    else if (turn == 3) {
      setPink_cords([cordY, cordX])
      setPosition3(value)
      setMovementOptions([])
    }
    else if (turn == 4) {
      setBlue_cords([cordY, cordX])
      setPosition4(value)
      setMovementOptions([])
    }
    else if (turn == 5) {
      setPurple_cords([cordY, cordX])
      setPosition5(value)
      setMovementOptions([])
    }
    else if (turn == 6) {
      setYellow_cords([cordY, cordX])
      setPosition6(value)
      setMovementOptions([])
    }
    else if (turn == 7) {
      setWhite_cords([cordY, cordX])
      setPosition7(value)
      setMovementOptions([])
    }
    else if (turn == 8) {
      setBrown_cords([cordY, cordX])
      setPosition8(value)
      setMovementOptions([])
    }
    if ([3, 6, 10, 13, 17, 20, 24, 27, 31, 34, 38, 41].includes(value)){
      setDice4(false)
      setDice(true)
    } else {
      navigation.navigate('PreguntaUnica', { player: turn, place: value, onGoBack: handleGoBack });
    }

  }

  const HandleDice = async () => {
    setAnnoyingText(false)
    const randomDice = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomDice);
    setDice2(true)
    await delay(1000)
    setDice2(false)
    setDice3(true)
    await delay(1500)
    setDice3(false)
    setAnnoyingText(true)
    setDice(false)
    setDice4(true)
    HandleMovement({ diceResult: randomDice} )
  }


  const HandleNextTurn = () => {
    if (context?.number_of_players > 1){
    if (context?.number_of_players > turn){
      setTurn(turn+1)
    } else {
      setTurn(1)
    }}
    else {
      setDice4(false)
      setDice(true)
    }
  }

  useEffect(() => {
    setDice4(false)
    setDice(true)
  }, [turn]); 

  return (
    <View style={styles.container}>
        <View style={styles.topContainerMap}>
          <View style={styles.sideBox}>
              <TouchableOpacity onPress={() => navigation.navigate('CategoriasMain')}>
                <Image
                style={styles.image50}
                source={require('../../assets/images/back.png')}
                />
              </TouchableOpacity>
          </View>
          
          <View style={styles.leyendaBox}>
            <TouchableOpacity onPress={() => leyenda_pop_up ? setLeyendaPopUp(false) : setLeyendaPopUp(true)}>
                <Image
                style={styles.leyenda}
                source={require('../../assets/images/TRIVIA.png')}
                />
            </TouchableOpacity>
          </View>

          <View>
          <TouchableOpacity style={styles.sideBox} onPress={HandleNextTurn}>
                <Image
                style={styles.image50}
                source={require('../../assets/images/settings.png')}
                />
          </TouchableOpacity>
          </View>
          
        </View>
        {leyenda_pop_up ? 
        <View style={styles.midContainer}>
          <TouchableOpacity onPress={() => setLeyendaPopUp(false)}>
          <Text style={[styles.leyendaText, {color:'#f90a0a'}]}>CATEGORY 1: {context?.category_red}</Text>
          <Text style={[styles.leyendaText, {color:'#37ee2e'}]}>CATEGORY 2: {context?.category_green}</Text>
          <Text style={[styles.leyendaText, {color:'#ff00c6'}]}>CATEGORY 3: {context?.category_pink}</Text>
          <Text style={[styles.leyendaText, {color:'#00eaff'}]}>CATEGORY 4: {context?.category_blue}</Text>
          <Text style={[styles.leyendaText, {color:'#ba00ff'}]}>CATEGORY 5: {context?.category_purple}</Text>
          <Text style={[styles.leyendaText, {color:'#fff600'}]}>CATEGORY 6: {context?.category_yellow}</Text>
          </TouchableOpacity>
        </View>
        :
        <View style={styles.midContainer}>

          {dice4 && (
          <View style={styles.numberBox}>
            <Image style={styles.image50} source={require('../../assets/images/dice.png')}/>
            <View style={styles.numberBoxBox}>
              <Text style={styles.numberBoxBoxText}>{diceNumber}</Text>
            </View>
          </View>
          )}

          <Text style={[styles.playerText, {color: 'white'}]}>TURN OF PLAYER {turn}</Text>
          <View style={[styles.mapBox]}>

          <TouchableOpacity style={[styles.planetBox, {top: 0, left: 75}, movementOptions.includes(1) ? styles.is_option : null]} onPress={movementOptions.includes(1) ? () => HandleTeleport(1, 0, 75, "pink", "si") : null}><Image source={pinkPlanet} style={styles.planet}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 2, left: 104}, movementOptions.includes(2) ? styles.is_option : null]} onPress={movementOptions.includes(2) ? () => HandleTeleport(2, 2, 104, "blue", "no") : null}><Image source={blueAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 5, left: 128}, movementOptions.includes(3) ? styles.is_option : null]} onPress={movementOptions.includes(3) ? () => HandleTeleport(3, 5, 128, "satellite", "no") : null}><Image source={satellite} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 6, left: 153}, movementOptions.includes(4) ? styles.is_option : null]} onPress={movementOptions.includes(4) ? () => HandleTeleport(4, 6, 153, "purple", "no") : null}><Image source={purpleAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 2, right: 153}, movementOptions.includes(5) ? styles.is_option : null]} onPress={movementOptions.includes(5) ? () => HandleTeleport(5, 6, 340-153, "red", "no") : null}><Image source={redAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 1, right: 128}, movementOptions.includes(6) ? styles.is_option : null]} onPress={movementOptions.includes(6) ? () => HandleTeleport(6, 1, 340-128, "satellite", "no") : null}><Image source={satellite} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 0, right: 104}, movementOptions.includes(7) ? styles.is_option : null]} onPress={movementOptions.includes(7) ? () => HandleTeleport(7, 0, 340-104, "green", "no") : null}><Image source={greenAsteroid} style={styles.asteroid}/></TouchableOpacity>
          
          <TouchableOpacity style={[styles.planetBox, {top: 0, right: 75}, movementOptions.includes(8) ? styles.is_option : null]} onPress={movementOptions.includes(8) ? () => HandleTeleport(8, 0, 340-75, "yellow", "si") : null}><Image source={yellowPlanet} style={styles.planet}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 10, right: 50}, movementOptions.includes(9) ? styles.is_option : null]} onPress={movementOptions.includes(9) ? () => HandleTeleport(9, 10, 340-50, "purple", "no") : null}><Image source={purpleAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 35, right: 40}, movementOptions.includes(10) ? styles.is_option : null]} onPress={movementOptions.includes(10) ? () => HandleTeleport(10, 35, 340-40, "satellite", "no") : null}><Image source={satellite} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 60, right: 35}, movementOptions.includes(11) ? styles.is_option : null]} onPress={movementOptions.includes(11) ? () => HandleTeleport(11, 60, 340-35, "red", "no") : null}><Image source={redAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 245, right: 25}, movementOptions.includes(12) ? styles.is_option : null]} onPress={movementOptions.includes(12) ? () => HandleTeleport(12, 340-245, 340-25, "green", "no") : null}><Image source={greenAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 220, right: 18}, movementOptions.includes(13) ? styles.is_option : null]} onPress={movementOptions.includes(13) ? () => HandleTeleport(13, 340-220, 340-18, "satellite", "no") : null}><Image source={satellite} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 195, right: 10}, movementOptions.includes(14) ? styles.is_option : null]} onPress={movementOptions.includes(14) ? () => HandleTeleport(14, 340-195, 340-10, "pink", "no") : null}><Image source={pinkAsteroid} style={styles.asteroid}/></TouchableOpacity>
          
          <TouchableOpacity style={[styles.planetBox, {top: 160, right: 0}, movementOptions.includes(15) ? styles.is_option : null]} onPress={movementOptions.includes(15) ? () => HandleTeleport(15, 160, 340, "blue", "si") : null}><Image source={bluePlanet} style={styles.planet}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 190, right: 10}, movementOptions.includes(16) ? styles.is_option : null]} onPress={movementOptions.includes(16) ? () => HandleTeleport(16, 190, 340-10, "red", "no") : null}><Image source={redAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 215, right: 18}, movementOptions.includes(17) ? styles.is_option : null]} onPress={movementOptions.includes(17) ? () => HandleTeleport(17, 215, 340-18, "satellite", "no") : null}><Image source={satellite} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 240, right: 25}, movementOptions.includes(18) ? styles.is_option : null]} onPress={movementOptions.includes(18) ? () => HandleTeleport(18, 240, 340-25, "green", "no") : null}><Image source={greenAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 65, right: 35}, movementOptions.includes(19) ? styles.is_option : null]} onPress={movementOptions.includes(19) ? () => HandleTeleport(19, 340-65, 340-35, "pink", "no") : null}><Image source={pinkAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 40, right: 40}, movementOptions.includes(20) ? styles.is_option : null]} onPress={movementOptions.includes(20) ? () => HandleTeleport(20, 340-40, 340-18, "satellite", "no") : null}><Image source={satellite} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 15, right: 50}, movementOptions.includes(21) ? styles.is_option : null]} onPress={movementOptions.includes(21) ? () => HandleTeleport(21, 340-15, 340-50, "yellow", "no") : null}><Image source={yellowAsteroid} style={styles.asteroid}/></TouchableOpacity>
          
          <TouchableOpacity style={[styles.planetBox, {bottom: 0, left: 250}, movementOptions.includes(22) ? styles.is_option : null]} onPress={movementOptions.includes(22) ? () => HandleTeleport(22, 340, 250, "purple", "si") : null}><Image source={purplePlanet} style={styles.planet}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 5, right: 104}, movementOptions.includes(23) ? styles.is_option : null]} onPress={movementOptions.includes(23) ? () => HandleTeleport(23, 340-5, 340-104, "green", "no") : null}><Image source={greenAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 5, right: 128}, movementOptions.includes(24) ? styles.is_option : null]} onPress={movementOptions.includes(24) ? () => HandleTeleport(24, 340-5, 340-128, "satellite", "no") : null}><Image source={satellite} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 1, left: 153}, movementOptions.includes(25) ? styles.is_option : null]} onPress={movementOptions.includes(25) ? () => HandleTeleport(25, 340-1, 153, "pink", "no") : null}><Image source={pinkAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 3, right: 153}, movementOptions.includes(26) ? styles.is_option : null]} onPress={movementOptions.includes(26) ? () => HandleTeleport(26, 340-1, 340-153, "yellow", "no") : null}><Image source={yellowAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 3, left: 128}, movementOptions.includes(27) ? styles.is_option : null]} onPress={movementOptions.includes(27) ? () => HandleTeleport(27, 340-3, 128, "satellite", "no") : null}><Image source={satellite} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 5, left: 104}, movementOptions.includes(28) ? styles.is_option : null]} onPress={movementOptions.includes(28) ? () => HandleTeleport(28, 340-5, 104, "blue", "no") : null}><Image source={blueAsteroid} style={styles.asteroid}/></TouchableOpacity>
          
          <TouchableOpacity style={[styles.planetBox, {bottom: 0, left: 75}, movementOptions.includes(29) ? styles.is_option : null]} onPress={movementOptions.includes(29) ? () => HandleTeleport(29, 340, 75, "red", "si") : null}><Image source={redPlanet} style={styles.planet}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 15, left: 50}, movementOptions.includes(30) ? styles.is_option : null]} onPress={movementOptions.includes(30) ? () => HandleTeleport(30, 340-15, 50, "pink", "no") : null}><Image source={pinkAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 40, left: 40}, movementOptions.includes(31) ? styles.is_option : null]} onPress={movementOptions.includes(31) ? () => HandleTeleport(31, 340-40, 40, "satellite", "no") : null}><Image source={satellite} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 65, left: 35}, movementOptions.includes(32) ? styles.is_option : null]} onPress={movementOptions.includes(32) ? () => HandleTeleport(32, 340-65, 35, "yellow", "no") : null}><Image source={yellowAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 240, left: 25}, movementOptions.includes(33) ? styles.is_option : null]} onPress={movementOptions.includes(33) ? () => HandleTeleport(33, 240, 25, "blue", "no") : null}><Image source={blueAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 215, left: 18}, movementOptions.includes(34) ? styles.is_option : null]} onPress={movementOptions.includes(34) ? () => HandleTeleport(34, 215, 18, "satellite", "no") : null}><Image source={satellite} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 190, left: 10}, movementOptions.includes(35) ? styles.is_option : null]} onPress={movementOptions.includes(35) ? () => HandleTeleport(35, 190, 10, "purple", "no") : null}><Image source={purpleAsteroid} style={styles.asteroid}/></TouchableOpacity>
          
          <TouchableOpacity style={[styles.planetBox, {top: 160, left: 0}, movementOptions.includes(36) ? styles.is_option : null]} onPress={movementOptions.includes(36) ? () => HandleTeleport(36, 160, 0, "green", "si") : null}><Image source={greenPlanet} style={styles.planet}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 195, left: 10}, movementOptions.includes(37) ? styles.is_option : null]} onPress={movementOptions.includes(37) ? () => HandleTeleport(37, 340-195, 10, "yellow", "no") : null}><Image source={yellowAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 220, left: 18}, movementOptions.includes(38) ? styles.is_option : null]} onPress={movementOptions.includes(38) ? () => HandleTeleport(38, 340-220, 18, "satellite", "no") : null}><Image source={satellite} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 245, left: 25}, movementOptions.includes(39) ? styles.is_option : null]} onPress={movementOptions.includes(39) ? () => HandleTeleport(39, 340-245, 25, "blue", "no") : null}><Image source={blueAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 60, left: 35}, movementOptions.includes(40) ? styles.is_option : null]} onPress={movementOptions.includes(40) ? () => HandleTeleport(40, 60, 35, "purple", "no") : null}><Image source={purpleAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 35, left: 40}, movementOptions.includes(41) ? styles.is_option : null]} onPress={movementOptions.includes(41) ? () => HandleTeleport(41, 35, 40, "satellite", "no") : null}><Image source={satellite} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 10, left: 50}, movementOptions.includes(42) ? styles.is_option : null]} onPress={movementOptions.includes(42) ? () => HandleTeleport(42, 10, 50, "red", "no") : null}><Image source={redAsteroid} style={styles.asteroid}/></TouchableOpacity>

          <TouchableOpacity style={[styles.asteroidBox, {bottom: 300, left: 85}, movementOptions.includes(51) ? styles.is_option : null]} onPress={movementOptions.includes(51) ? () => HandleTeleport(51, 340-300, 85, "green", "si") : null}><Image source={greenAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 275, left: 96}, movementOptions.includes(52) ? styles.is_option : null]} onPress={movementOptions.includes(52) ? () => HandleTeleport(52, 340-275, 96, "red", "no") : null}><Image source={redAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 250, left: 115}, movementOptions.includes(53) ? styles.is_option : null]} onPress={movementOptions.includes(53) ? () => HandleTeleport(53, 340-250, 115, "purple", "no") : null}><Image source={purpleAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 225, left: 125}, movementOptions.includes(54) ? styles.is_option : null]} onPress={movementOptions.includes(54) ? () => HandleTeleport(54, 340-225, 125, "blue", "no") : null}><Image source={blueAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 200, left: 140}, movementOptions.includes(55) ? styles.is_option : null]} onPress={movementOptions.includes(55) ? () => HandleTeleport(85, 340-200, 140, "yellow", "no") : null}><Image source={yellowAsteroid} style={styles.asteroid}/></TouchableOpacity>

          <TouchableOpacity style={[styles.asteroidBox, {bottom: 300, right: 85}, movementOptions.includes(61) ? styles.is_option : null]} onPress={movementOptions.includes(61) ? () => HandleTeleport(61, 340-300, 340-85, "pink", "no") : null}><Image source={pinkAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 275, right: 96}, movementOptions.includes(62) ? styles.is_option : null]} onPress={movementOptions.includes(62) ? () => HandleTeleport(62, 340-275, 340-96, "green", "no") : null}><Image source={greenAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 250, right: 115}, movementOptions.includes(63) ? styles.is_option : null]} onPress={movementOptions.includes(63) ? () => HandleTeleport(63, 340-250, 340-115, "red", "no") : null}><Image source={redAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 225, right: 125}, movementOptions.includes(64) ? styles.is_option : null]} onPress={movementOptions.includes(64) ? () => HandleTeleport(64, 340-225, 340-125, "purple", "no") : null}><Image source={purpleAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {bottom: 200, right: 140}, movementOptions.includes(65) ? styles.is_option : null]} onPress={movementOptions.includes(65) ? () => HandleTeleport(65, 340-200, 340-140, "blue", "no") : null}><Image source={blueAsteroid} style={styles.asteroid}/></TouchableOpacity>

          <TouchableOpacity style={[styles.asteroidBox, {top: 164, left: 300}, movementOptions.includes(71) ? styles.is_option : null]} onPress={movementOptions.includes(71) ? () => HandleTeleport(71, 164, 300, "yellow", "no") : null}><Image source={yellowAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 157, left: 275}, movementOptions.includes(72) ? styles.is_option : null]} onPress={movementOptions.includes(72) ? () => HandleTeleport(72, 157, 275, "pink", "no") : null}><Image source={pinkAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 162, left: 250}, movementOptions.includes(73) ? styles.is_option : null]} onPress={movementOptions.includes(73) ? () => HandleTeleport(73, 162, 250, "green", "no") : null}><Image source={greenAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 157, left: 225}, movementOptions.includes(74) ? styles.is_option : null]} onPress={movementOptions.includes(74) ? () => HandleTeleport(74, 157, 225, "red", "no") : null}><Image source={redAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 163, left: 200}, movementOptions.includes(75) ? styles.is_option : null]} onPress={movementOptions.includes(75) ? () => HandleTeleport(75, 163, 200, "purple", "no") : null}><Image source={purpleAsteroid} style={styles.asteroid}/></TouchableOpacity>

          <TouchableOpacity style={[styles.asteroidBox, {top: 300, right: 85}, movementOptions.includes(81) ? styles.is_option : null]} onPress={movementOptions.includes(81) ? () => HandleTeleport(81, 300, 340-85, "pink", "no") : null}><Image source={blueAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 275, right: 96}, movementOptions.includes(82) ? styles.is_option : null]} onPress={movementOptions.includes(82) ? () => HandleTeleport(82, 275, 340-96, "pink", "no") : null}><Image source={yellowAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 250, right: 115}, movementOptions.includes(83) ? styles.is_option : null]} onPress={movementOptions.includes(83) ? () => HandleTeleport(83, 250, 340-115, "pink", "no") : null}><Image source={pinkAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 225, right: 125}, movementOptions.includes(84) ? styles.is_option : null]} onPress={movementOptions.includes(84) ? () => HandleTeleport(84, 225, 340-125, "pink", "no") : null}><Image source={greenAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 200, right: 140}, movementOptions.includes(85) ? styles.is_option : null]} onPress={movementOptions.includes(85) ? () => HandleTeleport(85, 200, 340-140, "pink", "no") : null}><Image source={redAsteroid} style={styles.asteroid}/></TouchableOpacity>

          <TouchableOpacity style={[styles.asteroidBox, {top: 300, left: 85}, movementOptions.includes(91) ? styles.is_option : null]} onPress={movementOptions.includes(91) ? () => HandleTeleport(91, 300, 85, "pink", "no") : null}><Image source={purpleAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 275, left: 96}, movementOptions.includes(92) ? styles.is_option : null]} onPress={movementOptions.includes(92) ? () => HandleTeleport(92, 275, 96, "pink", "no") : null}><Image source={blueAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 250, left: 115}, movementOptions.includes(93) ? styles.is_option : null]} onPress={movementOptions.includes(93) ? () => HandleTeleport(93, 250, 115, "pink", "no") : null}><Image source={yellowAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 225, left: 125}, movementOptions.includes(94) ? styles.is_option : null]} onPress={movementOptions.includes(94) ? () => HandleTeleport(94, 225, 125, "pink", "no") : null}><Image source={pinkAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 200, left: 140}, movementOptions.includes(95) ? styles.is_option : null]} onPress={movementOptions.includes(95) ? () => HandleTeleport(85, 200, 140, "pink", "no") : null}><Image source={greenAsteroid} style={styles.asteroid}/></TouchableOpacity>

          <TouchableOpacity style={[styles.asteroidBox, {top: 164, right: 300}, movementOptions.includes(101) ? styles.is_option : null]} onPress={movementOptions.includes(101) ? () => HandleTeleport(101, 164, 340-300, "pink", "no") : null}><Image source={redAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 157, right: 275}, movementOptions.includes(102) ? styles.is_option : null]} onPress={movementOptions.includes(102) ? () => HandleTeleport(102, 157, 340-275, "pink", "no") : null}><Image source={purpleAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 162, right: 250}, movementOptions.includes(103) ? styles.is_option : null]} onPress={movementOptions.includes(103) ? () => HandleTeleport(103, 162, 340-250, "pink", "no") : null}><Image source={blueAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 157, right: 225}, movementOptions.includes(104) ? styles.is_option : null]} onPress={movementOptions.includes(104) ? () => HandleTeleport(104, 157, 340-225, "pink", "no") : null}><Image source={yellowAsteroid} style={styles.asteroid}/></TouchableOpacity>
          <TouchableOpacity style={[styles.asteroidBox, {top: 163, right: 200}, movementOptions.includes(105) ? styles.is_option : null]} onPress={movementOptions.includes(105) ? () => HandleTeleport(105, 163, 340-200, "pink", "no") : null}><Image source={pinkAsteroid} style={styles.asteroid}/></TouchableOpacity>

          <TouchableOpacity style={[styles.rocketBox, {top: 150, left: 150,}, movementOptions.includes(1000) ? styles.is_option : null]} onPress={movementOptions.includes(1000) ? () => HandleTeleport(1000, 180, 180) : null}><Image source={rocket} style={styles.image50}/></TouchableOpacity>
          
          <View style={[styles.ficha, {top: red_cords[0], left: red_cords[1], backgroundColor: '#f90a0a'}]}></View>
          {context.number_of_players > 1 ? <View style={[styles.ficha, {top: green_cords[0], left: green_cords[1], backgroundColor: '#37ee2e'}]}></View> : null}
          {context.number_of_players > 2 ? <View style={[styles.ficha, {top: pink_cords[0], left: pink_cords[1], backgroundColor: '#ff00c6'}]}></View> : null}
          {context.number_of_players > 3 ? <View style={[styles.ficha, {top: blue_cords[0], left: blue_cords[1], backgroundColor: '#00eaff'}]}></View> : null}
          {context.number_of_players > 4 ? <View style={[styles.ficha, {top: purple_cords[0], left: purple_cords[1], backgroundColor: '#ba00ff'}]}></View> : null}
          {context.number_of_players > 5 ? <View style={[styles.ficha, {top: yellow_cords[0], left: yellow_cords[1], backgroundColor: '#fff600'}]}></View> : null}
          {context.number_of_players > 6 ? <View style={[styles.ficha, {top: white_cords[0], left: white_cords[1], backgroundColor: '#ffffff'}]}></View> : null}
          {context.number_of_players > 7 ? <View style={[styles.ficha, {top: brown_cords[0], left: brown_cords[1], backgroundColor: '#800000'}]}></View> : null}

          {dice && 
            <View style={styles.dadoBox}>
            <TouchableOpacity style={styles.dadoThrow} onPress={HandleDice}>
            {annoyingText && (<Text style={styles.dadoThrowText}>THROW DICE</Text>)}
            </TouchableOpacity>
              {dice2 && (
                <>
                  <Image style={styles.dadoGif} source={require('../../assets/images/dice.gif')}/>
                  
                </>
              )}
              {dice3 && (
                <>
                <Text style={styles.dadoResultado}>{diceNumber}</Text>
                </>
              )}
            </View>
          }
          </View>
        </View>}
        <View style={styles.bottomContainer}>
          <View style={styles.rowAstronauts}>
            {context?.number_of_players > 0 && (
            <View style={[styles.astronautBox, turn === 1 ? styles.turn : null]}>
              <Image
              style={styles.astronauta}
              source={require('../../assets/images/astro_red.png')}
              />
              <View style={styles.randomBox}>
              {context?.quesitos_one[0] === 1 ? (<Image style={styles.stars} source={star_red} />):null}
              {context?.quesitos_one[1] === 1 ? (<Image style={styles.stars} source={star_green} />):null}
              {context?.quesitos_one[2] === 1 ? (<Image style={styles.stars} source={star_pink} />):null}
              {context?.quesitos_one[3] === 1 ? (<Image style={styles.stars} source={star_blue} />):null}
              {context?.quesitos_one[4] === 1 ? (<Image style={styles.stars} source={star_purple} />):null}
              {context?.quesitos_one[5] === 1 ? (<Image style={styles.stars} source={star_yellow} />):null}
              </View>
            </View>
            )}
            {context?.number_of_players > 1 && (
            <View style={[styles.astronautBox, turn === 2 ? styles.turn : null]}>
              <Image
              style={styles.astronauta}
              source={require('../../assets/images/astro_green.png')}
              />
              <View style={styles.randomBox}>
              {context?.quesitos_two[0] === 1 ? (<Image style={styles.stars} source={star_red} />):null}
              {context?.quesitos_two[1] === 1 ? (<Image style={styles.stars} source={star_green} />):null}
              {context?.quesitos_two[2] === 1 ? (<Image style={styles.stars} source={star_pink} />):null}
              {context?.quesitos_two[3] === 1 ? (<Image style={styles.stars} source={star_blue} />):null}
              {context?.quesitos_two[4] === 1 ? (<Image style={styles.stars} source={star_purple} />):null}
              {context?.quesitos_two[5] === 1 ? (<Image style={styles.stars} source={star_yellow} />):null}
              </View>
            </View>
            )}
            {context?.number_of_players > 2 && (
            <View style={[styles.astronautBox, turn === 3 ? styles.turn : null]}>
              <Image
              style={styles.astronauta}
              source={require('../../assets/images/astro_pink.png')}
              />
              <View style={styles.randomBox}>
              {context?.quesitos_three[0] === 1 ? (<Image style={styles.stars} source={star_red} />):null}
              {context?.quesitos_three[1] === 1 ? (<Image style={styles.stars} source={star_green} />):null}
              {context?.quesitos_three[2] === 1 ? (<Image style={styles.stars} source={star_pink} />):null}
              {context?.quesitos_three[3] === 1 ? (<Image style={styles.stars} source={star_blue} />):null}
              {context?.quesitos_three[4] === 1 ? (<Image style={styles.stars} source={star_purple} />):null}
              {context?.quesitos_three[5] === 1 ? (<Image style={styles.stars} source={star_yellow} />):null}
              </View>
            </View>
            )}
            {context?.number_of_players > 3 && (
            <View style={[styles.astronautBox, turn === 4 ? styles.turn : null]}>
              <Image
              style={styles.astronauta}
              source={require('../../assets/images/astro_blue.png')}
              />
              <View style={styles.randomBox}>
              {context?.quesitos_four[0] === 1 ? (<Image style={styles.stars} source={star_red} />):null}
              {context?.quesitos_four[1] === 1 ? (<Image style={styles.stars} source={star_green} />):null}
              {context?.quesitos_four[2] === 1 ? (<Image style={styles.stars} source={star_pink} />):null}
              {context?.quesitos_four[3] === 1 ? (<Image style={styles.stars} source={star_blue} />):null}
              {context?.quesitos_four[4] === 1 ? (<Image style={styles.stars} source={star_purple} />):null}
              {context?.quesitos_four[5] === 1 ? (<Image style={styles.stars} source={star_yellow} />):null}
              </View>
            </View>
            )}
          </View>
          <View style={styles.rowAstronauts}>
            {context?.number_of_players > 4 && (
            <View style={[styles.astronautBox, turn === 5 ? styles.turn : null]}>
              <Image
              style={styles.astronauta}
              source={require('../../assets/images/astro_purple.png')}
              />
              <View style={styles.randomBox}>
              {context?.quesitos_five[0] === 1 ? (<Image style={styles.stars} source={star_red} />):null}
              {context?.quesitos_five[1] === 1 ? (<Image style={styles.stars} source={star_green} />):null}
              {context?.quesitos_five[2] === 1 ? (<Image style={styles.stars} source={star_pink} />):null}
              {context?.quesitos_five[3] === 1 ? (<Image style={styles.stars} source={star_blue} />):null}
              {context?.quesitos_five[4] === 1 ? (<Image style={styles.stars} source={star_purple} />):null}
              {context?.quesitos_five[5] === 1 ? (<Image style={styles.stars} source={star_yellow} />):null}
              </View>
            </View>
            )}
            {context?.number_of_players > 5 && (
            <View style={[styles.astronautBox, turn === 6 ? styles.turn : null]}>
              <Image
              style={styles.astronauta}
              source={require('../../assets/images/astro_yellow.png')}
              />
              <View style={styles.randomBox}>
              {context?.quesitos_six[0] === 1 ? (<Image style={styles.stars} source={star_red} />):null}
              {context?.quesitos_six[1] === 1 ? (<Image style={styles.stars} source={star_green} />):null}
              {context?.quesitos_six[2] === 1 ? (<Image style={styles.stars} source={star_pink} />):null}
              {context?.quesitos_six[3] === 1 ? (<Image style={styles.stars} source={star_blue} />):null}
              {context?.quesitos_six[4] === 1 ? (<Image style={styles.stars} source={star_purple} />):null}
              {context?.quesitos_six[5] === 1 ? (<Image style={styles.stars} source={star_yellow} />):null}
              </View>
            </View>
            )}
            {context?.number_of_players > 6 && (
            <View style={[styles.astronautBox, turn === 7 ? styles.turn : null]}>
              <Image
              style={styles.astronauta}
              source={require('../../assets/images/astro_brown.png')}
              />
              <View style={styles.randomBox}>
              {context?.quesitos_seven[0] === 1 ? (<Image style={styles.stars} source={star_red} />):null}
              {context?.quesitos_seven[1] === 1 ? (<Image style={styles.stars} source={star_green} />):null}
              {context?.quesitos_seven[2] === 1 ? (<Image style={styles.stars} source={star_pink} />):null}
              {context?.quesitos_seven[3] === 1 ? (<Image style={styles.stars} source={star_blue} />):null}
              {context?.quesitos_seven[4] === 1 ? (<Image style={styles.stars} source={star_purple} />):null}
              {context?.quesitos_seven[5] === 1 ? (<Image style={styles.stars} source={star_yellow} />):null}
              </View>
            </View>
            )}
            {context?.number_of_players > 7 && (
            <View style={[styles.astronautBox, turn === 8 ? styles.turn : null]}>
              <Image
              style={styles.astronauta}
              source={require('../../assets/images/astro_white.png')}
              />
              <View style={styles.randomBox}>
              {context?.quesitos_eight[0] === 1 ? (<Image style={styles.stars} source={star_red} />):null}
              {context?.quesitos_eight[1] === 1 ? (<Image style={styles.stars} source={star_green} />):null}
              {context?.quesitos_eight[2] === 1 ? (<Image style={styles.stars} source={star_pink} />):null}
              {context?.quesitos_eight[3] === 1 ? (<Image style={styles.stars} source={star_blue} />):null}
              {context?.quesitos_eight[4] === 1 ? (<Image style={styles.stars} source={star_purple} />):null}
              {context?.quesitos_eight[5] === 1 ? (<Image style={styles.stars} source={star_yellow} />):null}
              </View>
            </View>
            )}
          </View>
        </View>
    </View>
  );
}

export default Tablero;