import gameStart from '../index.js';
import getRandomNumber from '../utils.js';

const ruls = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const currentRoundData = () => {
  const number = getRandomNumber(1, 100);

  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = String(number);

  return [correctAnswer, question];
};

export default () => gameStart(ruls, currentRoundData);
