# 🔐 Random Password Generator

A modern and responsive **Random Password Generator** built using **Vite + React + Tailwind CSS**.  

This project demonstrates practical usage of React hooks like `useState`, `useCallback`, and `useRef` while building a clean and interactive UI.

🌐 **Live Demo:**  
https://password-generatorv1.vercel.app/

---

## 🚀 Features

- 🔢 Adjustable password length using a slider
- 🔤 Option to include Numbers
- 🔣 Option to include Special Characters
- 📋 One-click Copy to Clipboard
- ⚡ Optimized password generation using `useCallback`
- 🎯 DOM referencing using `useRef`
- 🎨 Styled with Tailwind CSS
- 🚀 Deployed on Vercel

---

## 🛠️ Tech Stack

- React (Hooks)
- Vite
- Tailwind CSS
- Vercel (Deployment)

---

## 📚 Concepts Practiced

### 🔹 useState
- Managing password length
- Handling checkbox states (numbers & characters)
- Storing generated password

### 🔹 useCallback
- Memoizing the password generator function
- Preventing unnecessary re-renders
- Improving performance optimization

### 🔹 useRef
- Accessing the password input field
- Implementing copy-to-clipboard functionality

---

## 📦 Installation & Setup

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/botislive/react-basics.git

# Navigate into the project directory
cd passgen

# Install dependencies
npm install

# Start development server
npm run dev
