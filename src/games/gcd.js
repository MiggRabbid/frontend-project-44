import gameStart from '../index.js';
import getRandomNumber from '../utils.js';

const ruls = 'Find the greatest common divisor of given numbers.';
const rounds = 3;

const getCorrectAnswer = () => {
  let a = getRandomNumber(1, 100);
  let b = getRandomNumber(1, 100);
  const question = `${a} ${b}`;
  const gameData = [];
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  gameData.push(String(a));
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
