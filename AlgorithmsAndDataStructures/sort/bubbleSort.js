/**
 * The larger values will bubble to the top
 *
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

/// IMPLEMENTED ON 2/24
// swap helper function
function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

function otherBubble(array) {
  // let start = 0;
  let max = array.length - 1;
  let swapped = true;

  while (swapped) {
    let temp = false;
    for (var i = 0; i < max; i++) {
      if (array[i] > array[i + 1]) {
        temp = true;
        swap(array, i, i + 1);
      }
    }
    if (!temp) {
      swapped = false;
    }
    max--;
  }
  return array;
}

console.log(otherBubble([3, 2, 4, 1]));
