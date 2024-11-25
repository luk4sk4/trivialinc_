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

function CategoryPage({ navigation, route  }) {

    const [showAnswers, setShowAnswers] = useState(false);

    const handleAnswers = () => {
        if (showAnswers == false){
            setShowAnswers(true);
        } else {
            setShowAnswers(false);
        }
        
    }

    const { category, type } = route.params;

    const load_friend_questions = (category) => {
        let questions = [];
        let answers = [];
     
        friends.forEach(element => {
          if (element.category === category) {
            questions.push(element.question);
            answers.push(element.answer);
          }
        });
     
        return { questions, answers };  // Fixed: Removed extra curly braces
    };
    
    const load_main_questions = (category) => {
        let questions = [];
        let answers = [];
     
        switch (category) {
            case 'history':
                history.forEach(element => {
                    questions.push(element.question);
                    answers.push(element.answer);
                });
                break;
            case 'sport':
                sport.forEach(element => {
                    questions.push(element.question);
                    answers.push(element.answer);
                });
                break;
            case 'geography':
                geography.forEach(element => {
                    questions.push(element.question);
                    answers.push(element.answer);
                });
                break;
            case 'science':
                science.forEach(element => {
                    questions.push(element.question);
                    answers.push(element.answer);
                });
                break;
            case 'entertainment':
                entertainment.forEach(element => {
                    questions.push(element.question);
                    answers.push(element.answer);
                });
                break;
            case 'literature':
                literature.forEach(element => {
                    questions.push(element.question);
                    answers.push(element.answer);
                });
                break;
        }
     
        return { questions, answers };  // Fixed: Removed extra curly braces
    };

    let object;  // Fixed: Proper object declaration
    if (type === "amigo") {  // Fixed: Using === instead of ==
        object = load_friend_questions(category);  // Fixed: Removed curly braces
        console.log(object);
    } else if (type === "main") {  // Fixed: Using === instead of ==
        object = load_main_questions(category);  // Fixed: Removed curly braces
        console.log(object);
    }
    //ADD THE OTHER OPTION
 
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
                <View style={styles.showBox}>
                    <TouchableOpacity
                    onPress={handleAnswers}>
                        <Text style={styles.showText}> Show Answers (Y/N)</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {object?.questions.map((question, index) => (
                        <TouchableOpacity style={styles.entryBox} key={index} onPress={() => navigation.navigate('QuestionModify', { 
                            category: category, 
                            initialQuestion: question,
                            initialAnswer: object.answers[index],
                          })}>
                            <Text style={styles.entryText}>Question: {question}</Text>
                            {showAnswers ? <Text style={styles.entryText}>Answer: {object.answers[index]}</Text> : null}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity 
                    style={styles.playButton} 
                    onPress={() => navigation.navigate('Preguntas')}
                >
                    <Text style={styles.buttonText}>BACK</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CategoryPage;