import gameStart from '../index.js';
import getRandomNumber from '../utils.js';

const ruls = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (firstNumber, step) => {
  let currentNumber = firstNumber;
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    progression = `${progression + String(currentNumber)} `;
    currentNumber += step;
  }
  return progression;
};

const currentRoundData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 20);
  const index = getRandomNumber(1, progressionLength);

  const progression = getProgression(firstNumber, step);
  const correctAnswer = String(firstNumber + (index - 1) * step);

  const gameData = [];
  gameData.push(correctAnswer);
  gameData.push(progression.replace(correctAnswer, '..'));

  return gameData;
};

export default () => gameStart(ruls, currentRoundData);
