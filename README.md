# 🙏 Namaste Node.js

## Node.js (By Shivam Gupta)

> "Where there is JavaScript, there is a JavaScript engine."

---

### 📚 Guided by: [Akshay Saini](https://www.linkedin.com/in/akshaymarch7/) *(Founder of Namaste Dev)*  
Big thanks to **Akshay Saini** for creating insightful content that’s helping me and many others understand Node.js in a simple and structured way. 🙌

### 👨‍💻 Author: [Shivam Gupta](https://www.linkedin.com/in/shivam-gupta-92a129175/)  
Sharing what I learn to help others and reinforce my understanding.

---

# 👨‍💻 Namaste Node.js - Ep 04: `module.exports` & `require`

Welcome to Episode 04 of the **Namaste Node.js** journey!  
In this episode, we’ll dive into:

- Why modules are needed in JavaScript  
- How `require` and `module.exports` work in Node.js  
- Default vs Named Exports  
- Common mistakes and their fixes  

---

## 🧱 Part 1: What Are Modules & Why Do We Need Them?

### 💡 Why Modules?

- Earlier, JavaScript programs were small and simple.
- Now, JavaScript powers full-scale apps — in both **browser** and **Node.js**.
- As projects grow, splitting the code into **reusable modules** becomes necessary.
- **Modules** improve **maintainability**, **reusability**, and **readability**.

> ✅ Both Browser (via ES Modules) and Node.js (CommonJS) support modules.

### 📦 What is a Module?

- A **module** is an encapsulated, self-contained block of code.
- It has its own **scope** and can export values for other files to **import**.

---

## ⚙️ Part 2: How It Works in Node.js

### 🛠️ Step-by-Step

#### 🔹 Step 1: Create a Folder

```bash
mkdir namaste-node
cd namaste-node
```

#### 🔹 Step 2: Create Two Files

- `app.js`
- `sum.js`

---

### 📂 Case 1: Just Logging in Files

**`app.js`**
```js
console.log("App.js Home File");
```

**`sum.js`**
```js
console.log("Sum.js File");
```

**Output:**
```bash
$ node app.js
App.js Home File
```

> ❓ Why doesn’t `sum.js` execute?  
> Because each file is a **separate module**. Node.js doesn't execute other files unless explicitly **imported** using `require`.

---

### 📂 Case 2: Using `require`

**`app.js`**
```js
require("./sum.js");
console.log("App.js Home File");
```

**`sum.js`**
```js
console.log("Sum.js File");
```

**Output:**
```bash
Sum.js File  
App.js Home File
```

> ✅ `require` loads and executes the code inside `sum.js`.

---

### 📂 Case 3: Using a Function Without Export

**`sum.js`**
```js
console.log("Sum.js File");

function calcSum(a, b) {
  return a + b;
}
```

**`app.js`**
```js
require("./sum.js");
console.log("App.js Home File");

calcSum(2, 3); // ❌ Error
```

**Output:**
```bash
ReferenceError: calcSum is not defined
```

> ❗ By default, variables/functions in one module are **not accessible** in another unless **explicitly exported**.

---

## 🧪 Part 3: Exporting and Importing Functions

### 📂 Case 4: Using `module.exports` to Export

**`sum.js`**
```js
console.log("Sum.js File");

function calcSum(a, b) {
  return a + b;
}

module.exports = calcSum;
```

**`app.js`**
```js
const calcSum = require("./sum.js");
console.log("App.js Home File");

console.log(calcSum(2, 3));
```

**Output:**
```bash
Sum.js File  
App.js Home File  
5
```

✅ Success! `calcSum` is now accessible in `app.js`.

---

## 🔁 Part 4: Types of Exports

### 1️⃣ Default Export

**`sum.js`**
```js
function calcSum(a, b) {
  return a + b;
}

module.exports = calcSum;
```

**`app.js`**
```js
const add = require("./sum.js");  // you can rename it
console.log(add(2, 3));           // ✅ 5
```

> 🔁 You can rename the import with default exports.

---

### 2️⃣ Named Exports

**`sum.js`**
```js
function calcSum(a, b) {
  return a + b;
}

const x = 20;

module.exports = { calcSum, x };
```

**Option 1 - Destructured Import in `app.js`**
```js
const { calcSum, x } = require("./sum.js");

console.log(x);              // 20
console.log(calcSum(2, 3));  // 5
```

**Option 2 - Import Entire Object**
```js
const sumModule = require("./sum.js");

console.log(sumModule.x);               // 20
console.log(sumModule.calcSum(2, 3));   // 5
```

> 💡 Named exports are useful for exporting **multiple things** from one file.

---

## 📋 Recap Table

| Concept            | Description                           |
|--------------------|---------------------------------------|
| Module             | Encapsulated code in a file           |
| `require()`        | Imports a module                      |
| `module.exports`   | Exports code from a module            |
| Default Export     | Single value export                   |
| Named Export       | Multiple value export as object       |
| Isolation          | Modules don’t share scope by default  |

---




# Node.js Module System: A Complete Guide

## Module Scope

**Definition**

To understand it let’s take an example

