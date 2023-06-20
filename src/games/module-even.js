import { getGreeting, isCorrectAnswer } from '../index.js';
import getRandomNumber from '../utils.js';

const gameNames = 'brain-even';
const user = getGreeting(gameNames);

const isEvenNumber = () => {
  const number = getRandomNumber(1, 100);
  const gameData = [user];

  if (number % 2 === 0) {
    gameData.push('yes');
    gameData.push(number);
  }
  gameData.push('no');
  gameData.push(number);

  return gameData;
};

const getAnswer = () => {
  for (let i = 1; i <= 4; i += 1) {
    if (isCorrectAnswer(i, isEvenNumber()) === false) {
      break;
    }
  }
};

export default getAnswer;
