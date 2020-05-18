const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});
let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
let res = a + b;
rl.question(`what is ${a}+${b}\n`, userInput => {
  if (userInput.trim() == res) {
    rl.close();
  } else {
    rl.setPrompt("incorrect answer\n");
    rl.prompt();
    rl.on("line", userInput => {
      if (userInput.trim() == res) {
        rl.close();
      } else {
        rl.setPrompt("your answer is very incorect\n");
        rl.prompt();
      }
    });
  }
});

rl.on("close", () => {
  console.log("you are correct");
});
