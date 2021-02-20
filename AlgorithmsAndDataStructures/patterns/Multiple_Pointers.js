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
console.log(
  'function returns 0 for an empty array:',
  countUniqueValues([]) === 0
);
console.log(
  'function returns number of unique values:',
  countUniqueValues([1]) === 1
);
console.log(
  'function returns number of unique values:',
  countUniqueValues([1, 2, 3]) === 3
);
console.log(
  'function returns number of unique values:',
  countUniqueValues([1, 1, 2]) === 2
);
console.log(
  'function returns number of unique values:',
  countUniqueValues([1, 1, 2, 2, 2, 3, 4, 5]) === 5
);
console.log(
  'function returns number of unique values:',
  countUniqueValues([1, 1, 2, 3, 4, 5, 5, 5, 6, 6, 7]) === 7
);
