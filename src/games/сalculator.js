// eslint-disable-next-line import/no-cycle
import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What is the result of the expression?';

const getCalculate = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getCurrentRoundData = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomNumber(0, 2);
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);

  const correctAnswer = String(getCalculate(operators[operatorIndex], firstNumber, secondNumber));
  const question = `${firstNumber} ${operators[operatorIndex]} ${secondNumber}`;

  return [correctAnswer, question];
};

export default () => startGame(rules, getCurrentRoundData);
