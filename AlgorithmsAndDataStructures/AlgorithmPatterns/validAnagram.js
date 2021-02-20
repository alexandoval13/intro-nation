// solve using the frequency counter pattern
// const validAnagram = (string1, string2) => {
//   if (string1.length !== string2.length) {
//     return false;
//   }
//   let letterObj = {};
//   for (var i = 0; i < string1.length; i++) {
//     var letter = string1[i];
//     if (!letterObj[letter]) {
//       letterObj[letter] = 0;
//     }
//     letterObj[letter]++;
//   }
//   for (var j = 0; j < string2.length; j++) {
//     var letter = string2[j];
//     if (!letterObj[letter]) {
//       return false;
//     }
//     letterObj[letter]--;
//   }
//   return true;
// };

// solution 2/20/21
const validAnagram = (string1, string2) => {
  // check lengths
  if (string1.length !== string2.length) {
    // return false if not equal
    return false;
  }
  // intialize tracker
  let chars = {};
  // iterate over string 1
  for (var char of string1) {
    // add char to a count tracker
    chars[char] ? chars[char]++ : (chars[char] = 1);
  }
  console.log(chars);
  // iterate over string 2
  for (var char of string2) {
    // if char does not exist in tracker or if tracker count is less than zero
    if (!chars[char]) {
      // return false
      return false;
      // else
    } else {
      // decrement char count from tracker
      chars[char]--;
    }
  }
  // return bool that represents if inputs are anagrams
  return true;
};

// tests
const assertEquals = (actual, expected, testName) => {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log(
      `FAILED ${testName} -- expected ${expected} but returned ${actual}`
    );
  }
};

assertEquals(
  validAnagram('', ''),
  true,
  'returns true for empty string inputs'
);
assertEquals(
  validAnagram('a', 'ab'),
  false,
  'returns false if strings are different lengths'
);

assertEquals(
  validAnagram('a', 'z'),
  false,
  'returns false if letters do not match'
);
assertEquals(
  validAnagram('zz', 'zzz'),
  false,
  'returns false if letter counts do not match'
);
assertEquals(
  validAnagram('azam', 'maza'),
  true,
  'returns true if letters and letter counts match'
);
assertEquals(
  validAnagram('texttwisttime', 'timetwisttext'),
  true,
  'returns true if letters and letter counts match'
);
assertEquals(
  validAnagram('awesome', 'awesom'),
  false,
  "returns false if counts don't match"
);
