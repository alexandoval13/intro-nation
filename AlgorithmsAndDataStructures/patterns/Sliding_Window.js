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
  // while validLength is null and sum < minSum
  // increment end
  // add sum
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
    // move the start array one over
    // decrement from the sum
    // start++;
    sum = sum - array[start];
    start++;
    // adjust current length
    let currLength = end - start + 1;

    // if sum is still greater than minSum
    // change the value of min validLength
    if (sum >= minSum && currLength < validLength) {
      validLength = currLength;
    } else {
      // otherwise
      // increment the end and add value
      end++;
      sum += array[end];
    }
  }
  return validLength;
};

console.log(minSubArrayLen([3, 75, 1, 25, 25, 25, 25], 100));
