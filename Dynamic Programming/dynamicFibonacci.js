/**
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
 * Using the naive method to implement fibonacci isn't the best approach we should rather 
 * add some optimization like memoization to it to make it more efficient. Fibonacci is O(2!n)
 * And with recursion we are adding every nested function calls to the stack which increases
 * our memory complexity
*/

let calculations = 0;
function fibonacci(n) { // O(2ˇn) here we added function to the stack which can cause it to overflow
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMaster() { // O(n) The difference here is that we just added our result to our hash table
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n]
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  }
}

function fibonacciMaster2() { // This is a bottom up approach and we avoid recursion
  let answer = [1, 2];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer(i - 1));
  }
  return answer.pop();
}

const fasterFib = fibonacciMaster();

console.log(fibonacci(6))