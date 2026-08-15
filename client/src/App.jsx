import { useState } from 'react'
import './App.css'
import { students } from './data'

function App() {
const [showResult, setShowResult] = useState(false)
const [studentId, setStudentId] = useState('')
const [selectedStudent, setSelectedStudent] = useState(null)

if (showResult && selectedStudent) {
    return (
      <div className="app">
        <h1>My Result</h1>

<p>Student ID: {selectedStudent.id}</p>
<p>Name: {selectedStudent.name}</p>
<p>Session: {selectedStudent.session}</p>
<p>Semester: {selectedStudent.semester}</p>

<table>
  <thead>
    <tr>
      <th>Course Code</th>
      <th>Course Name</th>
      <th>Unit</th>
      <th>Score</th>
      <th>Grade</th>
    </tr>
  </thead>

  <tbody>
    {selectedStudent.results.map((result) => (
  <tr key={result.courseCode}>
    <td>{result.courseCode}</td>
    <td>{result.courseName}</td>
    <td>{result.unit}</td>
    <td>{result.score}</td>
    <td>{result.grade}</td>
  </tr>
))}
  </tbody>
</table>

<p>GPA: {selectedStudent.gpa}</p>


<button
  onClick={() => {
    setShowResult(false)
    setSelectedStudent(null)
    setStudentId('')
  }}
>
  Back
</button>
      </div>
    )
  }

  return (
    <div className="app">
      <h1>School Result Portal</h1>

<p>A simple way to access student results.</p>

<input
  type="text"
  placeholder="Enter Student ID"
  value={studentId}
  onChange={(e) => setStudentId(e.target.value)}
/>

<button
  onClick={() => {
    const student = students.find(
      (student) => student.id === studentId
    )

if (student) {
  setSelectedStudent(student)
  setShowResult(true)
} else {
  alert('Student not found. Please check the Student ID.')
}
  }}
>
  View Result
</button>
    </div>
  )
}

export default App