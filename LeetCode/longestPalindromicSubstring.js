/**
 * @param {string} s
 * @return {string}
 * A palindrome is a string which reads the same in both directions. 
 * For example, S = "aba" is a palindrom, S = "abc" is not
 * The approach used to solve this is called Expand Around Center
 * Every palindrome is basically a mirror image around a central character.
 */
var longestPalindrome = function (s) {
  if (!s || s.length <= 1) {
    return s;
  }

  let longest = s.substring(0, 1);
  for (let i = 0; i < s.length; i++) {
    let temp = expandAroundCenter(s, i, i);
    if (temp.length > longest.length) {
      longest = temp;
    }
    temp = expandAroundCenter(s, i, i + 1);
    if (temp.length > longest.length) {
      longest = temp;
    }
  }
  return longest;
};

function expandAroundCenter(s, start, end) { // This function will decrement the start and increment the end index && continue
  while (start >= 0 && end <= s.length - 1 && s[start] === s[end]) {
    start--;
    end++;
  } // This loop stop if the indexes are expanded beyond the length of the string or 0
  console.log(s.substring(start + 1, end))
  return s.substring(start + 1, end);
}

console.log(longestPalindrome('abacdfgdcaba'));