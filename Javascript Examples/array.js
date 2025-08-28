// let marks = {
//     std1 : 95,
//     std2 : 84,
//     std3 : 76,
//     std4 : 87,
//     std5 : null
// }

// console.log(marks)

// Literal
let marks = [95,84,76,87,null]
console.log(marks[4])
console.log(typeof(marks))
marks[4] = 67;
console.log(marks)
console.log(marks.length)

console.log(Array.isArray(marks))

// Array Constructor

let j = new Array(56,86,45,65,45,23,null)
console.log(j)
console.log(Array.isArray(j))
console.log("*****************")


for(let mark of marks){
    console.log(mark)
}

console.log("*****************")
for(let i = 0; i < marks.length;i++){
    console.log(marks[i])
}
console.log("*****************")

marks.push(48,87,89,46,78)
console.log(marks)

console.log("*****************")

marks.pop()
console.log(marks)
console.log("*****************")

marks.unshift(34,35,36)
console.log(marks)

marks.shift()
console.log(marks)
marks.pop()
marks.pop()
console.log(marks)

let array2 = [10,20,30,40,50,60, 30]
console.log(array2)

// array2.splice(2, 0, 1000, 2000, 3000) 
// console.log(array2) 

array2.splice(0, 2, 1000, 2000, 3000) 
console.log(array2) 

console.log(array2.slice(2, 5)) 
console.log(array2)


console.log(array2.indexOf(30))


console.log(array2.lastIndexOf(30))

function hello(name){
    return "Hello, "+name+ "!";
}

let s1 = hello("sarvadnya")
console.log(s1)
console.log(hello("utkarshaa"))


let array3 = [100,200,300,400,500,600]

for(let i = 0;i<array3.length;i++){
    console.log(array3[i])
}

console.log("*****************")

array3.forEach(function(ele){
    console.log(ele)
})
console.log("*****************")
let discountedPrice = 
array3.map(function(price){
 return price*0.8
})

let discountedPrice1 = 
array3.map(function(price){
 return price*0.9
})

let array4 = 
array3.map(function(price,index){
 return `${index}: ${price}`
})

console.log(array3);
console.log("*****************")
console.log(discountedPrice)
console.log("*****************")
console.log(discountedPrice1)

console.log("*****************")
console.log(array4)

const sales = 
[
 {category : 'Fashion', sale : 400000},
 {category : 'Electronics', sale : 600000},
 {category : 'Home', sale : 700000},
 {category : 'Mobile', sale : 200000},
]

console.log(sales)
console.log("*****************")
const sale = 
sales.filter(function(offer){
 return offer.sale > 500000
})
console.log(sale)

const sale1 = 
sales.filter((offer) => offer.sale > 200000)
console.log(sale1)

console.log("*****************")
let myArray = [12,24,34,56,78]

let sum = 0
for(let i=0; i<myArray.length; i++){
 sum = sum + myArray[i] // sum = 0+12 =  12+24 = 36+34 - 204
}
console.log(sum)

console.log("*****************")
const totalSum = myArray.reduce(function(sum, num){
    return sum + num
   }, 0)
   console.log(totalSum)

   console.log("*****************")
   const totalSum1 = myArray.reduce((sum, num) => sum+num)
console.log(totalSum1)

function name1(arg, arg1){ // arg, arg1 - argument
    // Fill the username
    // fill the password
    // Click on the login button
    console.log(arg, arg1);
    return arg+arg1
   }
   const result = name1(10,20) //parameter
console.log(result); //output

function add(a,b){
    console.log(a+b)
   }
   add(10,100)
   add("50","50")

   function greet(name){
    return "Hello, "+name
   }

   let resultGreet = greet("Rahul")
console.log(resultGreet)

function greeting(){
    console.log(resultGreet)
   }
   greeting()

   const fun = function(a,b,c)
{
 console.log(a+b+c)
}
fun(10,29,32)

const fun1 = function(a,b,c)
{
 return a+b+c
}
console.log(fun1(10,20,90))

let resultFun1 = fun1(10,29,32)
console.log(resultFun1)

function name2(fun){
    return fun(10,20,30)
   }
   const callbackfun = name2(fun)
// console.log(callbackfun) 

const sum1 = (a,b) =>{
    return (a+b)
   }
   console.log(sum1(10,20))

   const sum2 = (a,b) => console.log(a+b)
sum2(10,20)
const sum3 = (a,b) => a+b
const sum2Result = sum3(10,21)
console.log(sum2Result);

(function(name){
    console.log("This is an IIFE function", name);
   })
   ("JS")


   function add(a,b){
    console.log(a+b);
   }
   function add(a,b,c){
    console.log(a+b+c);
   }
   add(10,20, 10)
   add(10,20)
   add()
   // default parameters or Optional parameter
   // Default parameter
   function add(a,b=5,c=7){
    console.log(a+b+c);
   }

add(10,20, 10)
add(10,20)
add(34)