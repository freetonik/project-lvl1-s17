import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  return name;
}

const askUser = (question, answerValidator) => {
  let answer;
  while (true) {
    answer = readlineSync.question("Question: " + question + "\nYour answer: ");
    if (answerValidator(answer)) return answer;
    else {
      console.log("Your answer is invalid. Try again.");
    }
  }
}

const startGame = (getProblem, isValidAnswer, steps = 3) => {
  const iter = (step, correctAnswers = 0) => {
    if (step === 0) return (steps === correctAnswers);

    const problem = getProblem();
    const problemText = car(problem);
    const correctAnswer = cdr(problem);
    const answer = askUser(problemText, isValidAnswer);

    if (answer === correctAnswer) {
      console.log("Correct!");
      return iter(step-1, correctAnswers + 1);
    } else {
      console.log(`${answer} is the wrong answer ;(. Correct answer was ${correctAnswer}`);
      return iter(step-1, correctAnswers);
    }
  }

  const name = getUserName();
  const gameResult = iter(steps);

  if (gameResult === true) {
    console.log(`Congratulations, ${name}`);
  } else {
    console.log(`Better luck next time, ${name}`);
  }
}

export default startGame;