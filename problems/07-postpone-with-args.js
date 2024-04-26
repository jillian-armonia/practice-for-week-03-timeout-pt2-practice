/***********************************************************************
Write a function, `postponeWithArgs`, that accepts a callback and a delay in
milliseconds as arguments. `postponeWithArgs` should return a new function that
accepts any number of arguments. When the returned function is called, it should
invoke the callback after the given delay, passing any arguments it receives to
the callback.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Examples

const greet = (person) => console.log('Hello ' + person + '!');
const slowGreet = postponeWithArgs(greet, 1000);
slowGreet('Rose'); // prints 'Hello Rose!' after 1000 ms
slowGreet('Alex'); // prints 'Hello Alex!' after 1000 ms

const printSum = (num1, num2) => console.log(num1 + num2);
const slowPrintSum = postponeWithArgs(printSum, 500);
slowPrintSum(4, 3); // prints '7' after 500 ms
slowPrintSum(2, 8); // prints '10' after 500 ms

***********************************************************************/

function postponeWithArgs(cb, delay) {
  // Your code here
  //use closure to return the function in the end
  //1. create a function that can accept any number of arguments
  const inner = (...args) => {
    setTimeout(cb, delay, ...args);
  }
  //2. in the new function, create a timeout that accepts cb and the delay
  //3. return the function
  return inner;
}

const greet = (person) => console.log('Hello ' + person + '!');
const slowGreet = postponeWithArgs(greet, 1000);
slowGreet('Rose'); // prints 'Hello Rose!' after 1000 ms
slowGreet('Alex'); // prints 'Hello Alex!' after 1000 ms

const printSum = (num1, num2) => console.log(num1 + num2);
const slowPrintSum = postponeWithArgs(printSum, 500);
slowPrintSum(4, 3); // prints '7' after 500 ms
slowPrintSum(2, 8); // prints '10' after 500 ms

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = postponeWithArgs;
} catch {
  module.exports = null;
}
