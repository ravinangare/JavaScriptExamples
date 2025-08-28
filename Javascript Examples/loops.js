let n = 5;
for(let i = 0; i <= n; i++){
    console.log("welcome to utkarshaa academy");
}

let sum = 0;
let num = 5;
for(let i = 0; i <= num; i++){
    sum = sum + i;
    console.log(sum)
}
console.log("Sum = "+sum)


for(let i = 1; i<=10;i++){
    if(i % 2 == 0){
        console.log(i)
    }
}
console.log("*************************")
for(let i = 0;i<=10;i++){
    console.log(i)
}
console.log("*************************")

let i = 0;
while(i>=10){
console.log(i)
i++
}

console.log("*************************")

let j = 1;
do{
    console.log("j ="+j)
    j++;
}while(j<=5);

console.log("*************************")


for(let i =1; i<=10;i++){
    console.log(i)
}

console.log("*************************")

let fruits = ["apple","banana","mango",10,true,null,10.08];
console.log(fruits[2])
console.log("*************************")

for(let fruit of fruits){
    console.log(fruit)
}
let studentName = "Aakash"
console.log(studentName[2])
console.log("*************************")
for(let sName of studentName){
    console.log(sName)
}


let person = {
    name:"Mahesh",
    age:30,
    city:"pune"
}
for(let key in person){
    console.log(key + " : " +person[key])
}
console.log("*************************")
for(let i =1; i<=10;i++){
    if(i === 7)
    break;
    console.log(i)
}

console.log("*************************")
for(let i =1; i<=10;i++){
    if(i === 7)
    continue;
    console.log(i)
}