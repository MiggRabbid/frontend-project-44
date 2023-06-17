#!/usr/bin/env node
import { getUser, getRandomNumber, isCorrectAnswer } from '../src/computing.js';

const user = getUser();
console.log('What number is missing in the progression?');

const getProgression = () => {
  const firstNumber = getRandomNumber(0.001, 1);
  const step = getRandomNumber(0.01, 0.21);
  const index = getRandomNumber(0.01, 0.11);

  let currentNumber = firstNumber;
  let question = '';
  let expected = 0;

  for (let i = 1; i <= 10; i += 1) {
    currentNumber += step;

    if (i !== index) {
      question = `${question + String(currentNumber)} `;
    } else if (i === index) {
      question = `${question}.. `;
      expected = currentNumber;
    }
  }

  console.log(`Question: ${question.trim()}`);
  return expected;
};

const getAnswer = () => {
  let i = 0;

  while (i < 3) {
    const expected = getProgression();

    if (isCorrectAnswer(expected) === true) {
      i += 1;
    } else {
      return `Let's try again, ${user}!`;
    }
  }

  return `Congratulations, ${user}!`;
};

console.log(getAnswer());
