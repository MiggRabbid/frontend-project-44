import { userName, userResponse } from './cli.js';

const getUser = () => {
  console.log('Welcome to the Brain Games!');
  const user = userName();
  console.log(`Hello, ${user}!`);
  return user;
};

const isCorrectAnswer = (expected) => {
  const response = userResponse();
  if (expected === response) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${response}" is wrong answer ;(. Correct answer was "${expected}".`);
  return false;
};

export { getUser, isCorrectAnswer };
