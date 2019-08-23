const alert = require('alert-node');
const prompt = require('prompt-sync')();

for (; ;) {
    const n = prompt('How many times? (0 - is exit)');
    console.log('result', n);

    if (n === '0') {
        break;
    }
}
