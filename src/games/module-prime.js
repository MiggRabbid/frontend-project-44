import { getGreeting, isCorrectAnswer } from '../index.js';
import getRandomNumber from '../utils.js';

const gameNames = 'brain-prime';
const user = getGreeting(gameNames);

const isPrime = () => {
  const number = getRandomNumber(1, 100);

  const gameData = [user];

  for (let i = 2; i < (number / 2); i += 1) {
    if (number % i === 0) {
      gameData.push('no');
      gameData.push(number);
    }
  }
  gameData.push('yes');
  gameData.push(number);

  return gameData;
};

const getAnswer = () => {
  for (let i = 1; i <= 4; i += 1) {
    if (isCorrectAnswer(i, isPrime()) === false) {
      break;
    }
  }
};

export default getAnswer;
