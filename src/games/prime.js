import { cons } from 'hexlet-pairs';
import { randomPositiveInt, isYesNoAnswer } from '../utils';
import startGame from '../game';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getProblem = () => {
  const num = randomPositiveInt(100);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return cons(`${num}`, correctAnswer);
};

const startBrainPrimeGame = () => {
  startGame(getProblem, isYesNoAnswer);
};

export default startBrainPrimeGame;
