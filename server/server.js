const express = require('express')
const cors = require('cors')
const db = require('./database')

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('School Result Portal server is running!')
})

app.get('/api/students', (req, res) => {
  const students = db.prepare('SELECT * FROM students').all()

  const studentsWithResults = students.map((student) => {
    const results = db.prepare(`
      SELECT course_code, course_name, unit, score, grade
      FROM results
      WHERE student_id = ?
    `).all(student.id)

    return {
      ...student,
      results
    }
  })

  res.json(studentsWithResults)
})

app.get('/api/results', (req, res) => {
  const { name, year } = req.query

  const student = db.prepare(`
    SELECT *
    FROM students
    WHERE LOWER(name) = LOWER(?)
    AND exam_year = ?
  `).get(name, year)

  if (!student) {
    return res.status(404).json({
      message: 'Student result not found.'
    })
  }

  const results = db.prepare(`
    SELECT course_code, course_name, unit, score, grade
    FROM results
    WHERE student_id = ?
  `).all(student.id)

  res.json({
    ...student,
    results
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})