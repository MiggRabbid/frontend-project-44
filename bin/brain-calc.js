#!/usr/bin/env node
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
    const operators = ["+", "-", "*"];
    let i = 0;

    while (i < 3) {
        const firstNumber = randomNumber();
        const SecondNumber = randomNumber();
        let randonIndex = getRandomIndex() - 1;
        let sum = 0;

        console.log(`Question: ${firstNumber} ${operators[randonIndex]} ${SecondNumber}`);

        if (randonIndex === 0) {
            sum = firstNumber + SecondNumber;
        } else if (randonIndex === 1) {
            sum = firstNumber - SecondNumber;
        } else if (randonIndex === 2) {
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