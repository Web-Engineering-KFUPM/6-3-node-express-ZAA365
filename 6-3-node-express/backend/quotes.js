// Import random.js file
import { getRandomInt } from "./utils/random.js";
const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "Before software can be reusable it first has to be usable.",
  "Make it work, make it right, make it fast.",
  "Programming isn’t about what you know; it’s about what you can figure out."
];

// TODO 3: Create and export getRandomQuote function
//Hint: export function getRandomQuote(){}

export function getRandomQuote() {
  const randomIndex = getRandomInt(quotes.length);
  return quotes[randomIndex];}
  
/*TODO 3:Create getRandomQuote Function

In quotes.js, export a function named getRandomQuote.

Goal:
Return one random quote from the quotes array.

Important:
- Use getRandomInt(max)
- Import random.js file to quote.js to use getRandomInt function.

Steps:
- Generate random index
- Return quote using that index

Syntax hint:
   const index = ______(quotes.length);
   return ______[index];*/