/* CHALLENGE 10 - Destructuring and Rest Operator

Assign values to the a, b, c variables
using destructuring and rest operator.
*/

"use strict";

var a, b, c;

var arr = [1, 2, 3, 4, 5, 6, 7];

// Write code here

// to destructure array, brackets are on left side

[a, b, ...c] = arr;

console.log(a);
// 1

console.log(b);
// 2

console.log(c);
// [3, 4, 5, 6, 7]
