import randomNumber from './random.js';
import { cons, car, cdr, toString } from 'hexlet-pairs';

const isEven = num => {
  return num % 2 === 0;
}

const isValidAnswer = answer => {
  if (answer === 'yes' || answer === 'no') return true;
  return false;
}

// (problem text, answer text)
const getProblem = () => {
  const num = randomNumber();
  const answerText = isEven(num) ? 'yes' : 'no';
  return cons(`${num}: `, answerText);
}

const game = () => {
  return {
    getProblem: getProblem,
    isValidAnswer: isValidAnswer
  }
}

export default game;