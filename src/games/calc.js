import { cons, car, cdr } from 'hexlet-pairs';
import { randomPositiveInt, isNumber } from '../utils';
import startGame from '../game';

const getRandomOperator = () => {
  switch (randomPositiveInt(3)) {
    case 1:
      return cons((a, b) => a + b, '+');
    case 2:
      return cons((a, b) => a - b, '-');
    case 3:
    default:
      return cons((a, b) => a * b, '*');
  }
};

const getProblem = () => {
  const num1 = randomPositiveInt(20);
  const num2 = randomPositiveInt(20);
  const op = getRandomOperator();

  return cons(`${num1} ${cdr(op)} ${num2}: `, String(car(op)(num1, num2)));
};

const startBrainCalcGame = () => {
  startGame(getProblem, isNumber);
};

export default startBrainCalcGame;
