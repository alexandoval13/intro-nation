// solce using sliding window pattern

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

console.log(maxSubArray([1, 2, 3, 4, 5, 6], 3) === 15);
console.log(maxSubArray([6, 5, 4, 3, 2, 1], 3) === 15);
console.log(maxSubArray([2, 1], 3) === null);
console.log(maxSubArray([2, 1, 4, 5, 6, 1], 3) === 15);
console.log(maxSubArray([4, 4, 2, 1, 1, 6, 1], 3) === 10);
