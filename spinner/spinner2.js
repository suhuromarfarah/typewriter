const sentence = "\r|, \r/, \r- , \r\\,  \r/,  \r- ";

let delay = 1000;
for (const char of sentence) {

    setTimeout(() => {
        process.stdout.write(char);
    }, delay) 
    delay = delay + 200;
}