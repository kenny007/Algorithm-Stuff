// Given a string, find the length of the longest substring without repeating characters

const lengthOfLongestSubstring = function (s) {
  let n = s.length;
  const set = new Set();
  let counter = 0, i = 0, j = 0;
  while (i < n && j < n) {
    // extend the range of i and j by sliding to the right
    if (!set.has(s.charAt(j))) {
      set.add(s.charAt(j++));
      counter = Math.max(counter, j - i);
    }
    else {
      set.delete(s.charAt(i++));
      // we are deleting it because it has been found since this is what we are comparing against
    }
  }
  console.log(counter);
  return counter;
}

const lengthOfLongestSubstring2 = function (s) {
  const n = s.length;
  let counter = 0;
  let map = {};
  for (let j = 0, i = 0; j < n; j++) {
    if (map[s.charAt(j)]) {
      i = Math.max(map[s.charAt(j)], i)
    }
    counter = Math.max(counter, j - i + 1)
    map[s.charAt(j)] = j + 1;
  }
  return counter;
};

lengthOfLongestSubstring2('bbbbb');