/*********************************
 **** Object Methods and this ****
 *********************************/

const person = {
    name: 'Prince',
    age: 29,
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
    }
}


// Logs greeting to console
person.greet() // When greet() is called on person {this} refers to the person object itself

  

const anotherPerson = {
    name: 'Harriet',
    age: 25
  };
  


// Using call()
person.greet.call(anotherPerson); //When .call() is called on person, 
                                  //{this} refers to the object passed as the first argument to the method


// Using apply()
person.greet.apply(anotherPerson); //When .apply() is called on person, 
                                   //{this} refers to the object passed as the first argument to the method


  

// Using bind()
const bindGreeting = person.greet.bind(anotherPerson); 
boundGreet();  // When greet() is called using a function created by bind(),
               //{this} refers to the anotherPerson object bound to the new function
