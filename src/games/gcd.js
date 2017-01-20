import { cons } from 'hexlet-pairs';
import { randomPositiveInt, isNumber } from '../utils';
import startGame from '../game';

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const isValidAnswer = (answer) => {
  return !isNaN(answer);
};

const getProblem = () => {
  const num1 = randomPositiveInt(20);
  const num2 = randomPositiveInt(20);
  const answerText = gcd(num1, num2);

  return cons(`${num1} ${num2}: `, String(answerText));
};

const startBrainGcdGame = () => {
  startGame(getProblem, isNumber);
};

export default startBrainGcdGame;
