// Given an array nums of n integers, are there elements a,b,c = 0? Find all the unique triplets
// in the array which gives the sum of zero
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = function (nums) {
  nums.sort((a, b) => a - b) // sorting changes the original array
  let result = [];
  for (let i = 0; i < nums.length && nums[i] <= 0; ++i) {
    if (i == 0 || nums[i - 1] != nums[i]) { // nums[i - 1] is to check if not same as previous el
      twoSumII(nums, i, result)
    }
  }
  return result;
}

const twoSumII = function (nums, i, result) {
  let low = i + 1, high = nums.length - 1;
  while (low < high) {
    const sum = nums[i] + nums[low] + nums[high];
    if (sum < 0) {
      ++low;
    } else if (sum > 0) {
      --high;
    } else {
      result.push([nums[i], nums[low++], nums[high--]])
      while (low < high && nums[low] === nums[low - 1])
        ++low;
    }
  }
}

threeSum([-1, 0, 1, 2, -1, -4]);