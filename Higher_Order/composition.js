/**
 * What is function composition?
 *    The pointwise application of one function to the result of another.
 *
 * Reading compose from left to right allows a clear chaining of higher order functions. Real world examples are adding authentications, logging and context properties. It’s a technique that enables reusability on the highest level.
 *
 * Can enable developers to create new behavior based upon existing behavior
 *
 * It also increased readability of implementations; instead of nesting functions you can clearly chain functions and create higher order functions with meaningful names
 */

// An example of a manual way using nest functions:

const add2 = (n) => {
  return n + 2;
};

const square = (n) => {
  return n * n;
};

compose = (fn1, fn2) => (value) => fun2(fn1(value));

var add2AndSquare = (n) => square(add2(n));

// An example using composition... instead of reading them from inside out we can use a higher order function to chain them in an ordered way

var add2AndSquare = compose(add2, square);

// A simple implementation of compose would be

compose = (f1, f2) => (value) => f2(f1(value));

// To get even more flexibility we can use the reduceRight function:

compose = (...fns) => (initialVal) =>
  fns.reduceRight((val, fn) => fn(val), initialVal);

// Examples of how to use it:

const times2 = (n) => n * 2;

const times2add2 = compose(add2, times2);
console.log(times2add2(10)); // --> 22

const add2times2 = compose(times2, add2);
console.log(add2times2(10)); // --> 24
