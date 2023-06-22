import readlineSync from 'readline-sync';

const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const getGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const user = userName();
  console.log(`Hello, ${user}!`);
  return user;
};

// } else if (game === 'brain-gcd') {
//   console.log('Find the greatest common divisor of given numbers.');
// } else if (game === 'brain-prime') {
//   console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
// } else if (game === 'brain-progression') {
//   console.log('What number is missing in the progression?');
// }

const user = getGreeting();

const userResponse = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const gameStart = (ruls, rounds, roundNumber, gameData) => {
  const [expected, question] = gameData;
  if (roundNumber === 1) {
    console.log(ruls);
  }
  if (roundNumber <= rounds) {
    console.log(`Question: ${question}`);
    const response = userResponse();
    if (expected === response) {
      console.log('Correct!');
    } else {
      console.log(`"${response}" is wrong answer ;(. Correct answer was "${expected}".`);
      console.log(`Let's try again, ${user}!`);
      return false;
    }
  }
  const endCurentRound = (roundNumber < rounds) ? true : console.log(`Congratulations, ${user}!`);
  return endCurentRound;
};

export default gameStart;
