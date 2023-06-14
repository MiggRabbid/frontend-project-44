import readlineSync from 'readline-sync';

const userName = () => {
    const name = readlineSync.question('May I have your name? ');
    return name;
}

const userAnswerForEven = () => {
    const answer = readlineSync.question('Your answer: ');
    return answer;
}



export { userName, userAnswerForEven };