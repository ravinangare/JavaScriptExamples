//1. What is async?
// The async keyword is used to declare a function as asynchronous. 
//This means the function will always return a Promise, even if you return a value directly.

async function greet() {
    return "Hello!";
  }
  
greet().then((message) => console.log(message)); // Output: Hello!
  

//2. What is await?
// The await keyword is used inside an async function to pause execution until the Promise is resolved. 
// It makes asynchronous code look and behave like synchronous code.


function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function showMessage() {
    console.log("Before delay");
    await delay(2000); // Waits for 2 seconds
    console.log("After delay");
  }
  
  showMessage();
  

function api(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}


function getData(dataId){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

async function getAllData(){
    console.log("getting data 1......")
    await getData(1)
    console.log("getting data 2......")
    await getData(2)
    console.log("getting data 3......")
    await getData(3)
}
setTimeout(function() 
{ 
    console.log("Hello"); 
}, 2000);

console.log("welcome")

async function getWeatherData(){
    await api()
}