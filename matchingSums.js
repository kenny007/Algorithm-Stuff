// Check if there are number pairs whose sum equals number given

const array = [1, 2, 3, 5, 6, 5, 4, 4];


function hasMatchingSum(array, sum) {
  const complements = {};
  for (let i = 0; i < array.length; i++) {
    if (complements[array[i]]) { // array[i] in complements
      return true;
    }
    complements[sum - array[i]] = true;
  }
  return false;
}

// using JS built-in function
function hasPairWithSums(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

hasMatchingSum(array, 8);

