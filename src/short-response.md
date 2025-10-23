# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1
The `react` function throws a reference error because the `currentStatus` variable is defined inside of an `if` statement. It is not accessible outside of that statement, so the variable needs to be defined above the `if` statements to be accessible to the `console log`. 

Solution:

```js
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

```

### Question 2
The code logs "Michael Jordan" because the value of the bestPlayer object's name property was reassigned from "Lebron James" to "Michael Jordan".

### Question 3
The theHustler function logs: 

"Paul is the hardest working person in the room.
Laisha is also the hardest working person in the room." 


### Question 4


### Question 5


### Question 6


### Question 7


### Question 8

