function findArrayQuadruplet(arr, s) {
  // empty array
  let quadruplet = [];
  // track tempSum
  let tempSum = 0;
  // index value
  let first = 0;
  // loop through the first four values
  for (var i = 0; i < 4; i++) {
    // add sum to tempSum
    tempSum += arr[i];
  }
  // loop until x <= length - 4
  while (first <= arr.length - 4 && tempSum !== s) {
    // if tempSum does not equal s
    // subtract arr at index from tempSum
    // add arr at index + 4 to tempSum
    // increment index
    tempSum -= arr[first];
    tempSum += arr[first + 4];
    first++;
  }

  if (tempSum === s) {
    for (var j = first; j < first + 4; j++) {
      quadruplet.push(arr[j]);
    }
    quadruplet.sort();
  }
  //   return the empty array
  console.log(quadruplet);
  return quadruplet;
}

findArrayQuadruplet([2, 7, 4, 0, 9, 5, 1, 3], 20);

// arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20
//    x--------x

////////////////////////////////////////////////////////////
/** MORE EFFICIENT SOLUTION
 * function findArrayQuadruplet(arr, s):
    n = arr.length

    # if there are fewer than 4 items in arr, by
    # definition no quadruplet exists whose sum is s
    if (n < 4):
        return []

    # sort arr in an ascending order
    arr.sort()

    for i from 0 to n - 4:
        for j from i + 1 to n - 3:
            # r stores the complementing sum
            r = s - (arr[i] + arr[j])

            # check for sum r in subarray arr[j+1…n-1]
            low = j + 1, high = n - 1;

            while (low < high):
                if (arr[low] + arr[high] < r):
                    low++

                else if (arr[low] + arr[high] > r):
                    high--

                # quadruplet with given sum found
                else:
                    return [arr[i], arr[j], arr[low], arr[high]]

    return []
 */
