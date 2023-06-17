import { userName, userResponse } from './cli.js';

const getUser = () => {
  console.log('Welcome to the Brain Games!');
  const user = userName();
  console.log(`Hello, ${user}!`);
  return user;
};

const getRandomNumber = (min, max) => Math.floor((Math.random() * (max - min) + min) * 100);

const isCorrectAnswer = (expected) => {
  const response = userResponse();

  if (expected == response) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${response}" is wrong answer ;(. Correct answer was "${expected}".`);
  return false;
};

export { getUser, getRandomNumber, isCorrectAnswer };
