// Write a function that invokes a callback function once it has been called n or more times

let after = function (n, func) {
  var x = 0;

  return () => {
    x++;
    if (x >= n) {
      func();
    }
  };
};

let test = after(3, () => {
  console.log("t'worked");
});

test(); // does nothing
test(); // does nothing
test(); // prints
test(); // prints

// ==============================================

let before = function (n, func) {
  var x = 0;

  return () => {
    x++;
    if (x < n) {
      func();
    }
  };
};

let test2 = before(2, function () {
  console.log('Oh, pls');
});

test2(); // prints
test2(); // does nothing
test2(); // does nothing
test2(); // does nothing

// ==============================================

let once = function (func) {
  var invoked = false;
  var result;

  return () => {
    if (!invoked) {
      console.log('ORIGINAL INVOCATION');
      result = func.apply(this, arguments);
      invoked = true;
    }
    console.log(result);
    return result;
  };
};

let square2 = () => {
  return 2 * 2;
};

var squareOnce = once(square2);

squareOnce();
squareOnce();
squareOnce();
squareOnce();
