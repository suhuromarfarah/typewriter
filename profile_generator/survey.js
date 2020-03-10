const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question('What is your name? Nicknames are also acceptable ', (answer2) => {
        console.log(`Thank you: ${answer2}`);
        rl.question('What is an activity you like doing? ', (answer3) => {
            console.log(`Thank you: ${answer3}`);
            rl.question('What do you listen to while doing that? ', (answer4) => {
                console.log(`Thank you: ${answer4}`);
                // this is the paragraph
                console.log(answer2 + " enjoys listening to " + answer4 + " while " + answer3 + ". They also think that Node is " + answer)
    rl.close();
});
});
});
});