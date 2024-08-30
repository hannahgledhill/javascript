const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = parseInt(prompt(`${this.question}\n${this.options.join('\n')}`));
        if (Number.isInteger(answer) && answer > 0 && answer < this.options.length) {
            this.answers[answer]++;
            this.displayResults('string');
        }
        // else {
        //     alert('Please enter a number between 0 and 4');
        // }
    },
    displayResults(type = 'array') {
        if (type.toLowerCase() === 'string') {
            const resultStringArray = [];
            for (const [key, value] of this.answers.entries()) {
                resultStringArray.push(`${key}: ${value}`);
            }
            console.log(`Poll results are: ${resultStringArray.join(', ')}`);
        }
        else {
            console.log(this.answers);
        }
    }
};

const button = document.getElementById('poll-button');
button.addEventListener('click', poll.registerNewAnswer.bind(poll));

const testArray1 = {
    answers: [5, 2, 3],
};
const testArray2 = {
    answers: [1, 5, 3, 9, 6, 1],
};

const displayResultsTest = function (arr) {
    poll.displayResults.call(arr, 'string'); // if bind isn't returning anything, try call instead!!!
};
displayResultsTest(testArray1);
displayResultsTest(testArray2);

