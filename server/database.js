const Database = require('better-sqlite3')

const db = new Database('school.db')

db.exec(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    exam_year TEXT NOT NULL,
    session TEXT NOT NULL,
    semester TEXT NOT NULL,
    gpa TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER NOT NULL,
    course_code TEXT NOT NULL,
    course_name TEXT NOT NULL,
    unit INTEGER NOT NULL,
    score INTEGER NOT NULL,
    grade TEXT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id)
  );
`)

module.exports = db