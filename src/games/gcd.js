import gameStart from '../index.js';
import getRandomNumber from '../utils.js';

const ruls = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) return a;
  return getGcd(b, a % b);
};

const currentRoundData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);

  const correctAnswer = getGcd(firstNumber, secondNumber);

  const gameData = [];
  gameData.push(String(correctAnswer));
  gameData.push(`${firstNumber} ${secondNumber}`);

  return gameData;
};

export default () => gameStart(ruls, currentRoundData);
