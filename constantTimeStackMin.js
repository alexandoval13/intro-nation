/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.
 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
 var Stack = function() {
  var storage = [];
  // create an array of minimums to keep track of
  var minimums = [];
  // add an item to the top of the stack
  this.push = function(value) {
    // add value to storage
    storage.push(value);
    // if value is less than the last added value of minimums or minimums is empty:
    if (minimums.length === 0 || value <= minimums[minimums.length - 1]) {
      // add value to minimums
      minimums.push(value);
    }
  };

  // remove an item from the top of the stack
  this.pop = function() {
    // remove last added value from storage and store it
    var popped = storage.pop();
    // if the popped value is in minimums:
    if (minimums[minimums.length - 1] === popped) {
      // remove it from minimums
      popped = minimums.pop();
    }
    // return popped value
    return popped;
  };

// return the number of items in the stack
  this.size = function() {
    return storage.length;
  };

// return the minimum value in the stack
  this.min = function() {
    return minimums[minimums.length - 1];
  };

};

// var testFunc = () => {
//   var stack = new Stack();
//       stack.push(200);
//       // we just added an element so the stack's min should be 200
//       stack.min()

//       stack.push(100);
//       // we just added _another_ element and the stack's min should now be 100
//       console.log('should be 100: ', stack.min());

//       stack.pop();
//       // we just removed an element so the stack's min should be 200 again
//       console.log('should be 200: ', stack.min());

//       stack.push(50);
//       stack.push(50);
//       // we just added _another_ element and the stack's min should now be 50
//       console.log('should be 50: ', stack.min());
//       // even if we pop the lowest value, the stack should remember duplicates
//       stack.pop();
//       console.log('should be 50: ', stack.min());
// }
