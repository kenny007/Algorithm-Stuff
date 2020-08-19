/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashtable = {};
  for (let i = 0; i < nums.length; i++) {
    hashtable[nums[i]] = i
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hashtable[complement] && hashtable[complement] != i) {
      return [hashtable[complement], i]
    }
  }
};

twoSum([3, 2, 4], 6)