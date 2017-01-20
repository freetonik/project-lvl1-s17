import { randomPositiveInt, isNumber } from '../utils.js';
import { cons, car, cdr, toString } from 'hexlet-pairs';
import startGame from '../game.js'

const getProblem = () => {  
  const num1 = randomPositiveInt(20);
  const num2 = randomPositiveInt(20);
  const op = getRandomOperator();

  return cons(`${num1} ${cdr(op)} ${num2}: `, String(car(op)(num1, num2)));
}

const getRandomOperator = () => {
  switch(randomPositiveInt(3)){
    case 1:
      return cons((a, b) => { return a + b; }, '+');
    case 2:
      return cons((a, b) => { return a - b; }, '-');
    case 3:
      return cons((a, b) => { return a * b; }, '*');
  }
}

const startBrainCalcGame = () => {
  startGame(getProblem, isNumber);  
}

export default startBrainCalcGame;