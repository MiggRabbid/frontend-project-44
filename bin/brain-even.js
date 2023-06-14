#!/usr/bin/env node
import { userName, userAnswerForEven } from "../src/cli.js";

console.log("Welcome to the Brain Games!");

const user = userName();
console.log(`Hello, ${user}!`);

console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

const isEvenNumber = () => {
    const number = Math.floor(Math.random() * 100);
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
        let response = userAnswerForEven();
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