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

  const correctAnswer = String(getGcd(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;

  return [correctAnswer, question];
};

export default () => gameStart(ruls, currentRoundData);
