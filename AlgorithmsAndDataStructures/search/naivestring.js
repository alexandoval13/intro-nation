/*
Naive String Search
*/

function naiveStringSearch(string, sub) {
  let count = 0;
  // loop over the longer string
  for (var i = 0; i < string.length; i++) {
    // loop over the shorter string
    if (string[i] === sub[0]) {
      let i1 = i;
      let i2 = 0;
      while (string[i1] === sub[i2]) {
        if (i2 === sub.length - 1) {
          count++;
          break;
        }
        i1++;
        i2++;
      }
    }
  }
  // return the count
  return count;
}

console.log(naiveStringSearch('abcljkialkhacjhabcljabc', 'abc'));

/// UDEMY COURSE SOLUTION

function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch('helpppp me', 'pp'));
