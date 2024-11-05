import React, { useEffect, useState, useContext  } from 'react';

import history from '../cards/history.json';
import sport from '../cards/sport.json';
import geography from '../cards/geography.json';
import science from '../cards/science.json';
import entertainment from '../cards/entertainment.json';
import literature from '../cards/literature.json';

function findQuestion({ category }) {
  console.log('WE ARE INSIDE');
  console.log(category);
  let questionBlock;

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

  console.log('Selected question block:', questionBlock);
  return questionBlock;
}


export default findQuestion;

