# 📚 Minimal Library Management System

A clean and functional **Library Management System** built with **React, Redux Toolkit Query, TypeScript**, and **MongoDB**. This project demonstrates core CRUD operations for books, book borrowing features, and real-time UI updates — all without authentication or complex filters.

---

## 🚀 Live Demo

👉 [Live Site Link](https://minimal-library-management-system-r-ten.vercel.app)  
👉 [Backend Repo](https://github.com/nazneenlipi/mongoose-book-server-moduler-pattern)

---

## UI Preview 



## 🧰 Tech Stack

### Frontend
- ⚛️ React + TypeScript
- 🔄 Redux Toolkit + RTK Query
- 💅 Tailwind CSS
- 📦 Vite (or Create React App)
- ✅ Toast Notifications (e.g., react-hot-toast)

### Backend
- 🟢 Node.js + Express.js
- 🗃️ MongoDB + Mongoose (with TypeScript)
- 🔐 Validation and error handling
- 📫 Postman (used for API testing)

---

## 📌 Features

### 📖 Book Management
- List all books in a responsive table
- Add a new book
- Edit existing book info
- Delete a book (with confirmation)
- Auto mark **unavailable** if `copies = 0`

### 📦 Borrowing System
- Borrow a book with quantity and due date
- Quantity check before borrow (cannot exceed available copies)
- Auto-update available copies
- Redirects to Borrow Summary on success

### 📊 Borrow Summary
- Aggregated view of borrowed books
- Fields: Book Title, ISBN, Total Quantity Borrowed

---

## 🗂️ Folder Structure (Frontend)

### 🔹 Frontend

```bash
git clone (https://github.com/nazneenlipi/Minimal-Library-Management-System-react-redux)
cd library-frontend
npm install
npm run dev


