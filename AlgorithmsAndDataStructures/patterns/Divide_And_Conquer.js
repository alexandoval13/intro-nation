// implement using divide and conquer pattern

const binarySearch = (arr, val) => {
  // set a lower bound and an upper bound
  var min = 0;
  var max = arr.length - 1;

  // while there is no match
  while (min <= max) {
    // find the middle value of the sorted array
    let i = Math.floor((min + max) / 2);
    // if arr at index equals the value
    if (arr[i] === val) {
      // return index
      return i;
      // if middle is < val
    } else if (arr[i] < val) {
      min = i + 1;
      // if middle > min
    } else {
      // reset max to index
      max = i - 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4) === 3);
console.log(binarySearch([1, 2, 3, 5, 6, 7], 4) === -1);
console.log(binarySearch([1, 2, 3, 6, 7, 8], 8) === 5);
console.log(binarySearch([1, 2, 3, 6, 7, 8], 11) === -1);
