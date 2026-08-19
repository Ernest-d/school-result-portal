const db = require('./database')

const students = [
  {
    name: 'Ernest Uko',
    exam_year: '2025',
    session: '2025/2026',
    semester: 'First Semester',
    gpa: '3.42'
  },
  {
    name: 'John Doe',
    exam_year: '2025',
    session: '2025/2026',
    semester: 'First Semester',
    gpa: '3.10'
  },
  {
    name: 'Jane Doe',
    exam_year: '2025',
    session: '2025/2026',
    semester: 'First Semester',
    gpa: '3.68'
  },
  {
    name: 'David James',
    exam_year: '2025',
    session: '2025/2026',
    semester: 'First Semester',
    gpa: '2.95'
  }
]

const insertStudent = db.prepare(`
  INSERT INTO students
  (name, exam_year, session, semester, gpa)
  VALUES (?, ?, ?, ?, ?)
`)

for (const student of students) {
  insertStudent.run(
    student.name,
    student.exam_year,
    student.session,
    student.semester,
    student.gpa
  )
}

console.log('Students added to database.')