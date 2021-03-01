/**
 * Playing around with the keyword this
 */

// var foo = 1;
// function bar() {
//   console.log('inside the func:\n', foo);
//   foo = 10; // it looks like the foo that is being reassigned here is the function foo, which has been hoisted to the top of the lexical scope - I believe
//   console.log(foo);
//   return;
//   var foo = function foo() {}; // if this were assigned to a variable it would not be hoisted to the top AND the top console.log(foo) returns undefined
// }
// bar();
// console.log(foo);

// ==========================================

// function bar() {
//   return foo;
//   foo = 10;
//   function foo() {}
//   var foo = 11;
// }
// console.log(typeof bar());

// ==========================================

// var x = 3;

// var foo = {
//   x: 2,
//   baz: {
//     // x: 1,
//     bar: function () {
//       return this.x;
//     },
//   },
// };

// var go = foo.baz.bar;

// console.log(go()); // undefined - why?
// // Oh I think I know why, bc the var go is being assigned to the value at foo.baz.bar which is the function, BUT it can't know where that function was taken from and so has no place to assign "this"
// console.log(foo.baz.bar()); // 1
// // This invocation on the other hand, is accessing that function through foo and baz, and "this" will refer to whatever is "to the left of the dot" which is baz here. NOTE: if baz does not contain a key/value for 'x', it will return 'undefined' and DOES NOT move up to foo to look for a value x
// // worth looking into, if baz was an instance of foo, and had prototypal inheritance, maybe it would return foo's value for x if it didnt have one of its own

// ==========================================

// var x = 4;

// var obj = {
//   x: 3,
//   bar: function () {
//     var x = 2;
//     setTimeout(function () {
//       var x = 1;
//       console.log(this.x);
//     }, 1000);
//   },
// };
// obj.bar(); // returns undefined
// // is it because of setTimeout and that it's asynchronous?

// ==========================================

console.log('this:\n', Object.keys(this));

x = 1;
function bar() {
  console.log('from func:\n', this);
  this.x = 2;
  return x;
}
var foo = bar();
console.log(foo.x);

// ==========================================

let obj = { this: 'that', here: 'there', where: 'mare' };
console.log(Object.entries(obj));
