/*console.log(process.argv.slice(2)[0]);

let a = 10;
let b = 20;

const sum = (a, b) => console.log(`Sum is of ${a} and ${b} is ${a + b}`);

const multiply = (a, b) =>
  console.log(`Multiplication is of ${a} and ${b} is ${a * b}`);

const measureSumTime = () => {
  console.time('Sum');
  sum(a, b);
  console.timeEnd('Sum');
};

const measureMultiplyTime = () => {
  console.time('Multiply');
  multiply(a, b);
  console.timeEnd('Multiply');
};

measureSumTime();

measureMultiplyTime();

// take user input from command line

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('What is your name? ', (name) => {
  console.log(`Hi ${name}!`);
  readline.close();
});*/

const promise = new Promise((resolve, reject) => {
  console.log('Promise is created');
  if (false) {
    resolve();
  } else {
    reject();
  }
});

promise.then(
  () => {
    console.log('Promise is resolved');
  },
  () => {
    console.log('Promise is rejected');
  },
);
