# Task Manager App

A simple React application that fetches and displays a list of tasks, allowing filtering, searching, and sorting.

## 🚀 Features
- Fetches tasks from [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos).
- Filters tasks by status (All, Completed, Pending).
- Search functionality to find tasks by title.
- Sorting tasks by title.
- Toggle task completion (UI-only change).
- Manages state using `Context API` and `useReducer`.
- Uses `React Query` for data fetching.
- Handles loading and error states gracefully.
- Styled with Tailwind CSS.

## 📌 Assumptions
- Task completion status can be toggled in the UI, but changes are not persisted in the API.
- Only the `id`, `title`, and `completed` properties are used.

## 📥 Installation & Running
```sh
git clone https://github.com/erfanGhayomi93/todo-zarban.git
cd todo-zarban
npm install
npm run dev
