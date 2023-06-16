import { userName, userResponse } from "../src/cli.js";


const getUser = () => {
    console.log("Welcome to the Brain Games!");
    const user = userName();
    console.log(`Hello, ${user}!`);
    return user;
}

const getRandomNumber = (min, max) => {
    return Math.floor((Math.random() * (max - min) + min) * 100);
}

const isCorrectAnswer = (user, expected) => {
    let response = userResponse();

    if (expected == response) {
        console.log('Correct!');
        return true
    } else {
        console.log(`"${response}" is wrong answer ;(. Correct answer was "${expected}".`);
        return false
    }
}

export { getUser, getRandomNumber, isCorrectAnswer };