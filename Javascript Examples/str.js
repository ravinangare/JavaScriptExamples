let str = "This is String"
let str1 = str.toUpperCase()
let str5 = str.toLowerCase()
console.log(str1)
console.log(str5)
console.log(str)

console.log(str.charAt(0))
console.log(str.charAt(3))
console.log(str.charAt(4))
console.log(str.charAt(5))
console.log("**************************")
for(let i = 0;i<str.length;i++){
    console.log(str.charAt(i))
}
console.log("**************************")

let str2 = str.concat(" ","Hello","World!")
console.log(str2)
let str3 = str.concat(str1,str2)
console.log(str3)

console.log(str.includes("I"));
console.log(str.includes("T"));
console.log(str.includes("is"));
console.log(str.includes("String"));

let str4 = str.indexOf("String")
console.log(str4)
let text = "Hello planet earth, you are a great planet.";
let lastIndex1 = text.lastIndexOf("planet",16); 
console.log(lastIndex1)

let originalString = "Hello World!";

let slicedString = originalString.slice(6,-1); 

console.log(originalString)

console.log(slicedString); 

let price = "$1234654654"

console.log(price.substring(5, 1))

const str6 = "Hello World welcome";

const sub1 = str6.substring(0, 5); // "Hello"
console.log(sub1)

const sub2 = str6.substring(5, 0); // "Hello"
console.log(sub2)

const sub3 = str6.substring(6); // "World"
console.log(sub3)

const sub4 = str6.substring(-2, 3); // "Hel" (negative treated as 0)

console.log(sub4)

let str7 = "    Hello World      "

console.log(str7.length)

console.log(str7.trim().length)

console.log(str7.trimStart().length)

console.log(str7.trimEnd().length)


let str9 = "customer@google.com?page=2&id=2"

let str8 = "This is a string"

console.log(str8.split(" ")[3])

console.log(str8.split(" ")[1])

console.log(str8.split(" ")[2])

console.log(str9.split("?")[1].split("&"))

console.log(str9.split("@")[1].split("."))

const parts = str9.split(/[@.?&]/); // escaping . ? & properly
console.log(parts)

const messyLog = `
user1@example.com, user2@example.com;
user3@example.com,
user4@example.com ;user5@example.com,,user6@example.com
`;

const cleanedUsers = messyLog
  .split(/[\s,;]+/) // Split on any combination of whitespace, comma, or semicolon
  .filter(Boolean); // Remove empty strings

console.log(cleanedUsers);
