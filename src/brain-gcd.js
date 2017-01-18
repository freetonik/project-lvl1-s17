import randomNumber from './random.js';
import { cons, car, cdr, toString } from 'hexlet-pairs';

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
}

const isValidAnswer = answer => {
  return !isNaN(answer);
}

// (problem text, answer text)
const getProblem = () => {
  const num1 = randomNumber(20);
  const num2 = randomNumber(20);
  const answerText = gcd(num1, num2);

  return cons(`${num1} ${num2}: `, String(answerText));
}

const game = () => {
  return {
    getProblem: getProblem,
    isValidAnswer: isValidAnswer
  }
}

export default game;