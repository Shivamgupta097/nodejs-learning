# 🙏 Namaste Node.js

## Node.js (By Shivam Gupta)

> "Where there is JavaScript, there is a JavaScript engine."

---

### 📚 Guided by: [Akshay Saini](https://www.linkedin.com/in/akshaymarch7/)  **(Founder of Namaste Dev)**
Big thanks to **Akshay Saini** for creating insightful content that’s helping me and many others understand Node.js in a simple and structured way. 🙌

### 👨‍💻 Author: [Shivam Gupta](https://www.linkedin.com/in/shivam-gupta-92a129175/)  
Sharing what I learn to help others and reinforce my understanding.

---

# 👨‍💻 Namaste Node.js - Ep 03: Let's Write Code

Welcome to Episode 03 of the **Namaste Node.js** journey!  
In this episode, we'll set up Node.js properly, understand the REPL environment, dive into global objects in browsers vs Node.js, and run our first Node program.

---

## 🧱 Part 1: Setup Environment

### 🔽 Step 1: Download Node.js

1. Visit the official Node.js website:  
   👉 [https://nodejs.org/en/download](https://nodejs.org/en/download)
2. Choose your:
   - **Node.js version** (LTS recommended)
   - **Operating System**
   - **Installation method** – recommended: **NVM (Node Version Manager)**

### 🚀 Why NVM?

Using **NVM** (Node Version Manager) allows you to:
- Easily install and switch between multiple versions of Node.js  
- Work on different projects requiring different Node versions  
- Example:
  ```bash
  nvm install 22
  nvm use 22
  ```

### ✅ Verify Node & NPM Installation

```bash
node -v     # Check Node.js version
npm -v      # Check npm version
```

### 🛠️ Step 2: Install VS Code

Install [Visual Studio Code](https://code.visualstudio.com/) — a powerful code editor perfect for Node.js development.

---

## ⚙️ Part 2: Node REPL & Global Objects

### 🌀 What is REPL?

**REPL** stands for:

- **R** – Read  
- **E** – Evaluate  
- **P** – Print  
- **L** – Loop  

You can enter REPL by just typing:

```bash
node
```

It gives you a live Node.js shell to write and test JavaScript code interactively.

### 🔍 Behind the Scenes:

When you run `node` in terminal:
- It starts the **V8 engine** (built in C++).
- V8 converts your JavaScript code to machine code and executes it.

---

## 🌐 Global Object: Browser vs Node.js

### 🧭 In the Browser:

Open DevTools Console and type:

```js
window === this     // true
window === self     // true
window === frames   // true
```

- All of them point to the same global object: `window`.

### ⚙️ In Node.js:

In your `app.js`, try:

```js
console.log(global);      // Node's global object
console.log(this);        // Outputs: {}
```

- In Node, the global object is called `global`.
- At the module level, `this` is `{}` (empty object).

### 🔄 Confused? Use `globalThis`

To have a **universal global object** across all environments:

```js
console.log(globalThis);
```

- ✅ Works in **Browser** and **Node**
- ✅ Standardized by **OpenJS Foundation**

### 🧩 What’s inside Node’s Global Object?

- `setTimeout`
- `setInterval`
- `setImmediate`
- `console`, `Buffer`, etc.

---

## ✏️ Let's Write Some Code

### 1️⃣ Create a Folder:

```bash
mkdir namaste-node
cd namaste-node
```

### 2️⃣ Create a File `app.js`:

```js
var name = "Shivam Gupta";
var a = 10;
var b = 20;

console.log(name);
console.log(a + b);
```

### 3️⃣ Open VS Code Terminal:
- Windows: `Ctrl + ~`
- macOS: `Cmd + ~`

### 4️⃣ Run the Program:

```bash
node app.js
```

### ⚙️ What happens?

Node passes `app.js` to the **V8 engine**, which converts the code into machine code and executes it.

---

## 📋 Recap Table

| Feature                  | Browser      | Node.js     |
|--------------------------|--------------|-------------|
| Global Object            | `window`     | `global`    |
| Common Global Object     | ✅ `globalThis` | ✅ `globalThis` |
| `this` at top-level      | `window`     | `{}`        |
| Engine                   | V8           | V8          |

---

## ✅ Conclusion

In this episode, you learned:

- How to install Node.js using NVM
- What REPL is and how it works
- The difference between global objects in browser and Node.js
- How to run your first Node.js program
- How `globalThis` simplifies global object handling

> Great work! Now you're ready to explore **Node.js modules** and more in the next episode.

---

#### ✅ Happpy Learning:

 - This content is part of my learning journey in Node.js. If you find any mistakes or want to suggest improvements, feel free to contribute. Let's learn and grow together!