### batman.js
```js
console.log("batman")
```

### superman.js
```js
console.log("superman")
```

### index.js
```js
require("./batman.js");
require("./superman.js");
```

Run:
```bash
> node index.js
batman
superman
```

There is no conflict because each module has its own scope. Underway Node.js is doing this because of the IIFE pattern.

---

### How it works behind the scenes

### iife.js
```js
(function(){
    const superHero = "batman"
    console.log(superHero)
})()

(function(){
    const superHero = "superman"
    console.log(superHero)
})()
```

Run:
```bash
> node iife.js
batman
superman
```

No conflict having the same variable name and no conflict because of their own scope.

---

It means each module has its own scope and the whole code in each module is wrapped in an IIFE pattern like below:

### inside batman.js
```js
(function(exports , require , module , __filename , __dirname){
    // module code actually lives in here

    const superHero = "batman"
    console.log(superHero)
})
```

### inside superman.js
```js
(function(exports , require , module , __filename , __dirname){
    // module code actually lives in here

    const superHero = "superman.js"
    console.log(superHero)
})
```

### inside index.js
```js
(function(exports , require , module , __filename , __dirname){
    require("./batman.js");
    require("./superman.js");
})
```

Before a module code is executed, Node.js will wrap it with an IIFE function wrapper that provides module scope.

This saves us from worrying about:

- conflicting variables or functions
- provides encapsulation and reusability unaffected

---

## Types of Module Patterns in Node.js

1. **CommonJS**
2. **ES Modules / mjs / ESM / ES6**

---

### 1. CommonJS

Up to now, what module pattern we have seen is CommonJS module pattern.

---

### 2. ES Modules

If you want to work with ES modules:

1. Add this in `package.json` file in root directory

```json
{
    "type": "module"
}
```

This will help Node.js understand which module pattern we are using.

By default, it is CommonJS.

---

### 1️⃣ Default Export

**sum.js**
```js
function calcSum(a, b) {
  return a + b;
}

// module.exports = calcSum;
export default calcSum;
```

**app.js**
```js
// const add = require("./sum.js");  // you can rename it
import add from "./sum.js";

console.log(add(2, 3));           // ✅ 5
```

> 🔁 You can rename the import with default exports.

---

### 2️⃣ Named Exports

**sum.js**
```js
function calcSum(a, b) {
  return a + b;
}

const x = 20;

// module.exports = { calcSum, x };
export { calcSum, x };
```

**Option 1 - Destructured Import in `app.js`**
```js
// const { calcSum, x } = require("./sum.js");
import { calcSum, x } from "./sum.js";

console.log(x);              // 20
console.log(calcSum(2, 3));  // 5
```

**Option 2 - Import Entire Object**
```js
// const sumModule = require("./sum.js");
import * as sumModule from "./sum.js";

console.log(sumModule.x);               // 20
console.log(sumModule.calcSum(2, 3));   // 5
```

> 💡 Named exports are useful for exporting **multiple things** from one file.

---

## Module Pattern in JS

### Difference between CommonJS and ES Modules

| Feature           | CommonJS                      | ES Modules                       |
|-------------------|------------------------------|---------------------------------|
| Default           | `"type": "commonjs"` or none | `"type": "module"` in package.json or `.mjs` extension |
| Syntax            | `module.exports` and `require()` | `export` and `import`            |
| Execution         | Synchronous                  | Asynchronous                    |
| Mode              | Non-strict                   | Strict                         |
| Usage in Browser   | Not supported                | Supported with `<script type="module">` |

---

# Industry Standard Best Practices

---

## Module Aliases

In `app.js`

```js
import { calcSum as add, x } from "./sum.js";

console.log(x);              // 20
console.log(add(2, 3));      // 5
```

---

## Namespaces

In `app.js`

```js
import * as calc from "./sum.js";   // import * as calc is namespace

console.log(calc.x);              // 20
console.log(calc.calcSum(2, 3));  // 5
```

---

## Module Combine Export

Create a new folder `calculate` having files:

```
calculate/
  index.js
  calcSum.js
  calcSub.js
```

### calcSum.js
```js
function calcSum(a,b){
    console.log(a+b);
}
export default calcSum;
```

### calcSub.js
```js
function calcSub(a,b){
    console.log(a-b);
}
export default calcSub;
```

### index.js
```js
import calcSum from "./calcSum.js";
import calcSub from "./calcSub.js";

export { calcSum, calcSub };
```

### app.js
```js
import * as calc from "./calculate";

calc.calcSum(2,5);  // 7
calc.calcSub(2,5);  // -3
```

Run:
```bash
node app.js
```

Output:
```
7
-3
```

---

## Dynamic Import in Node.js

### Case 1: Simple Dynamic Import

Create `script.js` and `user.js`

**user.js**
```js
export function setAdminUser(){
    console.log("Admin user");
}
```

**script.js**
```js
let user = {
    admin: true
}

// Static import
// import { setAdminUser } from "./user.js";
// if (user.admin) {
//     setAdminUser();
// }

// Dynamic import
if (user.admin) {
    const { setAdminUser } = await import("./user.js");
    setAdminUser();
}
```

