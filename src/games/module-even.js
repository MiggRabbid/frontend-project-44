import { getGreeting, isCorrectAnswer } from '../index.js';
import getRandomNumber from '../utils.js';

const user = getGreeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEvenNumber = () => {
  const number = getRandomNumber(1, 100);
  console.log(`Question: ${number}`);

  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getAnswer = () => {
  let i = 0;

  while (i < 3) {
    const expected = isEvenNumber();

    if (isCorrectAnswer(expected) === true) {
      i += 1;
    } else {
      return console.log(`Let's try again, ${user}!`);
    }
  }

  return console.log(`Congratulations, ${user}!`);
};

export default getAnswer;
