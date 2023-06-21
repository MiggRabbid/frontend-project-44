// eslint-disable-next-line import/no-cycle
import { getGreeting, isCorrectAnswer } from '../index.js';
import getRandomNumber from '../utils.js';

const gameNames = 'brain-calc';
const user = getGreeting(gameNames);

const getCalc = () => {
  const perators = ['+', '-', '*'];
  const firstNumber = getRandomNumber(1, 100);
  const SecondNumber = getRandomNumber(1, 100);
  const randonIndex = getRandomNumber(0, 2);

  const gameData = [user];

  if (randonIndex === 0) {
    gameData.push(String(firstNumber + SecondNumber));
  } else if (randonIndex === 1) {
    gameData.push(String(firstNumber - SecondNumber));
  } else if (randonIndex === 2) {
    gameData.push(String(firstNumber * SecondNumber));
  }

  gameData.push(`${firstNumber} ${perators[randonIndex]} ${SecondNumber}`);
  return gameData;
};

const getAnswer = () => {
  for (let i = 1; i <= 4; i += 1) {
    if (isCorrectAnswer(i, getCalc()) === false) {
      break;
    }
  }
};

export default getAnswer;
