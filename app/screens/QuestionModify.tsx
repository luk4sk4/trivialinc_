import { View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import styles from '../modules/styles';
import history from '../cards/history.json';
import sport from '../cards/sport.json';
import geography from '../cards/geography.json';
import science from '../cards/science.json';
import entertainment from '../cards/entertainment.json';
import literature from '../cards/literature.json';
import friends from '../cards/friends.json';
import { TextInput } from 'react-native-gesture-handler';
import * as FileSystem from "expo-file-system";

function QuestionModify({ navigation, route  }) {


    console.log('hello');
    FileSystem.readAsStringAsync('../cards/history.json')
    .then(content => console.log(content))
    .catch(error => console.error("Error reading file: ", error));


    const { category, initialQuestion, initialAnswer } = route.params;

    const [question, setQuestion] = useState(initialQuestion);
    const [answer, setAnswer] = useState(initialAnswer);

    const terminateProcess = () => {
        console.log("terminated");
    }
      


    
 
    return (
        <View style={styles.container}>
            <View style={styles.topContainerMap}>
                <View style={styles.sideBox}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image
                            style={[styles.image50, {backgroundColor: 'green'}]}
                            source={require('../../assets/images/back.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={[styles.leyendaBox, {backgroundColor: 'green'}]}>
                    <Text style={styles.buttonText}>{category}</Text>
                </View>
                <View>
                    <Image
                        style={[styles.image50, {backgroundColor: 'green'}]}
                        source={require('../../assets/images/settings.png')}
                    />
                </View>
            </View>
            <View style={styles.midContainer}>
                <View style={styles.textBox}>
                <Text style={styles.entryText}>Question:</Text>
                <TextInput 
                style={[styles.entryText, styles.input]}
                onChangeText={setQuestion}
                value={question}
                placeholder="Type here"
                />
                </View>

                <View style={styles.textBox}>
                <Text style={styles.entryText}>Answer:</Text>
                <TextInput                
                style={[styles.entryText, styles.input]}
                onChangeText={setAnswer}
                value={answer}
                placeholder="Type here"
                />
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity 
                    style={styles.playButton} 
                    onPress={() => terminateProcess()}
                >
                    <Text style={styles.buttonText}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default QuestionModify;