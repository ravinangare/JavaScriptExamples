// In JavaScript, a factory function is a function that creates and returns a new object.

function createPerson(name, age) {
    return {
      name: name,
      age: age,
      greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
    };
  }
  
  const person1 = createPerson("Ravi", 40);
  const person2 = createPerson("Utkarshaa", 5);
  const person3 = createPerson("Sharayu", 10);
  
  person1.greet(); // Output: Hello, my name is Ravi and I am 40 years old.
  person2.greet(); // Output: Hello, my name is Utkarshaa and I am 5 years old.
  person3.greet(); // Output: Hello, my name is Sharayu and I am 10 years old.
  
  /* In this example, createPerson is a factory function that returns a new person object 
  with name, age, and a greet method. This pattern allows for easy creation of 
  multiple person objects with consistent structure. */