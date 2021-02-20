const assertEquals = (actual, expected, testName) => {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log(
      `FAILED ${testName} -- expected ${expected} but returned ${actual}`
    );
  }
};
const assertArrayEquals = (actual, expected, testName) => {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('PASSED');
  } else {
    console.log(
      `FAILED ${testName} -- expected ${expected} but returned ${actual}`
    );
  }
};

// Implement solution using a multiple pointers pattern
const sumZero = (integers) => {
  if (integers.length === 0) {
    return [];
  }
  // set pointers on either side of the array
  let left = 0;
  let right = integers.length - 1;

  console.log(integers);
  let moves = 0; // for testing
  while (left !== right) {
    if (integers[left] + integers[right] < 0) {
      left++;
    } else if (integers[left] + integers[right] > 0) {
      right--;
    } else {
      return [integers[left], integers[right]];
    }
    moves++; // for testing
    console.log(
      `step ${moves}: left index ${left}: ${integers[left]}, right index ${right}: ${integers[right]}`
    );
  }
  return [];
};

// sumZero tests
// console.log(JSON.stringify(sumZero([])) === JSON.stringify([]));
// console.log(JSON.stringify(sumZero([-1, 1])) === JSON.stringify([-1, 1]));
// console.log(JSON.stringify(sumZero([-2, -1, 1])) === JSON.stringify([-1, 1]));
// console.log(
//   JSON.stringify(sumZero([-3, -2, 3, 4])) === JSON.stringify([-3, 3])
// );
// console.log(JSON.stringify(sumZero([-3, -2, 4])) === JSON.stringify([]));
// console.log(
//   JSON.stringify(
//     sumZero([-33, -31, -21, -6, -4, -3, -2, -1, 4, 6, 7, 7, 10, 11])
//   ) === JSON.stringify([-6, 6])
// );
// console.log(JSON.stringify(sumZero([-3, -2, 0, 4])) === JSON.stringify([]));
// console.log(
//   JSON.stringify(sumZero([-3, -2, 0, 0, 4])) === JSON.stringify([0, 0])
// );

// const countUniqueValues = (arr) => {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let a = 0;
//   let b = 1;
//   while (b < arr.length) {
//     if (arr[a] !== arr[b]) {
//       a++;
//       arr[a] = arr[b];
//     }
//     b++;
//   }
//   return a + 1;
// };

// 2/20/21
const countUniqueValues = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
  let uniqueValues = 1;
  let p1 = 0;
  let p2 = 1;

  while (p2 < nums.length) {
    if (nums[p2] > nums[p1]) {
      uniqueValues++;
      p1 = p2;
    }
    p2++;
  }
  return uniqueValues;
};

// countUniqueValues TESTS
// console.log(
//   'function returns 0 for an empty array:',
//   countUniqueValues([]) === 0
// );
// console.log(
//   'function returns number of unique values:',
//   countUniqueValues([1]) === 1
// );
// console.log(
//   'function returns number of unique values:',
//   countUniqueValues([1, 2, 3]) === 3
// );
// console.log(
//   'function returns number of unique values:',
//   countUniqueValues([1, 1, 2]) === 2
// );
// console.log(
//   'function returns number of unique values:',
//   countUniqueValues([1, 1, 2, 2, 2, 3, 4, 5]) === 5
// );
// console.log(
//   'function returns number of unique values:',
//   countUniqueValues([1, 1, 2, 3, 4, 5, 5, 5, 6, 6, 7]) === 7
// );

// pasted from example
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

function averagePair(integers, target) {
  if (integers.length === 0) {
    return false;
  }
  // set a pointer at beginning, a pointer at the end
  let p1 = 0;
  let p2 = integers.length - 1;
  // as long as they dont equal each other
  while (p1 !== p2) {
    let average = (integers[p1] + integers[p2]) / 2;
    // if the average of the values is equal to the input val
    if (average === target) {
      // return the pair
      return true;
      // if it's greater
    } else if (average > target) {
      // decrement pointer 2
      p2--;
    } else {
      // if it's less than
      // increment p1
      p1++;
    }
  }
  // return []
  return false;
}

// TESTS
// assertEquals(
//   averagePair([], 43),
//   false,
//   'returns false for empty array'
// );
// assertEquals(averagePair([1, 1], 1), true, 'returns true when pair exists');
// assertEquals(
//   averagePair([1, 2], 1),
//   false,
//   'returns false when pair does not exist'
// );
// assertEquals(
//   averagePair([1, 2, 3, 4, 5], 2),
//   true,
//   'returns true when pair does exist'
// );

function isSubsequence(string1, string2) {
  if (string1.length > string2.length || string1.length === 0) {
    return false;
  }
  let p1 = 0;
  let p2 = 0;
  for (var i = 0; i < string2.length; i++) {
    if (string1[p1] === string2[p2]) {
      p1++;
      if (p1 === string1.length) {
        return true;
      }
    }
    p2++;
  }
  return false;
}

// TESTS
// assertEquals(isSubsequence('', ''), false, 'returns false for empty strings');
// assertEquals(
//   isSubsequence('str', ''),
//   false,
//   'returns false for empty strings'
// );
// assertEquals(
//   isSubsequence('', 'str'),
//   false,
//   'returns false for empty strings'
// );
// assertEquals(
//   isSubsequence('str', 'str'),
//   true,
//   'returns true for the same strings'
// );
// assertEquals(
//   isSubsequence('strr', 'str'),
//   false,
//   'returns false if string1 is greater'
// );
// assertEquals(
//   isSubsequence('str', 'string'),
//   true,
//   'returns true if string1 is a subset of string2'
// );
// assertEquals(
//   isSubsequence('sing', 'string'),
//   true,
//   'returns true if string1 is a subset of string2'
// );
// assertEquals(
//   isSubsequence('abc', 'acb'),
//   false,
//   'returns false if string2 has the same characters but in a different order'
// );
