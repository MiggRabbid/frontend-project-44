#!/usr/bin/env node
import { getUser, getRandomNumber, isCorrectAnswer } from '../src/computing.js';

const user = getUser();
console.log('What is the result of the expression?');

const getAnswer = () => {
  const operators = ['+', '-', '*'];
  let i = 0;

  while (i < 3) {
    const firstNumber = getRandomNumber(0.001, 1);
    const SecondNumber = getRandomNumber(0.001, 1);
    const randonIndex = getRandomNumber(0.01, 0.04) - 1;

    console.log(`Question: ${firstNumber} ${operators[randonIndex]} ${SecondNumber}`);

    let expected = 0;

    if (randonIndex === 0) {
      expected = firstNumber + SecondNumber;
    } else if (randonIndex === 1) {
      expected = firstNumber - SecondNumber;
    } else {
      expected = firstNumber * SecondNumber;
    }

    if (isCorrectAnswer(expected) === true) {
      i += 1;
    } else {
      return `Let's try again, ${user}!`;
    }
  }

  return `Congratulations, ${user}!`;
};

console.log(getAnswer());
