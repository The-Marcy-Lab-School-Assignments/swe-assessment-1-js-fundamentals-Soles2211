Mod 1 Assessment - Short Response Section
=========================================

Write your responses directly in this file. Follow markdown formatting guidelines.

* * *

Section 1: Short Response
-------------------------

### Question 1

The `react` function throws a reference error because the `currentStatus` variable is defined inside of the block scope of an `if` statement. It is not accessible outside of that statement, so the variable needs to be defined above the `if` statement, within the block scope of the arrow function, to be accessible to the `console log`.

Solution:

    const react = (isReuben) => {
      let currentStatus = '';
      if (isReuben) {
        currentStatus = 'Everything is just fine';
      } else {
        currentStatus = 'Time to panic.'
      }
      
      console.log(currentStatus);
    }
    
    react(true);
    

### Question 2

The code logs "Michael Jordan" because the value of the `bestPlayer` object's name property was reassigned from "Lebron James" to "Michael Jordan".

### Question 3

The code logs:

"Paul is the hardest working person in the room." "Laisha is also the hardest working person in the room."

We receive this output because one `theHustler` variable is defined inside of two different scopes. One is defined outside of the function and can be accessed globally, which it is in the last console log. This leads to our second output. Our first output uses `theHustler` variable defined inside the scope of the `shoutOut` function. When the function is called in the second to last line, it gives us our first output.

### Question 4

*   **Rest parameters** are parameters tied to arrays whose purpose are to take in an indefinite amount of arguments.
    
*   You turn a parameter into a rest parameter by prefixing a function's final parameter with `...`
    
*   This allows you to input as many arguments as necessary for that parameter.
    

Example Usage:

    const sum = (...nums) => {
      let total = 0;
      for (let num of nums) {
        total += num;
      }
      return total;
    };
    
    console.log(sum(1, 2, 10)); // 13
    console.log(sum(5)); // 5
    console.log(sum(100, 200, 800, 1, 1, 1)); // 1103
    

### Question 5

*   **Scope** determines how accessible a variable is within the boundaries of the area it is declared in.
    
*   You can think of scope like being inside your house. While inside you have access to all the resources in the house, but once you go outside, you don't. You can't grab food from your fridge, sit on your couch, or play games on your household gaming console. You can access similar resources that you can find outside, like buying food from a store, sitting on a park bench, and going to an arcade to play games, but you can't use the things from your house unless you go back inside.
    
*   In the same way, once a variable or expression is defined within the **block scope** (inside the house) of a piece of code, it is inaccessible outside of that context. However, if the variable or expression is defined within the **global scope** (outside of the house), it can be accessed within the block scope.
    

Example Usage:

    let fruits = ['cherry', 'mango'];
    const printFruits = () => {
      let fruits = ['apple','tangerine'];
      return fruits;
    };
    
    console.log(fruits); // ['cherry', 'mango']
    console.log(printFruits()); // ['apple','tangerine']

*   In the example, the `console.log` of the `fruits` array logs the initial declaration of the `fruits` array and not the version of `fruits` declared within the `printFruits()` function because it can only access the the `fruits` array declared in the **global scope** (outside of the function scope). Logging the call of the `printFruits()` function outputs the `fruits` array defined within the **function scope** of the program.
    

### Question 6

*   **Modules** are files that contain code that can be reused in other parts of a program or project. This is done by importing the data and exporting it into different files
    
*   It is beneficial to use modules within your code because it keeps your code readable and organized, separating each section of code by their function in the grand scheme of the system.
    

Example Usage:

    const madlib = (profession, name, verb, pet, storyContinues) => {
      console.log(`There once was a ${profession} named ${name}.`);
      console.log(`Every day, ${name} would practice ${verb} with their pet${pet} by their side.`);
    
      if (storyContinues) {
        console.log(`Suddenly, ${name} discovered a hidden talent that no one knew about, and everything changed!`);
      } else {
        console.log(`${name} continued their days peacefully, always practicing ${verb} with their pet ${pet}.`);
      }
    
      console.log('The end.');
    };
    
    module.exports = madlib; //exporting madlib

    const {madlib} = require('./madlib.js'); //importing madlib in the new file 

### Question 7

*   After this code runs, `fruits` will hold: `['apple', 'banana', 'cherry', 'date']`
    

*   `fruitsMinusOne` will hold: `['apple', 'banana', 'cherry']`
    

*   It is necessary to make a copy of the array in order to make it a **pure function** because if you do not copy it, the initial array will be mutated, making it impure.
    
*   We want the function to be pure so it produces the same outputs when given the same inputs, and so it does not produce side effects.
    

  

  

### Question 8

*   For items in a cart, I would represent them as objects. That way, I could add each item to the cart with their corresponding properties, such as height, weight, color, and price.
    
*   To represent the entire shopping cart that holds the items, I would use an array. Arrays of objects are easy to manipulate since you are able to access each object by indexing them. You can then access their individual properties by using dot notation. To find and list items, you can use array methods such as `.find` and `.forEach`.
    

  

Example Usage:

    let cart = [
      { item: "tissue box", height: 5, weight: 1, price: 2.99 },
      { item: "chicken", height: 5, weight: 3, price: 5.99 },
      { item: "ring", height: 0.5, weight: 1, price: 7.99 },
      { item: "barbell", height: 7, weight: 10, price: 9.99 },
    ];
    
    console.log(cart[0].item); // tissue box
    
    cart.forEach((item) => console.log(item)); 
    //output: 
    { item: 'tissue box', height: 5, weight: 1, price: 2.99 }
    { item: 'chicken', height: 5, weight: 3, price: 5.99 }
    { item: 'ring', height: 0.5, weight: 1, price: 7.99 }
    { item: 'barbell', height: 7, weight: 10, price: 9.99 }
    
    console.log(cart.find((item) => item.weight === 10));
    //output: { item: 'barbell', height: 7, weight: 10, price: 9.99 }