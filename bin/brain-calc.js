import { userName, userResponse} from "../src/cli.js";
import { randomNumber } from "../src/computing.js";


console.log("Welcome to the Brain Games!");
const user = userName();
console.log(`Hello, ${user}!`);
console.log(`What is the result of the expression?`);

const getRandomIndex = (min=0.01, max=0.04) => {
    return Math.floor((Math.random() * (max - min) + min) * 100);
  }

const getAnswer = () => {
    const firstNumber = randomNumber();
    const SecondNumber = randomNumber();
    const operators = ["+", "-", "*"];
    let i = 0;

    while (i < 3) {
        console.log(`Question: ${firstNumber} ${operators[getRandomIndex() - 1]} ${SecondNumber}`);
        let sum = 0;

        if (getRandomIndex() === 1) {
            sum = firstNumber + SecondNumber;
        } else if (getRandomIndex() === 2) {
            sum = firstNumber - SecondNumber;
        } else if (getRandomIndex() === 3) {
            sum = firstNumber * SecondNumber;
        }

        let response = userResponse();
        if (sum == response) {
            console.log('Correct!');
            i += 1
        } else {
            console.log(`${response} is wrong answer ;(. Correct answer was ${sum}.`);
            return `Let's try again, ${user}!`;
        }
    }
    
    return `Congratulations, ${user}!`;
};

console.log(getAnswer());