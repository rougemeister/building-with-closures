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
bindGreeting();  // When greet() is called using a function created by bind(),
               //{this} refers to the anotherPerson object bound to the new function





/*********************************
 **** Event Handlers and this ****
 ********************************/


const button = document.getElementById('eventBtn');
const normalFunc = document.querySelector('.normal-func')
const normalFuncTextContent = document.querySelector('.normal-func-text')
const normalFuncThis = document.querySelector('.normal-func-this')
const arrowFuncThis = document.querySelector('.arrow-func-this')
const arrowFunc = document.querySelector('.arrow-func')
const arrowFuncTextContent = document.querySelector('.arrow-func-text')



// Using regular function
button.addEventListener('click', handleClick);
    function handleClick() {
      normalFuncThis.textContent = `"this" = ${this} `
      normalFunc.textContent = `Button ID = ${this.id}`
      normalFuncTextContent.textContent = `Button Text Content = ${this.textContent}`;
    }



// Using arrow function
button.addEventListener('click', () => {
      arrowFuncThis.textContent = `"this" = ${this}`
      arrowFunc.textContent = `Button ID: ${this.id}`;
      arrowFuncTextContent.textContent = `Button Text Content: ${this.textContent}`

})




/**********************************************
 **** Private Data with Closures and this ****
 *********************************************/



 function createCounter() {
    let count = 0; // Private variable
  
    return {
      increment: function() {
        count++;
        console.log(`New count value: ${this.count}`);
      },
      getCount: function() {
        return count;
      }
    };
  }
  

  const counter = createCounter();
  counter.increment(); // Output: Undefined
  counter.increment(); // Output: undefined
  console.log("getCount() Output: ", counter.getCount()); // Output: 2
  
