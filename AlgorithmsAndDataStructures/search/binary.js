/*
Binary Search

Used to eliminate half at a time
Only works on SORTED arrays
Time Complexity:
O(log n) (doubling the size of n is only adding one step in the search)

Divide and Conquer

*/

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
