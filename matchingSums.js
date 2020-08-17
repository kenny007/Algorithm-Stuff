// Check if there are number pairs whose sum equals number given

const array = [1, 2, 3, 5, 6, 5, 4, 4];

const complements = {};

function hasMatchingSum(array, sum) {
  for (let i = 0; i < array.length; i++) {
    if (complements.hasOwnProperty(array[i])) { // array[i] in complements  complements[array[i]]
      console.log(complements)
      console.log('Match found!')
      return true;
    }
    complements[sum - array[i]] = true;
  }
  console.log(complements)
  return false;
}

hasMatchingSum(array, 8);

