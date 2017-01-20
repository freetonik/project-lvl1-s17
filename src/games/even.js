import { randomPositiveInt } from '../utils.js';
import { cons, car, cdr, toString } from 'hexlet-pairs';
import startGame from '../game.js'

const getProblem = () => {
  const num = randomPositiveInt();
  const answerText = isEven(num) ? 'yes' : 'no';
  return cons(`${num}: `, answerText);
}

const isEven = num => {
  return num % 2 === 0;
}

const isValidAnswer = answer => {
  if (answer === 'yes' || answer === 'no') return true;
  return false;
}

const startBrainEvenGame = () => {
  startGame(getProblem, isValidAnswer);  
}

export default startBrainEvenGame;