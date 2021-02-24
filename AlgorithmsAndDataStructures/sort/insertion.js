/*
Insertion Sort
- similar to bubble and selection

Situations where insertion sort does well
- If your data is sorting as some data comes along, inserting at a moment's notice

How it works:
- builds up the sort by gradually creating a larger left pportion which is always sorted

- start by picking the second element in the array
- compare it to the the one before it and swap if necessary
- continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place
- repeat until the array is sorted


BigO: O(n^2)

Link: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344158#notes
*/
function swap(arr, in1, in2) {
  let temp = arr[in1];
  arr[in1] = arr[in2];
  arr[in2] = temp;
  return arr;
}

function insertionSort(array) {
  // iterate through the array beginning with the second element
  for (var i = 1; i < array.length; i++) {
    // compare it to the element before it to place in the correct position
    for (var j = i; j > 0; j--) {
      console.log(array);
      console.log(array[j], array[j - 1]);
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1);
      } else {
        break;
      }
    }
  }
  return array;
}

// console.log(insertionSort([3, 4, 2, 5, 0]));

// UDEMY COURSE ALTERNATE SOLUTION
function insertionSortUdemy(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// console.log(insertionSortUdemy([3, 4, 2, 5, 0]));

function insertionSortHybrid(array) {
  for (var i = 1; i < array.length; i++) {
    for (var j = i; j > 0 && array[j] < array[j - 1]; j--) {
      swap(array, j, j - 1);
    }
  }
  return array;
}

console.log(insertionSortHybrid([3, 4, 2, 5, 0]));
