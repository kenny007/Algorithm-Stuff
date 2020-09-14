/**
* We are using closure here but the inner function has access to the scope
* of the parent function this way we avoid putting cache in the global scope
*/
function memoizedAddTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    }
    else {
      console.log('Long running')
      cache[n] = n + 80;
      return cache[n];
    }
  }
}

const memoized = memoizedAddTo80();

console.log('1', memoized(5));
console.log('2', memoized(5))