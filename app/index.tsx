//necesidades
import 'react-native-gesture-handler';
import * as React from 'react';
import { useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//contexto
import { MyContext } from './modules/MyContext';

// pantallas
import HomeScreen from './screens/HomeScreen';
import JugarScreen from './screens/JugarScreen';
import PreguntasScreen from './screens/PreguntasScreen';
import CategoriasMain from './screens/CategoriasMain';
import CategoriasClasicas from './screens/CategoriasClasicas';
import CategoriasNuevas from './screens/CategoriasNuevas';
import CategoriasAmigos from './screens/CategoriasAmigos';
import Tablero from './screens/Tablero';
import PreguntaUnica from './screens/PreguntaUnica';



const Stack = createNativeStackNavigator();

export default function Index() {
  //esto es para que funcione el contexto
  const [number_of_players, setNumberOfPlayers] = useState<number>(1);
  
  const [quesitos_one, setQuesitosOne] = useState<number[]>([0,0,0,0,0,0]);
  const [quesitos_two, setQuesitosTwo] = useState<number[]>([0,0,0,0,0,0]);
  const [quesitos_three, setQuesitosThree] = useState<number[]>([0,0,0,0,0,0]);
  const [quesitos_four, setQuesitosFour] = useState<number[]>([0,0,0,0,0,0]);
  const [quesitos_five, setQuesitosFive] = useState<number[]>([0,0,0,0,0,0]);
  const [quesitos_six, setQuesitosSix] = useState<number[]>([0,0,0,0,0,0]);
  const [quesitos_seven, setQuesitosSeven] = useState<number[]>([0,0,0,0,0,0]);
  const [quesitos_eight, setQuesitosEight] = useState<number[]>([0,0,0,0,0,0]);

  const [category_red, setCategoryRed] = useState<string>('');
  const [category_green, setCategoryGreen] = useState<string>('');
  const [category_pink, setCategoryPink] = useState<string>('');
  const [category_blue, setCategoryBlue] = useState<string>('');
  const [category_purple, setCategoryPurple] = useState<string>('');
  const [category_yellow, setCategoryYellow] = useState<string>('');


  //todo esto crea las pantallas y les permite acceder al contexto
  return (
    <MyContext.Provider value={{
    number_of_players,
    quesitos_one,
    quesitos_two,
    quesitos_three,
    quesitos_four,
    quesitos_five,
    quesitos_six,
    quesitos_seven,
    quesitos_eight,
    category_red,
    category_green,
    category_pink,
    category_blue,
    category_purple,
    category_yellow,
    setNumberOfPlayers,
    setQuesitosOne,
    setQuesitosTwo,
    setQuesitosThree,
    setQuesitosFour,
    setQuesitosFive,
    setQuesitosSix,
    setQuesitosSeven,
    setQuesitosEight,
    setCategoryRed,
    setCategoryGreen,
    setCategoryPink,
    setCategoryBlue,
    setCategoryPurple,
    setCategoryYellow,
    }}>
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Jugar" component={JugarScreen} />
        <Stack.Screen name="Preguntas" component={PreguntasScreen} />
        <Stack.Screen name="CategoriasMain" component={CategoriasMain} />
        <Stack.Screen name="CategoriasClasicas" component={CategoriasClasicas} />
        <Stack.Screen name="CategoriasNuevas" component={CategoriasNuevas} />
        <Stack.Screen name="CategoriasAmigos" component={CategoriasAmigos} />
        <Stack.Screen name="Tablero" component={Tablero} />
        <Stack.Screen name="PreguntaUnica" component={PreguntaUnica} />
      </Stack.Navigator>
    </NavigationContainer>
    </MyContext.Provider>
  );
}