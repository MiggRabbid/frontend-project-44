import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getCurrentRoundData = () => {
  const number = getRandomNumber(1, 100);

  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = String(number);

  return [correctAnswer, question];
};

export default () => startGame(rules, getCurrentRoundData);
