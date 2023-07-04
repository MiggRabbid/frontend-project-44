// eslint-disable-next-line import/no-cycle
import gameStart from '../index.js';
import getRandomNumber from '../utils.js';

const ruls = 'What is the result of the expression?';

const getCalculate = (randonIndex, firstNumber, secondNumber) => {
  switch (randonIndex) {
    case 0:
      return firstNumber + secondNumber;
    case 1:
      return firstNumber - secondNumber;
    case 2:
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown index: '${randonIndex}'!`);
  }
};

const currentRoundData = () => {
  const operators = ['+', '-', '*'];
  const randonIndex = getRandomNumber(0, 2);
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);

  const correctAnswer = String(getCalculate(randonIndex, firstNumber, secondNumber));
  const question = `${firstNumber} ${operators[randonIndex]} ${secondNumber}`;

  return [correctAnswer, question];
};

export default () => gameStart(ruls, currentRoundData);
