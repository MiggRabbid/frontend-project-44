#!/usr/bin/env node
import { getUser, getRandomNumber, isCorrectAnswer } from '../src/computing.js';

const user = getUser();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrimeNumber = () => {
  const number = getRandomNumber(0.001, 1);
  console.log(`Question: ${number}`);

  for (let i = 2; i < (number / 2); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getAnswer = () => {
  let i = 0;

  while (i < 3) {
    const expected = isPrimeNumber();

    if (isCorrectAnswer(expected) === true) {
      i += 1;
    } else {
      return `Let's try again, ${user}!`;
    }
  }

  return `Congratulations, ${user}!`;
};

console.log(getAnswer());
