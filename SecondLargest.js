// Find the Second Largest Number in an Array

let arr = [24, 56, 98, 32, 45, 65, 87, 12];

function check(arr) {

  // largest → stores the biggest number found so far
  let largest = -Infinity;

  // second → stores the second largest number
  let second = -Infinity;

  // If array is empty
  if (arr.length == 0) {
    return "Empty Array...";
  }

  // If array has only one element
  if (arr.length === 1) {
    return "Array has only one Element...";
  }

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {

    // Case 1: If current element is greater than largest
    if (arr[i] > largest) {

      // Previous largest becomes second largest
      second = largest;

      // Update largest
      largest = arr[i];
    }

    // Case 2: If number is between largest and second
    else if (arr[i] > second && arr[i] < largest) {

      // Update second largest
      second = arr[i];
    }
  }

  // If second never changed
  if (second == -Infinity) {
    return "All Elements are Same...";
  }

  // Return second largest number
  return second;
}

console.log(check(arr));

// We maintain two variables:
/* largest  → biggest number
second   → second biggest number */

/*
Iteration Tracking
Initial State
largest = -Infinity
second  = -Infinity */

/* Iteration 1

i = 0
arr[i] = 24

Check → 24 > -Infinity → true

Update:
second = -Infinity
largest = 24

Current State:
largest = 24
second  = -Infinity*/

/* Iteration 2
i = 1
arr[i] = 56

Check → 56 > 24 → true

Update:
second = 24
largest = 56

Current State:
largest = 56
second  = 24 */

/* Iteration 3
i = 2
arr[i] = 98

Check → 98 > 56 → true

Update:
second = 56
largest = 98

Current State:
largest = 98
second  = 56 */

/* Iteration 4
i = 3
arr[i] = 32

Check → 32 > 98 → false

Second condition:
32 > 56 AND 32 < 98 → false

No update

Current State:
largest = 98
second  = 56 */

/* Iteration 5
i = 4
arr[i] = 45

Check → 45 > 98 → false

Second condition:
45 > 56 AND 45 < 98 → false

No update

Current State:
largest = 98
second  = 56 */

/* Iteration 6
i = 5
arr[i] = 65

Check → 65 > 98 → false

Second condition:
65 > 56 AND 65 < 98 → true

Update:
second = 65

Current State:
largest = 98
second  = 65 */

/* Iteration 7
i = 6
arr[i] = 87

Check → 87 > 98 → false

Second condition:
87 > 65 AND 87 < 98 → true

Update:
second = 87

Current State:
largest = 98
second  = 87 */

/* Iteration 8
i = 7
arr[i] = 12

Check → 12 > 98 → false

Second condition:
12 > 87 AND 12 < 98 → false

No update

Current State:
largest = 98
second  = 87 */

/* Final Result
largest = 98
second  = 87
console.log(check(arr))
Output → 87 */