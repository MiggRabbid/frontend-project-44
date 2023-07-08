import readlineSync from 'readline-sync';

const roundsCount = 3;

const startGame = (rules, getCurrentRoundData) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log(rules);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [correctAnswer, question] = getCurrentRoundData();
    console.log(`Question: ${question}`);
    const userResponse = readlineSync.question('Your answer: ');

    if (correctAnswer === userResponse) {
      console.log('Correct!');
    } else {
      console.log(`"${userResponse}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
  }

  console.log(`Congratulations, ${user}!`);
};

export default startGame;
