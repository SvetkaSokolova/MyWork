const alert = require('alert-node');
const prompt = require('prompt-sync')();

const a = "Say hello to someone?";
const DEFAULT = 'default';

const QUESTION = {
    1: "How old are you?",
    2: "What is your name?",
    3: "What do you like?",
    default: 'Buy',
};
const ANSWER = {
    1: "Sveta",
    2: "29 years old",
    3: "Owl",
    default: "I don't get it",
};

function getValueFromStore(index, store) {
    if (store[index]) {
        return store[index];
    }
    return store[DEFAULT];
}

for (; ;) {

    const questionIndex = parseInt(prompt('Select question (0 - is exit)'));
    const answerIndex = parseInt(prompt('Select answer (0 - is exit)'));

    console.log(getValueFromStore(questionIndex, QUESTION));
    console.log(getValueFromStore(answerIndex, ANSWER));

    if (questionIndex === 0 || answerIndex === 0) {
        break;
    }
}
