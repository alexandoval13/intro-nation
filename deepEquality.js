/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

 var deepEquals = function(apple, orange) {
  let appleStr = JSON.stringify(apple);
  let orangeStr = JSON.stringify(orange);
  if (appleStr.length !== orangeStr.length) {
    return false;
  }
  for (var key in apple) {
    // if the value is an object:
    if (typeof apple[key] === 'object') {
      // recurse and pass in the objects at each index
      return deepEquals(apple[key], orange[key]);
    // if the values are not the same:
    } else if (apple[key] !== orange[key]) {
      return false;
    }
  }
  return true;
};

// console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}));
// console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}));
 // true
 // false