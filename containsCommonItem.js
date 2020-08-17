// Question: Check if two arrays contain the same item
// Maybe we can convert array1 into an object and only have to loop through the second array
// This is better than naive, quadratic or brute force approach because because it doesn't use
// a nested loop therefore it is (a+b) not (a*b) since it uses separate loops
const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['z', 'y', 'a'];

function containsCommonItem(arr1, arr2) {
  // loop through first array and create object
  // where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  console.log(map);
  // loop through second array and check if item in second array
  // exist on created object.
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      conso
      return true;
    }
  }
  return false;
}

containsCommonItem(array1, array2);

containsCommonItem2(arr1, arr2){
  return arr1.some(item => arr2.includes(item));
}

// ### HOW TO BREAK THIS CODE
// If the second array isn't supplied kasala to gass o