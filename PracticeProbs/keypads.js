
function numKeypadSolutions(wordlist, keypads) {
  // Write your code here
  var returnTotal = []

// debugger;

  var letters = {};
  // iterate through wordlist
  for (var i = 0; i < wordlist.length; i++) {
      var word = wordlist[i];
      for (var j = 0; j < word.length; j++) {
          var letter = word[j];

          if (!letters[letter]) {
              letters[letter] = [];
          }
          letters[letter].push(word);
      }
  }
      // create letters object
          // letter : [wordIndex]



//     var keyLetters = {};
//     for (var i = 0; i < keypads.length; i++) {
//         var keypad = keypads[i];
//         for (var j = 0; j < keypad.length; j++) {
//             var letter = keypad[j];
// debugger;
//             if (!keyLetters[keypad]) {
//                 keyLetters[keypad] = {};
//             }
//             keyLetters[keypad][letter] = false;
//         }
//     }

  // iterate through keypads
  for (var x = 0; x < keypads.length; x++) {


      var keypad = keypads[x]; // string 'aelwxyz'
      var options = letters[keypad[0]];  // array of words with 'a': [apple, please, pleas]


      // iterate through array of options and check to see if it exists in the keypad
      for (var y = 0; y < options.length; y++) {
          var validOption = word[y];

          for (var z = 0; z < validOption.length; z++) {
              if (keypad.indexOf(validOption[z]) < 0) {
                  validOption = false;
              }

          }

          if (!returnTotal[x]) {
              returnTotal[x] = 0;
          }

          if(validOption) {
              returnTotal[x]++;
          }
      }




  }
      // find letters in objects
//         return letters;
// console.log(letters, keyLetters)
console.log(returnTotal);
return returnTotal[x];

}



var testList = ['apple', 'please', 'pleas'];
var testPads = ['aelwxyz', 'aelpxyz', 'aelpsxy'];

numKeypadSolutions(testList, testPads);