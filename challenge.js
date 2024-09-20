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
	return a ** 3
}

console.log(cubes(3));