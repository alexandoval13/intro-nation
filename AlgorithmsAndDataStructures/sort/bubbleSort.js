/**
 * Time Complexity: O(n^2)
 */

const bubbleSort = (array) => {
  let swap = (arr, in1, in2) => {
    let temp = arr[in1];
    arr[in1] = arr[in2];
    arr[in2] = temp;
    return arr;
  };

  var noSwaps;
  for (var i = array.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        console.log('swapper');
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
};

// test

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
