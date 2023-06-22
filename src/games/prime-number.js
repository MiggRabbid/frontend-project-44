import gameStart from '../index.js';
import getRandomNumber from '../utils.js';

const ruls = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const rounds = 3;

const getCorrectAnswer = () => {
  const number = getRandomNumber(1, 100);
  const gameData = [];
  for (let i = 2; i < (number / 2); i += 1) {
    if (number % i === 0) {
      gameData.push('no');
      gameData.push(number);
    }
  }
  gameData.push('yes');
  gameData.push(number);
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
