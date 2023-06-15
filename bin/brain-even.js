#!/usr/bin/env node
import { userName, userResponse } from "../src/cli.js";
import { randomNumber } from "../src/computing.js";


console.log("Welcome to the Brain Games!");
const user = userName();
console.log(`Hello, ${user}!`);
console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

const isEvenNumber = () => {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    if (number % 2 === 0) {
        return "yes";
    } else {
        return "no";
    }
};

const getAnswer = () => {
    let i = 0;
    while (i < 3) {
        let expected = isEvenNumber();
        let response = userResponse();
        if (expected === response) {
            console.log('Correct!');
            i += 1
        } else {
            console.log(`${response} is wrong answer ;(. Correct answer was ${expected}.`);
            return `Let's try again, ${user}!`;
        }
    }
    return `Congratulations, ${user}!`;
}

console.log(getAnswer());