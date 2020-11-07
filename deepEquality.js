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
  var appleStr = JSON.stringify(apple);

  var orangeStr = JSON.stringify(orange);

  if (appleStr.length !== orangeStr.length) {
    return false;
  }

  for (var key in apple) {

    if (typeof apple[key] === 'object') {

      return deepEquals(apple[key], orange[key]);

    } else if (apple[key] !== orange[key]) {
      return false;
    }
  }
  return true;
};

