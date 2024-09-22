function bitwiseAND(n1, n2) {
  return n1 & n2;
}
Loo;
function bitwiseOR(n1, n2) {
  return n1 | n2;
}
function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}
console.log(bitwiseAND(7, 12));
console.log(bitwiseOR(8, 7));
console.log(bitwiseXOR(10, 11));
// You can define the functions bitwiseAND, bitwiseOR, and bitwiseXOR in JavaScript using the bitwise operators &, |, and ^ respectively.These operators perform the operations bit - by - bit on the binary representations of the numbers.
// these functions take two numbers, n1 and n2, as inputs and return the result of the bitwise operation between them. Here’s how each function works:
// bitwiseAND(n1, n2) will perform the AND operation. It returns a 1 in each bit position for which the corresponding bits of both operands are 1.
// bitwiseOR(n1, n2) will perform the OR operation. It returns a 1 in each bit position for which the corresponding bit of either operand (or both) is 1.
// bitwiseXOR(n1, n2) will perform the XOR operation. It returns a 1 in each bit position for which the corresponding bits of the operands are different.
// You can test these functions with any pair of integers to see how they compute the bitwise operations:
//Return the Sum of Two Numbers
function addition(a, b) {
  return a + b;
}
console.log(addition(8, 1));
//Buggy Code (Part 1)
//Fix the code in the code tab to pass this challenge (only syntax errors).
// function cubes(a) {
// 	retunr a ** 3
// }
function cubes(a) {
  return a ** 3;
}
console.log(cubes(3));
//Return the First Element in an Array// Declare the function getFirstValue which takes one argument 'arr'
function getFirstValue(arr) {
  // Check if 'arr' is either undefined, null, or if it's an empty array
  if (!arr || arr.length === 0) {
    // If the array is undefined or empty, return a message to indicate that
    return "Array is undefined or empty";
  }
  // If the array exists and has elements, return the first element of the array
  return arr[0];
}
// Test case 1: Call getFirstValue with a valid array [10, 20, 30]
// Since the array is valid and has elements, it will return the first element, 10
console.log(getFirstValue([10, 20, 30])); // Expected output: 10
// Test case 2: Call getFirstValue with no arguments
// Since no array is provided, 'arr' is undefined, so the function returns the message
console.log(getFirstValue()); // Expected output: "Array is undefined or empty"
// Test case 3: Call getFirstValue with an empty array []
// Since the array is empty (length is 0), the function returns the message
console.log(getFirstValue([])); // Expected output: "Array is undefined or empty"
// The area of a triangle is: (base * height) / 2
// Don't forget to return the result.
// Area of a Triangle
function triArea(base, height) {
  return (base * height) / 2;
}
console.log(2, 3);
