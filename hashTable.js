/**
 * 1. Explain what a hash table is
 * 2. Define what a hashing algorithm looks like
 * 3. Discuss what makes a good hashing algorithm
 * 4. What happens when collisions occur in a hash table? What does it mean for there to be a collision?
 * 5. Strategies for handling them: chaining or linear probing.
 *
 *
 *
 * Hash tables are used to store key-value pairs.
 * Keys in a hash table are not ordered.
 * Unlike arrays, they are fast for all of the following: lookups, insertions, and deletions
 *
 * Hsh tables in the wild:
 *  JS: Objects and Maps
 *  Python: Dictionaries
 *  Java, Go, Scala: Maps
 *  Ruby: Hashes
 *
 * To convert a string key value to a valid array index...
 * ****hashing function***
 *      there are popular existing hashing functions
 *
 *
 * What makes a good hash?
 *  1. Fast
 *  2. Doesn't cluster outputs at specific indices, but uniformly
 *  3. Deterministic, same input yields same output
 */


// writing a hash function
// hash (keyValue, hashLength)


// hash1, an ok but not really that great hashing function
//  this one is linear time
 const hash1 = (key, max) => {
   let total = 0;
   for (let char of key) {
     let value = char.charChodeAt(0) - 96;
     total = (total + value) % max
   }
   return total;
 }

// hash2, a slightly improved function
// manth.min to use a minimum amount of string or string length
// using prime numbers in table length helps reduce collisions
//  this one is constant time
const hash2 = (key, max) => {
  let total = 0;
  let prime = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i]
    let value = char.charChodeAt(0) - 96;
    total = (total + prime + value) % max
  }
  return total;
}


/**
 * Dealing with collisions
 * 1. Separate Chaining
 * Store them at the same spot using another data structure (like an array or linked list
 *
 * Allows us to store mulitple k-v pairs at the same index
 *
 * 2. Linear Probing
 * when there's a collision, search through the array to find the next empty slot
 *
 *  */


// Build hash table class
// class HashTable {
//   constructor (size=53) { //default value
//     this.keyMap = newArray(size);
//   }

//   _hash(key) {
//     let total = 0;
//     let prime = 31;
//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//       let value = char.charChodeAt(0) - 96;
//     total = (total + prime + value) % this.keyMap.length;
//   }
//   return total;
//   }
// }

/**
 * Set / Get
 *
 * Set:
 *  Accepts a key and a value
 *  Hashes the key
 *  Stores the pair in the hash table with separate chaining
 *
 *
 * Get:
 *  Accepts a key
 *  Hashes the key
 *  Retrieves the value in the hash table
 *  OR return undefined if not found
 *
 *  */


class HashTable {
  constructor (size=53) { // default value if none specified on construction
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total + prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, val]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    return undefined;
    }
  }

  values() {
    let valuesArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }

  keys() {
    let keysArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return valuesArr;
  }

}



// Test suite
let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")

ht.keys().forEach(function(key){
  console.log(ht.get(key));
})