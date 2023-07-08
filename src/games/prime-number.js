import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getCurrentRoundData = () => {
  const number = getRandomNumber(1, 100);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = String(number);

  return [correctAnswer, question];
};

export default () => startGame(rules, getCurrentRoundData);
