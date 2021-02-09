function decrypt(word) {
  // your code goes here
  let string = '';
  // decrypt the first char
  let unicodeVal = word.charCodeAt(0);
  string += String.fromCharCode(firstUnicodeVal - 1);

  // loop through the word starting at 1
  for (let i = 1; i < word.length; i++) {
    let ascii = word.charCodeAt(i);
    let prev = unicodeVal;

    let x = ascii - prev + 26;
    while (x < 97) {
      x += 26;
    }

    unicodeVal = word[i].charCode(0);
    string += String.fromCharCode(x);
  }
  return string;
}
/*

char.charCodeAt();

input: word
output: decrypted word

-- d    n   o   t   q
--100  110 111 116 113

-- c     ?

while (? < 97) {
? = input - prevVal + 26
}

?

val = 110
val + 26

if val - 100 = (97 - 122) --> char

prevVal(100) + ?(114) - 26(x) = input(110);


a 97
z 122

 decrypt the first letter
  get unicode value
  subtract 1
  a -- 97 ---97 - 1 = 96 --- + 26 --- z
  b -- 97 -- 97 - 1 = 96 --- a


     // while (x < 97) {
     // x = input - prevVal + 26
    //}


*/
