const Database = require('better-sqlite3')
const path = require('path')

const db = new Database(
  path.join(__dirname, 'school.db')
)

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

const studentCount = db
  .prepare('SELECT COUNT(*) AS count FROM students')
  .get()

if (studentCount.count === 0) {
  const insertStudent = db.prepare(`
    INSERT INTO students
    (name, exam_year, session, semester, gpa)
    VALUES (?, ?, ?, ?, ?)
  `)

  const insertResult = db.prepare(`
    INSERT INTO results
    (student_id, course_code, course_name, unit, score, grade)
    VALUES (?, ?, ?, ?, ?, ?)
  `)

  const addStudent = db.transaction(() => {
    const students = [
      ['Ernest Uko', '2025', '2025/2026', 'First Semester', '3.42'],
      ['John Doe', '2025', '2025/2026', 'First Semester', '3.10'],
      ['Jane Doe', '2025', '2025/2026', 'First Semester', '3.68'],
      ['David James', '2025', '2025/2026', 'First Semester', '2.95']
    ]

    const studentIds = students.map((student) => {
      return insertStudent.run(...student).lastInsertRowid
    })

    const results = [
      [studentIds[0], 'CSC101', 'Introduction to Computer Science', 3, 72, 'A'],
      [studentIds[0], 'MTH101', 'Mathematics', 3, 65, 'B'],
      [studentIds[0], 'PHY101', 'Physics', 3, 58, 'C'],

      [studentIds[1], 'CSC101', 'Introduction to Computer Science', 3, 68, 'B'],
      [studentIds[1], 'MTH101', 'Mathematics', 3, 61, 'B'],
      [studentIds[1], 'PHY101', 'Physics', 3, 55, 'C'],

      [studentIds[2], 'CSC101', 'Introduction to Computer Science', 3, 81, 'A'],
      [studentIds[2], 'MTH101', 'Mathematics', 3, 74, 'A'],
      [studentIds[2], 'PHY101', 'Physics', 3, 63, 'B'],

      [studentIds[3], 'CSC101', 'Introduction to Computer Science', 3, 59, 'C'],
      [studentIds[3], 'MTH101', 'Mathematics', 3, 54, 'C'],
      [studentIds[3], 'PHY101', 'Physics', 3, 49, 'D']
    ]

    results.forEach((result) => {
      insertResult.run(...result)
    })
  })

  addStudent()

  console.log('Sample student records added to database.')
}

module.exports = db