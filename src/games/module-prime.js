import { getUser, isCorrectAnswer } from '../index.js';
import getRandomNumber from '../utils.js';

const user = getUser();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrimeNumber = () => {
  const number = getRandomNumber(1, 100);
  console.log(`Question: ${number}`);

  for (let i = 2; i < (number / 2); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getAnswer = () => {
  let i = 0;

  while (i < 3) {
    const expected = isPrimeNumber();

    if (isCorrectAnswer(expected) === true) {
      i += 1;
    } else {
      return `Let's try again, ${user}!`;
    }
  }

  return `Congratulations, ${user}!`;
};

export default getAnswer;
