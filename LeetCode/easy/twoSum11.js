// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let low = 0, high = numbers.length - 1
  while (low < high) {
    const currentSum = numbers[low] + numbers[high];
    if (currentSum === target) {
      return [low + 1, high + 1];
    } else if (currentSum < target) {
      ++low;
    } else {
      --high;
    }
  }
  return [-1, -1]
};

twoSum([2, 7, 11, 15], 9);


