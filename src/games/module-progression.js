import { getGreeting, isCorrectAnswer } from '../index.js';
import getRandomNumber from '../utils.js';

const user = getGreeting('brain-progression');

const getProgression = () => {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 20);
  const index = getRandomNumber(1, 10);
  const gameData = [user];

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
  gameData.push(String(expected));
  gameData.push(question);

  return gameData;
};

const getAnswer = () => {
  for (let i = 1; i <= 4; i += 1) {
    if (isCorrectAnswer(i, getProgression()) === false) {
      break;
    }
  }
};

export default getAnswer;
