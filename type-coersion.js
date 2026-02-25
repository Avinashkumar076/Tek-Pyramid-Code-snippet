// Question 1:
console.log(!5 == 5);

// Question 2:
console.log(!5 <= 5);

/*
==========================
Answer & Explanation
==========================

--------------------------
1) !5 == 5
--------------------------

Step 1: !5
The ! operator converts the value to boolean first.
5 is a truthy value.
So,
!5 → false

Now the expression becomes:
false == 5

Step 2: Loose equality (==) does type coercion.
false gets converted to number.
false → 0

Now:
0 == 5 → false

Final Output:
false


--------------------------
2) !5 <= 5
--------------------------

Step 1: !5
5 is truthy
!5 → false

Now the expression becomes:
false <= 5

Step 2: Relational operators (<=, >=, <, >)
convert values to numbers.

false → 0

Now:
0 <= 5 → true

Final Output:
true


==========================
Final Results
==========================

!5 == 5   → false
!5 <= 5   → true
*/
