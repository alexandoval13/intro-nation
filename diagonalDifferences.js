function diagonalDifference(arr) {
  // Write your code here
  let colLtoR = 0;
  let colRtoL = arr[1].length - 1;

  let leftToRight = 0;

  for(var row = 1; row < arr.length; row++) {
      leftToRight += arr[row][colLtoR];
      colLtoR++;
  }

  let rightToLeft = 0;
  for(var row = 1; row < arr.length; row++) {
      rightToLeft += arr[row][colRtoL];
      colRtoL--;
  }


  return Math.abs(leftToRight - rightToLeft)
}

var test = [[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]];
console.log( diagonalDifference(test));

