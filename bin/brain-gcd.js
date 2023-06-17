#!/usr/bin/env node
import { getUser, getRandomNumber, isCorrectAnswer } from '../src/computing.js';

const user = getUser();
console.log('Find the greatest common divisor of given numbers.');

const getGcd = (firstNumber, SecondNumber) => {
  let a = firstNumber;
  let b = SecondNumber;

  while (a !== SecondNumber) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
};

const getAnswer = () => {
  let i = 0;

  while (i < 3) {
    const firstNumber = getRandomNumber(0.001, 1);
    const SecondNumber = getRandomNumber(0.001, 1);
    console.log(`Question: ${firstNumber} ${SecondNumber}`);

    const expected = getGcd(firstNumber, SecondNumber);

    if (isCorrectAnswer(expected) === true) {
      i += 1;
    } else {
      return `Let's try again, ${user}!`;
    }
  }

  return `Congratulations, ${user}!`;
};

console.log(getAnswer());
