// solve using the frequency counter pattern
const validAnagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  let letterObj = {};
  for (var i = 0; i < string1.length; i++) {
    var letter = string1[i];
    if (!letterObj[letter]) {
      letterObj[letter] = 0;
    }
    letterObj[letter]++;
  }

  for (var j = 0; j < string2.length; j++) {
    var letter = string2[j];
    if (!letterObj[letter]) {
      return false;
    }
    letterObj[letter]--;
  }

  return true;
};

// tests

console.log(
  'validAnagrams returns false if strings are different lengths:',
  validAnagram('a', 'ab') === false
);
console.log(
  'validAnagrams returns false if letters do not match:',
  validAnagram('aaa', 'zzz') === false
);
console.log(
  'validAnagrams returns false if letter counts do not match:',
  validAnagram('aazz', 'azzz') === false
);
console.log(
  'validAnagrams returns true if letters and letter counts match:',
  validAnagram('azam', 'maza') === true
);

console.log(validAnagram('anagrams', 'nagarams'));
console.log(validAnagram('texty', 'ytext'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('rat', 'ran'));
