import { getGreeting, isCorrectAnswer } from '../index.js';
import getRandomNumber from '../utils.js';

const gameNames = 'brain-gcd';
const user = getGreeting(gameNames);

const getGcd = () => {
  let a = getRandomNumber(1, 100);
  let b = getRandomNumber(1, 100);
  const question = `${a} ${b}`;
  const gameData = [user];

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  gameData.push(String(a));
  gameData.push(question);

  return gameData;
};

const getAnswer = () => {
  for (let i = 1; i <= 4; i += 1) {
    if (isCorrectAnswer(i, getGcd()) === false) {
      break;
    }
  }
};

export default getAnswer;
