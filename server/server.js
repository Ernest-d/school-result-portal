const express = require('express')
const cors = require('cors')
const path = require('path')

const db = require('./database')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/api/results', (req, res) => {
  const { name, year } = req.query

  if (!name || !year) {
    return res.status(400).json({
      message: 'Name and exam year are required.'
    })
  }

  const student = db.prepare(`
    SELECT *
    FROM students
    WHERE LOWER(name) = LOWER(?)
    AND exam_year = ?
  `).get(name.trim(), year.trim())

  if (!student) {
    return res.status(404).json({
      message: 'Student result not found.'
    })
  }

  const results = db.prepare(`
    SELECT id, course_code, course_name, unit, score, grade
    FROM results
    WHERE student_id = ?
  `).all(student.id)

  res.json({
    ...student,
    results
  })
})

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'School Result Portal API is running.'
  })
})

const frontendPath = path.join(
  __dirname,
  '../client/dist'
)

app.use(express.static(frontendPath))

app.use((req, res) => {
  res.sendFile(
    path.join(frontendPath, 'index.html')
  )
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(
    `Server running on port ${PORT}`
  )
})