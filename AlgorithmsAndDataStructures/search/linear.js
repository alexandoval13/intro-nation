/*
LINEAR SEARCH
check every single element, one at a time, in order and see if it's what you want

JS Methods:
- indexOf, includes, find, findIndex

TIME COMPLEXITY
- O(n) linear


*/

function linearSearch(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}
