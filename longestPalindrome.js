/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  let largestLength = 0,
    result = '';
  for (let i = 0; i < string.length; i++) {
    let substring = string.substr(i, string.length);
    if (substring.length <= largestLength) {
      break;
    };
    for (let k = substring.length; k >= 0; k--) {
      let subSubstring = substring.substr(0, k);
      if (subSubstring.length <= largestLength) {
        break;
      }
      if (isPalindrome(subSubstring)) {
        largestLength = subSubstring.length;
        result = subSubstring;
      }
    }
  }
  return result;
};

var isPalindrome = function (string) {
  let reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

// console.log(longestPalindrome("My dad is a racecar athlete"));