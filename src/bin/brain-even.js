import readlineSync from 'readline-sync';

const isEven = num => {
  return num % 2 === 0;
}

const randomNumber = () => {
  return Math.floor(Math.random() * (100));
}

const isValidAnswer = answer => {
  if (answer === 'yes' || answer === 'no') return true;
  return false;
}

const isCorrect = answer => {
  if (answer === 'yes') return true;
  else if (answer === 'no') return false;
}

const isCorrectCombination = (answer, number) => {
  if (isEven(number) && isCorrect(answer) || !isEven(number) && !isCorrect(answer)) {
    return true
  }
  return false;
}

const correctAnswerForNumber = number => {
  return isEven(number) ? 'yes' : 'no';
}

export default () => {
  let step = 0;
  let number = randomNumber();
  let answer;

  while (step < 3) {
    answer = readlineSync.question(`Question: ${number} `);

    if (isValidAnswer(answer)) {
      if (isCorrectCombination(answer, number)) {
        console.log("Correct!")
      } else {
        console.log(`${answer} is the wrong answer ;(. Correct answer was ${correctAnswerForNumber(number)}`);
      }
      number = randomNumber();
      step++; 
    } else {
      console.log("Your answer is invalid. Try again.");
    }
  }
}
