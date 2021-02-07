// Implement solution using  multiple pointers

const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let a = 0;
  let b = 1;

  while (b < arr.length) {
    if (arr[a] !== arr[b]) {
      a++;
      arr[a] = arr[b];
    }
    b++;
  }

  return a + 1;
};

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
