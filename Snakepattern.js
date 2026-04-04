function pattern(n) {

  // variable to store the final pattern output
  let res = "";

  // OUTER LOOP → controls rows
  // i starts from 1 and runs until n
  for (let i = 1; i <= n; i++) {

    // check if row number is EVEN
    if (i % 2 === 0) {

      // start value for even row
      let start = n * i;

      // end value for even row
      let end = n * (i - 1) + 1;

      // INNER LOOP (reverse)
      // j starts from start and decreases until end
      for (let j = start; j >= end; j--) {

        // add number to result string
        res += j + "\t";

      }

    } else {

      // start value for odd row
      let start = n * (i - 1) + 1;

      // end value for odd row
      let end = n * i;

      // INNER LOOP (forward)
      // j starts from start and increases until end
      for (let j = start; j <= end; j++) {

        // add number to result string
        res += j + "\t";

      }
    }

    // after finishing one row move to next line
    res += "\n";
  }

  // return the final pattern
  return res;
}

// function call
console.log(pattern(5));



/*
=====================================================
OUTPUT
=====================================================

1	2	3	4	5
10	9	8	7	6
11	12	13	14	15
20	19	18	17	16
21	22	23	24	25


=====================================================
PATTERN LOGIC
=====================================================

Odd Rows  → numbers increase (left to right)
Even Rows → numbers decrease (right to left)

Row   Direction
1     Forward
2     Reverse
3     Forward
4     Reverse
5     Forward


=====================================================
STEP BY STEP EXECUTION
=====================================================

Input:
n = 5

Each row prints 5 numbers.

-----------------------------------------------------
ROW 1  (i = 1)
-----------------------------------------------------

i % 2 === 1 → Odd row → Forward loop

start = n*(i-1)+1
start = 5*(1-1)+1
start = 1

end = n*i
end = 5*1
end = 5

Loop Execution:

j = 1 → res += 1
j++ → 2

j = 2 → res += 2
j++ → 3

j = 3 → res += 3
j++ → 4

j = 4 → res += 4
j++ → 5

j = 5 → res += 5
j++ → 6 → loop stops

Row Output:
1 2 3 4 5


-----------------------------------------------------
ROW 2  (i = 2)
-----------------------------------------------------

i % 2 === 0 → Even row → Reverse loop

start = n*i
start = 5*2
start = 10

end = n*(i-1)+1
end = 5*(2-1)+1
end = 6

Loop Execution:

j = 10 → res += 10
j-- → 9

j = 9 → res += 9
j-- → 8

j = 8 → res += 8
j-- → 7

j = 7 → res += 7
j-- → 6

j = 6 → res += 6
j-- → 5 → loop stops

Row Output:
10 9 8 7 6


-----------------------------------------------------
ROW 3  (i = 3)
-----------------------------------------------------

Odd row → Forward loop

start = 5*(3-1)+1
start = 11

end = 5*3
end = 15

Loop:
11 → 12 → 13 → 14 → 15

Row Output:
11 12 13 14 15


-----------------------------------------------------
ROW 4  (i = 4)
-----------------------------------------------------

Even row → Reverse loop

start = 5*4
start = 20

end = 5*(4-1)+1
end = 16

Loop:
20 → 19 → 18 → 17 → 16

Row Output:
20 19 18 17 16


-----------------------------------------------------
ROW 5  (i = 5)
-----------------------------------------------------

Odd row → Forward loop

start = 5*(5-1)+1
start = 21

end = 5*5
end = 25

Loop:
21 → 22 → 23 → 24 → 25

Row Output:
21 22 23 24 25


=====================================================
INCREMENT TRACKING
=====================================================

OUTER LOOP

for (let i = 1; i <= n; i++)

i increments like this:

1 → 2 → 3 → 4 → 5


FORWARD INNER LOOP

for (let j = start; j <= end; j++)

Example:
1 → 2 → 3 → 4 → 5


REVERSE INNER LOOP

for (let j = start; j >= end; j--)

Example:
10 → 9 → 8 → 7 → 6

=====================================================
*/