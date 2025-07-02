# 🧠 BlogiQ – AI-Powered Blogging Platform

**BlogiQ** is a full-stack, AI-enhanced blogging platform where users can explore, read, and comment on blogs — while **admins** have full control over blog publishing, comment moderation, and content management.

It blends a seamless frontend experience with powerful backend functionality, all enhanced with **Gemini AI** for intelligent blog summaries. Built using the **MERN stack** and deployed on **Vercel**, BlogiQ is designed to be clean, scalable, and user-friendly.

> 🔗 **Live Demo:**[BlogIQ](https://blog-iq.vercel.app/)

---

## 🚀 Features

### 👤 For Users

- Browse and read blogs by category (Tech, Startup, Finance, Lifestyle)
- View AI-generated blog descriptions
- Post comments on individual blogs
- Clean, responsive UI for web and mobile

### 🛡️ For Admins

- Add, edit, publish, and unpublish blogs
- Approve or reject user comments
- Control content flow with protected routes and admin-specific views

### 🤖 AI-Powered

- Uses **Gemini AI** to automatically generate clear, SEO-friendly blog summaries during post creation

---

## 🛠 Tech Stack

**Frontend**

- React.js
- React Context API (for auth & global state)
- Axios (for API requests)
- Tailwind CSS (or custom styling)
- React Hot Toast (for notifications)

**Backend**

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication

**AI Integration**

- Gemini AI API (for generating blog descriptions)

**Deployment**

- Vercel (Frontend + Backend)

---

---

## 📄 AI Integration – Gemini

- On blog creation, Gemini AI is used to auto-generate a short, engaging blog summary.
- This improves quality and consistency while saving writers time.
- Designed for content creators who want to write quickly without compromising clarity.

---

## 🧪 Local Setup Instructions

```bash
# Clone the repository
git clone https://github.com/Khushi14404/BlogIQ.git
cd BlogIQ

# Set up frontend
cd client
npm install
npm run dev   # Starts frontend on http://localhost:5173

# Set up backend
cd ../server
npm install
npm run server   # Starts backend (Express) on defined port, e.g., http://localhost:3000
```

> ⚠️ Make sure to create a `.env` file inside `/server` and include required environment variables (e.g., `MONGO_URI`, `JWT_SECRET`, etc.)
