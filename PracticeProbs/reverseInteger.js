/*

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

var reverse = function(x) {

  if (x >= 0) {
    var pos = true;
    var revString = ''
  } else {
    var pos = false;
    var revString = '-'
  }

  var stringNum = x.toString();
  var limit = 0;
  if (!pos) { limit = 1 };

  for (var i = stringNum.length - 1; i >= limit; i--) {
    revString += stringNum[i];
    console.log(revString);
  }

    return Number(revString)

};