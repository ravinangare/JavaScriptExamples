console.log("Hello")
console.log("welcome")

setTimeout(function() 
{ 
    console.log("Hello waiting......"); 
}, 2000);

console.log("utkarshaa")

function api(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

async function greet() {
    await api();
    return "Hello!";
    
  }