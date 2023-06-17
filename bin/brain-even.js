#!/usr/bin/env node
import { getUser, getRandomNumber, isCorrectAnswer} from "../src/computing.js";

const user = getUser();
console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

const isEvenNumber = () => {
    const number = getRandomNumber(0.001, 1);
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
        
        if (isCorrectAnswer(expected) === true ) {
            i += 1;
        } else {
            return `Let's try again, ${user}!`;
        }
    }

    return `Congratulations, ${user}!`;
}

console.log(getAnswer());