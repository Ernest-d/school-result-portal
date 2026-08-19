# School Result Portal

A simple full-stack school result portal built as a student project.

The application allows students to enter their full name and examination year to view their academic results.

## Features

- Password-protected portal
- Student result search
- Search by full name and examination year
- Student information display
- Course results table
- Scores and grades
- GPA display
- SQLite database
- Express.js backend
- React frontend
- Responsive design

## Technologies Used

### Frontend

- React.js
- JavaScript
- HTML
- CSS
- Vite

### Backend

- Node.js
- Express.js
- better-sqlite3
- CORS

### Database

- SQLite

## Project Structure

```text
school-result-portal/
│
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   └── App.css
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── database.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
├── package.json
└── README.md
```

## How It Works

1. The user opens the School Result Portal.
2. The user enters the portal password.
3. The user selects "View Result".
4. The user enters a student's full name.
5. The user enters the examination year.
6. The React frontend sends the search request to the Express backend.
7. The backend searches the SQLite database.
8. The matching student's result is returned to the frontend.
9. The student's courses, scores, grades and GPA are displayed.

## Test Login

The project uses a single password for demonstration purposes.

**Portal Password:**

```text
school123
```

## Sample Student Details

The following sample records are available for testing:

| Student     | Exam Year |
| ----------- | --------- |
| Ernest Uko  | 2025      |
| John Doe    | 2025      |
| Jane Doe    | 2025      |
| David James | 2025      |

## Running the Project Locally

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Enter the project folder

```bash
cd school-result-portal
```

### 3. Install frontend dependencies

```bash
cd client
npm install
```

### 4. Install backend dependencies

```bash
cd ../server
npm install
```

### 5. Start the backend

```bash
node server.js
```

The backend runs on:

```text
http://localhost:5000
```

### 6. Start the frontend during development

Open another terminal:

```bash
cd client
npm run dev
```

Vite will provide a local development address.

### Production Build

The React frontend can be built with:

```bash
cd client
npm run build
```

The Express server can then serve the generated frontend from the `client/dist` directory.

## Project Purpose

This project was created as a student full-stack development project to demonstrate the use of a React frontend, Node.js/Express backend and SQLite database in building a simple result management system.

## Author

Ernest Uko

Computer Science Student
