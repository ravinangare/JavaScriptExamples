let a = 21
let b = 10

// Addition - (+)
console.log(a + b)

let var1  = 10
let var2 = "10"
console.log(var1 + var2)

// Subtraction - (-)
console.log(a - b)  // 11

// Multiplication - (*)
console.log(a * b)  // 210

// Division - (/)
console.log(a / b)  // 21/10 = 2.1 - 2.1

// Modulus - (%)
console.log(a % 3)  // 0
console.log(b % 3) // 1

// Exponentiation - (**)
console.log(4 ** 3)  // 4^3 - 4*4*4

let x = 10;
console.log(x)
x++
console.log(x)
x--
console.log(x)

console.log("************************")

let i = 10; // number
let j = "10"; // String
let k = 11;
let l = 11;
console.log(i == j)

console.log(i != j)

console.log(i === j)

console.log(i !== j)

console.log("Greater than", i > j)
console.log("Greater than", k > j)

console.log(k===l);

console.log("Less than", 5 <= 10)

console.log("Greater than or Equal to", 11 >= 10)

console.log("****************************");

// Logical AND (&&)
console.log(((23 > 21) && (15 > 5)) && (10==10)) // true && true - true
console.log((23 >15) && (10 > 15)) // true && false - false
console.log((10 > 20) && (10> 1))  // false && true - false
console.log((10 > 50) && (0>90))   // false && false - false

// Logical OR (||)

console.log((23 > 21) || (15 > 5)) // true || true - true
console.log((23 >15) || (10 > 15)) // true || false - true
console.log((15 >25) || (15 > 10)) // false || true - true
console.log((15 >25) || (10 > 10)) // false || false - false

// Logical Not (!)

console.log(!(23 > 21)) // false
console.log(!(21 > 23)) // true


console.log("********************************");

// 4. Assignment Operators (=) - Assign the value to a variable

let i1 = 90
let name1 = "John"

console.log(i1)
console.log(name1)

console.log("********************************");

// 5. Ternary Operators
//Syntax:
// condition ? value_if_true : value_if_false
// If the condition is true, then it will return the value_if_true
// If the condition is false, then it will return the value_if_false

let age = 17
const canVote =  (age>=18) ? "Eligible for voting" : "Not eligible for voting"
console.log(canVote)