# 📚 Minimal Library Management System

A clean and functional **Library Management System** built with **React, Redux Toolkit Query, TypeScript**, and **MongoDB**. This project demonstrates core CRUD operations for books, book borrowing features, and real-time UI updates — all without authentication or complex filters.

---

## 🚀 Live Demo

👉 [Live Site Link](https://minimal-library-management-system-r-ten.vercel.app)  
👉 [Backend Repo](https://github.com/nazneenlipi/mongoose-book-server-moduler-pattern)

---

## UI Preview 
<img width="1920" height="1097" alt="screencapture-minimal-library-management-system-r-ten-vercel-app-2025-07-20-21_51_33" src="https://github.com/user-attachments/assets/461ddb31-ae7b-473f-ae89-7793f5325e94" />
<img width="1920" height="1416" alt="screencapture-minimal-library-management-system-r-ten-vercel-app-books-2025-07-20-21_51_48" src="https://github.com/user-attachments/assets/e3436462-6e07-4536-8dcc-ecb02b19d4a2" />
<img width="1920" height="1097" alt="screencapture-minimal-library-management-system-r-ten-vercel-app-books-687d0cca2e366abd265fbf9c-2025-07-20-21_51_57" src="https://github.com/user-attachments/assets/1b3271fb-298e-48ad-a3ce-e98905834e75" />

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


