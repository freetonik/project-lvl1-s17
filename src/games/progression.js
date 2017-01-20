import { cons } from 'hexlet-pairs';
import { randomPositiveInt, isNumber } from '../utils';
import startGame from '../game';

const getProblem = () => {
  const base = randomPositiveInt(5);
  const step = randomPositiveInt(5);
  const length = 10;
  const gapPosition = randomPositiveInt(length);
  const gapValue = base + ((gapPosition - 1) * step);

  const iter = (i, str) => {
    if (i > length) return str;

    if (i === gapPosition) {
      return iter(i + 1, `${str} ..`);
    }
    return iter(i + 1, `${str} ${base + (step * (i - 1))} `);
  };

  const str = iter(1, '');

  return cons(str, String(gapValue));
};

const startBrainProgGame = () => {
  startGame(getProblem, isNumber);
};

export default startBrainProgGame;
