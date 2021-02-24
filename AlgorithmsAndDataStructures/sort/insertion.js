/*
Insertion Sort
- similar to bubble and selection

- situations where insertion sort does well

How it works:
- builds up the sort by gradually creating a larger left pportion which is always sorted

- start by picking the second element in the array
- compare it to the the one before it and swap if necessary
- continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place
- repeat until the array is sorted

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

console.log(insertionSort([3, 4, 2, 5, 0]));
