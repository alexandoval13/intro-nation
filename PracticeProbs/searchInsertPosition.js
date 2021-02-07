// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

var searchInsert = function(nums, target) {
  var position = null;
  for (var i = 0; nums[i] <= target; i++) {
    if (nums[i] === target) { return i };
    position = i;
  }
  return position +1;
};