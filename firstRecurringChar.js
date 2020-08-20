// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4] It should return 2
// Given an array = [2,1,1,2,3,5,1,2,4] It should return 1
// Given an array = [2,3,4,5] It should return undefined

function firstRecurringChar(input) {
  let bucket = {}
  for (let i = 0; i < input.length; i++) {
    if (!bucket[input[i]]) {
      bucket[input[i]] = 1
    }
    else {
      console.log(input[i])
      return input[i]
    }
  }
  return undefined;
}

function firstRecurringCharNaive(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; i < input.length; i++) {
      if (input[i] === input[j]) {
        console.log(input[i])
        return input[i];
      }
      console.log(undefined);
      return undefined;
    }
  }
} // O(n^2)

firstRecurringCharNaive([1, 3, 2, 4, 7])

// firstRecurringChar([2, 3, 4, 5])