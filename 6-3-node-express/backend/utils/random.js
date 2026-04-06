// TODO 2: Create & Implement getRandomInt function
/*TODO 2:
Create getRandomInt Function
-------------------------------------------------------------------

In utils/random.js, create a function named getRandomInt and pass max as a parameter to the function.

Goal:
Return a random integer between 0 and (max - 1)

Hints:
- Use Math.random()
- Multiply by max
- Use Math.floor()

Syntax hint:
   return Math.floor(______ * ______);*/

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);}