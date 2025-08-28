// named function
function add(a,b){ 
    console.log(a+b)
    return a+b
}

console.log(add(6,4))

function mul(a,b){
    console.log(a*b)
}

mul(5,6)

// count the vowels 

function countVowels(str){
let count = 0;
for(const char of str){
    if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        count++;
    }
}
return count;
}
console.log(countVowels("WELCOME utkarshaa academy"))

const sum = (a,b) =>{
    return (a+b)
   }
   console.log(sum(10,20))

   const sum1 = (a,b) => console.log(a+b)
   sum1(30,40)

    const countVow = (str) => {
    let count = 0;
    for(const char of str){
        if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
    }

    console.log(countVow("application"))

    // Constructor Function
      function Car(brand) {
     this.brand = brand;
    }
     const myCar = new Car("Toyota");
     console.log(myCar.brand);

     (function(name){
        console.log("This is an IIFE function", name);
       })
       ("Welcome")

       function add(a,b){
        console.log(a+b);
       }
       function add(a,b,c){
        console.log(a+b+c);
       }
       // default parameter
       function add(a,b=5,c=7){
        console.log(a+b+c);
       }

        add(10,20, 10)
        add(10)
        add()

        setTimeout(function() 
        { 
            console.log("Hello"); 
        }, 2000);

        