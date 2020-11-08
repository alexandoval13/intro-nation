
/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/


function reverseInteger(number){
  var reversed = arguments[1] || 0;
  var lastNum = number % 10;

  reversed = reversed * 10 + lastNum;

  if (((number - lastNum) / 10) < 1) {
    return reversed;
  }

  return reverseInteger(((number - lastNum) / 10), reversed);
}