import { getUser, isCorrectAnswer } from '../index.js';
import getRandomNumber from '../utils.js';

const user = getUser();
console.log('Find the greatest common divisor of given numbers.');

const getGcd = (firstNumber, SecondNumber) => {
  let a = firstNumber;
  let b = SecondNumber;

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
};

const getAnswer = () => {
  let i = 0;

  while (i < 3) {
    const firstNumber = getRandomNumber(1, 100);
    const SecondNumber = getRandomNumber(1, 100);
    console.log(`Question: ${firstNumber} ${SecondNumber}`);

    const expected = getGcd(firstNumber, SecondNumber);

    if (isCorrectAnswer(String(expected)) === true) {
      i += 1;
    } else {
      return `Let's try again, ${user}!`;
    }
  }

  return `Congratulations, ${user}!`;
};

export default getAnswer;
