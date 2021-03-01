/**
 * RESOURCES:
 *  https://javascript.info/async-await
 *  https://javascript.info/fetch
 *
 *  https://eloquentjavascript.net/11_async.html
 *
 * NEEDS REVIEW:
 *  https://css-tricks.com/using-es2017-async-functions/
 *  https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1
 */

const fetch = require('node-fetch');
const Promise = require('bluebird');
const key = require('../data.js').API;
// =================
// async
// =================

// the async keyword can be placed before a function, like the following:
async function f() {
  return 1;
}
// console.log(f()); // --> returns Promise {1}

// async before a function means that the function always returns a promise. Other values are wrapped in a resolved promise automatically...

async function f() {
  return 1;
}
f().then((result) => {
  // console.log(result);
  return result;
}); // --> returns 1

// async ensures that the function returns a promise and wraps non-promises in it.

// =================
// await
// =================
// works inside the async syntax (ONLY)

// this will resolve in 5 seconds as it's currently written:
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 5000);
  });
  let result = await promise;
  // console.log(result);
  return result;
}

// f();

// await literally suspends the function execution until the promise settles and then resumes it with the promise result
// it doesn't cost any CPU resources bc the JS engine can do other jobs in the meantime: execute other scripts, handle events, etc.

// await doesn't work in top level code like below
// using fetch:

/*
let response = await fetch(
  `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
);
let user = await response.json();
*/

// The above won't work, but if you wrap it in an anonymous async function, it will!:
(async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
  );
  let user = await response.json();
})();

// with then blocks
(async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
  );
  // .then((response) => response.json())
  // .then((data) => console.log(data))
  // .catch((err) => console.log(err));

  let user = await response
    .json()
    .then((res) => console.log(res))
    .then((err) => console.log(err));
})();

// ERROR HANDLING

// this...
async function f() {
  await Promise.reject(new Error('whaoshf'));
}

// ...is the same as the following
async function f() {
  throw new Error('wjfafkn');
}

// SKIPPED A BUNCH OF STUFF BUT NOW TO SUMMARIZE

/**
 * The async keyword before a function...
 * 1. Makes it always return a promise
 * 2. Allows "await" to be used in it
 *
 * The await keyword before a promise makes JS wait until that promise settles, then
 * 1. If error, the exception is generated (same as if throw error were called there)
 * 2. Otherwise it returns the result
 *
 *
 * With async/await we rarely need to write promise.then/catch, but don't forget that they ARE based on promises
 */
