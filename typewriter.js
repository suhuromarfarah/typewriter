const sentence = "hello there from lighthouse labs";

let delay = 50;
for (const char of sentence) {

    setTimeout(() => {
        // print the char here
        process.stdout.write(char);
      }, delay) // <= 1s delay to make it noticeable. Can dial it down later.
    delay = delay + 50;
}

setTimeout(() => {
    console.log("\n");
}, 2000)