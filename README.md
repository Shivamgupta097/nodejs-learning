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