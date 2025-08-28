//Loops are used to execute a block of code repeatedly until a specific condition is met.

//Syntax
// A for loop repeats until a specified condition evaluates to false.
// for (initialization; condition; increment/decrement) {
//     // code block to execute
//   }
  
let n = 10;
for(let i = 0; i<=n;i++){
    console.log("Welcome to Utkarshaa Academy")
}

// Sum of numbers from 1 to 100:
let sum = 0;
let num = 100; 
for(let i = 0; i<=num;i++){
    sum = sum + i;
    console.log(sum) 
}
console.log(sum)

// Print even numbers from 1 to 10:
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  
// A while statement executes its statements as long as a specified condition evaluates to true. 
// Syntax
//while (condition)
//  statement
// e.g

let i = 1;
while(i<=10){
    console.log(i)
    i++;    
}

// The do...while statement repeats until a specified condition evaluates to false.

// Syntax
//do
//  statement
// while (condition);
// statement is always executed once before the condition is checked.
let j = 1;
do{
    console.log("j = "+j)
    j++;
} while(j<=5);

// for...of loop
//Used to iterate over arrays, strings, maps, sets, etc.
//Syntax
//for (let element of iterable) {
    // code block
//  }
  
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

// Iterate through string characters:

let str = "JavaScript";
for (let ch of str) {
  console.log(ch);
}

//for...in loop
//Used to iterate over object properties (keys).

//Syntax:
//for (let key in object) {
    // code block
//  }

let person = { name: "John", age: 30, city: "Pune" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

//  Loop Control Statements
// break – exits the loop early
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
  }

// continue – skips current iteration

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
  }
  