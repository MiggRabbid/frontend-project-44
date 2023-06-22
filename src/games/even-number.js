import gameStart from '../index.js';
import getRandomNumber from '../utils.js';

const ruls = 'Answer "yes" if the number is even, otherwise answer "no".';
const rounds = 3;

const getCorrectAnswer = () => {
  const number = getRandomNumber(1, 100);
  const gameData = [];
  if (number % 2 === 0) {
    gameData.push('yes');
  } else {
    gameData.push('no');
  }
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
