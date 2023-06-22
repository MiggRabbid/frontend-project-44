import gameStart from '../index.js';
import getRandomNumber from '../utils.js';

const ruls = 'Answer "yes" if the number is even, otherwise answer "no".';
const rounds = 3;

const getCorrectAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 20);
  const index = getRandomNumber(1, 10);
  const gameData = [];
  let currentNumber = firstNumber;
  let question = '';
  let expected = 0;
  for (let i = 1; i <= 10; i += 1) {
    currentNumber += step;
    if (i !== index) {
      question = `${question + String(currentNumber)} `;
    } else if (i === index) {
      question = `${question}.. `;
      expected = currentNumber;
    }
  }
  gameData.push(String(expected));
  gameData.push(question);
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
