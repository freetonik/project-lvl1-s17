import readlineSync from 'readline-sync';
import brainEvenGame from './brain-even';
import brainCalcGame from './brain-calc';
import { cons, car, cdr, toString } from 'hexlet-pairs';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  return name;
}

const askUser = (question, answerValidator) => {
  let answer;
  while (true) {
    answer = readlineSync.question("Question: " + question);
    if (answerValidator(answer)) return answer;
    else {
      console.log("Your answer is invalid. Try again.");
    }
  }
}

const brainGameStep = (game, step, winning = true) => {
  if (step === 0) { return winning; }

  const problem = game.getProblem();
  const problemText = car(problem);
  const correctAnswer = cdr(problem);

  const answer = askUser(problemText, game.isValidAnswer);

  if (answer === correctAnswer) {
    console.log("Correct!");
    return brainGameStep(game, step-1, winning);
  } else {
    console.log(`${answer} is the wrong answer ;(. Correct answer was ${cdr(problem)}`);
    return brainGameStep(game, step-1, false);
  }

}

const startGame = (steps) => {
  const name = greetUser()
  const gameResult = brainGameStep(brainCalcGame(), steps);
  if (gameResult === true) {
    console.log(`Congratulations, ${name}`);
  } else {
    console.log(`Better luck next time, ${name}`);
  }
}

export default startGame;