import { useState, useEffect } from 'react';

import history from '../cards/history.json';
import sport from '../cards/sport.json';
import geography from '../cards/geography.json';
import science from '../cards/science.json';
import entertainment from '../cards/entertainment.json';
import literature from '../cards/literature.json';

import friends from '../cards/friends.json';


const load_friend_questions = (category) => {
  let possible_questions = [];
  let possible_answers = [];

  friends.forEach(element => {
    if (element.category === category) {
      possible_questions.push(element.question);
      possible_answers.push(element.answer);
    }
  });

  const randomIndex = Math.floor(Math.random() * possible_questions.length);

  const question = possible_questions[randomIndex];
  const answer = possible_answers[randomIndex];

  return { question, answer };
}

function findQuestion({ category }) {
  let questionBlock;

  if (category in ["history", "sport", "geography", "science", "entertainment", "literature"]){
    switch (category) {
      case 'history':
        questionBlock = history[Math.floor(Math.random() * history.length)];
        break;
  
      case 'sport':
        questionBlock = sport[Math.floor(Math.random() * sport.length)];
        break;
  
      case 'geography':
        questionBlock = geography[Math.floor(Math.random() * geography.length)];
        break;
  
      case 'science':
        questionBlock = science[Math.floor(Math.random() * science.length)];
        break;
  
      case 'entertainment':
        questionBlock = entertainment[Math.floor(Math.random() * entertainment.length)];
        break;
  
      case 'literature':
        questionBlock = literature[Math.floor(Math.random() * literature.length)];
        break;
  
      default:
        console.error(`Category "${category}" is not supported.`);
        return undefined;
  } 
  }else {
    questionBlock = load_friend_questions(category);
  }

  
  return questionBlock;
}


export default findQuestion;

