// invoke the same function over and over
// need to have a base case, a condition where the recursion ends
// Note, need two things:
// 1. Base Case, 2. Different Input

function countDown(num) {
  if (num === 0) {
    console.log('all done');
    return;
  }
  console.log(num);
  countDown(num - 1);
}

function sumRange(num) {
  if (num === 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}

// console.log(sumRange(4));

function factorial(num) {
  // base case
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(1));

// USING HELPER METHOD RECURSION
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

// USING PURE RECURSION
function collectOddValues(array) {
  let newArr = [];
  // base case
  if (array.length === 0) {
    return newArr;
  }
  // if the first element is odd, add to newArr
  if (array[0] % 2 !== 0) {
    newArr.push(array[0]);
  }

  // take the current newArr and combine it with the results of this function (recursively)
  newArr = newArr.concat(collectOddValues(array.slice(1)));

  // return newArr
  console.log(newArr);
  return newArr;
}

// console.log('RESULT:', collectOddValues([1, 3, 5, 7, 8]));

function posPow(base, exponent) {
  if (exponent === 0) return 1;
  return base * posPow(base, exponent - 1);
}

// console.log(posPow(2, 4));

function productOfArray(array) {
  if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }
  // OR instead of the previous 2 conditionals...
  // if (array.length === 0) { return 1 }

  let product = 1;
  product *= array[0];
  return product * productOfArray(array.slice(1));
}

// console.log(productOfArray([1, 2, 3]));

function recursiveRange(num) {
  if (num === 0) {
    return 0;
  }
  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(10));

// 1, 1, 2, 3, 5, 8
function fib(num) {
  if (num === 0) {
    return 0;
  }
  if (num <= 2) {
    return 1;
  }
  return fib(num - 2) + fib(num - 1);
}

console.log(fib(10));
