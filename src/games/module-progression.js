import { getGreeting, isCorrectAnswer } from '../index.js';
import getRandomNumber from '../utils.js';

const user = getGreeting();
console.log('What number is missing in the progression?');

const getProgression = () => {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 20);
  const index = getRandomNumber(1, 10);

  let currentNumber = firstNumber;
  let question = '';
  let expected = 0;

  for (let i = 1; i <= 10; i += 1) {
    currentNumber += step;

    if (i !== index) {
      question = `${question + String(currentNumber)} `;
    } else if (i === index) {
      question = `${question}.. `;
      expected = currentNumber;
    }
  }

  console.log(`Question: ${question.trim()}`);
  return expected;
};

const getAnswer = () => {
  let i = 0;

  while (i < 3) {
    const expected = getProgression();

    if (isCorrectAnswer(String(expected)) === true) {
      i += 1;
    } else {
      return console.log(`Let's try again, ${user}!`);
    }
  }

  return console.log(`Congratulations, ${user}!`);
};

export default getAnswer;
