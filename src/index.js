import readlineSync from 'readline-sync';

const rounds = 3;

const gameStart = (ruls, currentRoundData) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log(ruls);

  for (let i = 1; i <= rounds; i += 1) {
    const [expected, question] = currentRoundData();
    console.log(`Question: ${question}`);
    const response = readlineSync.question('Your answer: ');

    if (expected === response) {
      console.log('Correct!');
    } else {
      console.log(`"${response}" is wrong answer ;(. Correct answer was "${expected}".`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
  }

  console.log(`Congratulations, ${user}!`);
};

export default gameStart;
