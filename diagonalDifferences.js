function diagonalDifference(arr) {
  // Write your code here

  let colLtoR = 0;
  let colRtoL = 0;

  let leftToRight = 0;

  for(var row = 1; row < arr.length; row++) {
      leftToRight += arr[row][colLtoR];
      colLtoR++;
  }

  let rightToLeft = 0;
  for(var row = 1; row >= 0; row--) {
      rightToLeft += arr[row][colRtoL];
      colRtoL++;
  }

  return Math.abs(leftToRight - rightToLeft)
}

var test = [[3], [1, 2, 3], [1, 2, 3], [1, 2, 3]];
diagonalDifference(test);