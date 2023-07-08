import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (firstNumber, step, hiddenIndex) => {
  const progression = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    if (i !== hiddenIndex) {
      progression.push(firstNumber + i * step);
    } else {
      progression.push('..');
    }
  }
  return progression.join(' ');
};

const getCurrentRoundData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 20);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);

  const correctAnswer = String(firstNumber + hiddenIndex * step);
  const question = getProgression(firstNumber, step, hiddenIndex);

  return [correctAnswer, question];
};

export default () => startGame(rules, getCurrentRoundData);
