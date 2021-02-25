/*
MERGE SORT

How does it work?
- Decomposes an array into smaller arrays of 0 or 1 elements, then builds up a newly sorted array
- split until you have single element arrays,
- then merge groups of two into new sorted array
- Uses recursion

Big(O): O(n log n)
- O(log n) decompositions,
- O(n) comparisons per decomposition to actually perform the merging

*/

// Implement a function responsible for merging two sorted arrays into one sorted array

function merge(array1, array2) {
  // create an empty array, take a look at the smallest values in each input array (while loop)
  let result = [];
  let index1 = 0;
  let index2 = 0;
  // while there are stilll values we haven't looked at
  while (index1 < array1.length && index2 < array2.length) {
    // if the value in the first array is smaller than the value in the secong array, push the value in the first array into our results and move on to the next value in the first array
    if (array1[index1] < array2[index2]) {
      result.push(array1[index1]);
      index1++;
    } else {
      // if the value in the first array is larger than the value in the second array, push the value in the seconf array into our results and move on to the next value in the second array
      result.push(array2[index2]);
      index2++;
    }
  }
  // once we exhaust one array, push in all remaining values from the other array
  if (index1 < array1.length) {
    // for (var i = index1; i < array1.length; i++) {
    //   result.push(array1[i]);
    // }
    result = result.concat(array1.slice(index1));
  } else {
    // for (var i = index2; i < array2.length; i++) {
    //   result.push(array2[i]);
    // }
    result = result.concat(array2.slice(index2));
  }

  return result;
}

// mergeSort
// Break up array into halves until you have arrays that are empty or have one element
// once you have smaller arrays, merge throse arrays with other sorted arrays until back at full length of the array
// once the array has been merged, return the merged and sorted array

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([3, 5, 6, 11, 2, 1, 6, 7, 4, 3, 10]));
