import { cons } from 'hexlet-pairs';
import { randomPositiveInt, isYesNoAnswer, isEven } from '../utils';
import startGame from '../game';

const getProblem = () => {
  const num = randomPositiveInt();
  const answerText = isEven(num) ? 'yes' : 'no';
  return cons(`${num}: `, answerText);
};

const startBrainEvenGame = () => {
  startGame(getProblem, isYesNoAnswer);
};

export default startBrainEvenGame;
