import randomNumber from './random.js'
import { cons, car, cdr, toString } from 'hexlet-pairs';

// (problem text, answer text)
const getProblem = () => {  
  const num1 = randomNumber(20);
  const num2 = randomNumber(20);
  const op = getRandomOperator();

  return cons(`${num1} ${cdr(op)} ${num2}: `, String(car(op)(num1, num2)));
}

// (operator function, operator symbol)
const getRandomOperator = () => {
  // limit number range to 1-3 to never pick division and avoid fractions
  switch(randomNumber(3)){
    case 1:
      return cons( (a, b) => { return a + b; }, '+');
    case 2:
      return cons( (a, b) => { return a - b; }, '-');
    case 3:
      return cons( (a, b) => { return a * b; }, '*');
    case 4:
      return cons( (a, b) => { return a / b; }, '/');
  }
}

const isValidAnswer = answer => {
  return !isNaN(answer);
}

const game = () => {
  return {
    getProblem: getProblem,
    isValidAnswer: isValidAnswer
  }
}

export default game;
