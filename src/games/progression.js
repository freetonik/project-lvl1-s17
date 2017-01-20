import { randomPositiveInt, isNumber } from '../utils.js';
import { cons, car, cdr, toString } from 'hexlet-pairs';
import startGame from '../game.js'

const getProblem = () => {
  const base = randomPositiveInt(5);
  const step = randomPositiveInt(5);
  const length = 10;
  const gapPosition = randomPositiveInt(length);
  const gapValue = base + (gapPosition-1) * step;

  const iter = (i, str) => {
    if (i > length) return str;

    if (i === gapPosition) {
      return iter(i+1, str + '..')
    } else {
      return iter(i+1, str + ` ${base + step * (i - 1)} `);
    }
  }

  const str = iter(1, '');

  return cons (str, String(gapValue));
}

const startBrainProgGame = () => {
  startGame(getProblem, isNumber);  
}

export default startBrainProgGame;