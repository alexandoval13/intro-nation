/**
 * Places smallest values into sorted position
 */
const swap = (arr, in1, in2) => {
  let temp = arr[in1];
  arr[in1] = arr[in2];
  arr[in2] = temp;
  return arr;
};

const selectionSort = (array) => {
  // Loop through the array
  for (var i = 0; i < array.length; i++) {
    // TRACK THE MIN ELEMENT startingwith the current index value
    let min = i;
    let swapped = false;
    // loop through the following elements
    for (var j = i + 1; j < array.length; j++) {
      // if any value is less than min
      if (array[j] < array[min]) {
        // change the min value
        min = j;
        swapped = true;
      }
      // if the value of min changed
      if (swapped) {
        // swap the values in the array (curr and min)
        swap(array, i, min);
      }
    }
  }
  // return the sorted array
  return array;
};

// console.log(selectionSort([4, 3, 1, 2]));

// Attempt 2/24
function otherSelection(array) {
  let start = 0; // first value index

  while (start < array.length) {
    let min = start;
    let swapped = false;
    for (var i = start; i < array.length; i++) {
      if (array[i] < array[min]) {
        min = i;
        swapped = true;
      }
    }
    if (swapped) {
      swap(array, start, min);
    }
    start++;
  }
  return array;
}

console.log(otherSelection([4, 3, 1, -5, 2, 0]));
