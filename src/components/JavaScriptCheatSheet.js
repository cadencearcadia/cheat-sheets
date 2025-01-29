import React from 'react';

function JavaScriptCheatSheet() {
  return (
    <div className="container">
      <h1>JavaScript Cheat Sheet</h1>
      <p>
        JavaScript is a high-level language primarily used in web browsers,
        but also on the server side (Node.js). It supports functional, object-oriented,
        and event-driven programming styles, making it one of the most versatile languages today.
      </p>

      <h2>Variables and Data Types</h2>
      <pre className="code-block">
<code>
{`// Using let and const
let myNumber = 10;
const myString = "Hello World";
var oldWay = true;  // older syntax

// typeof
typeof myNumber;   // "number"
typeof myString;   // "string"
`}
</code>
      </pre>

      <h2>Operators</h2>
      <pre className="code-block">
<code>
{`// Arithmetic, comparison, logical
let x = 5 + 2;
x -= 1;
x++;

console.log(5 == '5');  // true (loose equality)
console.log(5 === '5'); // false (strict equality)

// Logical operators: &&, ||, !
const isValid = (x > 0) && (x < 10);
`}
</code>
      </pre>

      <h2>Control Flow</h2>
      <pre className="code-block">
<code>
{`if (x > 10) {
  console.log("x is greater than 10");
} else if (x === 10) {
  console.log("x is exactly 10");
} else {
  console.log("x is less than 10");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

// switch statement
switch (x) {
  case 1:
    console.log("x is 1");
    break;
  case 2:
    console.log("x is 2");
    break;
  default:
    console.log("x is something else");
}
`}
</code>
      </pre>

      <h2>Functions and Arrow Functions</h2>
      <pre className="code-block">
<code>
{`// Traditional function
function greet(name) {
  return "Hello, " + name;
}

// Arrow function
const greetArrow = (name) => {
  return "Hello, " + name;
};

// Short arrow function (implicit return)
const add = (a, b) => a + b;

console.log(greet("Alice"));       // "Hello, Alice"
console.log(greetArrow("Bob"));    // "Hello, Bob"
console.log(add(2, 3));            // 5
`}
</code>
      </pre>

      <h2>Arrays and Objects</h2>
      <pre className="code-block">
<code>
{`// Arrays
const fruits = ["apple", "banana", "cherry"];
fruits.push("date");
console.log(fruits); // ["apple", "banana", "cherry", "date"]

// Objects
const person = {
  name: "Alice",
  age: 25,
  isStudent: true
};
console.log(person.name); // "Alice"
person.email = "alice@example.com";
delete person.age;

// Destructuring
const [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2); // "apple", "banana"

const { name, isStudent } = person;
console.log(name, isStudent); // "Alice", true
`}
</code>
      </pre>

      <h2>Array Methods</h2>
      <pre className="code-block">
<code>
{`// Common array methods
const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(num => num * 2);   // [2, 4, 6, 8, 10]

// filter
const evens = numbers.filter(num => num % 2 === 0);  // [2, 4]

// reduce
const sum = numbers.reduce((acc, val) => acc + val, 0); // 15

// forEach
numbers.forEach(num => {
  console.log(num);
});

// some / every
const hasBigNumber = numbers.some(num => num > 3);  // true
const allPositive = numbers.every(num => num > 0);  // true
`}
</code>
      </pre>

      <h2>Async and Promises</h2>
      <pre className="code-block">
<code>
{`// Promises
function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1000);
  });
}

asyncOperation().then(result => {
  console.log(result); // "Done!"
});

// Async / Await
async function doAsyncWork() {
  try {
    const msg = await asyncOperation();
    console.log("Async/Await:", msg);
  } catch (error) {
    console.error(error);
  }
}

doAsyncWork();
`}
</code>
      </pre>

      <h2>DOM Manipulation</h2>
      <pre className="code-block">
<code>
{`// Querying elements
const heading = document.querySelector("h1");
heading.textContent = "New Title";

// Creating elements
const newDiv = document.createElement("div");
newDiv.textContent = "Hello DOM!";
document.body.appendChild(newDiv);

// Event listeners
newDiv.addEventListener("click", () => {
  alert("Clicked the div!");
});
`}
</code>
      </pre>

      <h2>Modules (ES6)</h2>
      <pre className="code-block">
<code>
{`// mathUtils.js
export function add(a, b) {
  return a + b;
}
export const PI = 3.14159;

// main.js
import { add, PI } from "./mathUtils.js";
console.log(add(2, 3)); // 5
console.log(PI); // 3.14159
`}
</code>
      </pre>

      <h2>Learn More</h2>
      <p>
        Visit the official JavaScript documentation for detailed information:
      </p>
      <ul>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
            MDN JavaScript Documentation
          </a>
        </li>
      </ul>
    </div>
  );
}

export default JavaScriptCheatSheet;
