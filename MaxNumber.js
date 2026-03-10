// Array of numbers
let arr = [10, 50, 70, 30, 25];

// We assume the maximum value is the smallest possible number
// -Infinity means smaller than any number in JavaScript
let max = -Infinity;

// Loop runs from index 0 to last index of array
for (let i = 0; i < arr.length; i++) {

    // Check if current array value is greater than current max
    if (arr[i] > max) {

        // If yes → update max with that value
        max = arr[i];
    }
}

// After loop finishes, max will contain the largest number
console.log(max); // Output: 70


/*
| Index | Value |
| ----- | ----- |
| 0     | 10    |
| 1     | 50    |
| 2     | 70    |
| 3     | 30    |
| 4     | 25    |*/

/*Start
  ↓
max = -Infinity
  ↓
Check 10 → max = 10
  ↓
Check 50 → max = 50
  ↓
Check 70 → max = 70
  ↓
Check 30 → no change
  ↓
Check 25 → no change
  ↓
Final max = 70*/


// Iteration Tracking

// Initial State
// max = -Infinity


// Iteration 1
// i = 0
// arr[i] = 10
// Check → 10 > -Infinity → true
// Update → max = 10
// Current max = 10


// Iteration 2
// i = 1
// arr[i] = 50
// Check → 50 > 10 → true
// Update → max = 50
// Current max = 50


// Iteration 3
// i = 2
// arr[i] = 70
// Check → 70 > 50 → true
// Update → max = 70
// Current max = 70


// Iteration 4
// i = 3
// arr[i] = 30
// Check → 30 > 70 → false
// No update
// Current max = 70


// Iteration 5
// i = 4
// arr[i] = 25
// Check → 25 > 70 → false
// No update
// Current max = 70


// Final Result
// max = 70
// console.log(max)
// Output → 70
