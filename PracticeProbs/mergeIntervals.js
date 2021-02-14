/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let sorted = intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let mergedIntervals = [];
  // recurse through intervals params: array, index
  const mergeInts = (array, index) => {
    // if index is greater than the length of intervals
    if (index + 1 === sorted.length) {
      // add array to results
      mergedIntervals.push(array);
      // return
      return;
    }
    // next is the next element
    let next = sorted[index + 1];
    // if the end value of array, is greater than the start value of next
    if (array[1] >= next[0]) {
      // recurse with params: [array[start], next[end]], index + 1
      if (array[1] >= next[1]) {
        mergeInts([array[0], array[1]], index + 1);
      } else {
        mergeInts([array[0], next[1]], index + 1);
      }
    } else {
      // otherwise
      // add array to results
      mergedIntervals.push(array);
      // begin recursion with params: [], index + 1
      mergeInts(sorted[index + 1], index + 1);
    }
  };
  // invoke recursion
  mergeInts(sorted[0], 0);
  // return results
  return mergedIntervals;
};
