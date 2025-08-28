let str = "Utkarshaa Academy";
console.log(str)
console.log(str.length)

let str1 = 'This is a string';
console.log(str1)

let name = "Utkarshaa"
let age = 20
let city = "pune"

console.log("student name is " +name + " student age is " +age + " student city is "+city);

let output = `student name is ${name} \nstudent age is ${age} \nstudent city is ${city}`;
console.log(output)

// 1. length - Return the number of characters that are available in a string
// Syntax:
// stringName.length
console.log(str1.length)

// 2. charAt(index) - Return the character at the specified index in a string
// Syntax:
// stringName.charAt(index)
console.log(str1.charAt(0)) 
console.log(str1.charAt(1)) 
console.log(str1.charAt(2))
console.log(str1.charAt(3))  

// iterate characters in string
 for(let i=0; i<str1.length; i++){
 console.log(str1.charAt(i));
 }

 // 3. concat(str1, str2,......) - Joins 2 or more string and return a new string
// Syntax:
// stringName.concat(str1, str2,......)
console.log(str1.concat(" ", "Hello", " World"))
// This is a string + +Hello+world
console.log(str1)

// 4. includes(searchString) - 
// Syntax:
// stringName.includes(searchString)
let str2 = "Hello World"
console.log(str2.includes("w")) 

console.log(str2.includes("W")) 

// 5. indexOf()
//In JavaScript, the indexOf() method is used to find the index of a specified substring within a string. It returns the 0-based index of the first occurrence of the substring, or -1 if the substring is not found. 
//Syntax:
// string.indexOf(searchValue, fromIndex)
let str3 = "Hello, world!";
let index = str3.indexOf("world"); // index will be 7
console.log(index)

let str4 = "Hello, world!";
let index1 = str.indexOf("JavaScript"); // index will be -1
console.log(index1)

// 6. lastIndexOf()
// In JavaScript, the lastIndexOf() method is used to find the last index (position) of a specified value within a string. 
// Syntax
// str.lastIndexOf(searchValue, fromIndex)
let text = "Hello planet earth, you are a great planet.";

// Find the last index of "planet"
let lastIndex1 = text.lastIndexOf("planet"); 
console.log(lastIndex1); // Output: 36

// Find the last index of "planet" starting the search from index 20
let lastIndex2 = text.lastIndexOf("planet", 20); 
console.log(lastIndex2); // Output: 6 (because the search stops at index 20, and the last "planet" before or at that index is at index 6)

// Find the last index of a character not present in the string
let lastIndex3 = text.lastIndexOf("x");
console.log(lastIndex3); // Output: -1

// 7. toLowerCase() - It will convert all the characters to a lowercase character
// Syntax:
// stringName.toLowerCase()
console.log(str2.toLowerCase())

// 8. toUpperCase() - It will convert all the characters to a uppercase character
// Syntax:
// stringName.toUpperCase()
console.log(str2.toUpperCase())

// 9. slice()
// The slice() method extracts a part of a string and returns it as a new string, without modifying the original. It accepts two arguments: a startIndex and an optional endIndex. 
let originalString = "Hello World!";
let slicedString = originalString.slice(0, -1); 
console.log(originalString)
console.log(slicedString); // Output: "Hello World"

// 10. substring(startingIndex, EndIndex?)
// Syntax:-
// stringName.substring(startingIndex, EndIndex? (Exclusive))
// This method extracts characters from startIndex up to (but not including) endIndex.
// If endIndex is omitted, it extracts to the end of the string.
// If startIndex is greater than endIndex, the arguments are swapped internally.
// Negative arguments are treated as 0.
let price = "$1234654654"
console.log(price.substring(5, 1))

const str5 = "Hello World";
const sub1 = str5.substring(0, 5); // "Hello"
console.log(sub1)
const sub2 = str5.substring(6);    // "World"
console.log(sub2)
const sub3 = str5.substring(5, 0); // "Hello" (arguments swapped)
console.log(sub3)
const sub4 = str5.substring(-2, 3); // "Hel" (negative treated as 0)
console.log(sub4)

// 11. trim() - Remove the whitespace from beginning and end of a string
// Syntax:
// stringName.trim()
let str6 = " Hello World "
console.log(str6.length)
console.log(str6.trim().length)

// 12. trimStart() - Removes the whitespace from beginning of a string
// Syntax:
// stringName.trimStart()
console.log(str6.length); // 
console.log(str6.trimStart().length) // 

// 13. trimEnd() - Removes the whitespace from end of a string
// Syntax:
// stringName.trimEnd()
console.log(str6.trimEnd().length)

// 14. split() - Split a string into substrings using the specified separator and return them as an array.
// Syntax:
// stringName.split()
// stringName.split(separator)
let str7 = "customer@google.com?page=2&id=2"
let str8 = "This is a string"
console.log(str8.split(" ")[0])
console.log(str8.split(" ")[1])
console.log(str8.split(" ")[2])
console.log(str7.split("?")[1].split("&"))
console.log(str7.split("@")[1].split("?"))