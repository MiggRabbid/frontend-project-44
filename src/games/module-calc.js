import { getUser, isCorrectAnswer } from '../index.js';
import getRandomNumber from '../utils.js';

const user = getUser();
console.log('What is the result of the expression?');

const getAnswer = () => {
  const operators = ['+', '-', '*'];
  let i = 0;

  while (i < 3) {
    const firstNumber = getRandomNumber(1, 100);
    const SecondNumber = getRandomNumber(1, 100);
    const randonIndex = getRandomNumber(0, 2);

    console.log(`Question: ${firstNumber} ${operators[randonIndex]} ${SecondNumber}`);

    let expected = 0;

    if (randonIndex === 0) {
      expected = firstNumber + SecondNumber;
    } else if (randonIndex === 1) {
      expected = firstNumber - SecondNumber;
    } else {
      expected = firstNumber * SecondNumber;
    }

    if (isCorrectAnswer(String(expected)) === true) {
      i += 1;
    } else {
      return `Let's try again, ${user}!`;
    }
  }

  return `Congratulations, ${user}!`;
};

export default getAnswer;