Explanation:

- Dynamic import loads `user.js` **only when** condition fulfills (`user.admin === true`).
- Reduces unnecessary imports and page load time.
- The module works asynchronously.

---

### Case 2: Dynamic Import for Translations

Create translation files:

**en-translations.js**
```js
const translations = {
    HI: "hi"
}
export default translations;
```

**in-translations.js**
```js
const translations = {
    HI: "नमस्ते"
}
export default translations;
```

**fr-translations.js**
```js
const translations = {
    HI: "Salut"
}
export default translations;
```

**sp-translations.js**
```js
const translations = {
    HI: "Hola"
}
export default translations;
```

**script.js**

Static import version:
```js
import englishTranslations from "./en-translations.js";
import indiaTranslations from "./in-translations.js";
import spanishTranslations from "./sp-translations.js";
import frenchTranslations from "./fr-translations.js";

const user = {
    local: "in"
}

let translations;
switch(user.local){
    case "in":
        translations = indiaTranslations;
        break;
    case "sp":
        translations = spanishTranslations;
        break;
    case "en":
        translations = englishTranslations;
        break;
    case "fr":
        translations = frenchTranslations;
        break;
    default:
        translations = indiaTranslations;
}

console.log(translations.HI + " world");
```

---

Dynamic import version:
```js
const user = {
    local: "in"
};

let translations;
try {
    const { default: data } = await import(`./${user.local}-translations.js`);
    translations = data;
} catch (error) {
    const { default: data } = await import(`./in-translations.js`);
    translations = data;
}

console.log(translations.HI + " world");
```

Explanation:

- Imports only the required translation file based on user locale.
- Falls back to default translation in catch block.
- Saves memory and load time.

---

### Case 3: Dynamic Import for Shapes

Create `rectangle.js` and `triangle.js`

**rectangle.js**
```js
export default function render() {
    console.log("render rectangle..");
}
```

**triangle.js**
```js
export default function render() {
    console.log("render triangle..");
}
```

**script.js**

Static import version:
```js
import renderRectangle from "./rectangle.js";
import renderTriangle from "./triangle.js";

const shapes = [
    { type: "rectangle" },
    { type: "rectangle" },
    { type: "triangle" }
];

for (const shape of shapes) {
    switch(shape.type) {
        case "rectangle":
            renderRectangle();
            break;
        case "triangle":
            renderTriangle();
            break;
        default:
            renderTriangle();
    }
}
```

---

Dynamic import version:
```js
const shapes = [
    { type: "rectangle" },
    { type: "rectangle" },
    { type: "triangle" }
];

for (const shape of shapes) {
    try {
        const { default: render } = await import(`./${shape.type}.js`);
        render();
    } catch (error) {
        console.error(`Failed to render shape: ${shape.type}`, error);
    }
}
```

---

## Module Caching

Node.js **caches modules** after the first time they are loaded.

- Multiple imports/requires of the same module will return the cached version.
- Module code executes only once per process.
- Improves performance by avoiding re-execution.

### Example: Caching Behavior

**logger.js**
```js
console.log("Logger module loaded");

let count = 0;

function log() {
  count++;
  console.log(`Log count: ${count}`);
}

export { log };
```

**script1.js**
```js
import { log } from "./logger.js";
log(); // Log count: 1
log(); // Log count: 2
```

**script2.js**
```js
import { log } from "./logger.js";
log(); // Log count: 1
```

Run:
```bash
node script1.js
node script2.js
```

Output:
```
Logger module loaded
Log count: 1
Log count: 2

Logger module loaded
Log count: 1
```

Note: Each script runs in a new Node process, so module is reloaded fresh.

---

### Repeated Imports in Single Process

**main.js**
```js
import { log as log1 } from "./logger.js";
log1();

import { log as log2 } from "./logger.js";
log2();
```

Output:
```
Logger module loaded
Log count: 1
Log count: 2
```

---

### Clearing Cache

- In **CommonJS**: You can clear cache with
```js
delete require.cache[require.resolve('./logger.js')];
```
- In **ES Modules**: Cache clearing is not supported manually; restart the process to reload.

---

## Import JSON Files

### CommonJS

You can directly import JSON files using `require`.

```js
const data = require('./data.json');
console.log(data);
```

---

### ES Modules

To import JSON in ES modules, you need to:

1. Use the `--experimental-json-modules` flag in Node.js (older versions).
2. Or import with `assert { type: "json" }` (Node.js 17+):

```js
import data from './data.json' assert { type: "json" };
console.log(data);
```

---

# Thanks!

---

## ✅ Conclusion

In this episode, you learned:

- Why modular code is important  
- How to use `require()` and `module.exports` in Node.js  
- Differences between default and named exports  
- How Node modules are isolated and must explicitly export code

> Great job! 🎉  
> Up next: **Episode 05 - The Module Wrapper Function** – where we’ll uncover how Node wraps your code under the hood.

---

#### ✅ Happy Learning:

This content is part of my learning journey in Node.js.  
If you spot any mistakes or want to suggest improvements, feel free to contribute.  
Let’s learn and grow together! 🙌