// Here the reason this will be sorted is that the second variable doesn't increment so
// it knows when to insert the element as it patiently awaits it
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;


  // check input
  if (array1.length === 0) {
    return array2.length;
  }

  if (array2.length === 0) {
    return array1.length;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item)
      array2Item = array2[j];
      j++;
    }
  }

  return console.log(mergedArray);
}

mergeSortedArrays([0, 3, 4, 31, 45], [4, 6, 30, 41, 90]); // [0, 3, 4, 4, 6, 30, 31]