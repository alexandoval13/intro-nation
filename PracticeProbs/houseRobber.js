/**You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.



Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // initialize max tracker
  let max = 0;
  // recurse through the array, params: current index, value
  const findMax = (house, value) => {
    // if value > max, update max to equal value
    if (value > max) {
      max = value;
    }
    // if theres an element two over
    if (nums[house + 2]) {
      // recurse with element as current, and its value added to value
      findMax(house + 2, value + nums[house + 2]);
    }
    // if there's an element three over
    if (nums[house + 3]) {
      // do the same
      findMax(house + 3, value + nums[house + 3]);
    }
  };

  // invoke recursion on first option and second option
  findMax(0, nums[0]);
  findMax(1, nums[1]);
  // return max
  return max;
};

// v2
// var rob = function (nums) { //  [1, 2, 3, 4]
//   if(nums.length === 0) {
//       return 0;
//   }

// let maxX = nums[0] || 0; // 1
// let maxY = nums[1] || 0; // 2

// for (var i = 0; i < nums.length; i+=3) { // i = 0
// console.log('LOOPING: value of i is ', i )
//    let first = i; // 0
//    let second = i + 1; // 1
//    let third = second+1; // 2
//    let fourth = third+1; // 3
//    let fifth = fourth+1; // 4

//    let x1 = maxX + (nums[fourth] || 0); // 1 + 4 = 5
//    let x2 = maxY + (nums[fourth] || 0); // 2 + 4 = 6
//    console.log('Xs:', x1, x2);
//    console.log(maxX);

//    let y1 = maxX + (nums[third] || 0) + (nums[fifth] || 0); // 6 + 0 + 0 = 6
//    let y2 = maxY + (nums[fifth]||0); // 4 + 0 = 4
//    console.log('Ys:', y1, y2); // 4
//    console.log(maxY);

//    maxX = Math.max(x1, x2); // 6
//    maxY = Math.max(y1, y2);
// }

// return Math.max(maxX, maxY);
// };

// let test2 = rob([6,3,10,8,2,10,3,5,10,5,3]) // <--- DOESNT WORK WITH v2

let test = rob([1, 2, 3, 4]);
console.log(test, test === 6);

let test2 = rob([
  226,
  174,
  214,
  16,
  218,
  48,
  153,
  131,
  128,
  17,
  35,
  120,
  180,
  249,
  106,
  37,
  169,
  225,
  54,
  103,
  55,
  166,
  124,
]);
console.log(test2);
