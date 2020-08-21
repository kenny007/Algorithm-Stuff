// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4] It should return 2
// Given an array = [2,1,1,2,3,5,1,2,4] It should return 1
// Given an array = [2,3,4,5] It should return undefined
// Note on input like [2,5,5,2,3,5,1,2,4] using a nested for loop might be a bit 
// I remember being told there is a guy that uses hashtable for everything now I get why :D the app probably uses more memory

function firstRecurringChar(input) {
  let map = {}
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return input[i];
    }
    else {
      map[input[i]] = i
    }
  }
  return undefined;
} // 0(n) // space complexity O(1)

function firstRecurringCharNaive(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; i < input.length; i++) {
      if (input[i] === input[j]) {
        return input[i];
      }
      return undefined;
    }
  }
} // O(n^2) 

firstRecurringCharNaive([1, 3, 2, 4, 7])

// firstRecurringChar([2, 3, 4, 5])