/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value) {
    var alreadyAdded = false;
    // generate random index
    var index = getIndexBelowMaxForKey(key, storageLimit);
    // if there is not bucket at the index: add one and add new tuple
    if (!storage[index]) {
      storage[index] = [];
      storage[index].push([key, value]);
      // key has already been added
      alreadyAdded = true;
      size++;
    } else {
      // else
      // iterate through the bucket:
      storage[index].forEach((array) => {
        // if key is already assigned within the bucket:
        if (array[0] === key) {
          // assign the new value to it's tuple
          array[1] = value;
          // key has already been added
          alreadyAdded = true;
        }
      });
      // if tuple was never added: add it
      if (!alreadyAdded) {
        storage[index].push([key, value]);
        size++;
        alreadyAdded = true;
      }

      if (size > storageLimit * .75) {
        this.resize(storageLimit * 2);
      }
    };
  }

  result.retrieve = function(key) {
    var value;
    // find index for bucket where tuple is stored
    var index = getIndexBelowMaxForKey(key, storageLimit);
    // if bucket doesn't exist: return
    if (!storage[index]) {
      return;
    }
    // else, iterate through the bucket
    storage[index].forEach((array) => {
      // if key is found in a tuple, return it's value
      if (array[0] === key) {
        value = array[1];
      }
    });
    // if no key is found, return
    return value;
  };

  result.remove = function(key) {
    // find index of bucket where tuple is to be removed
    var index = getIndexBelowMaxForKey(key, storageLimit);
    // iterate through the bucket:
    storage[index].forEach((array, tupleIndex) => {
      if (array[0] === key) {
        // remove the tuple and decrement size
        storage[index].splice(tupleIndex, 1);
        size--;
      }
    });
    // if size is less than 25% of storageLimit:
    if (size < storageLimit / 4) {
      // resize storage
      this.resize(storageLimit / 2);
    }
  };

  result.resize = function(newLimit) {
    storageLimit = newLimit;
    // store the original storage
    var oldStorage = storage;
    // create a new storage
    storage = [];
    size = 0;
    // iterate over all of the buckets in storage
    oldStorage.forEach((bucket) => {
      // if there is no bucket: skip over the index
      if (bucket) {
        // else, iterate over the bucket:
        bucket.forEach((tuple) => {
          // create newIndex from newStorage limit and insert new tuple into storage
          var newIndex = getIndexBelowMaxForKey(tuple[0], storageLimit);
          this.insert(tuple[0], tuple[1]);
        });
      }
    });
  }

  result.size = function() {
    return size;
  }
  return result;
}