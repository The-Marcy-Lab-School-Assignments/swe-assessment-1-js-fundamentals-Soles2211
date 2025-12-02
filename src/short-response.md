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

Rest parameters are . The purpose of rest parameters

You turn a parameter into a rest parameter by

`const sum = () => {`

`}`

### Question 5

### Question 6

### Question 7

### Question 8

For items in a cart, I would represent them with the