// let age = 16;

// if(age>=18){
//     console.log("user can Vote");
// }
// if(age < 18){
//     console.log("user can't Vote");
// }

if(60>50){
    console.log("true");
}

if(40>50){
    console.log("true");
}

// if else statement

let age = 17;

if(age>=18){
    console.log("user can Vote");
}
else{
    console.log("user can't Vote");
}

// If Else If Ladder
let marks = 90

if(marks>=90){
    console.log("Grade A")
}
else if(marks>=70){
    console.log("Grade B")
}
else if(marks>=40){
    console.log("Grade C")
}
else{
    console.log("Fail")
}

// Switch Case
let day = 5;
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("wed")
        break
    case 4:
        console.log("Thu")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Sat")
        break
    case 7:
        console.log("Sun")
        break
    default:
        console.log("Invalid Day")                            
}

// Nested IF

let username = "admin"
let password = "1234"

if(username === "admin"){
    if(password === "1234"){
        console.log("Login Successfull")
    }
    else
    {
        console.log("Password In Correct")
    }
}
else{
    console.log("Invalid Username")
}
