/*
  Easiest to solve through recursion
  Also keep splitting data until 1 or 0 length


  How it works:
  - Works by selecting one element called the pivot, then finding the index where the pivot should end up in the sorted array
  - Once the pivot is positioned, quick sort can be applied to either side
*/

// =======================================================
const swap = (arr, in1, in2) => {
  let temp = arr[in1];
  arr[in1] = arr[in2];
  arr[in2] = temp;
  return arr;
};

// PIVOT HELPER
// designates an element as the pivot
// then rearranges elements in the array so that all values less than the pivot are moved to the left of the puvot and all values greater than the pivot are moved to the right of the pivot
// the order on either side doesn't matter
// this helper should do it in place - should not return a new array
// returns the index of the pivot

function pivot(array, start = 0, end = array.length - 1) {
  // grab and store the pivot index in a var
  let pivot = array[start];
  let swapIndex = start;
  // loop through the array
  for (var i = start + 1; i < array.length; i++) {
    // if the pivot is greater than the current element
    if (pivot > array[i]) {
      // increment the pivot index
      swapIndex++;
      // swap the current element with the element at the pivot index
      swap(array, swapIndex, i);
    }
  }
  // swap the pivot started with with the pivot index
  swap(array, start, swapIndex);
  // return the pivot index
  return swapIndex;
}

// console.log(pivot([4, 1, 3, 0]));

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    // call the pivot helper on the array
    let pivotIndex = pivot(array, left, right);
    // recursively call quicksort on the left side and then on the right side
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }

  return array;
}

console.log(quickSort([3, 43, 1, 5, 34, 2, 6, 4, 54, 43]));
