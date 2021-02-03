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

