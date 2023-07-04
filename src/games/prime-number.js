import gameStart from '../index.js';
import getRandomNumber from '../utils.js';

const ruls = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const firstPrimeNumber = 2;

  if (number < firstPrimeNumber) {
    return false;
  }

  for (let i = firstPrimeNumber; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const currentRoundData = () => {
  const number = getRandomNumber(1, 100);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = String(number);

  return [correctAnswer, question];
};

export default () => gameStart(ruls, currentRoundData);
