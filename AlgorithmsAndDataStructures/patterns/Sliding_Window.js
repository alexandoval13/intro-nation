// solve using sliding window pattern

const maxSubArray = (arr, n) => {
  if (arr.length < n) {
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;
  for (var i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (var j = 0; j <= arr.length - n; j++) {
    tempSum -= arr[j];
    tempSum += arr[j + n];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
};

// TESTS
// console.log(maxSubArray([1, 2, 3, 4, 5, 6], 3) === 15);
// console.log(maxSubArray([6, 5, 4, 3, 2, 1], 3) === 15);
// console.log(maxSubArray([2, 1], 3) === null);
// console.log(maxSubArray([2, 1, 4, 5, 6, 1], 3) === 15);
// console.log(maxSubArray([4, 4, 2, 1, 1, 6, 7], 2) === 13);

// [1, 2, 3], 3
//     x
//        x

const minSubArrayLen = (array, minSum) => {
  let sum = array[0];
  let validLength = null;

  let start = 0;
  let end = 0;

  // GET THE FIRST VALID WINDOW
  while (validLength === null && end < array.length) {
    let currLength = end - start + 1;
    if (sum < minSum) {
      end++;
      sum += array[end];
    } else {
      validLength = currLength;
    }
  }
  if (validLength === null) {
    return 0;
  }
  // move the window and shrink if possible
  while (validLength > 1 && start < array.length) {
    // move the start one over and decrement from the sum
    sum = sum - array[start];
    start++;
    // adjust current length
    let currLength = end - start + 1;
    // if sum is greater than minSum, change the value of min validLength
    if (sum >= minSum && currLength < validLength) {
      validLength = currLength;
    } else {
      // otherwise increment the end and add value
      end++;
      sum += array[end];
    }
  }
  return validLength;
};

// SOLUTION ON UDEMY
// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;

//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then
// 		// move the window to right
//     if(total < sum && end < nums.length){
//       total += nums[end];
// 			end++;
//     }
//     // if current window adds up to at least the sum given then
// 		// we can shrink the window
//     else if(total >= sum){
//       minLen = Math.min(minLen, end-start);
// 			total -= nums[start];
// 			start++;
//     }
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//     else {
//       break;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }

// console.log(minSubArrayLen([3, 75, 1, 25, 25, 25, 25], 100));

// NEED TO COME BACK TO THIS ONE
// SOLUTION ON UDEMY:
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

// test
console.log(findLongestSubstring('abcbde'));
