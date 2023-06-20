import { userName, userResponse } from './cli.js';

const getGreeting = (game) => {
  console.log('Welcome to the Brain Games!');
  const user = userName();
  console.log(`Hello, ${user}!`);

  if (game === 'brain-calc') {
    console.log('What is the result of the expression?');
  } else if (game === 'brain-even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  } else if (game === 'brain-gcd') {
    console.log('Find the greatest common divisor of given numbers.');
  } else if (game === 'brain-prime') {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  } else if (game === 'brain-progression') {
    console.log('What number is missing in the progression?');
  }

  return user;
};

const isCorrectAnswer = (i, gameData) => {
  const index = i;
  const [user, expected, question] = gameData;

  if (index < 4) {
    console.log(`Question: ${question}`);
    const response = userResponse();
    if (expected === response) {
      console.log('Correct!');
      return true;
    }
    console.log(`"${response}" is wrong answer ;(. Correct answer was "${expected}".`);
    console.log(`Let's try again, ${user}!`);
    return false;
  }

  return console.log(`Congratulations, ${user}!`);
};

export { getGreeting, isCorrectAnswer };
