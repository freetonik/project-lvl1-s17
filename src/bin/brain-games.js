import readlineSync from 'readline-sync';
import brainEvenGame from './brain-even';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}`);

brainEvenGame();