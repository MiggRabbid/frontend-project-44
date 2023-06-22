// eslint-disable-next-line import/no-cycle
import gameStart from '../index.js';
import getRandomNumber from '../utils.js';

const ruls = 'What is the result of the expression?';
const rounds = 3;

const getCorrectAnswer = () => {
  const perators = ['+', '-', '*'];
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const randonIndex = getRandomNumber(0, 2);
  const gameData = [];
  if (randonIndex === 0) {
    gameData.push(String(firstNumber + secondNumber));
  } else if (randonIndex === 1) {
    gameData.push(String(firstNumber - secondNumber));
  } else if (randonIndex === 2) {
    gameData.push(String(firstNumber * secondNumber));
  }
  gameData.push(`${firstNumber} ${perators[randonIndex]} ${secondNumber}`);
  return gameData;
};

export default () => {
  for (let roundNumber = 1; roundNumber <= rounds; roundNumber += 1) {
    const gameData = getCorrectAnswer();
    const roundResult = gameStart(ruls, rounds, roundNumber, gameData);
    if (roundResult === false) {
      break;
    }
  }
};
