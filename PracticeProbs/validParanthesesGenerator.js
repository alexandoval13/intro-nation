// Input: number -- pairs of '()'
// Output: array of combinations

// generate all combinations of well formed parantheses

// Example:
// 1 ->>> ['()'] // [')(')]
// 2 ->>> ['()()', '(())']
// 3 ->>> ['()()()', '()(())', '((()))', '(())()', '(()())']

// (()))

// n = 2
// open counter = 2
// close counter = 2

// ( --> ( --> ) --> )
// ( --> ) --> ( --> )
// ( --> ) -->

const parenthesesGenerator = (n) => {
  // result array of options
  let result = [];

  let rec = (temp, openCount, closeCount) => {
    // temp = '(', openCount = 1, close = 0
    // conditional checks to see if it's valid
    if (temp.length === 2 * n) {
      // add to result string
      result.push(temp);
      // return
      return;
    }

    if (openCount < n) {
      // add to the temp string
      rec(temp + '(', openCount + 1, closeCount);
    }
    if (closeCount < n && closeCount < openCount) {
      rec(temp + ')', openCount, closeCount + 1);
    }
    // if it's valid and i'm at the end of n pairs
  };
  rec('', 0, 0);

  // return result options
  return result;
};

// temp = '(', openCount = 1, close = 0

console.log(parenthesesGenerator(3));
